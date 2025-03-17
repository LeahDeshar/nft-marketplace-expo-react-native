import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "@/redux/store";
import { buttonStyles, globalStyles, typography } from "@/styles/styles";

import { Header } from "../profile";

const forumData = [
  {
    id: "1",
    title: "Crystal Clear Quartz",
    ethPrice: "1.32ETH",
    price: "$3284.13",
    description:
      "A top-of-the-line coffee maker with various features to make the perfect coffee.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Quartz_oisan.jpg/250px-Quartz_oisan.jpg",
  },
  {
    id: "2",
    title: "Wireless Headphones",
    description: "High-quality sound with noise-cancellation features.",
    image:
      "https://www.logocrystal.com/pt/data/upload/admin/20181119/5bf276312ee48.JPG",
    price: "$149.99",
    rating: 4.2,
  },
  {
    id: "3",
    title: "Smart Watch",
    description:
      "Track your fitness and notifications with a stylish smartwatch.",
    image:
      "https://cdn.shopify.com/s/files/1/0273/4214/3566/files/bigstock-Red-Diamond-On-Black-Backgroun-7398784.jpg?v=1619017505",
    price: "$99.99",
    rating: 4.7,
  },
];
const NewPostPage = () => {
  const isDark = useSelector((state: RootState) => state.theme.dark);
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <View
        style={[
          {
            marginTop: 20,
            // backgroundColor: "#fff",

            borderRadius: 20,
            marginRight: 15,
            width: 200,
            aspectRatio: 1,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 5,
            position: "relative",
          },
        ]}
      >
        <Image
          source={{ uri: item.image }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 20,
          }}
        />
        <View
          style={{
            marginHorizontal: 10,
            position: "absolute",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#212121",
              padding: 6,
              borderRadius: 20,
              right: -160,
              top: 10,
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#fcbc58",
                width: 5,
                aspectRatio: 1,
                borderRadius: 20,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              buttonStyles(isDark ? "dark" : "light", "2xl").secondary,
              { paddingVertical: 20 },
            ]}
          >
            <Text style={[buttonStyles().secondaryText]}>Bid</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View
      style={[
        globalStyles(isDark ? "dark" : "light").containerFlex,
        { padding: 24 },
      ]}
    >
      <Header isDark={isDark} />
      <View
        style={{
          paddingVertical: 30,
        }}
      >
        <Text
          style={[
            typography().heading2,
            typography(isDark ? "dark" : "light").textColor,
          ]}
        >
          Hot Bids
        </Text>
        <FlatList
          data={forumData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 10,
          }}
        />
      </View>
      <View
        style={{
          paddingVertical: 30,
        }}
      >
        <Text
          style={[
            typography().heading2,
            typography(isDark ? "dark" : "light").textColor,
          ]}
        >
          Explore
        </Text>
        <FlatList
          data={forumData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 10,
          }}
        />
      </View>
    </View>
  );
};

const styles = {
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  inputField: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: "#fff",
    marginBottom: 12,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  pickerContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: "#333",
  },
  dropdown: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
  },
  dropdownText: {
    fontSize: 16,
    color: "#333",
  },
  pinToggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  pinToggleText: {
    // fontSize: 16,
    // marginRight: 8,
  },
  pinToggleButton: {
    padding: 2,
  },
  submitButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
  },
  imageUploadContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  imageUploadButton: {
    width: 210,
    height: 210,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#ccc",
    backgroundColor: "#f0f0f0",
  },
  imageUploadInnerContainer: {
    width: 202,
    height: 202,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
  },
  selectedImage: {
    width: 190,
    height: 190,
    borderRadius: 100,
  },
  imageSelectedText: {
    marginTop: 10,
    fontSize: 14,
    color: "#333",
  },
};

export default NewPostPage;
