# Styling System

## 🎨 Design Philosophy

### Spiritual Aesthetics

My Gita's styling system is built around creating a serene, respectful, and spiritually enriching visual experience that honors the sacred nature of the Bhagavad Gita while providing modern usability.

### Core Design Principles

1. **Minimalist Elegance**: Clean, uncluttered interfaces that focus on content
2. **Spiritual Harmony**: Colors and typography that evoke peace and contemplation
3. **Cultural Respect**: Visual elements that honor Indian spiritual traditions
4. **Accessibility First**: Designs that work for all users, including those with disabilities
5. **Responsive Beauty**: Layouts that adapt gracefully across different screen sizes

## 🌈 Color System

### Current Theme Colors

```typescript
// constants/Colors.ts (Current)
export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: "#0a7ea4",
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: "#0a7ea4",
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: "#fff",
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: "#fff",
  },
};
```

### Planned Spiritual Color Palette

#### Sunrise Theme

```typescript
const SunriseTheme = {
  primary: "#FF6B35", // Vibrant orange
  secondary: "#F7931E", // Golden orange
  accent: "#FFD23F", // Warm yellow
  background: "#FFF8E7", // Cream white
  surface: "#FFEFDB", // Light peach
  text: "#2D1810", // Dark brown
  textSecondary: "#8B4513", // Medium brown
  success: "#4CAF50", // Green for completion
  warning: "#FF9800", // Orange for attention
  error: "#F44336", // Red for errors
};
```

#### Lotus Pond Theme

```typescript
const LotusPondTheme = {
  primary: "#4A90A4", // Serene blue
  secondary: "#7FB069", // Sage green
  accent: "#F4A261", // Lotus orange
  background: "#F8FFFE", // Pure white
  surface: "#E8F4F8", // Light blue-green
  text: "#2A3D45", // Dark teal
  textSecondary: "#5A6C73", // Medium teal
  success: "#7FB069", // Sage green
  warning: "#F4A261", // Lotus orange
  error: "#E76F51", // Muted red
};
```

#### Twilight Theme

```typescript
const TwilightTheme = {
  primary: "#6A4C93", // Deep purple
  secondary: "#9B5DE5", // Medium purple
  accent: "#F15BB5", // Pink accent
  background: "#1A1625", // Dark purple
  surface: "#2D2438", // Medium dark purple
  text: "#E8E3F0", // Light purple-white
  textSecondary: "#B8A9C9", // Medium purple-gray
  success: "#00F5FF", // Cyan
  warning: "#FEE75C", // Yellow
  error: "#FF6B6B", // Soft red
};
```

#### Sacred Fire Theme

```typescript
const SacredFireTheme = {
  primary: "#C73E1D", // Deep red
  secondary: "#F2A65A", // Warm orange
  accent: "#FFD23F", // Golden yellow
  background: "#FFF5F0", // Warm white
  surface: "#FFEBE0", // Light orange
  text: "#2C1810", // Dark brown
  textSecondary: "#8B4513", // Medium brown
  success: "#4CAF50", // Green
  warning: "#FF9800", // Orange
  error: "#D32F2F", // Red
};
```

### Color Usage Guidelines

#### Primary Colors

- **Primary**: Main brand color, used for key actions and highlights
- **Secondary**: Supporting color for secondary actions and accents
- **Accent**: Attention-grabbing color for special elements and celebrations

#### Semantic Colors

- **Success**: Completion, achievements, positive feedback
- **Warning**: Caution, important information, gentle alerts
- **Error**: Mistakes, validation issues, critical alerts

#### Background Hierarchy

- **Background**: Main app background
- **Surface**: Card backgrounds, elevated elements
- **Text**: Primary text color
- **TextSecondary**: Supporting text, less important information

## 📝 Typography System

### Font Families

#### Sanskrit Text

```typescript
const SanskritFonts = {
  devanagari: {
    family: "Noto Sans Devanagari",
    weights: ["400", "500", "600", "700"],
    sizes: {
      small: 16,
      medium: 20,
      large: 24,
      xlarge: 28,
    },
  },
  romanized: {
    family: "Noto Serif",
    weights: ["400", "500", "600"],
    sizes: {
      small: 14,
      medium: 18,
      large: 22,
      xlarge: 26,
    },
  },
};
```

#### English Text

```typescript
const EnglishFonts = {
  primary: {
    family: "Inter",
    weights: ["300", "400", "500", "600", "700"],
    lineHeight: 1.5,
  },
  reading: {
    family: "Crimson Text",
    weights: ["400", "600"],
    lineHeight: 1.6,
  },
  display: {
    family: "Playfair Display",
    weights: ["400", "600", "700"],
    lineHeight: 1.2,
  },
};
```

### Typography Scale

```typescript
const TypographyScale = {
  // Display text
  hero: {
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 38,
    letterSpacing: -0.5,
  },
  title1: {
    fontSize: 28,
    fontWeight: "600",
    lineHeight: 34,
    letterSpacing: -0.3,
  },
  title2: {
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 30,
    letterSpacing: -0.2,
  },
  title3: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 26,
    letterSpacing: 0,
  },

  // Body text
  body1: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    letterSpacing: 0,
  },
  body2: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0.1,
  },

  // UI text
  button: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  caption: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
    letterSpacing: 0.4,
  },

  // Sanskrit text
  sanskrit: {
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 32,
    letterSpacing: 0.2,
  },
};
```

## 📐 Spacing System

### Spacing Scale

```typescript
const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
};

// Usage examples
const ComponentStyles = {
  container: {
    padding: Spacing.md,
    marginBottom: Spacing.lg,
  },
  card: {
    margin: Spacing.sm,
    padding: Spacing.md,
    borderRadius: Spacing.sm,
  },
};
```

### Layout Guidelines

- **Minimum touch target**: 44px (iOS) / 48px (Android)
- **Content margins**: 16px minimum from screen edges
- **Card spacing**: 8px between cards, 16px internal padding
- **Section spacing**: 24px between major sections

## 🎭 Component Styling Patterns

### Themed Components

```typescript
// Example: ThemedText component styling
const createThemedStyles = (colors: ColorScheme) =>
  StyleSheet.create({
    default: {
      fontSize: 16,
      lineHeight: 24,
      color: colors.text,
      fontFamily: "Inter-Regular",
    },
    title: {
      fontSize: 32,
      fontWeight: "bold",
      lineHeight: 38,
      color: colors.text,
      fontFamily: "Playfair-Display-Bold",
    },
    subtitle: {
      fontSize: 20,
      fontWeight: "600",
      lineHeight: 26,
      color: colors.text,
      fontFamily: "Inter-SemiBold",
    },
    sanskrit: {
      fontSize: 20,
      lineHeight: 32,
      color: colors.primary,
      fontFamily: "Noto-Sans-Devanagari",
    },
  });
```

### Card Components

```typescript
const CardStyles = StyleSheet.create({
  base: {
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  verse: {
    borderRadius: 16,
    padding: 20,
    marginVertical: 12,
    // Gradient background support
  },
  chapter: {
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 8,
    aspectRatio: 1.2,
  },
});
```

### Animation Styles

```typescript
const AnimationStyles = {
  gentle: {
    duration: 300,
    easing: "ease-out",
  },
  celebration: {
    duration: 800,
    easing: "spring",
    damping: 0.8,
  },
  micro: {
    duration: 150,
    easing: "ease-in-out",
  },
};
```

## 🎨 Tailwind CSS Integration

### Current Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Planned Spiritual Design Tokens

```javascript
// Enhanced tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Sunrise theme
        sunrise: {
          50: "#FFF8E7",
          100: "#FFEFDB",
          200: "#FFD23F",
          300: "#F7931E",
          400: "#FF6B35",
          500: "#E55A2B",
          600: "#CC4A21",
          700: "#B33A17",
          800: "#992A0D",
          900: "#801A03",
        },
        // Lotus theme
        lotus: {
          50: "#F8FFFE",
          100: "#E8F4F8",
          200: "#7FB069",
          300: "#4A90A4",
          400: "#F4A261",
          500: "#3A7A8A",
          600: "#2A6470",
          700: "#1A4E56",
          800: "#0A383C",
          900: "#002222",
        },
        // Sacred colors
        sacred: {
          saffron: "#FF6B35",
          lotus: "#F4A261",
          peace: "#4A90A4",
          wisdom: "#6A4C93",
          fire: "#C73E1D",
        },
      },
      fontFamily: {
        sanskrit: ["Noto Sans Devanagari"],
        reading: ["Crimson Text"],
        display: ["Playfair Display"],
        body: ["Inter"],
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        xxl: "48px",
        xxxl: "64px",
      },
      borderRadius: {
        spiritual: "12px",
        verse: "16px",
        gentle: "8px",
      },
      animation: {
        "gentle-fade": "fadeIn 300ms ease-out",
        celebration: "bounce 800ms ease-out",
        meditation: "pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
```

### Utility Classes for Spiritual Design

```typescript
// Custom utility classes
const SpiritualUtilities = {
  // Containers
  "verse-container":
    "bg-white dark:bg-gray-900 rounded-verse p-lg shadow-gentle",
  "chapter-card": "bg-surface rounded-spiritual p-md shadow-soft",
  "sacred-text": "font-sanskrit text-sacred-saffron leading-relaxed",

  // Interactions
  "gentle-press": "active:scale-95 transition-transform duration-150",
  "meditation-pulse": "animate-meditation",
  "celebration-bounce": "animate-celebration",

  // Layouts
  "spiritual-spacing": "space-y-lg px-md",
  "verse-layout": "flex flex-col space-y-md p-lg",
  "dashboard-grid": "grid grid-cols-2 gap-md p-md",
};
```

## 🌙 Dark Mode Support

### Theme Switching Implementation

```typescript
// hooks/useTheme.ts
export const useTheme = () => {
  const colorScheme = useColorScheme();
  const [selectedTheme, setSelectedTheme] = useState<ThemeType>("auto");

  const currentTheme = useMemo(() => {
    if (selectedTheme === "auto") {
      return colorScheme === "dark" ? "twilight" : "sunrise";
    }
    return selectedTheme;
  }, [colorScheme, selectedTheme]);

  return {
    currentTheme,
    setTheme: setSelectedTheme,
    colors: ThemeColors[currentTheme],
    isDark: ["twilight", "night"].includes(currentTheme),
  };
};
```

### Dark Mode Optimizations

- **Image assets**: Separate light/dark variants for illustrations
- **Shadows**: Reduced shadows in dark mode
- **Contrast**: Higher contrast ratios for accessibility
- **Colors**: Warmer tones for better night reading

## 📱 Responsive Design

### Breakpoints

```typescript
const Breakpoints = {
  phone: 0,
  tablet: 768,
  desktop: 1024,
};

// Usage with Tailwind
const ResponsiveStyles = {
  container: "px-4 md:px-8 lg:px-12",
  text: "text-base md:text-lg lg:text-xl",
  grid: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
};
```

### Platform Adaptations

- **iOS**: Rounded corners, blur effects, SF Symbols
- **Android**: Material Design elevation, ripple effects
- **Web**: Hover states, keyboard navigation

## ♿ Accessibility Considerations

### Color Contrast

- **WCAG AA compliance**: Minimum 4.5:1 contrast ratio
- **High contrast mode**: Alternative color schemes
- **Color blindness**: Sufficient contrast without relying only on color

### Typography Accessibility

- **Scalable fonts**: Support for system font scaling
- **Readable fonts**: High legibility for Sanskrit and English text
- **Line spacing**: Adequate spacing for easy reading

### Interactive Elements

- **Touch targets**: Minimum 44px touch areas
- **Focus indicators**: Clear focus states for keyboard navigation
- **Screen reader support**: Proper labeling and descriptions

---

_This styling system creates a cohesive, beautiful, and accessible visual experience that honors the spiritual nature of the Bhagavad Gita while providing modern usability and customization options._
