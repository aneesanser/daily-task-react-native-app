// Theme constants matching the design
export const COLORS = {
  primary: '#1BAC4B',       // Main green color
  primaryLight: '#E8F5E9',  // Light green background
  primaryDark: '#158C3D',   // Darker green
  white: '#FFFFFF',
  black: '#1A1A2E',
  gray: '#6B7280',
  grayLight: '#F3F4F6',
  grayMedium: '#9CA3AF',
  grayDark: '#374151',
  border: '#E5E7EB',
  background: '#F8F9FA',
  card: '#FFFFFF',
  shadow: '#000000',
  orange: '#F59E0B',
  red: '#EF4444',
  blue: '#3B82F6',
  teal: '#0D9488',
  yellow: '#FBBF24',
};

export const FONTS = {
  bold: 'System',
  semiBold: 'System',
  medium: 'System',
  regular: 'System',
  light: 'System',
};

export const SIZES = {
  // Global sizes
  base: 8,
  font: 14,
  radius: 16,
  padding: 16,
  paddingLarge: 24,

  // Font sizes
  largeTitle: 32,
  h1: 28,
  h2: 22,
  h3: 18,
  h4: 16,
  body1: 15,
  body2: 14,
  body3: 13,
  body4: 12,
  caption: 11,
};

export const SHADOWS = {
  small: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  large: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
};

