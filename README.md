
# FutureOps 🚀

FutureOps is a DevOps-focused publishing site built with **Next.js (static export)** and deployed via **GitHub Pages**.

## Live Site
After deployment:
`https://<YOUR_GITHUB_USERNAME>.github.io/futureops`

## Local Development
```bash
npm install
npm run dev
```
Open: `http://localhost:3000/futureops`

## Writing Posts
Add `.mdx` files to `content/posts/` with frontmatter:
- `title`
- `date` (YYYY-MM-DD)
- `summary`
- `tags`

## Deploy
Push to `main`. GitHub Actions builds and deploys automatically.
