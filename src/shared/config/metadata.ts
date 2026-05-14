import { SERVICE_URL } from '@shared/lib/url';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: '스프린터',
    template: '%s | 스프린터',
  },
  description: '목표를 세우고 매일 달성해나가는 우리들의 성장일지',
  keywords: ['스프린터', 'Sprinter', '목표달성', '목표', '습관', '작심삼일', 'OKR'],
  authors: [{ name: 'jjmullan', url: 'https://github.com/jjmullan' }],
  creator: 'jjmullan',
  applicationName: '스프린터',
  referrer: 'origin-when-cross-origin', // 같은 출처에는 전체 URL, 다른 출처는 도메인 정보만 전달
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'productivity',

  /* OG */
  metadataBase: new URL(SERVICE_URL),
  openGraph: {
    type: 'website',
    url: SERVICE_URL,
    siteName: '스프린터',
    title: '스프린터',
    description: '목표를 세우고 매일 달성해나가는 우리들의 성장일지',
    locale: 'ko_KR',
    // images: [
    //   {
    //     url: '/og-image.png', // metadataBase 기준 상대경로 가능
    //     width: 1200,
    //     height: 630,
    //     alt: '스프린터 — 성장일지 서비스',
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image', // 'summary' | 'summary_large_image' | 'app' | 'player'
    title: '스프린터',
    description: '목표를 세우고 매일 달성해나가는 우리들의 성장일지',
    // creator: '@username',
    // images: ['/og-image.png'],
  },

  /* 검색 엔진 제어 */
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  /* 표준 URL 및 다국어 지원 */
  alternates: {
    canonical: SERVICE_URL, // 중복 페이지 방지용 표준 URL
    // languages: {
    //   'ko-KR': 'https://sprinter.app/ko',
    //   'en-US': 'https://sprinter.app/en',
    // },
  },
};
