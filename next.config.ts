import type { NextConfig } from "next";

// next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)', // aplica em todas as rotas
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;