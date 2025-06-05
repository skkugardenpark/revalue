import React from 'react';
import { colors, typography } from '@/styles/design-tokens';

interface TypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'overline';
  color?: 'primary' | 'secondary' | 'text' | 'textSecondary' | 'error' | 'warning' | 'success';
  align?: 'left' | 'center' | 'right' | 'justify';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  className?: string;
  style?: React.CSSProperties;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body1',
  color = 'text',
  align = 'left',
  weight,
  className = '',
  style = {},
  ...props
}) => {
  // Color styles
  const colorStyles = {
    primary: colors.primary[500],
    secondary: colors.secondary.orange[500],
    text: colors.gray[800],
    textSecondary: colors.gray[500],
    error: colors.secondary.red[500],
    warning: colors.secondary.orange[500],
    success: colors.primary[500],
  };

  const getTypographyStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      fontFamily: typography.fontFamily.primary,
      color: colorStyles[color],
      textAlign: align,
      margin: 0,
      ...style,
    };

    const variantStyles: Record<string, React.CSSProperties> = {
      h1: {
        fontSize: typography.fontSize['5xl'],
        fontWeight: weight ? typography.fontWeight[weight] : typography.fontWeight.bold,
        lineHeight: typography.lineHeight.tight,
        marginBottom: '1rem',
      },
      h2: {
        fontSize: typography.fontSize['4xl'],
        fontWeight: weight ? typography.fontWeight[weight] : typography.fontWeight.bold,
        lineHeight: typography.lineHeight.tight,
        marginBottom: '0.875rem',
      },
      h3: {
        fontSize: typography.fontSize['3xl'],
        fontWeight: weight ? typography.fontWeight[weight] : typography.fontWeight.semibold,
        lineHeight: typography.lineHeight.tight,
        marginBottom: '0.75rem',
      },
      h4: {
        fontSize: typography.fontSize['2xl'],
        fontWeight: weight ? typography.fontWeight[weight] : typography.fontWeight.semibold,
        lineHeight: typography.lineHeight.normal,
        marginBottom: '0.625rem',
      },
      h5: {
        fontSize: typography.fontSize.xl,
        fontWeight: weight ? typography.fontWeight[weight] : typography.fontWeight.semibold,
        lineHeight: typography.lineHeight.normal,
        marginBottom: '0.5rem',
      },
      h6: {
        fontSize: typography.fontSize.lg,
        fontWeight: weight ? typography.fontWeight[weight] : typography.fontWeight.medium,
        lineHeight: typography.lineHeight.normal,
        marginBottom: '0.5rem',
      },
      body1: {
        fontSize: typography.fontSize.base,
        fontWeight: weight ? typography.fontWeight[weight] : typography.fontWeight.normal,
        lineHeight: typography.lineHeight.relaxed,
      },
      body2: {
        fontSize: typography.fontSize.sm,
        fontWeight: weight ? typography.fontWeight[weight] : typography.fontWeight.normal,
        lineHeight: typography.lineHeight.normal,
      },
      caption: {
        fontSize: typography.fontSize.xs,
        fontWeight: weight ? typography.fontWeight[weight] : typography.fontWeight.normal,
        lineHeight: typography.lineHeight.normal,
      },
      overline: {
        fontSize: typography.fontSize.xs,
        fontWeight: weight ? typography.fontWeight[weight] : typography.fontWeight.semibold,
        lineHeight: typography.lineHeight.normal,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
      },
    };

    return { ...baseStyles, ...variantStyles[variant] };
  };

  const commonProps = {
    className: `typography typography-${variant} ${className}`,
    style: getTypographyStyles(),
    ...props,
  };

  // Render different HTML elements based on variant
  switch (variant) {
    case 'h1':
      return <h1 {...commonProps}>{children}</h1>;
    case 'h2':
      return <h2 {...commonProps}>{children}</h2>;
    case 'h3':
      return <h3 {...commonProps}>{children}</h3>;
    case 'h4':
      return <h4 {...commonProps}>{children}</h4>;
    case 'h5':
      return <h5 {...commonProps}>{children}</h5>;
    case 'h6':
      return <h6 {...commonProps}>{children}</h6>;
    case 'caption':
    case 'overline':
      return <span {...commonProps}>{children}</span>;
    case 'body1':
    case 'body2':
    default:
      return <p {...commonProps}>{children}</p>;
  }
};

export default Typography; 