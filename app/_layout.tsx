import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { RouteConfig, routes } from "@/routes/routes";
import { Provider } from "react-redux";
import queryClient from "@/redux/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { useTheme, ThemeProvider } from "@/constants/ThemeProvider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    primaryRegular: require("../assets/fonts/SpaceGrotesk-Regular.ttf"),
    secondaryRegular: require("../assets/fonts/Lexend-Regular.ttf"),
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider>
              <Stack
                screenOptions={{
                  headerLeft: () => null,
                }}
              >
                <Stack.Screen
                  name="(side)"
                  options={{
                    headerShown: false,
                  }}
                />
                {/* {routes.map(({ name, options }: RouteConfig) => (
                  <Stack.Screen key={name} name={name} options={options} />
                ))} */}
              </Stack>
              <StatusBar style="auto" />
            </ThemeProvider>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}
