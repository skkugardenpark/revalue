'use client';

import { useEffect, useRef, useState } from 'react';

export default function Problem() {
  const [isVisible, setIsVisible] = useState(false);
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

  const statistics = [
    {
      icon: '🗑️',
      number: '643만톤',
      description: '연간 국내 음식물쓰레기 발생량',
      detail: '하루 17,600톤씩 버려지고 있어요'
    },
    {
      icon: '💰',
      number: '20조원',
      description: '음식물쓰레기로 인한 경제적 손실',
      detail: '1인당 연간 40만원의 손실'
    },
    {
      icon: '🌍',
      number: '3,200만톤',
      description: 'CO2 배출량 (음식물쓰레기로 인한)',
      detail: '승용차 700만대가 1년간 운행하는 양'
    },
    {
      icon: '🏪',
      number: '30%',
      description: '매장에서 판매되지 못하고 버려지는 음식',
      detail: '신선도는 좋지만 시간이 지나 폐기'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <span className="text-2xl">⚠️</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            우리가 놓치고 있는 문제
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            매일 엄청난 양의 음식이 버려지고 있습니다. 
            <br />
            이 문제를 해결하기 위해 Re:Value가 시작되었어요.
          </p>
        </div>

        {/* 통계 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-800 font-semibold mb-2">
                {stat.description}
              </div>
              <div className="text-sm text-gray-500">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* 시각화 영역 */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 왼쪽: 문제 시각화 */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">
                음식물 쓰레기의 악순환
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">🏪</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">매장 운영</div>
                    <div className="text-sm text-gray-600">신선한 음식 준비 및 진열</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">⏰</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">시간 경과</div>
                    <div className="text-sm text-gray-600">판매 시간 종료 또는 유통기한 임박</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">🗑️</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">폐기 처리</div>
                    <div className="text-sm text-gray-600">아직 먹을 수 있지만 버려지는 음식들</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">💸</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">경제적 손실</div>
                    <div className="text-sm text-gray-600">매장과 사회 전체의 비용 증가</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 오른쪽: 해결책 제시 */}
            <div className="bg-green-50 rounded-2xl p-8 text-center space-y-6">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl text-white">💡</span>
              </div>
              
              <h4 className="text-xl font-bold text-gray-800">
                Re:Value의 해답
              </h4>
              
              <p className="text-gray-600">
                버려질 음식들을 합리적인 가격에 소비자와 연결하여
                <br />
                <strong className="text-green-600">환경도 보호하고 경제적 가치도 창출</strong>하는
                <br />
                상생의 플랫폼을 제공합니다.
              </p>

              <div className="flex justify-center space-x-8 text-sm">
                <div>
                  <div className="text-2xl mb-2">🌱</div>
                  <div className="font-semibold">환경 보호</div>
                </div>
                <div>
                  <div className="text-2xl mb-2">💰</div>
                  <div className="font-semibold">경제적 이익</div>
                </div>
                <div>
                  <div className="text-2xl mb-2">🤝</div>
                  <div className="font-semibold">사회적 가치</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 