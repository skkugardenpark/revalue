import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // 기본 컬러와 배경
    'bg-green-50', 'bg-green-100', 'bg-green-400', 'bg-green-500', 'bg-green-600',
    'text-green-400', 'text-green-500', 'text-green-600',
    'border-green-400', 'border-green-500',
    'bg-orange-50', 'bg-orange-100', 'bg-orange-500', 'bg-orange-600',
    'text-orange-100', 'text-orange-600',
    'border-orange-500',
    
    // 레이아웃
    'min-h-screen', 'max-w-7xl', 'mx-auto', 'px-4', 'px-6', 'px-8', 'py-20',
    'grid', 'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'gap-8', 'gap-12',
    'flex', 'items-center', 'justify-center', 'justify-between',
    
    // 타이포그래피
    'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl',
    'font-bold', 'font-semibold', 'font-medium',
    'text-gray-600', 'text-gray-700', 'text-gray-800',
    
    // 그라데이션
    'bg-gradient-to-r', 'bg-gradient-to-br',
    'from-green-50', 'from-green-400', 'from-green-500',
    'from-orange-50', 'from-orange-500',
    'to-green-50', 'to-green-500', 'to-orange-500',
    'via-blue-50',
    
    // 버튼과 인터랙션
    'rounded-full', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-3xl',
    'shadow-lg', 'shadow-xl', 'shadow-2xl',
    'hover:bg-green-600', 'hover:bg-orange-600', 'hover:shadow-xl',
    'transition-all', 'duration-300', 'ease-out',
    'transform', 'hover:scale-105', 'scale-105',
    
    // 레이아웃 유틸리티
    'fixed', 'absolute', 'relative', 'top-0', 'left-0', 'right-0', 'z-50',
    'backdrop-blur-md', 'bg-white/95',
    'space-x-2', 'space-x-3', 'space-x-4', 'space-x-8',
    'space-y-2', 'space-y-4', 'space-y-6', 'space-y-8',
    
    // 애니메이션
    'animate-fade-in', 'animate-pulse-slow', 'animate-bounce',
    'opacity-0', 'opacity-100',
    
    // 반응형
    'sm:grid-cols-2', 'sm:grid-cols-3', 'sm:text-3xl', 'sm:text-4xl',
    'md:flex', 'md:hidden', 'md:grid-cols-2',
    'lg:grid-cols-2', 'lg:grid-cols-3', 'lg:grid-cols-4', 'lg:grid-cols-6',
    'lg:justify-end', 'lg:px-8',
    
    // 커스텀 클래스들
    'nav-bar', 'btn-green', 'hero-section', 'problem-section', 
    'service-section', 'social-section', 'partnership-section',
    'card', 'heading-1', 'heading-2', 'container-custom',
    'gradient-green', 'gradient-orange'
  ],
  theme: {
    extend: {
      colors: {
        'green': {
          50: '#f0f9f0',
          100: '#dcf4dc',
          200: '#bae8ba',
          300: '#88d788',
          400: '#4caf50',
          500: '#4caf50',
          600: '#45a049',
          700: '#3d8b40',
          800: '#356f37',
          900: '#2d5b2f',
        },
        'orange': {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-left': 'fadeInLeft 0.8s ease-out',
        'fade-in-right': 'fadeInRight 0.8s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-soft': 'bounceSoft 2s infinite',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          'from': { opacity: '0', transform: 'translateX(-30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          'from': { opacity: '0', transform: 'translateX(30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config 