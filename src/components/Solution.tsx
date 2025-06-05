'use client';

import { useEffect, useRef, useState } from 'react';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import { colors, gradients, spacing, borderRadius } from '@/styles/design-tokens';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
  delay?: number;
}

function FeatureCard({ icon, title, description, bgColor, delay = 0 }: FeatureCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Card
      variant="default"
      style={{
        textAlign: 'center',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.95)',
        transition: 'all 0.6s ease-out',
        background: bgColor,
      }}
    >
      <div 
        style={{
          width: '4rem',
          height: '4rem',
          background: colors.white,
          borderRadius: borderRadius.full,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto',
          marginBottom: spacing[4],
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}
      >
        <span style={{ fontSize: '2rem' }}>{icon}</span>
      </div>
      
      <Typography variant="h5" weight="bold" style={{ marginBottom: spacing[3] }}>
        {title}
      </Typography>
      
      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
    </Card>
  );
}

interface BenefitItemProps {
  icon: string;
  title: string;
  description: string;
  color: string;
}

function BenefitItem({ icon, title, description, color }: BenefitItemProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: spacing[4] }}>
      <div 
        style={{
          width: '3rem',
          height: '3rem',
          backgroundColor: color,
          borderRadius: borderRadius.full,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      >
        <span style={{ fontSize: '1.25rem' }}>{icon}</span>
      </div>
      <div>
        <Typography variant="h6" weight="semibold" style={{ marginBottom: spacing[1] }}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </div>
    </div>
  );
}

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

function StepCard({ number, title, description, isLast = false }: StepCardProps) {
  return (
    <div style={{ position: 'relative' }}>
      <Card variant="default" style={{ textAlign: 'center' }}>
        <div 
          style={{
            width: '3rem',
            height: '3rem',
            background: gradients.primaryGreen,
            borderRadius: borderRadius.full,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            marginBottom: spacing[4],
            color: colors.white,
            fontWeight: 'bold',
            fontSize: '1.25rem'
          }}
        >
          {number}
        </div>
        
        <Typography variant="h6" weight="semibold" style={{ marginBottom: spacing[2] }}>
          {title}
        </Typography>
        
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </Card>
      
      {!isLast && (
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            right: '-2rem',
            transform: 'translateY(-50%)',
            color: colors.primary[400],
            fontSize: '1.5rem',
            zIndex: 1
          }}
        >
          →
        </div>
      )}
    </div>
  );
}

export default function Solution() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: '🎁',
      title: '서프라이즈 박스',
      description: '당일 신선한 음식들을 특별한 가격에 만나보세요. 무엇이 들어있을지는 받아보는 재미!',
      bgColor: gradients.heroBackground
    },
    {
      icon: '💰',
      title: '합리적인 가격',
      description: '정가의 30-50% 할인된 가격으로 품질 좋은 음식을 구매할 수 있어요.',
      bgColor: colors.secondary.orange[50]
    },
    {
      icon: '🌍',
      title: '환경 보호',
      description: '음식물 쓰레기를 줄여 지구 환경을 보호하는 의미있는 소비에 참여하세요.',
      bgColor: colors.secondary.blue[100]
    },
    {
      icon: '📱',
      title: '간편한 주문',
      description: '앱에서 간단하게 주문하고 매장에서 픽업하거나 배달로 받아보세요.',
      bgColor: colors.secondary.purple[100]
    }
  ];

  const benefits = [
    {
      icon: '🏪',
      title: '매장 파트너',
      description: '음식 폐기 비용 절약 및 새로운 수익 창출',
      color: colors.secondary.orange[100]
    },
    {
      icon: '👥',
      title: '소비자',
      description: '합리적 가격으로 신선한 음식 구매',
      color: colors.primary[100]
    },
    {
      icon: '🌱',
      title: '지구 환경',
      description: '음식물 쓰레기 감소 및 탄소 발자국 줄이기',
      color: colors.secondary.blue[100]
    }
  ];

  const steps = [
    {
      number: '1',
      title: '매장 등록',
      description: '당일 판매하지 못한 신선한 음식을 등록해요'
    },
    {
      number: '2',
      title: '박스 구성',
      description: '다양한 음식들을 서프라이즈 박스로 구성해요'
    },
    {
      number: '3',
      title: '고객 주문',
      description: '앱을 통해 고객들이 박스를 주문해요'
    },
    {
      number: '4',
      title: '픽업/배달',
      description: '고객이 매장에서 픽업하거나 배달로 받아요'
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
            <span style={{ fontSize: '2rem' }}>💡</span>
          </div>
          
          <Typography variant="h2" weight="bold" align="center" style={{ marginBottom: spacing[4] }}>
            Re:Value의 <span style={{ color: colors.primary[500] }}>똑똑한 해결책</span>
          </Typography>
          
          <Typography variant="body1" color="textSecondary" align="center" style={{ maxWidth: '48rem', margin: '0 auto' }}>
            음식물 쓰레기 문제를 해결하면서 모든 이해관계자가 win-win할 수 있는<br />
            혁신적인 플랫폼을 제안합니다.
          </Typography>
        </div>

        {/* 주요 기능 그리드 */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: spacing[8],
            marginBottom: spacing[20]
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              bgColor={feature.bgColor}
              delay={index * 150}
            />
          ))}
        </div>

        {/* 이해관계자별 혜택 */}
        <Card variant="default" size="lg" style={{ marginBottom: spacing[20] }}>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: spacing[12],
              alignItems: 'center'
            }}
          >
            {/* 왼쪽: 제목 */}
            <div>
              <Typography variant="h3" weight="bold" style={{ marginBottom: spacing[4] }}>
                모두에게 도움이 되는<br />
                <span style={{ color: colors.primary[500] }}>상생 플랫폼</span>
              </Typography>
              
              <Typography variant="body1" color="textSecondary" style={{ marginBottom: spacing[6] }}>
                Re:Value는 단순한 할인 플랫폼이 아닙니다.<br />
                모든 참여자가 혜택을 받는 지속가능한 생태계를 만들어요.
              </Typography>

              <Card 
                variant="flat" 
                style={{ 
                  background: gradients.socialSection,
                  padding: spacing[4],
                  textAlign: 'center'
                }}
              >
                <Typography variant="body2" weight="semibold" color="primary">
                  💚 사회적 가치 + 경제적 가치를 동시에!
                </Typography>
              </Card>
            </div>

            {/* 오른쪽: 혜택 목록 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
              {benefits.map((benefit, index) => (
                <BenefitItem
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  color={benefit.color}
                />
              ))}
            </div>
          </div>
        </Card>

        {/* 작동 방식 */}
        <div style={{ textAlign: 'center', marginBottom: spacing[12] }}>
          <Typography variant="h3" weight="bold" style={{ marginBottom: spacing[4] }}>
            이렇게 작동해요
          </Typography>
          <Typography variant="body1" color="textSecondary">
            간단한 4단계로 음식물 쓰레기를 줄이고 가치를 창출합니다
          </Typography>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: spacing[8],
            maxWidth: '64rem',
            margin: '0 auto'
          }}
        >
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 