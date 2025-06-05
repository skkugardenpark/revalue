import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ForceCSS from "@/components/ForceCSS";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Re:Value - 음식을 다시, 가치있게",
  description: "음식물 낭비를 줄이고 환경을 보호하는 ESG 플랫폼. 서프라이즈 박스로 합리적인 가격에 신선한 음식을 만나보세요.",
  keywords: ["음식물쓰레기", "환경보호", "ESG", "지속가능", "친환경", "음식", "할인", "서프라이즈박스"],
  authors: [{ name: "Re:Value Team" }],
  creator: "Re:Value",
  publisher: "Re:Value",
  metadataBase: new URL('https://revalue.kr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Re:Value - 음식을 다시, 가치있게",
    description: "음식물 낭비를 줄이고 환경을 보호하는 ESG 플랫폼",
    url: "https://revalue.kr",
    siteName: "Re:Value",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Re:Value - 음식을 다시, 가치있게",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Re:Value - 음식을 다시, 가치있게",
    description: "음식물 낭비를 줄이고 환경을 보호하는 ESG 플랫폼",
    images: ["/og-image.jpg"],
    creator: "@revalue_kr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
    other: {
      "naver-site-verification": "your-naver-verification-code",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        {/* GA4 스크립트 공간 */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
        
        {/* Microsoft Clarity 스크립트 공간 */}
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_CLARITY_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
              `,
            }}
          />
        )}
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Additional meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#4CAF50" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Re:Value" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* 강제 CSS 로딩 컴포넌트 - Vercel 배포 보장 */}
        <ForceCSS />
        
        {/* CSS 로딩 확인용 표시기 */}
        <div className="css-loading-test"></div>
        {children}
      </body>
    </html>
  );
}
