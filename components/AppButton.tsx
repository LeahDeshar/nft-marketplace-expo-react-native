// import React from "react";
// import {
//   TouchableOpacity,
//   Text,
//   ActivityIndicator,
//   ViewStyle,
//   TextStyle,
// } from "react-native";
// import { buttonStyles } from "@/styles/styles"; // Import your styles
// import { colors } from "@/constants/token";

// type ButtonProps = {
//   title: string;
//   onPress: () => void;
//   disabled?: boolean;
//   loading?: boolean;
//   variant?: "primary" | "secondary" | "outline" | "disabled";
//   style?: ViewStyle;
//   textStyle?: TextStyle;
// };

// const AppButton: React.FC<ButtonProps> = ({
//   title,
//   onPress,
//   disabled = false,
//   loading = false,
//   variant = "primary",
//   style = {},
//   textStyle = {},
// }) => {
//   const getButtonStyle = () => {
//     const baseStyle = buttonStyles[variant] || buttonStyles.primary;
//     if (disabled) return { ...baseStyle, ...buttonStyles.disabled };
//     return baseStyle;
//   };

//   const getTextStyle = () => {
//     const baseTextStyle =
//       variant === "outline" ? buttonStyles.outlineText : buttonStyles.text;
//     if (disabled) return { ...baseTextStyle, ...buttonStyles.disabledText };
//     return baseTextStyle;
//   };

//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       disabled={disabled || loading}
//       style={[getButtonStyle(), style]}
//       activeOpacity={0.8}
//     >
//       {loading ? (
//         <ActivityIndicator
//           color={variant === "outline" ? colors.primary : "#fff"}
//         />
//       ) : (
//         <Text style={[getTextStyle(), textStyle]}>{title}</Text>
//       )}
//     </TouchableOpacity>
//   );
// };

// export default AppButton;

import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from "react-native";
import { buttonStyles } from "@/styles/styles"; // Your centralized styles
import { MaterialIcons } from "@expo/vector-icons"; // Replace with your preferred icon library

type ButtonProps = {
  title: string;
  onPress: () => void;
  iconName?: string; // Name of the icon
  iconPosition?: "left" | "right"; // Position of the icon
  iconColor?: string;
  iconSize?: number;
  disabled?: boolean;
  loading?: boolean;
  variant?: "primary" | "secondary" | "outline" | "disabled";
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  iconName,
  iconPosition = "left",
  iconColor = "#fff",
  iconSize = 20,
  disabled = false,
  loading = false,
  variant = "primary",
  style = {},
  textStyle = {},
}) => {
  const getButtonStyle = () => {
    const baseStyle = buttonStyles[variant] || buttonStyles.primary;
    if (disabled) return { ...baseStyle, ...buttonStyles.disabled };
    return baseStyle;
  };

  const getTextStyle = () => {
    const baseTextStyle =
      variant === "outline" ? buttonStyles.outlineText : buttonStyles.text;
    if (disabled) return { ...baseTextStyle, ...buttonStyles.disabledText };
    return baseTextStyle;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[getButtonStyle(), styles.button, style]}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={variant === "outline" ? "#3498db" : "#fff"} />
      ) : (
        <>
          {iconName && iconPosition === "left" && (
            <MaterialIcons
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={styles.iconLeft}
            />
          )}
          <Text style={[getTextStyle(), styles.text, textStyle]}>{title}</Text>
          {iconName && iconPosition === "right" && (
            <MaterialIcons
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={styles.iconRight}
            />
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;
