import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/constants/token";
import { utilities } from "@/styles/styles";

interface IconProps {
  backgroundColor?: string;
  color?: string;
  name: string;
  size?: number;
}

export default function AppIcon({
  backgroundColor = colors.black,
  color = colors.white,
  name,
  size = 40,
}: IconProps) {
  const dynamicViewStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor,
  };
  return (
    <View style={[dynamicViewStyle, utilities.center]}>
      <MaterialCommunityIcons
        color={color}
        name={name as any}
        size={size * 0.5}
      />
    </View>
  );
}
