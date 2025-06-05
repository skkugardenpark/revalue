'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Typography from '@/components/ui/Typography';
import { colors, gradients, spacing, borderRadius } from '@/styles/design-tokens';

interface AppUIImageProps {
  className?: string;
}

function AppUIImage({ className }: AppUIImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (imageError) {
    return (
      <div 
        className={`flex items-center justify-center ${className}`}
        style={{
          width: '400px',
          height: '600px',
          background: gradients.heroBackground,
          border: `2px solid ${colors.primary[500]}`,
          borderRadius: borderRadius['3xl']
        }}
      >
        <div className="text-center">
          <div style={{ fontSize: '4rem', marginBottom: spacing[4] }}>📱</div>
          <Typography variant="h6" color="primary" weight="semibold">
            Re:Value 앱 UI
          </Typography>
          <Typography variant="body2" color="textSecondary">
            곧 만나보세요!
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
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
    </div>
  );
}

interface StatCardProps {
  icon: string;
  number: string;
  label: string;
  delay?: number;
}

function StatCard({ icon, number, label, delay = 0 }: StatCardProps) {
  return (
    <Card 
      size="md" 
      variant="default"
      style={{
        textAlign: 'center',
        animation: `slideUp 0.8s ease-out ${delay}s both`
      }}
    >
      <div style={{ fontSize: '2rem', marginBottom: spacing[2] }}>{icon}</div>
      <Typography variant="h5" color="primary" weight="bold" style={{ marginBottom: spacing[1] }}>
        {number}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {label}
      </Typography>
    </Card>
  );
}

interface EmailFormProps {
  onSubmit: (email: string) => void;
  isSubscribed: boolean;
}

function EmailForm({ onSubmit, isSubscribed }: EmailFormProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <Card variant="flat" style={{ background: gradients.heroBackground }}>
        <div style={{ 
          textAlign: 'center', 
          padding: spacing[4],
          color: colors.primary[600],
          fontWeight: '600'
        }}>
          ✅ 구독 완료! 베타 출시 시 가장 먼저 알려드릴게요.
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <Typography variant="h5" weight="semibold" style={{ marginBottom: spacing[4] }}>
        🔔 베타 출시 알림받기
      </Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: spacing[2] }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일 주소를 입력하세요"
          required
          style={{
            flex: 1,
            padding: spacing[3],
            border: `2px solid ${colors.gray[100]}`,
            borderRadius: borderRadius.base,
            outline: 'none',
            fontSize: '1rem',
            fontFamily: 'inherit',
          }}
          onFocus={(e) => e.target.style.borderColor = colors.primary[500]}
          onBlur={(e) => e.target.style.borderColor = colors.gray[100]}
        />
        <Button type="submit" variant="primary" size="md">
          알림받기
        </Button>
      </form>
    </Card>
  );
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
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

  const handleEmailSubmit = (email: string) => {
    // TODO: 실제 이메일 구독 API 연결
    console.log('Email subscription:', email);
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
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
        background: gradients.heroBackground,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: spacing[8],
        paddingTop: spacing[24]
      }}
    >
      <div 
        className="container-custom" 
        style={{ 
          maxWidth: '80rem', 
          margin: '0 auto', 
          padding: `0 ${spacing[4]}` 
        }}
      >
        <div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: spacing[12], 
            alignItems: 'center' 
          }}
        >
          {/* 왼쪽 콘텐츠 */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* 메인 헤딩 */}
            <div style={{ marginBottom: spacing[8] }}>
              <Typography variant="h1" weight="bold" style={{ marginBottom: spacing[4] }}>
                음식을 다시, <span style={{ color: colors.primary[500] }}>가치있게</span>
              </Typography>
              
              <div 
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  background: gradients.primaryGreen,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: spacing[6]
                }}
              >
                Re:Value
              </div>
              
              <Typography variant="body1" color="textSecondary" style={{ maxWidth: '600px' }}>
                매일 버려지는 음식들에게 새로운 기회를 주세요.<br />
                서프라이즈 박스로 만나는 특별한 할인과 지구를 위한 작은 실천.
              </Typography>
            </div>

            {/* 이메일 구독 폼 */}
            <div style={{ marginBottom: spacing[8] }}>
              <EmailForm onSubmit={handleEmailSubmit} isSubscribed={isSubscribed} />
            </div>

            {/* 통계 카드 */}
            <div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
                gap: spacing[6] 
              }}
            >
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  icon={stat.icon}
                  number={stat.number}
                  label={stat.label}
                  delay={index * 0.2}
                />
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