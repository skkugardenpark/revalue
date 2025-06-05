'use client';

import { useEffect, useRef, useState } from 'react';

export default function SocialValue() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);
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

  // 메트릭 자동 변경
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveMetric((prev) => (prev + 1) % 4);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const esgGoals = [
    {
      category: 'Environmental',
      icon: '🌍',
      title: '환경 보호',
      description: '음식물 쓰레기 감소로 온실가스 배출 줄이기',
      goals: [
        '연간 CO2 3,200만톤 감소 기여',
        '음식물 쓰레기 50% 감소 목표',
        '지속가능한 소비 문화 확산'
      ],
      color: 'bg-green-500'
    },
    {
      category: 'Social',
      icon: '🤝',
      title: '사회적 가치',
      description: '취약계층 지원과 지역 상생 협력',
      goals: [
        '푸드뱅크 연계 기부 시스템',
        '소상공인 매출 증대 지원',
        '청년 일자리 창출'
      ],
      color: 'bg-blue-500'
    },
    {
      category: 'Governance',
      icon: '⚖️',
      title: '윤리적 경영',
      description: '투명하고 공정한 플랫폼 운영',
      goals: [
        '공정한 수수료 정책',
        '투명한 운영 현황 공개',
        '이해관계자와의 소통'
      ],
      color: 'bg-purple-500'
    }
  ];

  const socialPrograms = [
    {
      icon: '🍞',
      title: '푸드뱅크 연계',
      description: '매주 구매 1건당 1식의 식사를 취약계층에게 기부',
      impact: '월 5,000식 기부 목표',
      status: '준비중'
    },
    {
      icon: '🏪',
      title: '소상공인 지원',
      description: '매장 운영 효율화 컨설팅 및 마케팅 지원 제공',
      impact: '200개 매장 지원 목표',
      status: '모집중'
    },
    {
      icon: '🌱',
      title: '환경 교육',
      description: '학교 및 기업 대상 음식물 쓰레기 교육 프로그램',
      impact: '연 10,000명 교육 목표',
      status: '기획중'
    },
    {
      icon: '🎓',
      title: '청년 지원',
      description: '친환경 분야 청년 창업가 멘토링 및 투자 연계',
      impact: '연 50팀 지원 목표',
      status: '운영중'
    }
  ];

  const impactMetrics = [
    {
      icon: '🗑️',
      title: '음식물 쓰레기 감소',
      current: '125',
      target: '10,000',
      unit: 'kg',
      description: '현재까지 절약된 음식물 쓰레기'
    },
    {
      icon: '🌍',
      title: 'CO2 감소량',
      current: '47',
      target: '3,200',
      unit: 'kg',
      description: '온실가스 배출 감소 기여도'
    },
    {
      icon: '💰',
      title: '경제적 가치',
      current: '320',
      target: '50,000',
      unit: '만원',
      description: '사회 전체 경제적 절약 효과'
    },
    {
      icon: '🤝',
      title: '사회 기여',
      current: '85',
      target: '5,000',
      unit: '식',
      description: '취약계층에게 제공된 식사'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <span className="text-2xl">💫</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Re:Value의 사회적 가치
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            음식을 다시 가치있게 만드는 것은 단순한 비즈니스가 아닙니다.<br />
            더 나은 세상을 만들기 위한 우리의 진정한 목표를 소개합니다.
          </p>
        </div>

        {/* ESG 목표 */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">ESG 경영 목표</h3>
            <p className="text-gray-600">환경, 사회, 지배구조의 균형잡힌 발전을 추구합니다</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {esgGoals.map((goal, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${goal.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl text-white">{goal.icon}</span>
                  </div>
                  <div className="text-sm font-semibold text-gray-500 mb-2">{goal.category}</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{goal.title}</h4>
                  <p className="text-gray-600 mb-6">{goal.description}</p>
                </div>

                <ul className="space-y-3">
                  {goal.goals.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className={`w-2 h-2 ${goal.color} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 사회공헌 프로그램 */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">사회공헌 프로그램</h3>
            <p className="text-gray-600">다양한 사회 문제 해결에 기여하는 구체적인 활동들</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {socialPrograms.map((program, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 border-l-4 border-green-500 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`}
                style={{
                  transitionDelay: `${500 + index * 150}ms`
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{program.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-gray-800">{program.title}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        program.status === '운영중' 
                          ? 'bg-green-100 text-green-600'
                          : program.status === '모집중'
                          ? 'bg-blue-100 text-blue-600'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {program.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3 text-sm">{program.description}</p>
                    <div className="text-green-600 font-semibold text-sm">{program.impact}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 임팩트 지표 */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">현재까지의 임팩트</h3>
            <p className="text-gray-600">베타 버전 출시 전 테스트를 통해 검증된 실제 효과</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-2xl transition-all duration-500 ${
                  activeMetric === index 
                    ? 'bg-green-50 border-2 border-green-500 shadow-lg scale-105' 
                    : 'bg-gray-50 border-2 border-transparent hover:bg-green-50'
                } ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${800 + index * 100}ms`
                }}
              >
                <div className="text-4xl mb-4">{metric.icon}</div>
                <h4 className="font-bold text-gray-800 mb-2">{metric.title}</h4>
                <div className="mb-3">
                  <div className="text-3xl font-bold text-green-600">
                    {metric.current}
                    <span className="text-lg text-gray-400">/{metric.target}</span>
                  </div>
                  <div className="text-sm text-gray-500">{metric.unit}</div>
                </div>
                <p className="text-xs text-gray-600">{metric.description}</p>
                
                {/* 진행률 바 */}
                <div className="mt-4 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-1000"
                    style={{
                      width: `${Math.min((parseInt(metric.current) / parseInt(metric.target)) * 100, 100)}%`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 참여 유도 섹션 */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-3xl p-8 sm:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-5xl mb-6">🌟</div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                함께 만들어가는 더 나은 세상
              </h3>
              <p className="text-lg text-green-100 mb-8">
                Re:Value와 함께 음식물 쓰레기를 줄이고 사회적 가치를 창출해보세요.<br />
                작은 실천이 모여 큰 변화를 만들어갑니다.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
                  사회공헌 프로그램 참여하기
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-600 transition-colors">
                  임팩트 리포트 보기
                </button>
              </div>

              {/* 소셜 미디어 */}
              <div className="mt-8 pt-8 border-t border-green-400">
                <p className="text-green-100 mb-4">우리의 활동을 SNS에서도 만나보세요</p>
                <div className="flex justify-center space-x-6">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors cursor-pointer">
                    <span className="text-xl">📘</span>
                  </div>
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors cursor-pointer">
                    <span className="text-xl">📷</span>
                  </div>
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors cursor-pointer">
                    <span className="text-xl">🐦</span>
                  </div>
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors cursor-pointer">
                    <span className="text-xl">💼</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 