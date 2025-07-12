import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={["#FFB347", "#87CEEB", "#9370DB"]}
        className="flex-1 justify-center items-center px-6"
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Hero Section */}
        <View className="items-center mb-12">
          {/* Lotus Symbol */}
          <View className="w-24 h-24 rounded-full bg-white/20 items-center justify-center mb-6">
            <Text className="text-4xl">🪷</Text>
          </View>

          {/* Welcome Text */}
          <Text className="text-white text-3xl font-bold text-center mb-4">
            Welcome to MyGītā
          </Text>

          {/* Subtitle */}
          <Text className="text-white/90 text-lg text-center leading-relaxed">
            Start your personalized Gītā journey—grow wisdom verse by verse
          </Text>
        </View>

        {/* Visual Elements */}
        <View className="flex-row justify-around items-center w-full mb-12">
          <View className="items-center">
            <Text className="text-2xl mb-2">🌅</Text>
            <Text className="text-white/80 text-sm">Sunrise</Text>
          </View>
          <View className="items-center">
            <Text className="text-2xl mb-2">🏔️</Text>
            <Text className="text-white/80 text-sm">Himalayas</Text>
          </View>
          <View className="items-center">
            <Text className="text-2xl mb-2">🕉️</Text>
            <Text className="text-white/80 text-sm">Om</Text>
          </View>
        </View>

        {/* Call to Action */}
        <TouchableOpacity
          className="bg-white rounded-full px-12 py-4 shadow-lg"
          onPress={() => router.push("/(onboarding)/profile")}
          activeOpacity={0.8}
        >
          <Text className="text-spiritual-om text-lg font-semibold">
            Get Started
          </Text>
        </TouchableOpacity>

        {/* Journey Hint */}
        <Text className="text-white/70 text-sm text-center mt-8 px-4">
          Begin your path to inner wisdom and spiritual growth
        </Text>
      </LinearGradient>
    </SafeAreaView>
  );
}
