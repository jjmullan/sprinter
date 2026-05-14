import type { Metadata } from 'next';

/**
 * 인덱싱이 불필요한 페이지에서 재정의
 * @example 스프린트 목록, 스프린트 이력 등
 */
export const privateMetadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};
