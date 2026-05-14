# Deploy to Cloudflare Pages

## Option 1: Deploy Directly (Fastest - 2 minutes)

### Step 1: Get Your Cloudflare API Token

1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Click **"Create Token"**
3. Use the **"Cloudflare Pages"** template or create a custom token with:
   - Account: Read
   - Cloudflare Pages: Edit
4. Copy the token

### Step 2: Deploy

Run this in your terminal from the project directory:

```bash
export CLOUDFLARE_API_TOKEN="your_token_here"
cd /mnt/agents/output/app
npx wrangler pages deploy dist --project-name=shesnotcrazybook --branch=main
```

---

## Option 2: GitHub + Cloudflare Pages (Recommended - CI/CD)

### Step 1: Create GitHub Repo

```bash
# From the project directory
cd /mnt/agents/output/app
git remote add origin https://github.com/YOUR_USERNAME/shesnotcrazybook.git
git branch -M main
git push -u origin main
```

### Step 2: Connect Cloudflare Pages to GitHub

1. Go to https://dash.cloudflare.com
2. Navigate to **Workers & Pages** → **Create** → **Pages**
3. Click **"Connect to Git"**
4. Authorize GitHub and select your `shesnotcrazybook` repo
5. Configure build settings:
   - **Framework preset:** None (or Vite)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
6. Click **Save and Deploy**

### Step 3: Add Custom Domain

1. In your Cloudflare Pages project, go to **Custom domains**
2. Click **Set up a domain**
3. Enter: `shesnotcrazybook.com`
4. Follow the DNS verification steps

---

## Option 3: Manual Upload (No CLI needed)

1. Go to https://dash.cloudflare.com
2. Navigate to **Workers & Pages** → **Create** → **Pages** → **Upload assets**
3. Drag and drop the entire `dist/` folder
4. Set project name: `shesnotcrazybook`

---

## Post-Deployment Checklist

After deployment, verify:

- [ ] Site loads at `https://shesnotcrazybook.pages.dev`
- [ ] Custom domain `shesnotcrazybook.com` resolves
- [ ] All Stripe "Get the Book" CTAs work
- [ ] Book cover image renders
- [ ] No 404 errors in browser console

## Git Repository

The source code is ready to push. Current commit:

```bash
cd /mnt/agents/output/app
git log --oneline -1
```

Status: 32 files tracked, fully committed.
