import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const avatarOptions = [
  {
    id: "lotus",
    emoji: "🪷",
    name: "Lotus Flower",
    description: "Purity & Rebirth",
  },
  { id: "om", emoji: "🕉️", name: "Om Symbol", description: "Universal Sound" },
  {
    id: "chakra",
    emoji: "🧘",
    name: "Chakra Emblem",
    description: "Energy Centers",
  },
  {
    id: "paisley",
    emoji: "🌀",
    name: "Traditional Motif",
    description: "Paisley Pattern",
  },
  { id: "sunrise", emoji: "🌅", name: "Nature Scene", description: "Sunrise" },
  {
    id: "mountain",
    emoji: "🏔️",
    name: "Mountain",
    description: "Himalayan Silhouette",
  },
];

const readingPaceOptions = [
  {
    id: "casual",
    title: "Casual",
    subtitle: "1–2 verses/day",
    description: "Perfect for busy minds",
    color: "bg-spiritual-sage",
  },
  {
    id: "balanced",
    title: "Balanced",
    subtitle: "5 verses/day",
    description: "Steady growth",
    color: "bg-spiritual-lotus",
  },
  {
    id: "intensive",
    title: "Intensive",
    subtitle: "1 full chapter/day",
    description: "Deep dive",
    color: "bg-spiritual-chakra",
  },
  {
    id: "custom",
    title: "Custom",
    subtitle: "Your own rhythm",
    description: "e.g., 3 verses every other day",
    color: "bg-spiritual-om",
  },
];

export default function ProfileScreen() {
  const [displayName, setDisplayName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("lotus");
  const [selectedPace, setSelectedPace] = useState("balanced");
  const [step, setStep] = useState(1); // 1: Name, 2: Avatar, 3: Pace

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Save profile and navigate to main app
      router.replace("/(tabs)");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      router.back();
    }
  };

  const canProceed = () => {
    if (step === 1) return displayName.trim().length > 0;
    return true;
  };

  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={["#E6E6FA", "#F8BBD9", "#87CEEB"]}
        className="flex-1"
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Header */}
        <View className="flex-row justify-between items-center px-6 py-4">
          <TouchableOpacity onPress={handleBack} className="p-2">
            <Text className="text-2xl">←</Text>
          </TouchableOpacity>
          <View className="flex-row">
            {[1, 2, 3].map((i) => (
              <View
                key={i}
                className={`w-2 h-2 rounded-full mr-2 ${
                  i <= step ? "bg-spiritual-om" : "bg-white/30"
                }`}
              />
            ))}
          </View>
          <View className="w-10" />
        </View>

        <ScrollView className="flex-1 px-6">
          {step === 1 && (
            <View className="flex-1 justify-center">
              <Text className="text-3xl font-bold text-center mb-4 text-spiritual-earth">
                What should we call you on your path?
              </Text>
              <Text className="text-lg text-center mb-8 text-spiritual-earth/80">
                Choose a name that resonates with your spiritual journey
              </Text>

              <View className="bg-white/90 rounded-2xl p-6 shadow-lg">
                <TextInput
                  className="text-2xl text-center text-spiritual-earth font-semibold"
                  placeholder="Enter your display name"
                  placeholderTextColor="#8B4513AA"
                  value={displayName}
                  onChangeText={setDisplayName}
                  autoFocus
                />
              </View>
            </View>
          )}

          {step === 2 && (
            <View className="flex-1 justify-center">
              <Text className="text-3xl font-bold text-center mb-4 text-spiritual-earth">
                Select Your Avatar
              </Text>
              <Text className="text-lg text-center mb-8 text-spiritual-earth/80">
                Choose a spiritually resonant symbol
              </Text>

              <View className="flex-row flex-wrap justify-between">
                {avatarOptions.map((avatar) => (
                  <TouchableOpacity
                    key={avatar.id}
                    className={`bg-white/90 rounded-2xl p-4 items-center shadow-lg mb-4 ${
                      selectedAvatar === avatar.id
                        ? "border-2 border-spiritual-om"
                        : ""
                    }`}
                    style={{ width: "48%" }}
                    onPress={() => setSelectedAvatar(avatar.id)}
                  >
                    <Text className="text-3xl mb-2">{avatar.emoji}</Text>
                    <Text className="text-spiritual-earth font-semibold text-center text-sm">
                      {avatar.name}
                    </Text>
                    <Text className="text-spiritual-earth/70 text-xs text-center">
                      {avatar.description}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}

          {step === 3 && (
            <View className="flex-1 justify-center">
              <Text className="text-3xl font-bold text-center mb-4 text-spiritual-earth">
                Set Your Reading Pace
              </Text>
              <Text className="text-lg text-center mb-8 text-spiritual-earth/80">
                How will you progress on your path?
              </Text>

              <View>
                {readingPaceOptions.map((pace) => (
                  <TouchableOpacity
                    key={pace.id}
                    className={`bg-white/90 rounded-2xl p-6 shadow-lg mb-4 ${
                      selectedPace === pace.id
                        ? "border-2 border-spiritual-om"
                        : ""
                    }`}
                    onPress={() => setSelectedPace(pace.id)}
                  >
                    <View className="flex-row items-center justify-between">
                      <View className="flex-1">
                        <Text className="text-spiritual-earth font-bold text-xl">
                          {pace.title}
                        </Text>
                        <Text className="text-spiritual-earth/80 text-lg">
                          {pace.subtitle}
                        </Text>
                        <Text className="text-spiritual-earth/60 text-sm">
                          {pace.description}
                        </Text>
                      </View>
                      <View
                        className={`w-6 h-6 rounded-full ${
                          selectedPace === pace.id
                            ? "bg-spiritual-om"
                            : "bg-gray-300"
                        }`}
                      />
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}
        </ScrollView>

        {/* Bottom Action */}
        <View className="px-6 py-6">
          <TouchableOpacity
            className={`rounded-full py-4 shadow-lg ${
              canProceed() ? "bg-spiritual-om" : "bg-gray-300"
            }`}
            onPress={handleNext}
            disabled={!canProceed()}
          >
            <Text className="text-white text-lg font-semibold text-center">
              {step === 3 ? "Begin Journey" : "Continue"}
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
