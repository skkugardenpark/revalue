'use client';

import { useEffect, useRef, useState } from 'react';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import { colors, gradients, spacing, borderRadius } from '@/styles/design-tokens';

interface StatisticCardProps {
  icon: string;
  number: string;
  description: string;
  detail: string;
  delay?: number;
}

function StatisticCard({ icon, number, description, detail, delay = 0 }: StatisticCardProps) {
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
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'all 0.5s ease-out',
      }}
    >
      <div style={{ fontSize: '4rem', marginBottom: spacing[4] }}>{icon}</div>
      <Typography variant="h3" color="error" weight="bold" style={{ marginBottom: spacing[2] }}>
        {number}
      </Typography>
      <Typography variant="h6" weight="semibold" style={{ marginBottom: spacing[2] }}>
        {description}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {detail}
      </Typography>
    </Card>
  );
}

interface ProcessStepProps {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

function ProcessStep({ icon, title, description, bgColor }: ProcessStepProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: spacing[4] }}>
      <div 
        style={{
          width: '3rem',
          height: '3rem',
          backgroundColor: bgColor,
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

interface SolutionHighlightProps {
  icon: string;
  title: string;
}

function SolutionHighlight({ icon, title }: SolutionHighlightProps) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '2rem', marginBottom: spacing[2] }}>{icon}</div>
      <Typography variant="body2" weight="semibold">{title}</Typography>
    </div>
  );
}

export default function Problem() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const processSteps = [
    {
      icon: '🏪',
      title: '매장 운영',
      description: '신선한 음식 준비 및 진열',
      bgColor: colors.secondary.orange[100]
    },
    {
      icon: '⏰',
      title: '시간 경과',
      description: '판매 시간 종료 또는 유통기한 임박',
      bgColor: '#fef3c7'
    },
    {
      icon: '🗑️',
      title: '폐기 처리',
      description: '아직 먹을 수 있지만 버려지는 음식들',
      bgColor: colors.secondary.red[100]
    },
    {
      icon: '💸',
      title: '경제적 손실',
      description: '매장과 사회 전체의 비용 증가',
      bgColor: colors.gray[100]
    }
  ];

  const solutionHighlights = [
    { icon: '🌱', title: '환경 보호' },
    { icon: '💰', title: '경제적 이익' },
    { icon: '🤝', title: '사회적 가치' }
  ];

  return (
    <section ref={sectionRef} style={{ padding: `${spacing[20]} 0`, backgroundColor: colors.gray[50] }}>
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
              backgroundColor: colors.secondary.red[100],
              borderRadius: borderRadius.full,
              marginBottom: spacing[6]
            }}
          >
            <span style={{ fontSize: '2rem' }}>⚠️</span>
          </div>
          
          <Typography variant="h2" weight="bold" align="center" style={{ marginBottom: spacing[4] }}>
            우리가 놓치고 있는 문제
          </Typography>
          
          <Typography variant="body1" color="textSecondary" align="center" style={{ maxWidth: '48rem', margin: '0 auto' }}>
            매일 엄청난 양의 음식이 버려지고 있습니다.<br />
            이 문제를 해결하기 위해 Re:Value가 시작되었어요.
          </Typography>
        </div>

        {/* 통계 그리드 */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: spacing[8],
            marginBottom: spacing[16]
          }}
        >
          {statistics.map((stat, index) => (
            <StatisticCard
              key={index}
              icon={stat.icon}
              number={stat.number}
              description={stat.description}
              detail={stat.detail}
              delay={index * 200}
            />
          ))}
        </div>

        {/* 시각화 영역 */}
        <Card variant="default" size="lg">
          <div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: spacing[12],
              alignItems: 'center'
            }}
          >
            {/* 왼쪽: 문제 시각화 */}
            <div>
              <Typography variant="h3" weight="bold" style={{ marginBottom: spacing[6] }}>
                음식물 쓰레기의 악순환
              </Typography>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
                {processSteps.map((step, index) => (
                  <ProcessStep
                    key={index}
                    icon={step.icon}
                    title={step.title}
                    description={step.description}
                    bgColor={step.bgColor}
                  />
                ))}
              </div>
            </div>

            {/* 오른쪽: 해결책 제시 */}
            <Card 
              variant="flat" 
              style={{ 
                background: gradients.socialSection,
                textAlign: 'center',
                padding: spacing[8]
              }}
            >
              <div 
                style={{
                  width: '5rem',
                  height: '5rem',
                  backgroundColor: colors.primary[500],
                  borderRadius: borderRadius.full,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  marginBottom: spacing[6]
                }}
              >
                <span style={{ fontSize: '3rem', color: colors.white }}>💡</span>
              </div>
              
              <Typography variant="h4" weight="bold" style={{ marginBottom: spacing[6] }}>
                Re:Value의 해답
              </Typography>
              
              <Typography variant="body1" color="textSecondary" style={{ marginBottom: spacing[8] }}>
                버려질 음식들을 합리적인 가격에 소비자와 연결하여<br />
                <strong style={{ color: colors.primary[600] }}>환경도 보호하고 경제적 가치도 창출</strong>하는<br />
                상생의 플랫폼을 제공합니다.
              </Typography>

              <div 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  gap: spacing[8],
                  fontSize: '0.875rem'
                }}
              >
                {solutionHighlights.map((highlight, index) => (
                  <SolutionHighlight
                    key={index}
                    icon={highlight.icon}
                    title={highlight.title}
                  />
                ))}
              </div>
            </Card>
          </div>
        </Card>
      </div>
    </section>
  );
} 