# Re:Value - 음식을 다시, 가치있게 🌱

친환경 스타트업 Re:Value의 공식 브랜드 웹사이트입니다. 음식물 낭비를 줄이기 위한 ESG 앱을 소개하고, 사용자 사전등록 및 매장 제휴를 유도하는 마케팅 중심의 반응형 웹사이트입니다.

## 🌟 주요 특징

- **반응형 웹 디자인**: 모든 디바이스에서 최적화된 사용자 경험
- **미니멀 & 부드러운 UI**: 친환경 테마의 감성적인 디자인
- **스마트 네비게이션**: 스크롤 위치 감지 및 부드러운 섹션 이동
- **스크롤 애니메이션**: 부드러운 페이드 인/업 효과
- **SEO 최적화**: 검색엔진 최적화 및 소셜 미디어 연동
- **성능 최적화**: Next.js 14 + Tailwind CSS로 빠른 로딩

## 🎨 디자인 컨셉

- **주요 컬러**: #4CAF50 (그린), #F0F0F0 (라이트그레이)
- **아이콘 테마**: 잎사귀, 박스, 지구 등 친환경 요소
- **타이포그래피**: Inter 폰트 사용
- **스타일**: 라운드 형태, 그라데이션, 글래스 효과

## 📋 사이트 구조

### 네비게이션 바
- 스크롤 위치에 따른 현재 섹션 표시
- 부드러운 스크롤 이동 기능
- 모바일 반응형 햄버거 메뉴
- 스크롤 진행률 표시바

### 1. Hero 섹션
- 브랜드 슬로건 및 대표 이미지
- 앱 출시 알림 이메일 구독 폼
- 실시간 통계 정보

### 2. 문제 인식 섹션
- 음식물 쓰레기 통계와 심각성
- 인포그래픽 스타일 데이터 시각화
- 문제 해결책 제시

### 3. 서비스 소개 섹션
- Re:Value 서비스 소개
- 3단계 사용 흐름 (서프라이즈 박스 → 결제 → 수령)
- 주요 기능 소개

### 4. 사회적 가치 섹션
- ESG 경영 목표
- 푸드뱅크 연계 등 사회공헌 프로그램
- 실시간 임팩트 지표

### 5. 제휴 유도 섹션
- 매장 대상 제휴 설명
- 제휴 신청 폼 (모달)
- 성공 사례 및 혜택 소개

### 6. 푸터
- 팀 소개
- 회사 정보 및 연락처
- 뉴스레터 구독
- SNS 링크

## 🚀 기술 스택

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Font**: Inter (Google Fonts)
- **Icons**: Emoji 기반 친환경 아이콘
- **Analytics**: Google Analytics 4, Microsoft Clarity 연동 준비

## 📦 설치 및 실행

### 필수 요구사항
- Node.js 18.0 이상
- npm 또는 yarn

### 설치
```bash
# 저장소 클론
git clone https://github.com/your-repo/revalue-website.git
cd revalue-website

# 의존성 설치
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하세요.

### 빌드 및 배포
```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 🔧 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 변수들을 설정하세요:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Microsoft Clarity
NEXT_PUBLIC_CLARITY_ID=your-clarity-id

# 기타 API 키들
NEXT_PUBLIC_API_BASE_URL=https://api.revalue.kr
```

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── globals.css          # 전역 스타일 및 커스텀 애니메이션
│   ├── layout.tsx           # 레이아웃 및 메타데이터
│   └── page.tsx             # 메인 페이지
└── components/
    ├── Navigation.tsx       # 상단 네비게이션 바
    ├── Hero.tsx             # 히어로 섹션
    ├── Problem.tsx          # 문제 인식 섹션
    ├── Service.tsx          # 서비스 소개 섹션
    ├── SocialValue.tsx      # 사회적 가치 섹션
    ├── Partnership.tsx      # 제휴 유도 섹션
    └── Footer.tsx           # 푸터
```

## 🎯 배포 가이드

### Vercel 배포 (권장)
1. [Vercel](https://vercel.com)에 GitHub 저장소 연결
2. 환경 변수 설정
3. 자동 배포 완료

### 기타 플랫폼
- Netlify
- AWS Amplify
- Docker 배포

## 📝 개발 가이드

### 새로운 컴포넌트 추가
```tsx
'use client';

import { useEffect, useRef, useState } from 'react';

export default function NewComponent() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section ref={sectionRef} className="py-20">
      {/* 컴포넌트 내용 */}
    </section>
  );
}
```

### 커스텀 애니메이션 사용
```tsx
<div className={`transition-all duration-500 ${
  isVisible 
    ? 'opacity-100 translate-y-0' 
    : 'opacity-0 translate-y-8'
}`}>
  애니메이션 적용될 요소
</div>
```

## 🧪 테스트

```bash
# 린팅
npm run lint

# 타입 체크
npx tsc --noEmit
```

## 📊 성능 최적화

- **이미지 최적화**: Next.js Image 컴포넌트 사용 준비
- **폰트 최적화**: Google Fonts 사전 로드
- **코드 스플리팅**: 컴포넌트별 lazy loading
- **SEO**: 메타데이터 및 구조화된 데이터

## 🤝 기여 가이드

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 연락처

- **이메일**: hello@revalue.kr
- **전화**: 1588-0000
- **주소**: 서울시 강남구 테헤란로 123, 45층

## 📄 라이센스

이 프로젝트는 Re:Value의 소유입니다. 상업적 사용을 위해서는 별도 문의가 필요합니다.

---

**Re:Value** - 지속가능한 미래를 위한 음식물 쓰레기 해결 플랫폼 🌍💚
