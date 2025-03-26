import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@/redux/slices/themeSlice";
import { RootState } from "@/redux/store";

const ThemeToggle = () => {
  const isDark = useSelector((state: RootState) => state.theme.dark);
  const dispatch = useDispatch();

  return (
    <View>
      <Text style={{ color: isDark ? "#fff" : "#000" }}>
        Current Theme: {isDark ? "Dark" : "Light"}
      </Text>
      <Button
        title="Toggle Theme"
        onPress={() => dispatch(toggleTheme())}
        color={isDark ? "#bbb" : "#333"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ThemeToggle;
