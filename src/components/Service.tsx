'use client';

import { useEffect, useRef, useState } from 'react';

export default function Service() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 자동 스텝 변경
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 3);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const steps = [
    {
      icon: '📦',
      title: '서프라이즈 박스 발견',
      description: '주변 매장의 할인된 음식 박스를 앱에서 확인하세요',
      details: [
        '최대 70% 할인된 가격',
        '신선하지만 시간이 지난 음식들',
        '다양한 카테고리 (베이커리, 카페, 음식점 등)'
      ],
      color: 'bg-blue-500'
    },
    {
      icon: '💳',
      title: '간편한 결제',
      description: '마음에 드는 박스를 선택하고 앱에서 바로 결제하세요',
      details: [
        '카드, 간편결제 지원',
        '즉시 QR코드 발급',
        '픽업 시간 예약 가능'
      ],
      color: 'bg-green-500'
    },
    {
      icon: '🎁',
      title: '매장에서 수령',
      description: 'QR코드를 보여주고 신선한 음식을 픽업하세요',
      details: [
        'QR코드로 간편 픽업',
        '지정된 시간 내 수령',
        '서프라이즈 구성으로 더욱 특별하게'
      ],
      color: 'bg-purple-500'
    }
  ];

  const features = [
    {
      icon: '🎯',
      title: '맞춤형 추천',
      description: '취향과 위치 기반 개인화된 박스 추천'
    },
    {
      icon: '⚡',
      title: '실시간 알림',
      description: '새로운 박스 등록 시 즉시 푸시 알림'
    },
    {
      icon: '🏃‍♂️',
      title: '빠른 픽업',
      description: 'QR코드로 5초 만에 픽업 완료'
    },
    {
      icon: '💝',
      title: '서프라이즈 구성',
      description: '매번 다른 구성으로 새로운 경험'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <span className="text-2xl">🔄</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Re:Value가 제공하는 서비스
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            간단한 3단계로 음식물 낭비를 줄이고 
            <br />
            합리적인 가격에 신선한 음식을 만나보세요
          </p>
        </div>

        {/* 사용 흐름 */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">
            이용 방법
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-500 ${
                  activeStep === index 
                    ? 'border-green-500 shadow-2xl scale-105' 
                    : 'border-gray-200 hover:border-green-300'
                } ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`
                }}
              >
                {/* 스텝 번호 */}
                <div className="absolute -top-4 left-8">
                  <div className={`w-8 h-8 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                    {index + 1}
                  </div>
                </div>

                {/* 아이콘 */}
                <div className="text-6xl mb-6 text-center">
                  {step.icon}
                </div>

                {/* 제목 */}
                <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  {step.title}
                </h4>

                {/* 설명 */}
                <p className="text-gray-600 mb-6 text-center">
                  {step.description}
                </p>

                {/* 세부사항 */}
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* 활성 인디케이터 */}
                {activeStep === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 rounded-b-2xl"></div>
                )}
              </div>
            ))}
          </div>

          {/* 연결선 (데스크톱) */}
          <div className="hidden lg:block relative -mt-20 mb-12">
            <div className="flex items-center justify-center">
              <div className="flex-1 h-0.5 bg-gray-300 max-w-xs"></div>
              <div className="mx-8 text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="flex-1 h-0.5 bg-gray-300 max-w-xs"></div>
              <div className="mx-8 text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="flex-1 h-0.5 bg-gray-300 max-w-xs"></div>
            </div>
          </div>
        </div>

        {/* 주요 기능 */}
        <div className="bg-gray-50 rounded-3xl p-8 sm:p-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">
            Re:Value만의 특별한 기능
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`text-center space-y-4 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${800 + index * 100}ms`
                }}
              >
                <div className="text-4xl">{feature.icon}</div>
                <h4 className="font-bold text-gray-800">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA 섹션 */}
        <div className="text-center mt-16">
          <div className="bg-green-500 text-white rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              지금 바로 시작해보세요!
            </h3>
            <p className="text-green-100 mb-8 text-lg">
              베타 버전 출시 시 우선 접근권을 드려요
            </p>
            <button className="bg-white text-green-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
              베타 참여 신청하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 