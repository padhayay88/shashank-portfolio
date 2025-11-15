# portfolio CLI

This project includes a small convenience CLI to run common tasks locally.

Install locally (optional):

Windows (PowerShell / cmd):
```
npm install
npx portfolio help
```

Usage:

- `portfolio dev` — start dev server (`npm run dev`)
- `portfolio build` — run production build (`npm run build`)
- `portfolio start` — start production server (`npm run start`)
- `portfolio vercel:deploy` — deploy using the Vercel CLI (`vercel --prod`)
- `portfolio info` — show `package.json` name/version and scripts
- `portfolio help` — show help

Notes:
- `vercel:deploy` requires the Vercel CLI installed and authenticated (`npm i -g vercel`).
- For GitHub / Vercel automation (creating repos, assigning domains) you should use tokens and CI; this CLI intentionally keeps actions local and minimal.

If you want me to add GitHub/Git integration (create repo, push, set remote) or call Vercel API with a token, tell me and I can extend the CLI.
