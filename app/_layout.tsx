import { Stack } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { AuthProvider } from './AuthContext';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function Layout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
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
    <AuthProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="(tabs)/index" options={{ title: 'Loading', headerShown: false }} />
            <Stack.Screen name="(tabs)/login" options={{ title: 'Login', headerShown: false }}  />
            <Stack.Screen name="(tabs)/register" options={{ title: 'Register',headerShown: false }} />
            <Stack.Screen name="(tabs)/home" options={{ title: 'Home dude', headerShown: false }} />
          </Stack>
      </ThemeProvider>
    </AuthProvider>  
  );
}
