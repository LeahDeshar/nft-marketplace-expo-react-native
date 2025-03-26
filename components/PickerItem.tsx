import { TouchableHighlight } from "react-native";

import AppText from "./AppText";
import { colors } from "@/constants/token";

interface PickerItemProps {
  item: { label: string };
  onPress: () => void;
}

export default function PickerItem({ item, onPress }: PickerItemProps) {
  return (
    <TouchableHighlight
      className="p-4"
      underlayColor={colors.mediumGray}
      onPress={onPress}
    >
      <AppText>{item.label}</AppText>
    </TouchableHighlight>
  );
}
