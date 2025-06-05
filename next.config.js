/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel 배포 최적화 - CSS 안정성 최우선
  experimental: {
    optimizeCss: false, // CSS 최적화 완전 비활성화
  },
  
  // 환경 변수
  env: {
    NEXT_PUBLIC_VERCEL_URL: process.env.VERCEL_URL,
  },
  
  // 컴파일러 설정
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // 정적 파일 처리
  assetPrefix: '',
  
  // 이미지 최적화
  images: {
    domains: ['localhost'],
    unoptimized: false,
  },
  
  // CSS 문제 해결을 위한 간단한 webpack 설정
  webpack: (config, { isServer }) => {
    // CSS 파일 처리 보장
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    return config;
  },
};

module.exports = nextConfig; 