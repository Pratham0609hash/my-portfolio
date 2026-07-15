import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = "my-portfolio"

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubActions ? `/${repo}` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
