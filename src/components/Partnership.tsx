'use client';

import { useEffect, useRef, useState } from 'react';

export default function Partnership() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    storeName: '',
    ownerName: '',
    phone: '',
    email: '',
    address: '',
    storeType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 실제 제휴 신청 API 연결
    console.log('Partnership application:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsFormOpen(false);
      setFormData({
        storeName: '',
        ownerName: '',
        phone: '',
        email: '',
        address: '',
        storeType: '',
        message: ''
      });
    }, 3000);
  };

  const benefits = [
    {
      icon: '📈',
      title: '매출 증대',
      description: '버려질 음식을 수익으로 전환',
      details: [
        '기존 대비 10-20% 추가 수익',
        '폐기 비용 절약',
        '새로운 고객층 확보'
      ]
    },
    {
      icon: '♻️',
      title: '환경 기여',
      description: 'ESG 경영 및 브랜드 이미지 개선',
      details: [
        '음식물 쓰레기 50% 감소',
        '친환경 매장 인증',
        '사회적 책임 실천'
      ]
    },
    {
      icon: '🤖',
      title: '스마트 관리',
      description: '자동화된 재고 및 판매 관리',
      details: [
        'AI 기반 수요 예측',
        '자동 가격 최적화',
        '간편한 재고 관리'
      ]
    },
    {
      icon: '📱',
      title: '마케팅 지원',
      description: '무료 홍보 및 고객 유치',
      details: [
        '앱 내 매장 홍보',
        '타겟 마케팅 지원',
        '리뷰 관리 시스템'
      ]
    }
  ];

  const storeTypes = [
    { icon: '🥖', name: '베이커리', count: '150+' },
    { icon: '☕', name: '카페', count: '200+' },
    { icon: '🍱', name: '도시락/김밥', count: '100+' },
    { icon: '🍕', name: '음식점', count: '300+' },
    { icon: '🛒', name: '편의점', count: '80+' },
    { icon: '🥗', name: '샐러드', count: '60+' }
  ];

  const process = [
    {
      step: '1',
      title: '제휴 신청',
      description: '간단한 정보 입력으로 제휴 신청',
      icon: '📝'
    },
    {
      step: '2',
      title: '매장 방문',
      description: '담당자가 직접 방문하여 상담',
      icon: '🏪'
    },
    {
      step: '3',
      title: '시스템 설치',
      description: '무료 태블릿 및 교육 제공',
      icon: '📱'
    },
    {
      step: '4',
      title: '서비스 시작',
      description: '즉시 추가 수익 창출 시작',
      icon: '🚀'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-orange-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
            <span className="text-2xl">🤝</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            매장 제휴 파트너십
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Re:Value와 함께 음식물 쓰레기를 줄이고 추가 수익을 창출해보세요.<br />
            이미 <strong className="text-orange-600">500+ 매장</strong>이 우리와 함께하고 있습니다.
          </p>
        </div>

        {/* 매장 타입별 현황 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">제휴 매장 현황</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {storeTypes.map((type, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="text-3xl mb-3">{type.icon}</div>
                <div className="text-sm font-semibold text-gray-800 mb-1">{type.name}</div>
                <div className="text-lg font-bold text-orange-600">{type.count}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 제휴 혜택 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">제휴 매장 혜택</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${300 + index * 150}ms`
                }}
              >
                <div className="text-4xl mb-4 text-center">{benefit.icon}</div>
                <h4 className="text-lg font-bold text-gray-800 mb-3 text-center">{benefit.title}</h4>
                <p className="text-gray-600 mb-4 text-center text-sm">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 제휴 과정 */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">제휴 진행 과정</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">{step.icon}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                  
                  {/* 연결선 */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-orange-200 transform -translate-x-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 성공 사례 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">성공 사례</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: '○○ 베이커리',
                type: '베이커리',
                result: '월 추가수익 120만원',
                quote: '폐기할 빵들이 모두 수익이 되어 놀랐어요!'
              },
              {
                name: '△△ 카페',
                type: '카페',
                result: '폐기비용 80% 절약',
                quote: '환경도 생각하고 수익도 올리는 일석이조!'
              },
              {
                name: '□□ 김밥천국',
                type: '도시락/김밥',
                result: '신규고객 30% 증가',
                quote: '젊은 고객들이 많이 찾아와 주셔서 좋아요!'
              }
            ].map((story, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border-l-4 border-orange-500 ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`}
                style={{
                  transitionDelay: `${600 + index * 200}ms`
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">🏪</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">{story.name}</div>
                    <div className="text-sm text-gray-600">{story.type}</div>
                  </div>
                </div>
                <div className="text-lg font-bold text-orange-600 mb-3">{story.result}</div>
                <div className="text-sm text-gray-600 italic">&ldquo;{story.quote}&rdquo;</div>
              </div>
            ))}
          </div>
        </div>

        {/* 제휴 신청 섹션 */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500 to-green-500 text-white rounded-3xl p-8 sm:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                지금 바로 제휴 신청하세요!
              </h3>
              <p className="text-lg text-orange-100 mb-8">
                선착순 <strong>100개 매장</strong>에 한해 <strong>3개월 무료</strong> 서비스를 제공합니다.<br />
                설치비, 교육비, 태블릿 모두 무료!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  제휴 신청하기
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors">
                  자료 다운로드
                </button>
              </div>

              <div className="text-orange-100 text-sm">
                📞 제휴 문의: 1588-0000 | 📧 partnership@revalue.kr
              </div>
            </div>
          </div>
        </div>

        {/* 제휴 신청 모달 */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-screen overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">제휴 신청</h3>
                <button 
                  onClick={() => setIsFormOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">✅</div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">신청이 완료되었습니다!</h4>
                  <p className="text-gray-600 text-sm">24시간 내에 담당자가 연락드리겠습니다.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="storeName"
                      placeholder="매장명"
                      value={formData.storeName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="ownerName"
                      placeholder="대표자명"
                      value={formData.ownerName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="연락처"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="이메일"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="address"
                      placeholder="매장 주소"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <select
                      name="storeType"
                      value={formData.storeType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">매장 유형 선택</option>
                      <option value="bakery">베이커리</option>
                      <option value="cafe">카페</option>
                      <option value="lunchbox">도시락/김밥</option>
                      <option value="restaurant">음식점</option>
                      <option value="convenience">편의점</option>
                      <option value="salad">샐러드</option>
                      <option value="other">기타</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="문의사항이나 요청사항을 입력해주세요"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
                  >
                    제휴 신청하기
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 