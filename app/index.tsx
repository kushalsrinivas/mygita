import { router } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    // Check if user has completed onboarding
    // For now, always redirect to onboarding
    router.replace("/(onboarding)/welcome");
  }, []);

  return null;
}
