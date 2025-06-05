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
    <div 
      className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 opacity-20"
      style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        height: '4px',
        background: '#e5e7eb',
        opacity: '0.3'
      }}
    >
      <div 
        className="h-full bg-green-500 transition-all duration-300 ease-out"
        style={{ 
          width: `${scrollProgress}%`,
          height: '100%',
          background: '#4CAF50',
          transition: 'all 0.3s ease-out'
        }}
      ></div>
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
      className="nav-bar"
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '50',
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(12px)',
        boxShadow: isScrolled ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none',
        padding: '1rem 0',
        transition: 'all 0.3s ease'
      }}
    >
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}
      >
        <div 
          className="flex justify-between items-center py-4"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}
        >
          {/* 로고 */}
          <div 
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3 cursor-pointer group"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem', 
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div 
              className="relative w-10 h-10 group-hover:scale-110 transition-transform"
              style={{ position: 'relative', width: '2.5rem', height: '2.5rem' }}
            >
              <Image
                src="/logo.svg"
                alt="Re:Value 로고"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <span 
              className="text-xl font-bold text-gray-800"
              style={{ 
                fontSize: '1.25rem', 
                fontWeight: '700', 
                color: '#1f2937'
              }}
            >
              Re:Value
            </span>
          </div>

          {/* 데스크톱 네비게이션 */}
          <div 
            className="hidden md:flex items-center space-x-8"
            style={{ display: 'none', alignItems: 'center', gap: '2rem' }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  background: activeSection === item.id ? '#4CAF50' : 'transparent',
                  color: activeSection === item.id ? 'white' : '#374151',
                  boxShadow: activeSection === item.id ? '0 10px 15px -3px rgba(76, 175, 80, 0.3)' : 'none',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== item.id) {
                    e.currentTarget.style.background = '#f0f9f0';
                    e.currentTarget.style.color = '#4CAF50';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.id) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#374151';
                  }
                }}
              >
                <span style={{ fontSize: '0.875rem' }}>{item.icon}</span>
                <span style={{ fontWeight: '500' }}>{item.label}</span>
              </button>
            ))}
          </div>

          {/* CTA 버튼 */}
          <div 
            className="hidden md:flex items-center space-x-4"
            style={{ display: 'none', alignItems: 'center', gap: '1rem' }}
          >
            <button 
              onClick={() => scrollToSection('partnership')}
              className="btn-green"
              style={{
                background: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '9999px',
                padding: '0.5rem 1.5rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '0.875rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#45a049';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#4CAF50';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              제휴 신청
            </button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors text-gray-700"
            style={{
              display: 'block',
              padding: '0.5rem',
              borderRadius: '0.5rem',
              background: 'transparent',
              border: 'none',
              color: '#374151',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
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
          <div 
            className="md:hidden bg-white/95 backdrop-blur-md rounded-2xl shadow-xl mx-4 mb-4 overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(12px)',
              borderRadius: '1rem',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
              margin: '0 1rem 1rem 1rem',
              overflow: 'hidden',
              animation: 'slideUp 0.3s ease-out'
            }}
          >
            <div style={{ padding: '1rem 0' }}>
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full flex items-center space-x-3 px-6 py-3 text-left transition-all duration-200"
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1.5rem',
                    textAlign: 'left',
                    background: activeSection === item.id ? '#4CAF50' : 'transparent',
                    color: activeSection === item.id ? 'white' : '#374151',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    animationDelay: `${index * 50}ms`
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.background = '#f0f9f0';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  <span style={{ fontSize: '1.125rem' }}>{item.icon}</span>
                  <span style={{ fontWeight: '500' }}>{item.label}</span>
                </button>
              ))}
              
              {/* 모바일 CTA */}
              <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid #e5e7eb', marginTop: '1rem' }}>
                <button 
                  onClick={() => scrollToSection('partnership')}
                  className="btn-green"
                  style={{
                    width: '100%',
                    background: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.75rem',
                    padding: '0.75rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#45a049'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#4CAF50'}
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
      
      {/* 데스크톱 메뉴 표시를 위한 미디어 쿼리 스타일 */}
      <style jsx>{`
        @media (min-width: 768px) {
          .hidden.md\\:flex {
            display: flex !important;
          }
          .md\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
} 