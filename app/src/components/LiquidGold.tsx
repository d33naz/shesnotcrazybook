import { useRef, useEffect } from 'react';
import { Renderer, Camera, Transform, Mesh, Vec2, Program, Geometry } from 'ogl';

const vertex = `
  attribute vec3 position;
  attribute vec3 normal;
  attribute vec2 uv;
  attribute vec3 axis;
  attribute vec3 colorMod;
  attribute vec2 offset;
  attribute float spin;
  attribute float id;

  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform vec3 uColor;

  varying vec3 vNormal;
  varying vec3 vColor;
  varying vec2 vUv;

  mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    return mat4(
      oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s, 0.0,
      oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s, 0.0,
      oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,          0.0,
      0.0, 0.0, 0.0, 1.0
    );
  }

  vec3 rotate(vec3 v, vec3 axis, float angle) {
    mat4 m = rotationMatrix(axis, angle);
    return (m * vec4(v, 1.0)).xyz;
  }

  void main() {
    vec3 pos = position;
    float angle = spin + uTime * (0.5 + 0.5 * id);
    pos = (rotationMatrix(axis, angle) * vec4(pos, 1.0)).xyz;
    float scale = 0.3 + 0.7 * id;
    pos.z *= 1.0 + 0.2 * sin(uTime * 0.5 + id * 10.0);
    pos *= scale;
    pos.xy += offset;
    vNormal = (rotationMatrix(axis, angle) * vec4(normal, 1.0)).xyz;
    vColor = uColor + colorMod;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragment = `
  precision highp float;

  varying vec3 vNormal;
  varying vec2 vUv;
  varying vec3 vColor;

  uniform float uTime;

  void main() {
    vec3 viewDir = vec3(0.0, 0.0, 1.0);
    vec3 lightDir = normalize(vec3(0.5, 0.5, 1.0));
    vec3 normal = normalize(vNormal);
    float diffuse = max(dot(normal, lightDir), 0.0);
    float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
    vec3 color = vColor * (0.3 + 0.7 * diffuse) + vec3(fresnel * 0.5);
    float alpha = 0.7 + 0.3 * sin(uTime + vUv.x * 10.0);
    gl_FragColor = vec4(color, alpha * 0.85);
  }
`;

export default function LiquidGold() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = container.querySelector('canvas');
    if (!canvas) return;

    const renderer = new Renderer({
      canvas: canvas as HTMLCanvasElement,
      width: container.offsetWidth || 800,
      height: container.offsetHeight || 600,
      alpha: true,
    });

    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);

    const camera = new Camera(gl, { fov: 45 });
    camera.position.set(0, 0, 6);

    const scene = new Transform();

    const mouse = new Vec2(0.5, 0.5);
    const smoothedMouse = new Vec2(0.5, 0.5);
    const AUTO_ROTATE_SPEED = 0.15;

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX / window.innerWidth;
      mouse.y = 1.0 - e.clientY / window.innerHeight;
    };

    const onOrientation = (e: DeviceOrientationEvent) => {
      mouse.x = Math.max(0, Math.min(1, ((e.gamma || 0) / 45) + 0.5));
      mouse.y = Math.max(0, Math.min(1, (e.beta || 0) / 90));
    };

    document.addEventListener('mousemove', onMouseMove);
    window.addEventListener('deviceorientation', onOrientation);

    const prefabCount = 8000;
    const inkColor = [0.789, 0.659, 0.298];

    // Create plane geometry vertices
    const positions = new Float32Array([
      0.5, 0.5, 0, -0.5, 0.5, 0, 0.5, -0.5, 0,
      0.5, -0.5, 0, -0.5, 0.5, 0, -0.5, -0.5, 0
    ]);
    const uvs = new Float32Array([1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0]);
    const normals = new Float32Array([
      0, 0, 1, 0, 0, 1, 0, 0, 1,
      0, 0, 1, 0, 0, 1, 0, 0, 1
    ]);
    const indices = new Uint16Array([0, 1, 2, 3, 4, 5]);

    const offsetData: number[] = [];
    const axisData: number[] = [];
    const spinData: number[] = [];
    const colorModData: number[] = [];
    const idData: number[] = [];

    for (let i = 0; i < prefabCount; i++) {
      offsetData.push(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      const ax = (Math.random() - 0.5) * 2;
      const ay = (Math.random() - 0.5) * 2;
      const az = (Math.random() - 0.5) * 2;
      const len = Math.sqrt(ax * ax + ay * ay + az * az) || 1;
      axisData.push(ax / len, ay / len, az / len);
      spinData.push(Math.random() * 2 * Math.PI);
      colorModData.push(
        (Math.random() - 0.5) * 0.4,
        (Math.random() - 0.5) * 0.4,
        (Math.random() - 0.5) * 0.4
      );
      idData.push(i / prefabCount);
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      uv: { size: 2, data: uvs },
      normal: { size: 3, data: normals },
      index: { data: indices },
      offset: { size: 2, data: new Float32Array(offsetData) },
      axis: { size: 3, data: new Float32Array(axisData) },
      spin: { size: 1, data: new Float32Array(spinData) },
      colorMod: { size: 3, data: new Float32Array(colorModData) },
      id: { size: 1, data: new Float32Array(idData) },
    });

    geometry.setInstancedCount(prefabCount);

    const program = new Program(gl, {
      vertex,
      fragment,
      transparent: true,
      cullFace: false,
      depthTest: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: inkColor },
      },
    });

    const viscousLiquid = new Mesh(gl, { geometry, program });
    viscousLiquid.setParent(scene);

    let time = 0;
    let rafId: number;

    const update = (t: number) => {
      time = t * 0.001;

      smoothedMouse.x += (mouse.x - smoothedMouse.x) * 0.05;
      smoothedMouse.y += (mouse.y - smoothedMouse.y) * 0.05;

      const rotX = (smoothedMouse.y - 0.5) * 1.5 + Math.sin(time * AUTO_ROTATE_SPEED) * 0.5;
      const rotY = (smoothedMouse.x - 0.5) * 1.5 + time * AUTO_ROTATE_SPEED;

      viscousLiquid.rotation.x = rotX;
      viscousLiquid.rotation.y = rotY;
      program.uniforms.uTime.value = time;

      renderer.render({ scene, camera });
      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);

    const onResize = () => {
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      renderer.setSize(w, h);
      camera.perspective({ aspect: w / h });
    };
    window.addEventListener('resize', onResize);
    onResize();

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('deviceorientation', onOrientation);
      window.removeEventListener('resize', onResize);
      renderer.gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    >
      <canvas
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}
