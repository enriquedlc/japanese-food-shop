import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

export const useAppFonts = () => {
  const [fontsLoaded] = useFonts({
    poppins: require("../../assets/Poppins/Poppins-Regular.ttf"),
    "poppins-bold": require("../../assets/Poppins/Poppins-Bold.ttf"),
    "poppins-light": require("../../assets/Poppins/Poppins-Light.ttf"),
    "poppins-medium": require("../../assets/Poppins/Poppins-Medium.ttf"),
    "poppins-semibold": require("../../assets/Poppins/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return { fontsLoaded, onLayoutRootView };
};
