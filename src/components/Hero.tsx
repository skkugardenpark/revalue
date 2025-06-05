'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface AppUIImageProps {
  className?: string;
}

function AppUIImage({ className }: AppUIImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!imageError ? (
        <Image
          src="/app-ui-preview.png"
          alt="Re:Value 앱 UI 미리보기"
          width={400}
          height={600}
          className={`object-contain transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          priority
        />
      ) : (
        <div 
          className="flex items-center justify-center bg-gray-100 rounded-3xl"
          style={{
            width: '400px',
            height: '600px',
            background: 'linear-gradient(135deg, #f0f9f0 0%, #e8f5e8 100%)',
            border: '2px solid #4CAF50',
            borderRadius: '1.5rem'
          }}
        >
          <div className="text-center">
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📱</div>
            <p style={{ color: '#4CAF50', fontWeight: '600' }}>Re:Value 앱 UI</p>
            <p style={{ color: '#666', fontSize: '0.875rem' }}>곧 만나보세요!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
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

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 실제 이메일 구독 API 연결
    console.log('Email subscription:', email);
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const stats = [
    { number: '1,000+', label: '사전 예약자', icon: '👥' },
    { number: '50+', label: '제휴 매장 대기', icon: '🏪' },
    { number: '10톤+', label: '음식물 쓰레기 절약 목표', icon: '♻️' }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="hero-section"
      id="hero"
      style={{
        background: 'linear-gradient(135deg, #f0f9f0 0%, #e8f5e8 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '2rem',
        paddingTop: '6rem'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
        <div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', alignItems: 'center' }}
        >
          {/* 왼쪽 콘텐츠 */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* 메인 헤딩 */}
            <div className="space-y-4">
              <h1 
                className="heading-1"
                style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: '#1f2937',
                  lineHeight: '1.2',
                  marginBottom: '1rem'
                }}
              >
                음식을 다시, <span style={{ color: '#4CAF50' }}>가치있게</span>
              </h1>
              <div 
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #4CAF50 0%, #81C784 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '1.5rem'
                }}
              >
                Re:Value
              </div>
              <p 
                style={{
                  fontSize: '1.125rem',
                  color: '#6b7280',
                  lineHeight: '1.75',
                  maxWidth: '600px'
                }}
              >
                매일 버려지는 음식들에게 새로운 기회를 주세요.<br />
                서프라이즈 박스로 만나는 특별한 할인과 지구를 위한 작은 실천.
              </p>
            </div>

            {/* 이메일 구독 폼 */}
            <div 
              className="card"
              style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '1.5rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                marginBottom: '2rem'
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>
                🔔 베타 출시 알림받기
              </h3>
              {isSubscribed ? (
                <div 
                  style={{
                    textAlign: 'center',
                    padding: '1rem',
                    background: 'linear-gradient(135deg, #f0f9f0 0%, #e8f5e8 100%)',
                    borderRadius: '0.5rem',
                    color: '#4CAF50',
                    fontWeight: '600'
                  }}
                >
                  ✅ 구독 완료! 베타 출시 시 가장 먼저 알려드릴게요.
                </div>
              ) : (
                <form onSubmit={handleEmailSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="이메일 주소를 입력하세요"
                    required
                    style={{
                      flex: '1',
                      padding: '0.75rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      outline: 'none',
                      fontSize: '1rem'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#4CAF50'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                  <button
                    type="submit"
                    className="btn-green"
                    style={{
                      background: '#4CAF50',
                      color: 'white',
                      border: 'none',
                      borderRadius: '0.5rem',
                      padding: '0.75rem 1.5rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
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
                    알림받기
                  </button>
                </form>
              )}
            </div>

            {/* 통계 */}
            <div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="card"
                  style={{
                    background: 'white',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    animation: `slideUp 0.8s ease-out ${index * 0.2}s both`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#4CAF50', marginBottom: '0.25rem' }}>
                    {stat.number}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 오른쪽 앱 UI 이미지 */}
          <div 
            className={`flex justify-center lg:justify-end ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
            style={{
              display: 'flex',
              justifyContent: 'center',
              animation: isVisible ? 'slideUp 1s ease-out 0.5s both' : 'none'
            }}
          >
            <AppUIImage className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
} 