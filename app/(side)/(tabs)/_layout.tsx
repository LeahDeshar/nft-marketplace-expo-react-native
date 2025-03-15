import { Tabs } from "expo-router";
import React from "react";
import { Image, Platform } from "react-native";

import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  AntDesign,
  EvilIcons,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            height: 75,
            backgroundColor: Colors[colorScheme ?? "light"].opacity,
            borderTopWidth: 0,
            paddingTop: 8,
            bottom: 30,
            marginHorizontal: 20,
            borderRadius: 15,

            overflow: "hidden",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
            // <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="newpost"
        options={{
          title: "Feed",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cards-outline"
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="marketplace"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/images/logo/logo.png")}
              style={{
                width: 40,
                height: 40,
              }}
            />
          ),

          tabBarIconStyle: {
            top: 4,
          },
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Top",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="crown-outline"
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={23} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
