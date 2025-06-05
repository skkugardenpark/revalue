'use client';

import { useState } from 'react';
import Image from 'next/image';

// 앱 UI 이미지 컴포넌트
function AppUIImage() {
  const [imageError, setImageError] = useState(false);
  
  if (imageError) {
    // 이미지 로드 실패 시 플레이스홀더
    return (
      <div className="absolute inset-8 bg-white rounded-3xl shadow-2xl flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-24 h-24 bg-green-500 rounded-full mx-auto flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 718.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </div>
          <div className="text-gray-400 text-sm">
            Re:Value 앱 UI<br />곧 공개 예정
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-8 bg-white rounded-3xl shadow-2xl overflow-hidden">
      <Image
        src="/app-ui-preview.png"
        alt="Re:Value 앱 UI 미리보기"
        fill
        className="object-cover"
        onError={() => setImageError(true)}
        priority
      />
    </div>
  );
}

export default function Hero() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 실제 이메일 구독 API 연결
    console.log('Email subscription:', email);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* 텍스트 섹션 */}
        <div className="text-center lg:text-left space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              음식을 <span className="text-green-500">다시, 가치</span>있게
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-medium">
              Re:Value
            </p>
          </div>
          
          <p className="text-lg text-gray-600 max-w-2xl">
            매일 버려지는 음식들에게 새로운 기회를 주세요. 
            <br />
            서프라이즈 박스로 만나는 특별한 할인과 지구를 위한 작은 실천.
          </p>

          {/* 이메일 구독 폼 */}
          <div className="max-w-md mx-auto lg:mx-0">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="앱 출시 알림을 받을 이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={isSubmitted}
                className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
              >
                {isSubmitted ? '구독완료!' : '알림받기'}
              </button>
            </form>
          </div>

          {/* 통계 정보 */}
          <div className="flex flex-col sm:flex-row gap-8 text-center lg:text-left">
            <div>
              <div className="text-2xl font-bold text-green-500">1,000+</div>
              <div className="text-gray-600">사전 예약자</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-500">50+</div>
              <div className="text-gray-600">제휴 매장 대기</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-500">10톤+</div>
              <div className="text-gray-600">음식물 쓰레기 절약 목표</div>
            </div>
          </div>
        </div>

        {/* 이미지 섹션 */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
            {/* 배경 원형 */}
            <div className="absolute inset-0 bg-green-100 rounded-full animate-pulse-slow"></div>
            <div className="absolute inset-4 bg-green-200 rounded-full opacity-50 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            
            {/* 메인 이미지 */}
            <AppUIImage />

            {/* 플로팅 요소들 */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full animate-bounce flex items-center justify-center">
              <span className="text-2xl">🌱</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400 rounded-full animate-bounce flex items-center justify-center" style={{animationDelay: '1s'}}>
              <span className="text-lg">♻️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 