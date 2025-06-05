'use client';

import { useState } from 'react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 실제 뉴스레터 구독 API 연결
    console.log('Newsletter subscription:', newsletterEmail);
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setNewsletterEmail('');
    }, 3000);
  };

  const teamMembers = [
    {
      name: '김석준',
      role: 'CTO & CFO',
      description: '기술 개발 & 재무 관리',
      email: 'cto@revalue.kr'
    },
    {
      name: '홍영채',
      role: 'CEO',
      description: '비전 리더십 & 전략 기획',
      email: 'ceo@revalue.kr'
    },
    {
      name: '박정원',
      role: 'COO & CMO',
      description: '운영 관리 & 마케팅 전략',
      email: 'coo@revalue.kr'
    }
  ];

  const quickLinks = [
    { title: 'HOME', href: 'hero' },
    { title: '문제 해결', href: 'problem' },
    { title: '서비스 소개', href: 'service' },
    { title: '사회적 가치', href: 'social-value' },
    { title: '제휴 문의', href: 'partnership' }
  ];

  // 섹션으로 스크롤하는 함수
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
  };

  const supportLinks = [
    { title: '고객센터', href: '#support' },
    { title: 'FAQ', href: '#faq' },
    { title: '개발자 API', href: '#api' },
    { title: '블로그', href: '#blog' }
  ];

  const legalLinks = [
    { title: '이용약관', href: '#terms' },
    { title: '개인정보처리방침', href: '#privacy' },
    { title: '환불정책', href: '#refund' },
    { title: '사업자정보', href: '#business' }
  ];

  const socialMedia = [
    { name: 'Facebook', icon: '📘', href: '#facebook' },
    { name: 'Instagram', icon: '📷', href: '#instagram' },
    { name: 'Twitter', icon: '🐦', href: '#twitter' },
    { name: 'LinkedIn', icon: '💼', href: '#linkedin' },
    { name: 'YouTube', icon: '📺', href: '#youtube' },
    { name: 'KakaoTalk', icon: '💬', href: '#kakaotalk' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* 메인 푸터 섹션 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* 브랜드 및 회사 정보 */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-green-400 mb-2">Re:Value</h3>
              <p className="text-gray-300 mb-4">
                음식을 다시, 가치있게
              </p>
              <p className="text-sm text-gray-400">
                지속가능한 미래를 위한 음식물 쓰레기 해결 플랫폼
              </p>
            </div>

            {/* 회사 정보 */}
            <div className="space-y-2 text-sm text-gray-400">
              <div>📍 서울시 강남구 테헤란로 123, 45층</div>
              <div>📞 1588-0000</div>
              <div>📧 hello@revalue.kr</div>
              <div>🕒 평일 09:00 - 18:00</div>
            </div>

            {/* 사업자 정보 */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <div className="text-xs text-gray-500 space-y-1">
                <div>(주) 리밸류 | 대표: 홍영채</div>
                <div>사업자등록번호: 123-45-67890</div>
                <div>통신판매업신고: 제2024-서울강남-1234호</div>
              </div>
            </div>
          </div>

          {/* 퀵 링크 */}
          <div>
            <h4 className="text-lg font-semibold mb-6">서비스</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm text-left"
                  >
                    {link.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 지원 */}
          <div>
            <h4 className="text-lg font-semibold mb-6">지원</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h5 className="text-sm font-semibold mb-3">법적 고지</h5>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-green-400 transition-colors text-xs"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 뉴스레터 및 소셜 미디어 */}
          <div>
            <h4 className="text-lg font-semibold mb-6">소식 받기</h4>
            
            {/* 뉴스레터 구독 */}
            <div className="mb-8">
              <p className="text-sm text-gray-300 mb-4">
                Re:Value의 최신 소식과 특별한 혜택을 가장 먼저 받아보세요
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  placeholder="이메일 주소"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white text-sm"
                />
                <button
                  type="submit"
                  disabled={isSubscribed}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-sm font-semibold transition-colors disabled:opacity-50"
                >
                  {isSubscribed ? '구독완료!' : '뉴스레터 구독'}
                </button>
              </form>
            </div>

            {/* 소셜 미디어 */}
            <div>
              <h5 className="text-sm font-semibold mb-4">팔로우하기</h5>
              <div className="grid grid-cols-3 gap-3">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors group"
                    title={social.name}
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 팀 소개 섹션 */}
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h4 className="text-xl font-bold text-center mb-8">팀 소개</h4>
          <div className="flex flex-wrap justify-center items-start gap-8 max-w-5xl mx-auto">
            {/* 모바일에서 CEO 먼저 표시 */}
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`text-center group ${member.role === 'CEO' ? 'w-72 order-2' : 'w-64'} ${index === 0 ? 'order-1' : index === 2 ? 'order-3' : ''}`}
              >
                <div className={`${member.role === 'CEO' ? 'w-24 h-24 ring-4 ring-yellow-400/50' : 'w-20 h-20'} bg-gradient-to-br ${member.role === 'CEO' ? 'from-yellow-400 to-orange-500' : 'from-green-400 to-blue-500'} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-all duration-300`}>
                  <span className={`${member.role === 'CEO' ? 'text-3xl' : 'text-2xl'} text-white font-bold`}>
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h5 className={`font-semibold text-white mb-1 ${member.role === 'CEO' ? 'text-lg' : 'text-base'}`}>{member.name}</h5>
                <div className={`text-sm font-medium mb-2 ${member.role === 'CEO' ? 'text-yellow-400 font-bold' : 'text-green-400'}`}>{member.role}</div>
                <p className="text-gray-400 text-xs mb-3">{member.description}</p>
                <a 
                  href={`mailto:${member.email}`}
                  className="text-gray-500 hover:text-green-400 text-xs transition-colors"
                >
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 저작권 */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-500 text-sm">
              © 2024 Re:Value. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <span>🌱</span>
                <span>탄소중립 실천</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🏆</span>
                <span>ESG 우수기업</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🔒</span>
                <span>개인정보보호 인증</span>
              </div>
            </div>
          </div>

          {/* 추가 정보 */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-600">
              Re:Value는 지속가능한 미래를 위해 UN SDGs를 지지하며, 
              음식물 쓰레기 문제 해결을 통해 더 나은 세상을 만들어갑니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 