import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Nodemailer ships internals that must not be bundled into the server build.
  serverExternalPackages: ["nodemailer"],
};

export default nextConfig;
