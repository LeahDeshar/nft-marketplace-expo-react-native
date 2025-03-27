import { Colors } from "@/constants/Colors";
import { colors } from "@/constants/token";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const globalStyles = (
  theme?: "light" | "dark",
  paddingTop?: number,
  paddingHorizontal?: number,
  gap?: number
) => {
  const colors = theme === "dark" ? Colors.dark : Colors.light;

  return StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
    },
    containerFlex: {
      flex: 1,

      paddingTop: paddingTop || 60,
      paddingHorizontal: paddingHorizontal == 0 ? 0 : paddingHorizontal || 15,
      backgroundColor: colors.background,
    },
    containerFlexRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: gap,
    },
    containerFlexRowSpace: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    text: {
      fontSize: 16,
      color: "#333",
    },
    bgColor: {
      backgroundColor: colors.background,
    },
    opacityBG: {
      backgroundColor: colors.opacity,
    },
    opacityText: {
      color: colors.tint,
    },
    button: {
      backgroundColor: "#007bff",
      padding: 10,
      borderRadius: 5,

      // shadowColor: "#2c2c2c",
    },
  });
};

export const PaddingStyles = (abc?: number, x?: number, y?: number) => {
  return StyleSheet.create({
    container: {
      padding: abc ?? 0,
      paddingVertical: y ?? 0,
      paddingHorizontal: x ?? 0,
    },
  });
};
export const utilities = {
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  centerWithBorder: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  centerWithAbsolute: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  marginVertical: (value: number) => ({
    marginVertical: value,
  }),
};

export const spacing = {
  small: 8,
  medium: 16,
  large: 24,
  xLarge: 32,
};
export const imageStyles = {
  defaultImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
  },
};
export const typography = (
  theme?: "light" | "dark",
  paddingTop?: number,
  paddingHorizontal?: number,
  gap?: number
) => {
  const colors = theme === "dark" ? Colors.dark : Colors.light;

  return StyleSheet.create({
    heading1: {
      fontSize: 32,
      fontWeight: "bold",
      lineHeight: 40,
    },
    heading2: {
      fontSize: 24,
      fontWeight: "bold",
      lineHeight: 32,
    },
    heading3: {
      fontSize: 20,
      fontWeight: "bold",
      lineHeight: 32,
    },
    body: {
      fontSize: 16,
      fontWeight: "normal",
      lineHeight: 24,
    },
    caption: {
      fontSize: 12,
      fontWeight: "normal",
      lineHeight: 16,
      color: "#48d769",
    },
    textColor: {
      color: colors.text,
    },
    primaryTextColor: {
      color: colors.primary,
    },
    textDescColor: {
      color: colors.opacity,
    },
    primaryRegularFont: {
      fontFamily: "primaryRegular",
      // fontWeight: "900",
      // fontFamily: "SpaceGrotesk-Light",
    },
  });
};
export const buttonStyles = (
  theme?: "light" | "dark",
  radiusSize?: "sm" | "md" | "xl" | "2xl"
) => {
  const colors = theme === "dark" ? Colors.dark : Colors.light;
  return StyleSheet.create({
    primary: {
      backgroundColor: colors.primary,
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: getRadius(radiusSize || "md"),
      alignItems: "center",
      justifyContent: "center",
    },
    secondary: {
      backgroundColor: colors.opacity,
      borderRadius: getRadius(radiusSize || "md"),
      paddingVertical: 12,
      paddingHorizontal: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    secondaryReverse: {
      backgroundColor: colors.background,
      borderRadius: getRadius(radiusSize || "md"),
      paddingVertical: 12,
      paddingHorizontal: 15,
      alignItems: "center",
      justifyContent: "center",
    },
    secondaryText: {
      color: colors.tint,
    },
    outline: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: colors.primary,
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: getRadius(radiusSize || "xl"),
      alignItems: "center",
      justifyContent: "center",
    },
    disabled: {
      backgroundColor: "#bdc3c7",
    },
    text: {
      fontSize: 16,
      fontWeight: "bold",
      color: colors.text,
    },
    outlineText: {
      color: colors.primary,
    },
    disabledText: {
      color: "#7f8c8d",
    },
  });
};

export const containerStyles = {
  fullScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
};

export const shadows = {
  small: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4, // For Android
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 6, // For Android
  },
  large: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 12, // For Android
  },
};

export const responsive = {
  small: width < 600,
  medium: width >= 600 && width < 1200,
  large: width >= 1200,
};

export const radius = {
  sm: 8,
  md: 12,
  xl: 25,
  "2xl": 50,
};
export const getRadius = (size: keyof typeof radius) => {
  return radius[size];
};
