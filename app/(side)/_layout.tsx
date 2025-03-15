import "react-native-gesture-handler";
import * as React from "react";
import { Drawer } from "expo-router/drawer";
import { useTheme } from "@/constants/ThemeProvider";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";
const CustomDrawerContent = (props) => {
  const { colors, dark } = useTheme();

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          }}
          style={styles.profileImage}
        />
        <Text style={[styles.profileName, { color: colors.text }]}>
          John Doe
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
export default function DrawerLayout() {
  const { colors, dark } = useTheme();
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: dark ? "#323232e8" : "white",
        },
        drawerActiveTintColor: colors.text,

        drawerInactiveTintColor: "white",
        // drawerItemStyle: {
        //   backgroundColor: "#5f5f5f9c",
        //   marginBottom: 10,
        // },
        // drawerLabelStyle: {
        //   color: "white",
        // },
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Home",
          title: "",
        }}
      />

      <Drawer.Screen
        name="wishlist"
        options={{
          drawerLabel: "Wishlist",
          title: "",
        }}
      />
    </Drawer>
  );
}
const styles = StyleSheet.create({
  profileContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});
