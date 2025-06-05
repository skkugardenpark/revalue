import React from 'react';
import { colors, shadows, borderRadius, animations } from '@/styles/design-tokens';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined' | 'flat';
  size?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  size = 'md',
  hover = true,
  onClick,
  style = {},
  ...props
}) => {
  // Variant styles
  const variantStyles = {
    default: {
      background: colors.white,
      boxShadow: shadows.lg,
      border: 'none',
    },
    elevated: {
      background: colors.white,
      boxShadow: shadows.xl,
      border: 'none',
    },
    outlined: {
      background: colors.white,
      boxShadow: shadows.sm,
      border: `1px solid ${colors.gray[100]}`,
    },
    flat: {
      background: colors.white,
      boxShadow: 'none',
      border: 'none',
    },
  };

  // Size styles
  const sizeStyles = {
    sm: {
      padding: '1rem',
      borderRadius: borderRadius.lg,
    },
    md: {
      padding: '1.5rem',
      borderRadius: borderRadius.xl,
    },
    lg: {
      padding: '2rem',
      borderRadius: borderRadius['2xl'],
    },
  };

  // Hover styles
  const hoverStyles = hover ? {
    transition: `all ${animations.duration.normal} ${animations.easing.easeOut}`,
    cursor: onClick ? 'pointer' : 'default',
  } : {};

  const cardStyles: React.CSSProperties = {
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...hoverStyles,
    ...style,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hover) {
      const element = e.currentTarget;
      element.style.transform = 'translateY(-4px)';
      element.style.boxShadow = shadows['2xl'];
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hover) {
      const element = e.currentTarget;
      element.style.transform = 'translateY(0)';
      element.style.boxShadow = variantStyles[variant].boxShadow;
    }
  };

  return (
    <div
      className={`card ${className}`}
      style={cardStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card; 