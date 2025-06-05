'use client';

import { useEffect } from 'react';

export default function ForceCSS() {
  useEffect(() => {
    // CSS가 로드되지 않은 경우 강제로 스타일 삽입
    const forceCSSStyles = `
      /* 강제 CSS 스타일 삽입 */
      * { box-sizing: border-box !important; }
      html, body { 
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
        margin: 0 !important; padding: 0 !important; background: #ffffff !important; 
        color: #171717 !important; scroll-behavior: smooth !important;
      }
      
      /* Layout Classes */
      .max-w-7xl { max-width: 80rem !important; margin: 0 auto !important; }
      .flex { display: flex !important; }
      .items-center { align-items: center !important; }
      .justify-center { justify-content: center !important; }
      .justify-between { justify-content: space-between !important; }
      .grid { display: grid !important; }
      .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)) !important; }
      .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
      .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
      .grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; }
      .gap-6 { gap: 1.5rem !important; }
      .gap-8 { gap: 2rem !important; }
      .gap-12 { gap: 3rem !important; }
      
      /* Typography */
      .text-xl { font-size: 1.25rem !important; line-height: 1.75rem !important; }
      .text-2xl { font-size: 1.5rem !important; line-height: 2rem !important; }
      .text-3xl { font-size: 1.875rem !important; line-height: 2.25rem !important; }
      .text-4xl { font-size: 2.25rem !important; line-height: 2.5rem !important; }
      .font-bold { font-weight: 700 !important; }
      .font-semibold { font-weight: 600 !important; }
      .text-center { text-align: center !important; }
      
      /* Colors */
      .bg-green-50 { background-color: #f0f9f0 !important; }
      .bg-green-100 { background-color: #dcfce7 !important; }
      .bg-green-500 { background-color: #4CAF50 !important; }
      .bg-blue-100 { background-color: #dbeafe !important; }
      .bg-blue-500 { background-color: #3b82f6 !important; }
      .bg-purple-100 { background-color: #e9d5ff !important; }
      .bg-purple-500 { background-color: #8b5cf6 !important; }
      .bg-orange-100 { background-color: #fed7aa !important; }
      .bg-orange-500 { background-color: #f97316 !important; }
      .bg-red-100 { background-color: #fee2e2 !important; }
      .bg-red-500 { background-color: #ef4444 !important; }
      .bg-gray-50 { background-color: #f9fafb !important; }
      .bg-gray-100 { background-color: #f3f4f6 !important; }
      .bg-gray-800 { background-color: #1f2937 !important; }
      .bg-gray-900 { background-color: #111827 !important; }
      .bg-white { background-color: #ffffff !important; }
      
      .text-green-400 { color: #4ade80 !important; }
      .text-green-500 { color: #4CAF50 !important; }
      .text-green-600 { color: #16a34a !important; }
      .text-blue-500 { color: #3b82f6 !important; }
      .text-purple-500 { color: #8b5cf6 !important; }
      .text-orange-600 { color: #ea580c !important; }
      .text-red-500 { color: #ef4444 !important; }
      .text-gray-600 { color: #4b5563 !important; }
      .text-gray-800 { color: #1f2937 !important; }
      .text-white { color: #ffffff !important; }
      
      /* Spacing */
      .px-4 { padding-left: 1rem !important; padding-right: 1rem !important; }
      .px-6 { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
      .px-8 { padding-left: 2rem !important; padding-right: 2rem !important; }
      .py-4 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
      .py-6 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
      .py-20 { padding-top: 5rem !important; padding-bottom: 5rem !important; }
      .p-6 { padding: 1.5rem !important; }
      .p-8 { padding: 2rem !important; }
      
      .mb-4 { margin-bottom: 1rem !important; }
      .mb-6 { margin-bottom: 1.5rem !important; }
      .mb-16 { margin-bottom: 4rem !important; }
      
      /* Border Radius */
      .rounded-full { border-radius: 9999px !important; }
      .rounded-lg { border-radius: 0.5rem !important; }
      .rounded-xl { border-radius: 0.75rem !important; }
      .rounded-2xl { border-radius: 1rem !important; }
      .rounded-3xl { border-radius: 1.5rem !important; }
      
      /* Shadow */
      .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important; }
      .shadow-xl { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important; }
      
      /* Position */
      .fixed { position: fixed !important; }
      .relative { position: relative !important; }
      .absolute { position: absolute !important; }
      .top-0 { top: 0 !important; }
      .left-0 { left: 0 !important; }
      .right-0 { right: 0 !important; }
      .z-50 { z-index: 50 !important; }
      
      /* Transitions */
      .transition-all { transition: all 0.3s ease !important; }
      .hover\\:shadow-xl:hover { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1) !important; }
      .hover\\:bg-green-600:hover { background-color: #16a34a !important; }
      .hover\\:scale-105:hover { transform: scale(1.05) !important; }
      
      /* Custom Components */
      .btn-green {
        background: #4CAF50 !important; color: white !important; border: none !important;
        border-radius: 9999px !important; padding: 0.75rem 1.5rem !important;
        font-weight: 600 !important; cursor: pointer !important; transition: all 0.3s ease !important;
      }
      .btn-green:hover { background: #45a049 !important; transform: scale(1.05) !important; }
      
      /* Navigation */
      nav { 
        position: fixed !important; top: 0 !important; left: 0 !important; right: 0 !important;
        z-index: 50 !important; background: rgba(255, 255, 255, 0.95) !important;
        backdrop-filter: blur(12px) !important; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
        padding: 1rem 0 !important;
      }
      
      /* Sections */
      section { display: block !important; padding: 2rem 0 !important; }
      section[id="hero"] {
        background: linear-gradient(135deg, #f0f9f0 0%, #e8f5e8 100%) !important;
        min-height: 100vh !important; display: flex !important; align-items: center !important;
        padding: 6rem 2rem 2rem 2rem !important;
      }
      
      /* Cards */
      .card, div[class*="bg-white"][class*="rounded"] {
        background: white !important; border-radius: 1rem !important; padding: 1.5rem !important;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
        transition: all 0.3s ease !important;
      }
      .card:hover { transform: translateY(-4px) !important; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1) !important; }
      
      /* Remove any opacity issues */
      .opacity-0, [class*="opacity-0"] { opacity: 1 !important; }
      .translate-y-8, [class*="translate-y"] { transform: translateY(0) !important; }
      .translate-x-8, [class*="translate-x"] { transform: translateX(0) !important; }
      
      /* Responsive */
      @media (min-width: 640px) {
        .sm\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        .sm\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
        .sm\\:text-3xl { font-size: 1.875rem !important; line-height: 2.25rem !important; }
        .sm\\:text-4xl { font-size: 2.25rem !important; line-height: 2.5rem !important; }
      }
      @media (min-width: 768px) {
        .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        .md\\:flex { display: flex !important; }
        .md\\:hidden { display: none !important; }
      }
      @media (min-width: 1024px) {
        .lg\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
        .lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; }
        .lg\\:grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)) !important; }
        .lg\\:justify-end { justify-content: flex-end !important; }
        .lg\\:px-8 { padding-left: 2rem !important; padding-right: 2rem !important; }
      }
      
      /* CSS Loading Success Indicator */
      body::before {
        content: "✅ Force CSS Applied!" !important;
        position: fixed !important; top: 0 !important; left: 0 !important; width: 100% !important;
        height: 4px !important; background: linear-gradient(90deg, #4CAF50, #81C784) !important;
        z-index: 9999 !important; animation: forceSuccess 3s ease-out !important;
      }
      @keyframes forceSuccess {
        0% { opacity: 1; height: 4px; }
        50% { opacity: 1; height: 4px; }
        100% { opacity: 0; height: 0px; }
      }
    `;

    // 기존 스타일 엘리먼트 확인
    const existingStyle = document.getElementById('force-css-styles');
    
    if (!existingStyle) {
      // 새로운 스타일 엘리먼트 생성
      const styleElement = document.createElement('style');
      styleElement.id = 'force-css-styles';
      styleElement.textContent = forceCSSStyles;
      
      // head에 삽입 (기존 스타일보다 우선순위가 높도록)
      document.head.appendChild(styleElement);
      
      console.log('🎯 Force CSS injected successfully!');
    }

    // body에 강제 CSS 로딩 클래스 추가
    document.body.classList.add('force-css-loaded');
    
    // 모든 opacity-0 요소들을 강제로 보이게 만들기
    const hiddenElements = document.querySelectorAll('.opacity-0, [class*="opacity-0"]');
    hiddenElements.forEach(el => {
      if (el instanceof HTMLElement) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0) translateX(0)';
        el.style.visibility = 'visible';
      }
    });

    console.log('🚀 Force CSS component loaded and applied!');
  }, []);

  return null; // 시각적 요소 없음
} 