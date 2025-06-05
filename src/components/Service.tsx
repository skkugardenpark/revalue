'use client';

import { useEffect, useRef, useState } from 'react';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import { colors, spacing, borderRadius } from '@/styles/design-tokens';

interface StepCardProps {
  step: {
    icon: string;
    title: string;
    description: string;
    details: string[];
    color: string;
  };
  index: number;
  isActive: boolean;
  isVisible: boolean;
}

function StepCard({ step, index, isActive, isVisible }: StepCardProps) {
  return (
    <Card
      variant={isActive ? "elevated" : "default"}
             style={{
         position: 'relative',
         border: isActive ? `2px solid ${colors.primary[500]}` : `2px solid ${colors.gray[100]}`,
         transform: `${isActive ? 'scale(1.05)' : 'scale(1)'} ${isVisible ? 'translateY(0)' : 'translateY(32px)'}`,
         opacity: isVisible ? 1 : 0,
         transition: 'all 0.5s ease-out',
         transitionDelay: `${index * 200}ms`
       }}
    >
      {/* 스텝 번호 */}
      <div 
        style={{
          position: 'absolute',
          top: '-1rem',
          left: spacing[8],
          width: '2rem',
          height: '2rem',
          background: step.color,
          borderRadius: borderRadius.full,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: colors.white,
          fontWeight: 'bold',
          fontSize: '0.875rem'
        }}
      >
        {index + 1}
      </div>

      {/* 아이콘 */}
      <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: spacing[6] }}>
        {step.icon}
      </div>

      {/* 제목 */}
      <Typography variant="h5" weight="bold" align="center" style={{ marginBottom: spacing[4] }}>
        {step.title}
      </Typography>

      {/* 설명 */}
      <Typography variant="body2" color="textSecondary" align="center" style={{ marginBottom: spacing[6] }}>
        {step.description}
      </Typography>

      {/* 세부사항 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[2] }}>
        {step.details.map((detail, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center' }}>
            <div 
              style={{
                width: '0.5rem',
                height: '0.5rem',
                backgroundColor: colors.primary[500],
                borderRadius: borderRadius.full,
                marginRight: spacing[3]
              }}
            />
            <Typography variant="caption" color="textSecondary">
              {detail}
            </Typography>
          </div>
        ))}
      </div>

      {/* 활성 인디케이터 */}
      {isActive && (
        <div 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: colors.primary[500],
            borderRadius: `0 0 ${borderRadius.xl} ${borderRadius.xl}`
          }}
        />
      )}
    </Card>
  );
}

interface FeatureCardProps {
  feature: {
    icon: string;
    title: string;
    description: string;
  };
  index: number;
  isVisible: boolean;
}

function FeatureCard({ feature, index, isVisible }: FeatureCardProps) {
  return (
    <div 
      style={{
        textAlign: 'center',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'all 0.5s ease-out',
        transitionDelay: `${800 + index * 100}ms`
      }}
    >
      <div style={{ fontSize: '3rem', marginBottom: spacing[4] }}>
        {feature.icon}
      </div>
      <Typography variant="h6" weight="bold" style={{ marginBottom: spacing[2] }}>
        {feature.title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {feature.description}
      </Typography>
    </div>
  );
}

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
      { threshold: 0.3 }
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
      color: colors.secondary.blue[500]
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
      color: colors.primary[500]
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
      color: colors.secondary.purple[500]
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
    <section 
      ref={sectionRef} 
      style={{ 
        padding: `${spacing[20]} 0`,
        background: colors.white
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div style={{ textAlign: 'center', marginBottom: spacing[16] }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '4rem',
              height: '4rem',
              backgroundColor: colors.primary[100],
              borderRadius: borderRadius.full,
              marginBottom: spacing[6]
            }}
          >
            <span style={{ fontSize: '2rem' }}>🔄</span>
          </div>
          
          <Typography variant="h2" weight="bold" align="center" style={{ marginBottom: spacing[4] }}>
            Re:Value가 제공하는 서비스
          </Typography>
          
          <Typography variant="body1" color="textSecondary" align="center" style={{ maxWidth: '48rem', margin: '0 auto' }}>
            간단한 3단계로 음식물 낭비를 줄이고<br />
            합리적인 가격에 신선한 음식을 만나보세요
          </Typography>
        </div>

        {/* 사용 흐름 */}
        <div style={{ marginBottom: spacing[20] }}>
          <Typography variant="h3" weight="bold" align="center" style={{ marginBottom: spacing[12] }}>
            이용 방법
          </Typography>
          
          <div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: spacing[8]
            }}
          >
            {steps.map((step, index) => (
              <StepCard
                key={index}
                step={step}
                index={index}
                isActive={activeStep === index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* 주요 기능 */}
        <Card 
          variant="flat" 
          size="lg"
          style={{ 
            background: colors.gray[50],
            marginBottom: spacing[16]
          }}
        >
          <Typography variant="h3" weight="bold" align="center" style={{ marginBottom: spacing[12] }}>
            Re:Value만의 특별한 기능
          </Typography>
          
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: spacing[8]
            }}
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                feature={feature}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </Card>

        {/* 🎨 완전히 새로워진 CTA 섹션 */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <div
            className="card-3d morph-bg particles"
            style={{
              color: colors.white,
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              padding: spacing[12]
            }}
          >
                         {/* 배경 장식 요소들 */}
             <div 
               className="float"
               style={{
                 position: 'absolute',
                 top: '-50px',
                 right: '-50px',
                 width: '200px',
                 height: '200px',
                 background: 'rgba(255, 255, 255, 0.1)',
                 borderRadius: borderRadius.full
               }}
             />
             <div 
               className="float-delayed"
               style={{
                 position: 'absolute',
                 bottom: '-30px',
                 left: '-30px',
                 width: '150px',
                 height: '150px',
                 background: 'rgba(255, 255, 255, 0.05)',
                 borderRadius: borderRadius.full
               }}
             />
            
            {/* 메인 콘텐츠 */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              {/* 아이콘들 애니메이션 */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: spacing[4],
                marginBottom: spacing[6],
                fontSize: '2rem'
              }}>
                <span style={{ animation: 'bounce 2s ease-in-out infinite' }}>🚀</span>
                <span style={{ animation: 'bounce 2s ease-in-out infinite 0.2s' }}>✨</span>
                <span style={{ animation: 'bounce 2s ease-in-out infinite 0.4s' }}>🎉</span>
              </div>

              <Typography 
                variant="h2" 
                weight="bold" 
                align="center" 
                style={{ 
                  color: colors.white,
                  marginBottom: spacing[4],
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                지금 바로 시작해보세요!
              </Typography>
              
              <Typography 
                variant="body1" 
                align="center" 
                style={{ 
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: spacing[8],
                  fontSize: '1.125rem'
                }}
              >
                베타 버전 출시 시 우선 접근권을 드려요<br />
                <strong>📱 앱 다운로드 시 첫 주문 30% 추가 할인!</strong>
              </Typography>

              {/* 버튼 그룹 */}
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                gap: spacing[4]
              }}>
                               <button 
                 className="btn-glass"
                 style={{
                   fontSize: '1.125rem',
                   padding: `${spacing[4]} ${spacing[10]}`,
                   display: 'flex',
                   alignItems: 'center',
                   gap: spacing[2],
                   cursor: 'pointer',
                   border: 'none'
                 }}
               >
                 <span style={{ fontSize: '1.25rem' }}>🎯</span>
                 베타 참여 신청하기
               </button>

                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: spacing[6],
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: spacing[1] }}>
                    <span>⭐</span>
                    <span>1,000+명 대기 중</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: spacing[1] }}>
                    <span>🔥</span>
                    <span>무료 참여</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: spacing[1] }}>
                    <span>⚡</span>
                    <span>즉시 혜택</span>
                  </div>
                </div>
              </div>

              {/* 진행률 바 */}
              <div style={{ marginTop: spacing[8] }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: spacing[2],
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}>
                  <span>베타 참여자 모집</span>
                  <span>1,000 / 1,500</span>
                </div>
                               <div className="progress-3d">
                 <div style={{
                   width: '67%',
                   animation: 'progressFill 2s ease-out'
                 }} />
               </div>
              </div>
                         </div>
           </div>
         </div>
      </div>

      {/* CSS 애니메이션 스타일 */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        @keyframes progressFill {
          0% { width: 0%; }
          100% { width: 67%; }
        }
      `}</style>
    </section>
  );
} 