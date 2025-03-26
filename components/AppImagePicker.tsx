// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import React, { useEffect, useState } from "react";
// import { useTheme } from "@/constants/ThemeProvider";

// import * as ImagePicker from "expo-image-picker";
// import { Image } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";

// const AppImagePicker = () => {
//   const { colors, dark } = useTheme();

//   const handleNext = async () => {};

//   const handleSelectImage = async () => {
//     try {
//       const permissionResult =
//         await ImagePicker.requestMediaLibraryPermissionsAsync();
//       if (!permissionResult.granted) {
//         alert("Permission to access camera roll is required!");
//         return;
//       }

//       const pickerResult = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ["images", "videos"],
//         allowsEditing: true,
//         quality: 1,
//       });

//       if (!pickerResult.canceled && pickerResult.assets.length > 0) {
//         const firstAsset = pickerResult.assets[0];
//         setSelectedImage(firstAsset.uri);
//       }
//     } catch (error) {
//       console.log("Error picking an image:", error);
//     }
//   };

//   return (
//     <View>
//       <TouchableOpacity
//         onPress={handleSelectImage}
//         style={{
//           backgroundColor: colors.opacity,
//           width: 210,
//           height: 210,
//           justifyContent: "center",
//           alignItems: "center",
//           borderRadius: 100,
//         }}
//       >
//         <LinearGradient
//           colors={["#9f4c76", "#983b3b", "#192f6a"]}
//           style={{
//             width: 210,
//             height: 210,
//             borderRadius: 100,
//             justifyContent: "center",
//             alignItems: "center",
//             position: "absolute",
//           }}
//         />
//         <View
//           style={{
//             width: 202,
//             height: 202,
//             borderRadius: 100,
//             justifyContent: "center",
//             alignItems: "center",
//             backgroundColor: colors.background,
//           }}
//         >
//           <Image
//             source={{ uri: selectedImage }}
//             style={{ width: 190, height: 190, borderRadius: 100 }}
//           />
//         </View>
//         <Ionicons
//           name="camera-outline"
//           size={24}
//           style={{
//             color: colors.text,
//             position: "absolute",
//           }}
//         />
//       </TouchableOpacity>

//       <View
//         style={{
//           marginTop: 35,
//           width: "80%",
//         }}
//       ></View>
//     </View>
//   );
// };

// export default AppImagePicker;

// const styles = StyleSheet.create({});

import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { useTheme } from "@/constants/ThemeProvider";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { utilities } from "@/styles/styles";

const AppImagePicker = ({
  gradientColors = ["#9f4c76", "#983b3b", "#192f6a"],
  size = 210,
}: {
  gradientColors?: string[];
  size?: number;
}) => {
  const { colors } = useTheme();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleSelectImage = async () => {
    try {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        alert("Permission to access the media library is required!");
        return;
      }

      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        quality: 1,
      });

      if (!pickerResult.canceled && pickerResult.assets?.length > 0) {
        setSelectedImage(pickerResult.assets[0].uri);
      }
    } catch (error) {
      console.error("Error selecting an image:", error);
      alert("Something went wrong while selecting the image.");
    }
  };

  return (
    <View style={utilities.center}>
      <TouchableOpacity
        onPress={handleSelectImage}
        style={[
          utilities.centerWithBorder,
          { backgroundColor: colors.opacity, width: size, height: size },
        ]}
      >
        <LinearGradient
          colors={gradientColors}
          style={[
            styles.gradient,
            { width: size, height: size, borderRadius: size / 2 },
          ]}
        />
        <View
          style={[
            utilities.centerWithAbsolute,
            {
              backgroundColor: colors.background,
              width: size - 8,
              height: size - 8,
              borderRadius: (size - 8) / 2,
            },
          ]}
        >
          {selectedImage ? (
            <Image
              source={{ uri: selectedImage }}
              style={{
                width: size - 20,
                height: size - 20,
                borderRadius: (size - 20) / 2,
              }}
            />
          ) : (
            <Ionicons
              name="camera-outline"
              size={size / 8}
              color={colors.text}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AppImagePicker;

const styles = StyleSheet.create({});
