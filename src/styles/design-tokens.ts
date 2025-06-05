// Re:Value 디자인 시스템 토큰

export const colors = {
  // Primary Green Palette
  primary: {
    50: '#f0f9f0',
    100: '#dcfce7',
    400: '#4ade80',
    500: '#4CAF50', // Main brand color
    600: '#16a34a',
    700: '#15803d',
  },
  
  // Secondary Colors
  secondary: {
    orange: {
      50: '#fff7ed',
      100: '#fed7aa',
      500: '#f97316',
      600: '#ea580c',
    },
    blue: {
      100: '#dbeafe',
      500: '#3b82f6',
    },
    purple: {
      100: '#e9d5ff',
      500: '#8b5cf6',
    },
    red: {
      100: '#fee2e2',
      500: '#ef4444',
    }
  },
  
  // Neutral Palette
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  
  // Semantic Colors
  white: '#ffffff',
  black: '#000000',
} as const;

export const typography = {
  // Font Families
  fontFamily: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  
  // Font Sizes
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
  },
  
  // Font Weights
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  
  // Line Heights
  lineHeight: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },
} as const;

export const spacing = {
  // Spacing Scale (rem)
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.25rem',    // 4px
  base: '0.5rem',   // 8px
  lg: '0.75rem',    // 12px
  xl: '1rem',       // 16px
  '2xl': '1.5rem',  // 24px
  '3xl': '2rem',    // 32px
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
} as const;

export const gradients = {
  // Hero Section
  heroBackground: 'linear-gradient(135deg, #f0f9f0 0%, #e8f5e8 100%)',
  
  // Brand Gradients
  primaryGreen: 'linear-gradient(135deg, #4CAF50 0%, #81C784 100%)',
  orangeToGreen: 'linear-gradient(135deg, #f97316 0%, #4CAF50 100%)',
  
  // Section Backgrounds
  problemSection: 'linear-gradient(135deg, #fff7ed 0%, #fef3c7 100%)',
  socialSection: 'linear-gradient(135deg, #f0f9f0 0%, #dcf4dc 100%)',
  partnershipSection: 'linear-gradient(135deg, #fff7ed 0%, #f0f9f0 100%)',
  
  // Multi-color
  rainbow: 'linear-gradient(135deg, #f0f9f0 0%, #dbeafe 25%, #e9d5ff 50%, #fed7aa 75%, #f0f9f0 100%)',
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const animations = {
  // Durations
  duration: {
    fast: '0.15s',
    normal: '0.3s',
    slow: '0.5s',
    slower: '0.8s',
  },
  
  // Easing
  easing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const;

// Utility functions
export const getColor = (colorPath: string): string | undefined => {
  const keys = colorPath.split('.');
  let result: unknown = colors;
  
  for (const key of keys) {
    if (typeof result === 'object' && result !== null && key in result) {
      result = (result as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }
  
  return typeof result === 'string' ? result : undefined;
};

export const rem = (pixels: number) => `${pixels / 16}rem`;

export const px = (rem: number) => `${rem * 16}px`; 