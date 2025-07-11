# Current Technical Architecture

## 🏗️ Technology Stack

### Core Framework

- **React Native 0.79.5**: Cross-platform mobile development
- **Expo SDK 53**: Development platform and build tools
- **TypeScript 5.8.3**: Type-safe JavaScript development
- **Expo Router 5.1.3**: File-based navigation system

### Styling & UI

- **NativeWind 4.1.23**: Tailwind CSS for React Native
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **React Native Reanimated 3.17.4**: Advanced animations
- **Expo Symbols**: Native icon system (SF Symbols on iOS, Material Icons on Android)

### Navigation & UX

- **React Navigation 7.x**: Navigation library
- **Expo Haptics**: Tactile feedback
- **Expo Status Bar**: Status bar management
- **React Native Safe Area Context**: Safe area handling

### Development Tools

- **ESLint 9.25.0**: Code linting
- **Prettier with Tailwind Plugin**: Code formatting
- **Babel**: JavaScript compilation
- **Metro**: React Native bundler

## 📁 Current Project Structure

```
mygita/
├── app/                          # Main application code (Expo Router)
│   ├── _layout.tsx              # Root layout with theme provider
│   ├── (tabs)/                  # Tab-based navigation group
│   │   ├── _layout.tsx         # Tab navigation layout
│   │   ├── index.tsx           # Home screen (currently placeholder)
│   │   └── explore.tsx         # Explore screen (demo content)
│   └── +not-found.tsx          # 404 error screen
├── components/                   # Reusable UI components
│   ├── ui/                      # Platform-specific UI components
│   │   ├── IconSymbol.tsx      # Cross-platform icon system
│   │   └── TabBarBackground.tsx # Tab bar styling
│   ├── Collapsible.tsx         # Expandable content sections
│   ├── ExternalLink.tsx        # External link handler
│   ├── HelloWave.tsx           # Animated wave component
│   ├── HapticTab.tsx           # Tab with haptic feedback
│   ├── ParallaxScrollView.tsx  # Parallax scrolling container
│   ├── ThemedText.tsx          # Theme-aware text component
│   └── ThemedView.tsx          # Theme-aware view component
├── constants/                    # App constants
│   └── Colors.ts               # Color scheme definitions
├── hooks/                       # Custom React hooks
│   ├── useColorScheme.ts       # Color scheme detection
│   ├── useColorScheme.web.ts   # Web-specific color scheme
│   └── useThemeColor.ts        # Theme color utility
├── styles/                      # Global styles
│   └── global.css              # Tailwind CSS imports
├── assets/                      # Static assets
│   ├── fonts/                  # Custom fonts
│   └── images/                 # App images and icons
└── scripts/                     # Development scripts
    └── reset-project.js        # Project reset utility
```

## 🎨 Current Theme System

### Color Architecture

The app uses a sophisticated theme system supporting light and dark modes:

```typescript
// From constants/Colors.ts
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

### Theme Implementation

- **useColorScheme**: Detects system color scheme preference
- **useThemeColor**: Provides theme-aware color selection
- **ThemedText/ThemedView**: Components that automatically adapt to themes

## 🧩 Current Component Architecture

### Base Components

1. **ThemedText**: Typography with multiple variants (title, subtitle, link, etc.)
2. **ThemedView**: Container that adapts to theme colors
3. **IconSymbol**: Cross-platform icon system using SF Symbols/Material Icons

### Layout Components

1. **ParallaxScrollView**: Animated scrolling with parallax header
2. **Collapsible**: Expandable content sections with smooth animations
3. **HapticTab**: Tab navigation with tactile feedback

### Utility Components

1. **ExternalLink**: Handles external URLs with in-app browser
2. **HelloWave**: Example animated component using Reanimated

## 🛣️ Current Navigation Structure

### File-Based Routing (Expo Router)

- **Root Layout** (`app/_layout.tsx`): Theme provider and font loading
- **Tab Layout** (`app/(tabs)/_layout.tsx`): Bottom tab navigation
- **Home Screen** (`app/(tabs)/index.tsx`): Main landing page
- **Explore Screen** (`app/(tabs)/explore.tsx`): Feature demonstration

### Navigation Features

- Bottom tab navigation with haptic feedback
- Cross-platform tab bar styling
- Automatic dark/light mode support
- Type-safe routing with TypeScript

## 🔧 Development Configuration

### Build Configuration

- **app.json**: Expo configuration with splash screen, icons, and platform settings
- **babel.config.js**: Babel configuration for NativeWind and Expo
- **metro.config.js**: Metro bundler configuration for CSS processing
- **tailwind.config.js**: Tailwind CSS configuration for React Native

### Code Quality

- **ESLint**: Configured with Expo presets
- **TypeScript**: Strict type checking enabled
- **Prettier**: Code formatting with Tailwind class sorting

## 📱 Platform Support

### Current Platforms

- **iOS**: Full support with SF Symbols and iOS-specific features
- **Android**: Full support with Material Icons and Android-specific features
- **Web**: Basic support for development and testing

### Platform-Specific Features

- **iOS**: Parallax effects, SF Symbols, haptic feedback
- **Android**: Material Design icons, edge-to-edge display
- **Web**: Fallback implementations for native features

## 🔄 Current Limitations & Gaps

### Missing Core Features

- No Gita content management system
- No user profile or progress tracking
- No gamification mechanics (XP, levels, badges)
- No daily verse delivery system
- No reflection/journaling capabilities
- No offline content storage

### Technical Gaps

- No state management solution (Redux, Zustand, etc.)
- No data persistence layer
- No API integration setup
- No authentication system
- No push notification system
- No analytics tracking

### UI/UX Gaps

- Placeholder content instead of real app features
- No spiritual/cultural design elements
- No Sanskrit text rendering capabilities
- No audio content support
- No customization options

---

_This architecture provides a solid foundation for building the My Gita app, with modern React Native practices and a scalable component system ready for feature implementation._
