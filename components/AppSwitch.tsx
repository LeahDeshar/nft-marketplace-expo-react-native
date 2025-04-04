import { Switch, TouchableWithoutFeedback, View, Platform } from "react-native";
import AppText from "./AppText";
import { colors } from "@/constants/token";

export default function AppSwitch({
  my0,
  label,
  value,
  onValueChange,
  ...otherProps
}: {
  my0?: boolean;
  label: string;
  value: boolean;
  onValueChange: (newValue: boolean) => void;
}) {
  return Platform.OS === "android" ? (
    <TouchableWithoutFeedback onPress={() => onValueChange(!value)}>
      <View className="flex-row px-5">
        <View
          aria-hidden
          accessibilityElementsHidden
          className={`flex-1 ${my0 ? "my-0" : "my-0"}`}
        >
          <AppText aria-hidden>{label}</AppText>
        </View>
        <Switch
          accessibilityLabel={label}
          className="ml-2"
          onValueChange={() => onValueChange(!value)}
          value={value}
          {...otherProps}
        />
      </View>
    </TouchableWithoutFeedback>
  ) : (
    <TouchableWithoutFeedback
      accessibilityLabel={label}
      accessibilityRole="switch"
      accessibilityState={{ checked: value }}
      onPress={() => onValueChange(!value)}
    >
      <View
        className={`flex-row justify-between items-center ${
          my0 ? "my-0" : "my-0"
        } px-5`}
      >
        <AppText>{label}</AppText>
        <Switch
          trackColor={{ false: colors.text, true: colors.primary }}
          aria-hidden
          accessibilityElementsHidden
          className="ml-2"
          onValueChange={() => onValueChange(!value)}
          value={value}
          {...otherProps}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
