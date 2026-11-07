import { execSync } from "node:child_process";
import type { NextConfig } from "next";

/**
 * A build stamp that reports something true: the date and the commit actually
 * checked out when the bundle was produced.
 */
function getBuildStamp() {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");

  const vercelSha = process.env.VERCEL_GIT_COMMIT_SHA;
  if (vercelSha) return `${date}.${vercelSha.slice(0, 7)}`;

  try {
    const sha = execSync("git rev-parse --short HEAD", {
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    if (sha) return `${date}.${sha}`;
  } catch {
    // Source archives and CI without git still get a usable stamp.
  }

  return `${date}.local`;
}

const nextConfig: NextConfig = {
  // Nodemailer ships internals that must not be bundled into the server build.
  serverExternalPackages: ["nodemailer"],
  env: {
    NEXT_PUBLIC_BUILD_STAMP:
      process.env.NEXT_PUBLIC_BUILD_STAMP ?? getBuildStamp(),
  },
};

export default nextConfig;
