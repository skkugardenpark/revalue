import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 정적 파일 최적화
  compress: true,
  
  // 웹팩 설정 (CSS 관련)
  webpack: (config, { dev, isServer }) => {
    // CSS 로딩 최적화
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        sideEffects: false,
      };
    }
    
    return config;
  },
  
  // 헤더 설정으로 CSS 캐싱 최적화
  async headers() {
    return [
      {
        source: '/_next/static/css/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
