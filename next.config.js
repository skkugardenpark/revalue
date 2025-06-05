/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel 배포 최적화 - CSS 안정성 우선
  experimental: {
    optimizeCss: false, // CSS 최적화 비활성화로 안정성 확보
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
  
  // CSS 처리 강화
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]',
  },
  
  // Webpack 설정으로 CSS 로딩 보장
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // CSS 처리 규칙
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