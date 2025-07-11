# Component Architecture

## 🧩 Current Component Structure

### Base Components (Existing)

#### ThemedText Component

```typescript
// components/ThemedText.tsx
export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};
```

**Features:**

- Theme-aware text rendering
- Multiple typography variants
- Automatic color adaptation
- Custom color override support

**Usage Patterns:**

- `<ThemedText type="title">Chapter 1</ThemedText>`
- `<ThemedText type="subtitle">Arjuna's Dilemma</ThemedText>`
- `<ThemedText>Regular content text</ThemedText>`

#### ThemedView Component

```typescript
// components/ThemedView.tsx
export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};
```

**Features:**

- Theme-aware background colors
- Seamless dark/light mode transitions
- Custom background color support

#### IconSymbol Component

```typescript
// components/ui/IconSymbol.tsx
export function IconSymbol({
  name: IconSymbolName,
  size?: number,
  color: string | OpaqueColorValue,
  style?: StyleProp<TextStyle>,
  weight?: SymbolWeight,
})
```

**Features:**

- Cross-platform icon system
- SF Symbols on iOS, Material Icons on Android
- Consistent icon mapping
- Theme-aware coloring

### Layout Components (Existing)

#### ParallaxScrollView

```typescript
// components/ParallaxScrollView.tsx
type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;
```

**Features:**

- Parallax scrolling effect
- Animated header scaling
- Theme-aware background colors
- Bottom tab overflow handling

#### Collapsible

```typescript
// components/Collapsible.tsx
export function Collapsible({
  children,
  title,
}: PropsWithChildren & { title: string });
```

**Features:**

- Expandable content sections
- Smooth open/close animations
- Chevron rotation indicator
- Theme-aware styling

### Utility Components (Existing)

#### HapticTab

```typescript
// components/HapticTab.tsx
export function HapticTab(props: BottomTabBarButtonProps);
```

**Features:**

- Tactile feedback on iOS
- Cross-platform tab button
- Smooth press interactions

#### ExternalLink

```typescript
// components/ExternalLink.tsx
export function ExternalLink({ href, ...rest }: Props);
```

**Features:**

- In-app browser on mobile
- External browser on web
- Secure link handling

## 🔮 Planned Component Architecture

### Core Spiritual Components

#### VerseCard Component

```typescript
// components/spiritual/VerseCard.tsx
interface VerseCardProps {
  verse: Verse;
  onRead: (verseId: string) => void;
  onReflect: (verseId: string) => void;
  isCompleted?: boolean;
  showPreview?: boolean;
  theme?: "default" | "featured" | "compact";
}
```

**Features:**

- Beautiful verse presentation
- Sanskrit, translation, and commentary
- Progress indicators
- Audio pronunciation support
- Bookmark functionality
- Reflection prompts

#### SanskritText Component

```typescript
// components/spiritual/SanskritText.tsx
interface SanskritTextProps {
  text: string;
  transliteration?: string;
  fontSize?: "small" | "medium" | "large";
  fontStyle?: "devanagari" | "romanized";
  showTransliteration?: boolean;
  onWordPress?: (word: string, meaning: string) => void;
}
```

**Features:**

- Beautiful Sanskrit rendering
- Multiple font options
- Word-by-word breakdown
- Audio pronunciation
- Transliteration support

#### ChapterCard Component

```typescript
// components/spiritual/ChapterCard.tsx
interface ChapterCardProps {
  chapter: Chapter;
  progress: ChapterProgress;
  onPress: (chapterId: string) => void;
  theme?: "grid" | "list" | "featured";
}
```

**Features:**

- Chapter overview display
- Progress visualization
- Theme descriptions
- Estimated reading time
- Beautiful chapter artwork

### Gamification Components

#### XPBar Component

```typescript
// components/gamification/XPBar.tsx
interface XPBarProps {
  currentXP: number;
  levelXP: number;
  nextLevelXP: number;
  level: number;
  animated?: boolean;
  showDetails?: boolean;
}
```

**Features:**

- Smooth XP animations
- Level progression display
- Milestone celebrations
- Customizable styling

#### BadgeDisplay Component

```typescript
// components/gamification/BadgeDisplay.tsx
interface BadgeDisplayProps {
  badge: Badge;
  size?: "small" | "medium" | "large";
  showUnlocked?: boolean;
  onPress?: (badge: Badge) => void;
}
```

**Features:**

- Beautiful badge artwork
- Unlock animations
- Progress indicators
- Badge stories and meanings

#### StreakIndicator Component

```typescript
// components/gamification/StreakIndicator.tsx
interface StreakIndicatorProps {
  currentStreak: number;
  longestStreak: number;
  streakGoal?: number;
  animated?: boolean;
}
```

**Features:**

- Fire/flame animations
- Streak milestone celebrations
- Progress toward goals
- Motivational messaging

### Reading Experience Components

#### ReadingInterface Component

```typescript
// components/reading/ReadingInterface.tsx
interface ReadingInterfaceProps {
  verse: Verse;
  onComplete: (verseId: string) => void;
  onBookmark: (verseId: string) => void;
  onReflect: (verseId: string) => void;
  readingSettings: ReadingSettings;
}
```

**Features:**

- Multi-section scrolling
- Audio controls
- Reading progress
- Font customization
- Bookmark management

#### AudioPlayer Component

```typescript
// components/reading/AudioPlayer.tsx
interface AudioPlayerProps {
  audioUrl: string;
  text: string;
  onPlay: () => void;
  onPause: () => void;
  onComplete: () => void;
  autoPlay?: boolean;
}
```

**Features:**

- Sanskrit pronunciation
- Playback controls
- Progress tracking
- Background audio support

### Journal Components

#### JournalEntry Component

```typescript
// components/journal/JournalEntry.tsx
interface JournalEntryProps {
  entry?: JournalEntry;
  prompt?: string;
  verseReference?: string;
  onSave: (content: string) => void;
  onComplete: () => void;
}
```

**Features:**

- Rich text editing
- Voice note recording
- Photo attachments
- Auto-save functionality
- Prompt suggestions

#### ReflectionPrompt Component

```typescript
// components/journal/ReflectionPrompt.tsx
interface ReflectionPromptProps {
  prompt: string;
  category: PromptCategory;
  verse?: Verse;
  onRespond: (response: string) => void;
}
```

**Features:**

- Contextual prompts
- Category-based suggestions
- Verse integration
- Guided reflection

### Challenge Components

#### QuizChallenge Component

```typescript
// components/challenges/QuizChallenge.tsx
interface QuizChallengeProps {
  challenge: Challenge;
  onSubmit: (answers: Answer[]) => void;
  onComplete: (score: number) => void;
  timeLimit?: number;
}
```

**Features:**

- Multiple choice questions
- Timer functionality
- Immediate feedback
- Score calculation

#### WisdomMosaic Component

```typescript
// components/challenges/WisdomMosaic.tsx
interface WisdomMosaicProps {
  mosaic: Mosaic;
  unlockedPieces: number;
  totalPieces: number;
  onPieceUnlock: (piece: MosaicPiece) => void;
}
```

**Features:**

- Visual mosaic building
- Piece unlock animations
- Progress visualization
- Completion celebrations

### Progress Components

#### ProgressChart Component

```typescript
// components/progress/ProgressChart.tsx
interface ProgressChartProps {
  data: ProgressData[];
  type: "line" | "bar" | "heatmap";
  timeframe: "week" | "month" | "year";
  metric: "verses" | "streaks" | "reflections";
}
```

**Features:**

- Multiple chart types
- Interactive data points
- Time range selection
- Smooth animations

#### MilestoneCard Component

```typescript
// components/progress/MilestoneCard.tsx
interface MilestoneCardProps {
  milestone: Milestone;
  progress: number;
  isCompleted: boolean;
  onCelebrate?: () => void;
}
```

**Features:**

- Milestone visualization
- Progress indicators
- Celebration animations
- Achievement sharing

### Customization Components

#### ThemeSelector Component

```typescript
// components/customization/ThemeSelector.tsx
interface ThemeSelectorProps {
  themes: Theme[];
  currentTheme: string;
  onThemeSelect: (themeId: string) => void;
  unlockedThemes: string[];
}
```

**Features:**

- Theme preview cards
- Live preview mode
- Unlock requirements
- Smooth transitions

#### FontCustomizer Component

```typescript
// components/customization/FontCustomizer.tsx
interface FontCustomizerProps {
  settings: FontSettings;
  onSettingsChange: (settings: FontSettings) => void;
  previewText: string;
}
```

**Features:**

- Font family selection
- Size adjustments
- Live preview
- Accessibility options

## 🏗️ Component Organization Strategy

### Directory Structure

```
components/
├── base/                    # Core UI components
│   ├── ThemedText.tsx
│   ├── ThemedView.tsx
│   └── IconSymbol.tsx
├── layout/                  # Layout and navigation
│   ├── ParallaxScrollView.tsx
│   ├── Collapsible.tsx
│   └── TabBarBackground.tsx
├── spiritual/               # Gita-specific components
│   ├── VerseCard.tsx
│   ├── SanskritText.tsx
│   ├── ChapterCard.tsx
│   └── KeyThemes.tsx
├── gamification/           # Game mechanics
│   ├── XPBar.tsx
│   ├── BadgeDisplay.tsx
│   ├── StreakIndicator.tsx
│   └── LevelProgress.tsx
├── reading/                # Reading experience
│   ├── ReadingInterface.tsx
│   ├── AudioPlayer.tsx
│   ├── BookmarkManager.tsx
│   └── ReadingSettings.tsx
├── journal/                # Reflection features
│   ├── JournalEntry.tsx
│   ├── ReflectionPrompt.tsx
│   ├── EntryCalendar.tsx
│   └── VoiceRecorder.tsx
├── challenges/             # Quizzes and challenges
│   ├── QuizChallenge.tsx
│   ├── WisdomMosaic.tsx
│   ├── ChallengeCard.tsx
│   └── ScoreDisplay.tsx
├── progress/               # Analytics and tracking
│   ├── ProgressChart.tsx
│   ├── MilestoneCard.tsx
│   ├── StatisticsView.tsx
│   └── AchievementGallery.tsx
├── customization/          # Personalization
│   ├── ThemeSelector.tsx
│   ├── FontCustomizer.tsx
│   ├── AudioSettings.tsx
│   └── NotificationSettings.tsx
├── community/              # Social features
│   ├── StudyBuddyCard.tsx
│   ├── ShareSheet.tsx
│   ├── CommunityChallenge.tsx
│   └── MessageThread.tsx
└── ui/                     # Platform-specific UI
    ├── IconSymbol.ios.tsx
    ├── IconSymbol.tsx
    ├── TabBarBackground.ios.tsx
    └── TabBarBackground.tsx
```

### Component Design Principles

#### 1. Spiritual Respect

- Components honor the sacred nature of the content
- Gentle animations and transitions
- Serene color palettes and typography
- Mindful interaction patterns

#### 2. Accessibility First

- Screen reader support for all components
- High contrast options
- Scalable font sizes
- Voice control compatibility

#### 3. Performance Optimization

- Lazy loading for heavy components
- Memoization for expensive calculations
- Efficient re-rendering patterns
- Image optimization

#### 4. Cross-Platform Consistency

- Consistent behavior across iOS and Android
- Platform-specific optimizations where beneficial
- Graceful degradation for web platform

#### 5. Theming Support

- All components support multiple themes
- Dynamic theme switching
- Custom color overrides
- Dark/light mode adaptation

### Component Communication Patterns

#### Props Flow

```typescript
// Parent → Child data flow
interface ComponentProps {
  data: DataType;
  onAction: (result: ResultType) => void;
  settings: SettingsType;
}
```

#### Context Usage

```typescript
// Shared state across component tree
const ThemeContext = createContext<ThemeContextType>();
const UserProgressContext = createContext<ProgressContextType>();
const ReadingSettingsContext = createContext<SettingsContextType>();
```

#### Event Handling

```typescript
// Consistent event patterns
interface ComponentEvents {
  onPress?: () => void;
  onLongPress?: () => void;
  onSwipe?: (direction: SwipeDirection) => void;
  onChange?: (value: ValueType) => void;
}
```

### Testing Strategy

#### Component Testing

- Unit tests for component logic
- Snapshot tests for UI consistency
- Integration tests for component interactions
- Accessibility tests for screen readers

#### Visual Testing

- Storybook for component documentation
- Visual regression testing
- Cross-platform UI testing
- Theme variation testing

---

_This component architecture ensures scalable, maintainable, and spiritually respectful components that serve the unique needs of the My Gita learning experience._
