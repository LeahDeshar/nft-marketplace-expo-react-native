import { Image, StyleSheet, Platform } from "react-native";

import { Redirect } from "expo-router";

export default function HomeScreen() {
  return <Redirect href="/(side)/(tabs)/home" />;
}
