import { useTheme } from "@/constants/ThemeProvider";
import { typography } from "@/styles/styles";
import React from "react";
import { Text as RNText, TextStyle, StyleSheet } from "react-native";

type TextProps = {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
  variant?: "heading1" | "heading2" | "body" | "caption";
  color?: string;
};

export default function AppText({
  children,
  style,
  variant = "body",
  color,
}: TextProps) {
  const { colors } = useTheme();
  const textStyles: TextStyle[] = [
    typography[variant],
    ...(style ? (Array.isArray(style) ? style : [style]) : []),
    { color: color || colors.text },
  ];

  return <RNText style={textStyles}>{children}</RNText>;
}

const styles = StyleSheet.create({});
