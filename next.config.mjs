
/** @type {import('next').NextConfig} */
const repo = "futureops"; // repo name for GitHub Pages

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  trailingSlash: true,
};

export default nextConfig;
