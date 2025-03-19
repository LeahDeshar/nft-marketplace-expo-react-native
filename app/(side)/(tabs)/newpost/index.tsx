import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
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
            borderRadius: 20,
            marginRight: 15,
            width: 240,
            height: "auto",
            // aspectRatio: 1,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 5,
            backgroundColor: "#342c24",
          },
        ]}
      >
        <View
          style={{
            position: "relative",
            height: 180,
          }}
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
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                top: 15,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#212121",
                  padding: 3,
                  width: 35,
                  aspectRatio: 1,
                  borderRadius: 20,

                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <EvilIcons name="heart" size={24} color="red" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#212121",
                  padding: 5,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "#fcbc58",
                    paddingHorizontal: 5,
                    fontSize: 12,
                  }}
                >
                  New Bid 🔥
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <Text
            style={{
              color: "#fff",
              padding: 10,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Post Work Personal
          </Text>
          <View
            style={[
              globalStyles(isDark ? "dark" : "light").containerFlexRowSpace,
              { padding: 10 },
            ]}
          >
            <Text
              style={[
                // body
                typography().body,
                typography(isDark ? "dark" : "light").primaryTextColor,
                {
                  fontWeight: "bold",
                },
              ]}
            >
              2.0 ETH
            </Text>
            <Text
              style={[
                typography(isDark ? "dark" : "light").textColor,
                {
                  fontWeight: "bold",
                },
              ]}
            >
              $4975.96
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
            }}
          >
            <TouchableOpacity
              style={{
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  paddingBottom: 8,
                }}
              >
                {[
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://images.unsplash.com/photo-1512646605205-78422b7c7896?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ].map((image, index) => (
                  <Image
                    key={index}
                    source={{
                      uri: image,
                    }}
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: 20,
                      left: -5 * index,
                    }}
                  />
                ))}
              </View>
              <Text style={[typography(isDark ? "dark" : "light").textColor]}>
                3 in stock
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                buttonStyles(isDark ? "dark" : "light", "2xl").secondaryReverse,
              ]}
            >
              <Text style={[buttonStyles().secondaryText]}>Place a Bid</Text>
            </TouchableOpacity>
          </View>
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
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 10,
            }}
          >
            {[
              "All",
              "Art",
              "Fashion",
              "Collectibles",
              "Music",
              "Domains",
              "Virtual Worlds",
            ].map((category, index) => (
              <TouchableOpacity
                style={{
                  padding: 10,
                  borderRadius: 20,
                  backgroundColor: index === 0 ? "#fcbc58" : "#212121",
                  marginRight: 10,
                }}
              >
                <Text
                  style={{
                    color: index === 0 ? "#212121" : "#fff",
                  }}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
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
