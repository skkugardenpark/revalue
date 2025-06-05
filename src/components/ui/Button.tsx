import React from 'react';
import { colors, borderRadius, typography, animations } from '@/styles/design-tokens';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  onClick,
  type = 'button',
  className = '',
  style = {},
  ...props
}) => {
  // Variant styles
  const variantStyles = {
    primary: {
      background: colors.primary[500],
      color: colors.white,
      border: 'none',
      hoverBackground: colors.primary[600],
      activeBackground: colors.primary[700],
      boxShadow: `0 4px 6px -1px rgba(76, 175, 80, 0.3)`,
    },
    secondary: {
      background: colors.secondary.orange[500],
      color: colors.white,
      border: 'none',
      hoverBackground: colors.secondary.orange[600],
      activeBackground: colors.secondary.orange[600],
      boxShadow: `0 4px 6px -1px rgba(249, 115, 22, 0.3)`,
    },
    outline: {
      background: 'transparent',
      color: colors.primary[500],
      border: `2px solid ${colors.primary[500]}`,
      hoverBackground: colors.primary[50],
      activeBackground: colors.primary[100],
      boxShadow: 'none',
    },
    ghost: {
      background: 'transparent',
      color: colors.primary[500],
      border: 'none',
      hoverBackground: colors.primary[50],
      activeBackground: colors.primary[100],
      boxShadow: 'none',
    },
    danger: {
      background: colors.secondary.red[500],
      color: colors.white,
      border: 'none',
      hoverBackground: '#dc2626',
      activeBackground: '#b91c1c',
      boxShadow: `0 4px 6px -1px rgba(239, 68, 68, 0.3)`,
    },
  };

  // Size styles
  const sizeStyles = {
    sm: {
      padding: '0.5rem 1rem',
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.medium,
      borderRadius: borderRadius.base,
    },
    md: {
      padding: '0.75rem 1.5rem',
      fontSize: typography.fontSize.base,
      fontWeight: typography.fontWeight.semibold,
      borderRadius: borderRadius.lg,
    },
    lg: {
      padding: '1rem 2rem',
      fontSize: typography.fontSize.lg,
      fontWeight: typography.fontWeight.semibold,
      borderRadius: borderRadius.xl,
    },
    xl: {
      padding: '1.25rem 2.5rem',
      fontSize: typography.fontSize.xl,
      fontWeight: typography.fontWeight.bold,
      borderRadius: borderRadius.xl,
    },
  };

  const currentVariant = variantStyles[variant];
  const currentSize = sizeStyles[size];

  const buttonStyles: React.CSSProperties = {
    // Base styles
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontFamily: typography.fontFamily.primary,
    lineHeight: typography.lineHeight.normal,
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    transition: `all ${animations.duration.normal} ${animations.easing.easeOut}`,
    outline: 'none',
    textDecoration: 'none',
    userSelect: 'none',
    width: fullWidth ? '100%' : 'auto',
    
    // Variant styles
    background: disabled ? colors.gray[100] : currentVariant.background,
    color: disabled ? colors.gray[400] : currentVariant.color,
    border: disabled ? `1px solid ${colors.gray[100]}` : currentVariant.border,
    boxShadow: disabled ? 'none' : currentVariant.boxShadow,
    
    // Size styles
    ...currentSize,
    
    // Custom styles
    ...style,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading) {
      e.currentTarget.style.background = currentVariant.hoverBackground;
      e.currentTarget.style.transform = 'translateY(-1px) scale(1.02)';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading) {
      e.currentTarget.style.background = currentVariant.background;
      e.currentTarget.style.transform = 'translateY(0) scale(1)';
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading) {
      e.currentTarget.style.background = currentVariant.activeBackground;
      e.currentTarget.style.transform = 'translateY(0) scale(0.98)';
    }
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading) {
      e.currentTarget.style.background = currentVariant.hoverBackground;
      e.currentTarget.style.transform = 'translateY(-1px) scale(1.02)';
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className}`}
      style={buttonStyles}
      disabled={disabled || loading}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      {...props}
    >
      {loading && (
        <div 
          style={{
            width: '1rem',
            height: '1rem',
            border: '2px solid transparent',
            borderTop: `2px solid ${currentVariant.color}`,
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          }}
        />
      )}
      {leftIcon && !loading && leftIcon}
      {children}
      {rightIcon && !loading && rightIcon}
    </button>
  );
};

export default Button; 