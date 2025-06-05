'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

// 프로그레스 바 컴포넌트
function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200/30">
      <div 
        className="h-full bg-green-500 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'HOME', icon: '🏠' },
    { id: 'problem', label: '문제 인식', icon: '⚠️' },
    { id: 'service', label: '서비스', icon: '🔄' },
    { id: 'social-value', label: '사회적 가치', icon: '💫' },
    { id: 'partnership', label: '제휴 문의', icon: '🤝' }
  ];

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // 현재 섹션 감지
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  // 섹션으로 스크롤
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 py-4 ${
        isScrolled 
          ? 'bg-white/95 shadow-lg' 
          : 'bg-white/90'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* 로고 */}
          <div 
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3 cursor-pointer group transition-transform hover:scale-105"
          >
            <div className="relative w-10 h-10 group-hover:scale-110 transition-transform">
              <Image
                src="/logo.svg"
                alt="Re:Value 로고"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-gray-800 holographic">
              Re:Value
            </span>
          </div>

          {/* 데스크톱 네비게이션 */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 font-medium ${
                  activeSection === item.id
                    ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                    : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                <span className="text-sm">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* CTA 버튼 */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => scrollToSection('partnership')}
              className="btn-glass px-6 py-2 bg-green-500 text-white font-semibold rounded-full transition-all duration-300 hover:bg-green-600 hover:scale-105 shadow-lg"
            >
              제휴 신청
            </button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-2xl shadow-xl mx-4 mb-4 overflow-hidden animate-slide-up">
            <div className="py-4">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-6 py-3 text-left transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-green-500 text-white'
                      : 'text-gray-700 hover:bg-green-50'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
              
              {/* 모바일 CTA */}
              <div className="px-6 pt-4 mt-4 border-t border-gray-200">
                <button 
                  onClick={() => scrollToSection('partnership')}
                  className="w-full bg-green-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:bg-green-600"
                >
                  제휴 신청하기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 프로그레스 바 */}
      <ProgressBar />
    </nav>
  );
} 