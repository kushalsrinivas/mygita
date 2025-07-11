# Data Models

## 📊 Overview

This document defines the complete data structure for My Gita, covering spiritual content, user progress, gamification, and all app features. The models are designed to be scalable, efficient, and respectful of the sacred nature of the content.

## 📖 Core Content Models

### Verse Model

```typescript
interface Verse {
  id: string; // Unique identifier (e.g., "BG_1_1")
  chapterId: string; // Reference to chapter
  verseNumber: number; // Verse number within chapter
  sanskrit: {
    devanagari: string; // Sanskrit in Devanagari script
    romanized: string; // Romanized Sanskrit (IAST)
    transliteration: string; // Simple phonetic transliteration
  };
  translations: Translation[]; // Multiple translation options
  commentary: Commentary[]; // Multiple commentary sources
  audio: {
    pronunciation: string; // URL to Sanskrit pronunciation
    chanting?: string; // URL to traditional chanting
    duration: number; // Audio duration in seconds
  };
  themes: string[]; // Related spiritual themes
  keywords: string[]; // Searchable keywords
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedReadTime: number; // In minutes
  relatedVerses: string[]; // IDs of related verses
  createdAt: Date;
  updatedAt: Date;
}

interface Translation {
  id: string;
  language: "english" | "hindi" | "tamil" | "bengali";
  translator: string;
  text: string;
  style: "literal" | "interpretive" | "poetic";
  source: string;
  year?: number;
}

interface Commentary {
  id: string;
  author: string;
  text: string;
  style: "traditional" | "modern" | "practical";
  source: string;
  length: "brief" | "detailed" | "comprehensive";
  focus: "philosophical" | "practical" | "devotional" | "scholarly";
}
```

### Chapter Model

```typescript
interface Chapter {
  id: string; // e.g., "BG_1"
  number: number; // Chapter number (1-18)
  title: {
    sanskrit: string; // Sanskrit title
    english: string; // English title
    transliteration: string; // Romanized Sanskrit
  };
  summary: string; // Chapter overview
  theme: string; // Main spiritual theme
  keyTeachings: string[]; // Core teachings of the chapter
  verseCount: number; // Total verses in chapter
  estimatedReadTime: number; // In minutes for average pace
  difficulty: "beginner" | "intermediate" | "advanced";
  prerequisites: string[]; // Recommended prior chapters
  artwork: {
    thumbnail: string; // Chapter thumbnail image
    header: string; // Chapter header image
    illustrations: string[]; // Related artwork
  };
  order: number; // Display order
  isAvailable: boolean; // Content availability
}
```

### Theme Model

```typescript
interface SpiritualTheme {
  id: string;
  name: string;
  description: string;
  category: "dharma" | "karma" | "bhakti" | "jnana" | "yoga" | "moksha";
  relatedVerses: string[]; // Verse IDs that teach this theme
  keyQuestions: string[]; // Reflection questions
  practicalApplications: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  icon: string; // Theme icon/symbol
  color: string; // Theme color
}
```

## 👤 User Models

### User Profile

```typescript
interface UserProfile {
  id: string;
  displayName: string;
  email?: string; // Optional for anonymous users
  avatar: {
    type: "preset" | "custom";
    value: string; // Preset ID or custom image URL
  };
  preferences: UserPreferences;
  stats: UserStats;
  settings: UserSettings;
  createdAt: Date;
  lastActiveAt: Date;
  isAnonymous: boolean;
}

interface UserPreferences {
  readingPace: {
    type: "casual" | "balanced" | "intensive" | "custom";
    versesPerDay: number;
    flexibleSchedule: boolean;
  };
  notifications: {
    dailyReminder: boolean;
    reminderTime: string; // HH:MM format
    weekendSchedule: boolean;
    streakReminders: boolean;
    achievementNotifications: boolean;
    quietHours: {
      enabled: boolean;
      start: string; // HH:MM format
      end: string; // HH:MM format
    };
  };
  privacy: {
    shareProgress: boolean;
    allowStudyBuddies: boolean;
    shareAchievements: boolean;
    anonymousMode: boolean;
  };
}

interface UserStats {
  totalVersesRead: number;
  totalTimeSpent: number; // In minutes
  currentStreak: number;
  longestStreak: number;
  chaptersCompleted: number;
  totalReflections: number;
  challengesCompleted: number;
  averageSessionTime: number; // In minutes
  favoriteReadingTime: string; // Most common reading time
  startDate: Date;
}

interface UserSettings {
  theme: string; // Theme ID
  fontSize: "small" | "medium" | "large" | "xlarge";
  fontFamily: string;
  audioEnabled: boolean;
  hapticFeedback: boolean;
  language: string;
  accessibility: {
    highContrast: boolean;
    reduceMotion: boolean;
    screenReader: boolean;
  };
}
```

## 📈 Progress Tracking Models

### Reading Progress

```typescript
interface ReadingProgress {
  id: string;
  userId: string;
  verseId: string;
  status: "unread" | "reading" | "completed" | "bookmarked";
  completedAt?: Date;
  timeSpent: number; // In seconds
  readCount: number; // How many times read
  lastReadAt: Date;
  bookmarkedAt?: Date;
  notes?: string; // Personal notes
  rating?: number; // 1-5 stars
}

interface ChapterProgress {
  id: string;
  userId: string;
  chapterId: string;
  versesCompleted: number;
  totalVerses: number;
  percentComplete: number;
  startedAt: Date;
  completedAt?: Date;
  timeSpent: number; // Total time in seconds
  averageRating?: number; // Average rating of completed verses
}

interface DailyProgress {
  id: string;
  userId: string;
  date: string; // YYYY-MM-DD format
  versesRead: number;
  timeSpent: number; // In minutes
  challengesCompleted: number;
  reflectionsWritten: number;
  streakDay: number; // Day number in current streak
  xpEarned: number;
  goals: {
    versesTarget: number;
    timeTarget: number; // In minutes
    achieved: boolean;
  };
}
```

## 🎮 Gamification Models

### Experience and Levels

```typescript
interface UserLevel {
  id: string;
  userId: string;
  currentLevel: number;
  currentXP: number;
  totalXP: number;
  xpToNextLevel: number;
  levelName: string; // e.g., "Seeker", "Student of Truth"
  levelDescription: string;
  unlockedFeatures: string[]; // Features unlocked at this level
  levelUpDate?: Date; // When user reached this level
}

interface XPTransaction {
  id: string;
  userId: string;
  amount: number; // XP gained (positive) or lost (negative)
  source:
    | "verse_read"
    | "challenge_completed"
    | "reflection_written"
    | "streak_bonus"
    | "chapter_completed"
    | "achievement_unlocked";
  sourceId: string; // ID of the source (verse, challenge, etc.)
  multiplier: number; // Streak or other multipliers applied
  timestamp: Date;
  description: string;
}

interface LevelDefinition {
  level: number;
  name: string;
  description: string;
  xpRequired: number; // Total XP needed to reach this level
  rewards: {
    badges: string[]; // Badge IDs unlocked
    themes: string[]; // Theme IDs unlocked
    features: string[]; // Feature IDs unlocked
  };
  spiritualSignificance: string; // Meaning of this level
}
```

### Achievements and Badges

```typescript
interface Achievement {
  id: string;
  name: string;
  description: string;
  category:
    | "reading"
    | "streak"
    | "reflection"
    | "challenge"
    | "social"
    | "milestone"
    | "special";
  difficulty: "bronze" | "silver" | "gold" | "platinum";
  requirements: AchievementRequirement[];
  rewards: {
    xp: number;
    badge?: string; // Badge ID
    theme?: string; // Theme ID
    title?: string; // Special title
  };
  icon: string;
  spiritualMeaning: string; // Significance of this achievement
  isSecret: boolean; // Hidden until unlocked
  order: number; // Display order
}

interface AchievementRequirement {
  type:
    | "verses_read"
    | "streak_days"
    | "chapters_completed"
    | "reflections_written"
    | "challenges_completed"
    | "time_spent";
  value: number;
  timeframe?: "daily" | "weekly" | "monthly" | "all_time";
}

interface UserAchievement {
  id: string;
  userId: string;
  achievementId: string;
  unlockedAt: Date;
  progress: number; // 0-100 percentage
  isCompleted: boolean;
  notificationSent: boolean;
  sharedAt?: Date;
}

interface Badge {
  id: string;
  name: string;
  description: string;
  image: string; // Badge artwork
  category: string;
  spiritualSymbol: string; // What the symbol represents
  rarity: "common" | "rare" | "epic" | "legendary";
  unlockMessage: string;
}
```

### Streaks and Habits

```typescript
interface Streak {
  id: string;
  userId: string;
  type: "reading" | "reflection" | "challenge";
  currentCount: number;
  longestCount: number;
  startDate: Date;
  lastActivityDate: Date;
  isActive: boolean;
  freezesUsed: number; // Streak protection uses
  freezesAvailable: number;
  milestones: StreakMilestone[];
}

interface StreakMilestone {
  days: number;
  reached: boolean;
  reachedAt?: Date;
  reward: {
    xp: number;
    badge?: string;
    theme?: string;
  };
}

interface HabitTracker {
  id: string;
  userId: string;
  date: string; // YYYY-MM-DD format
  activities: {
    dailyReading: boolean;
    reflection: boolean;
    challenge: boolean;
    meditation: boolean;
  };
  mood: "peaceful" | "inspired" | "contemplative" | "grateful" | "neutral";
  notes?: string;
}
```

## 📝 Journal and Reflection Models

### Journal Entries

```typescript
interface JournalEntry {
  id: string;
  userId: string;
  date: string; // YYYY-MM-DD format
  verseId?: string; // Associated verse if applicable
  prompt?: string; // Reflection prompt used
  content: string; // Main text content
  mood?: "peaceful" | "inspired" | "contemplative" | "grateful" | "questioning";
  tags: string[]; // User-defined tags
  isPrivate: boolean;
  wordCount: number;
  timeSpent: number; // Writing time in minutes
  attachments: JournalAttachment[];
  createdAt: Date;
  updatedAt: Date;
}

interface JournalAttachment {
  id: string;
  type: "voice" | "image" | "quote";
  url: string;
  duration?: number; // For voice notes
  caption?: string;
}

interface ReflectionPrompt {
  id: string;
  text: string;
  category:
    | "personal"
    | "practical"
    | "philosophical"
    | "gratitude"
    | "application";
  difficulty: "beginner" | "intermediate" | "advanced";
  verseId?: string; // Associated verse
  themeId?: string; // Associated theme
  context: string; // When to show this prompt
  tags: string[];
  usageCount: number; // How often it's been used
}
```

## 🎯 Challenge and Quiz Models

### Challenges

```typescript
interface Challenge {
  id: string;
  title: string;
  description: string;
  type: "quiz" | "reflection" | "application" | "memory" | "comparison";
  difficulty: "easy" | "medium" | "hard";
  verseId?: string; // Associated verse
  chapterId?: string; // Associated chapter
  themeId?: string; // Associated theme
  questions: Question[];
  timeLimit?: number; // In minutes
  xpReward: number;
  attempts: number; // How many times it can be attempted
  availableFrom: Date;
  availableUntil?: Date;
  isDaily: boolean;
  prerequisites: string[]; // Required completed verses/chapters
}

interface Question {
  id: string;
  text: string;
  type: "multiple_choice" | "true_false" | "text_input" | "matching";
  options?: string[]; // For multiple choice
  correctAnswer: string | string[];
  explanation: string; // Why this is the correct answer
  hints: string[]; // Progressive hints
  points: number;
  difficulty: "easy" | "medium" | "hard";
}

interface ChallengeAttempt {
  id: string;
  userId: string;
  challengeId: string;
  startedAt: Date;
  completedAt?: Date;
  answers: QuestionAnswer[];
  score: number; // Percentage score
  xpEarned: number;
  timeSpent: number; // In seconds
  hintsUsed: number;
  isCompleted: boolean;
}

interface QuestionAnswer {
  questionId: string;
  answer: string | string[];
  isCorrect: boolean;
  timeSpent: number; // In seconds
  hintsUsed: string[];
}
```

### Wisdom Mosaic

```typescript
interface WisdomMosaic {
  id: string;
  name: string;
  description: string;
  theme: string; // Spiritual theme
  totalPieces: number;
  image: string; // Complete mosaic image
  pieces: MosaicPiece[];
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedCompletionTime: string; // e.g., "2 weeks"
}

interface MosaicPiece {
  id: string;
  mosaicId: string;
  position: { x: number; y: number };
  image: string; // Piece artwork
  unlockCondition: {
    type: "challenge_completed" | "verse_read" | "streak_achieved";
    value: string | number;
  };
  spiritualMeaning: string; // What this piece represents
  order: number;
}

interface UserMosaic {
  id: string;
  userId: string;
  mosaicId: string;
  unlockedPieces: string[]; // Piece IDs
  completedAt?: Date;
  progress: number; // 0-100 percentage
}
```

## 🤝 Community Models

### Study Buddies

```typescript
interface StudyBuddy {
  id: string;
  userId1: string;
  userId2: string;
  status: "pending" | "active" | "paused" | "ended";
  matchedAt: Date;
  acceptedAt?: Date;
  commonInterests: string[]; // Shared themes or preferences
  readingPaceCompatibility: number; // 0-100 percentage
  sharedChallenges: string[]; // Challenge IDs
  lastInteraction: Date;
}

interface StudyBuddyMessage {
  id: string;
  buddyId: string; // StudyBuddy ID
  senderId: string;
  content: string;
  type: "text" | "verse_share" | "achievement_share" | "challenge_invite";
  metadata?: any; // Additional data based on type
  sentAt: Date;
  readAt?: Date;
  isSystemMessage: boolean;
}

interface CommunityChallenge {
  id: string;
  name: string;
  description: string;
  type: "reading_goal" | "streak_challenge" | "reflection_theme";
  startDate: Date;
  endDate: Date;
  goal: {
    type: "verses" | "chapters" | "streaks" | "reflections";
    target: number;
  };
  participants: string[]; // User IDs
  leaderboard: ChallengeParticipant[];
  rewards: {
    xp: number;
    badge?: string;
    theme?: string;
  };
  isPublic: boolean;
}

interface ChallengeParticipant {
  userId: string;
  displayName: string;
  progress: number;
  rank: number;
  joinedAt: Date;
  lastUpdate: Date;
}
```

## 🎨 Customization Models

### Themes

```typescript
interface AppTheme {
  id: string;
  name: string;
  description: string;
  category: "spiritual" | "seasonal" | "cultural" | "accessibility";
  colors: ThemeColors;
  typography: ThemeTypography;
  assets: ThemeAssets;
  unlockCondition?: {
    type: "level" | "achievement" | "purchase" | "seasonal";
    value: string | number;
  };
  isDefault: boolean;
  isPremium: boolean;
  availableFrom?: Date;
  availableUntil?: Date;
}

interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  success: string;
  warning: string;
  error: string;
  // Additional semantic colors
  sanskrit: string;
  meditation: string;
  celebration: string;
}

interface ThemeTypography {
  sanskritFont: string;
  readingFont: string;
  uiFont: string;
  sizes: {
    small: number;
    medium: number;
    large: number;
    xlarge: number;
  };
}

interface ThemeAssets {
  backgroundImage?: string;
  verseCardBackground?: string;
  chapterArtwork: string[];
  icons: { [key: string]: string };
  illustrations: string[];
}

interface UserTheme {
  id: string;
  userId: string;
  themeId: string;
  unlockedAt: Date;
  isActive: boolean;
  customizations?: {
    fontSize: number;
    colorAdjustments: { [key: string]: string };
  };
}
```

## 📊 Analytics and Insights Models

### Usage Analytics

```typescript
interface UserSession {
  id: string;
  userId: string;
  startTime: Date;
  endTime?: Date;
  duration: number; // In seconds
  activities: SessionActivity[];
  deviceInfo: {
    platform: "ios" | "android" | "web";
    version: string;
    screenSize: string;
  };
  appVersion: string;
}

interface SessionActivity {
  type:
    | "verse_read"
    | "challenge_attempted"
    | "journal_write"
    | "navigation"
    | "settings_change";
  timestamp: Date;
  duration: number; // In seconds
  metadata: any; // Activity-specific data
}

interface LearningInsight {
  id: string;
  userId: string;
  type:
    | "reading_pattern"
    | "progress_trend"
    | "engagement_level"
    | "recommendation"
    | "milestone_approaching";
  title: string;
  description: string;
  data: any; // Insight-specific data
  actionable: boolean;
  priority: "low" | "medium" | "high";
  generatedAt: Date;
  viewedAt?: Date;
  actionTaken?: string;
}
```

## 🔔 Notification Models

### Notifications

```typescript
interface Notification {
  id: string;
  userId: string;
  type:
    | "daily_reminder"
    | "streak_reminder"
    | "achievement_unlocked"
    | "challenge_available"
    | "buddy_message"
    | "milestone_reached";
  title: string;
  body: string;
  data?: any; // Additional payload
  scheduledFor: Date;
  sentAt?: Date;
  readAt?: Date;
  actionTaken?: string;
  priority: "low" | "normal" | "high";
  category: string;
}

interface NotificationTemplate {
  id: string;
  type: string;
  title: string;
  body: string;
  variables: string[]; // Template variables like {userName}
  conditions?: any; // When to use this template
  isActive: boolean;
}
```

---

## 🗄️ Data Storage Strategy

### Local Storage (AsyncStorage/SQLite)

- User profile and preferences
- Reading progress and streaks
- Journal entries (encrypted)
- Offline content cache
- App settings and customizations

### Cloud Storage (Firebase/Supabase)

- User authentication data
- Cross-device sync data
- Community features data
- Analytics and insights
- Content updates and versioning

### Content Delivery

- Gita verses and translations (bundled + CDN)
- Audio files (CDN with offline caching)
- Images and artwork (CDN with caching)
- Theme assets (bundled + CDN)

### Data Synchronization

- Automatic sync when online
- Conflict resolution for concurrent edits
- Offline-first approach with eventual consistency
- Privacy-preserving sync for sensitive data

---

_These data models provide a comprehensive foundation for building My Gita while ensuring scalability, performance, and respect for user privacy and the sacred nature of the content._
