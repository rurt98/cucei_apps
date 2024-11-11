import { Stack } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { AuthProvider } from "./AuthContext";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

export default function Layout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <GluestackUIProvider mode="light">
      <AuthProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen
              name="(tabs)/index"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(tabs)/initial"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(tabs)/directory"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(tabs)/login"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(tabs)/register"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="(tabs)/home" options={{ headerShown: false }} />
            <Stack.Screen
              name="(tabs)/product_info"
              options={{ title: "Producto" }}
            />
          </Stack>
        </ThemeProvider>
      </AuthProvider>
    </GluestackUIProvider>
  );
}
