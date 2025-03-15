import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { useTheme } from "@/constants/ThemeProvider";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const MeetingLayout = () => {
  const { colors, dark } = useTheme();
  const navigation = useRouter();
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </View>
  );
};

export default MeetingLayout;
