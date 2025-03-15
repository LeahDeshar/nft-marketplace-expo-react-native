import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { useTheme } from "@/constants/ThemeProvider";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const HomeLayout = () => {
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
            // headerTintColor: colors.text,
            // headerTransparent: true,
            // headerBlurEffect: dark ? "prominent" : "light",
            // headerShadowVisible: false,

            // headerTitle: "",
            // headerLeft: () => (
            //   <View>
            //     <Text
            //       style={{
            //         fontSize: 25,
            //         color: colors.text,
            //       }}
            //     >
            //       Map
            //     </Text>
            //   </View>
            // ),
            // headerRight: () => (
            //   <View
            //     style={{
            //       flexDirection: "row",
            //       justifyContent: "space-between",
            //       alignItems: "center",
            //       gap: 16,
            //       marginRight: 10,
            //     }}
            //   >
            //     <TouchableOpacity>
            //       <FontAwesome name="bolt" size={20} color={colors.icon} />
            //     </TouchableOpacity>
            //     <TouchableOpacity
            //       style={{
            //         marginLeft: 5,
            //         marginRight: 5,
            //       }}
            //     >
            //       <AntDesign name="message1" size={20} color={colors.icon} />
            //     </TouchableOpacity>
            //   </View>
            // ),
          }}
        />
        <Stack.Screen
          name="SearchBar"
          options={{
            presentation: "modal",
            title: "Search Product",
          }}
        />
      </Stack>
    </View>
  );
};

export default HomeLayout;
