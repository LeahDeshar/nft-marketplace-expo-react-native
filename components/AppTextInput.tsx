import { ReactNode } from "react";
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/constants/token";
import { typography } from "@/styles/styles";
import AppText from "./AppText";

export interface MainInputProps extends TextInputProps {
  icon?: string;
  my0?: boolean;
  children?: ReactNode;
  onPress?: () => void;
  materialIcons?: boolean;
  passwordField?: boolean;
  setSecureTextEntry?: (value: boolean) => void;
  textClassName?: string;
  noBorder?: boolean;
  buttomSheet?: boolean;
}

export interface AppTextInputProps extends MainInputProps {
  label?: string;
}

function MainInput({
  icon,
  my0,
  children,
  passwordField,
  textClassName = "flex-1 p-3 px-4 bg-white",
  noBorder,
  materialIcons,
  ...otherProps
}: MainInputProps) {
  return (
    <View
      className={`${
        noBorder ? "" : "border-primary border-2"
      } flex-row items-center justify-center overflow-hidden rounded-xl ${
        my0 ? "my-0" : "my-2"
      } ${otherProps.clearButtonMode ? "pr-2" : ""}`}
    >
      {icon && (
        <View accessibilityElementsHidden className="ml-3">
          {materialIcons ? (
            <MaterialIcons
              color={colors.primary}
              name={icon as any}
              size={20}
            />
          ) : (
            <MaterialCommunityIcons
              color={colors.primary}
              name={icon as any}
              size={20}
            />
          )}
        </View>
      )}
      {children ?? (
        <TextInput
          placeholderTextColor={colors.mediumGray}
          style={[typography.body]}
          className={`${textClassName} ${icon ? "px-3" : ""}`}
          {...otherProps}
        />
      )}

      {passwordField && (
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => {
            otherProps.setSecureTextEntry?.(!otherProps.secureTextEntry);
          }}
          className="mx-2"
        >
          <MaterialCommunityIcons
            color={colors.mediumGray}
            name={otherProps.secureTextEntry ? "eye-off" : "eye"}
            size={20}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

export default function AppTextInput({
  label,
  onPress,
  my0,
  children,
  style,
  ...otherProps
}: AppTextInputProps) {
  return (
    <View style={style}>
      {label ? <AppText variant="body">{label}</AppText> : null}
      {onPress ? (
        <TouchableOpacity accessibilityRole="button" onPress={onPress}>
          <MainInput my0={my0} accessibilityLabel={label} {...otherProps}>
            {children}
          </MainInput>
        </TouchableOpacity>
      ) : (
        <MainInput my0={my0} accessibilityLabel={label} {...otherProps}>
          {children}
        </MainInput>
      )}
    </View>
  );
}
