# SNCL Enhanced KDP Manuscript - QA Report

## Source
- Base file: `SNCL_Production_Manuscript_v2.docx`

## Outputs
- `SNCL_Enhanced_KDP_Ready_Austin_D_Howell.docx`
- `SNCL_Enhanced_KDP_Ready_Austin_D_Howell_Print_Proof.pdf`

## Key Fixes Applied
- Rebuilt title-page styling with logo placement.
- Standardised 6x9 trade paperback page setup and margins.
- Repaired raw Markdown pipe tables into real Word tables.
- Removed leftover Markdown artifacts: `|`, `**`, `:-:`, `[TBD]`, fenced-code markers, and mojibake checks.
- Added branded callout formatting for core tools, scripts, worksheet blocks, and safety/support notes.
- Added QR codes and fallback URLs for all 10 chapter worksheets.
- Added Companion Resources page and Resources and Further Support page.
- Added centered footer page numbers while suppressing page number on the title page.
- Cleaned document metadata to Austin D. Howell/title values.
- Added image alt text and marked table header rows for accessibility.

## Render QA
- DOCX converted successfully to PDF via LibreOffice.
- PDF page count: 249.
- PDF page size: 432 x 649.162 pt (~6 x 9.016 in).
- Rendered all 249 PDF pages to PNG at 72 DPI for visual QA contact-sheet review.
- Accessibility audit final result: 0 high, 0 medium, 0 low findings.

## Remaining Pre-KDP Checks
- Confirm `https://shesnotcrazybook.com/ws/...` routes are live before print submission.
- Recalculate paperback cover spine using final page count: 249 pages.
- Upload PDF to KDP Print Previewer and inspect gutter/cover fit.
- Upload Kindle file separately or convert from this DOCX/clean source and inspect in Kindle Previewer.
