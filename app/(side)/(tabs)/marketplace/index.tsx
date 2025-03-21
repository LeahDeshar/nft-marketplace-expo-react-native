import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  buttonStyles,
  globalStyles,
  PaddingStyles,
  spacing,
  typography,
} from "@/styles/styles";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useNavigation } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Button from "@/components/AppButton";
import DropDownPicker from "react-native-dropdown-picker";
import { Header } from "../profile";

const { width } = Dimensions.get("window");

const forumData = [
  {
    id: "1",
    title: "Amazing Coffee Maker",
    description:
      "A top-of-the-line coffee maker with various features to make the perfect coffee.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSAzyo7UIjEHLUVRGxuy1C7m-W16W6XL4UBw&s",
    price: "$199.99",
    rating: 4.5,
  },
  {
    id: "2",
    title: "Wireless Headphones",
    description: "High-quality sound with noise-cancellation features.",
    image:
      "https://static-01.daraz.com.np/p/9142ccf4acd35f0de87ca8991f5f6d11.jpg",
    price: "$149.99",
    rating: 4.2,
  },
  {
    id: "3",
    title: "Smart Watch",
    description:
      "Track your fitness and notifications with a stylish smartwatch.",
    image: "https://m.media-amazon.com/images/I/7161CULzh+L.jpg",
    price: "$99.99",
    rating: 4.7,
  },
];

const creatorAndSellerData = [
  {
    id: "1",
    name: "John Doe",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSAzyo7UIjEHLUVRGxuy1C7m-W16W6XL4UBw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSAzyo7UIjEHLUVRGxuy1C7m-W16W6XL4UBw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSAzyo7UIjEHLUVRGxuy1C7m-W16W6XL4UBw&s",
    ],
    price: "199.99",
  },
  {
    id: "2",
    name: "Jane Doe",
    images: [
      "https://static-01.daraz.com.np/p/9142ccf4acd35f0de87ca8991f5f6d11.jpg",
    ],
    price: "149.99",
  },
  {
    id: "3",
    name: "John Smith",
    images: ["https://m.media-amazon.com/images/I/7161CULzh+L.jpg"],
    price: "99.99",
  },
];
const MarketPlacePage = () => {
  const isDark = useSelector((state: RootState) => state.theme.dark);
  const [visible, setVisible] = useState(false);

  const slideAnim = useState(new Animated.Value(-300))[0];

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : -300,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [visible]);
  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.cardImage} />
        <View
          style={{
            marginHorizontal: 10,
          }}
        >
          <Text
            style={[
              typography().heading3,
              typography(isDark ? "dark" : "light").textColor,
            ]}
          >
            {item.title}
          </Text>

          <Text style={[typography(isDark ? "dark" : "light").textDescColor]}>
            {item.description}
          </Text>

          <Text style={styles.cardPrice}>{item.price}</Text>

          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>Rating: {item.rating}</Text>
          </View>

          <TouchableOpacity style={styles.seeMoreButton}>
            <Text style={styles.seeMoreButtonText}>See More</Text>
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
          marginTop: 25,
        }}
      >
        <Text
          style={[
            typography().heading2,
            typography(isDark ? "dark" : "light").textColor,
          ]}
        >
          List of top seller and creator
        </Text>
      </View>

      <View
        style={[
          globalStyles(isDark ? "dark" : "light").containerFlexRow,
          buttonStyles(isDark ? "dark" : "light", "2xl").secondary,
          { padding: 24 },
        ]}
      >
        <TouchableOpacity
          style={[
            buttonStyles(isDark ? "dark" : "light", "xl").primary,
            {
              width: 150,
            },
          ]}
        >
          <Text>Seller</Text>
        </TouchableOpacity>
        <View
          style={{
            marginHorizontal: 25,
          }}
        >
          <Image
            source={require("../../../../assets/images/logo/logo.png")}
            style={{
              width: 20,
              height: 20,
              tintColor: "white",
            }}
          />
        </View>
        <TouchableOpacity
          style={[
            buttonStyles(isDark ? "dark" : "light", "xl").outline,
            {
              width: 150,
            },
          ]}
        >
          <Text
            style={[buttonStyles(isDark ? "dark" : "light", "xl").outlineText]}
          >
            Creator
          </Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.container}>
        {creatorAndSellerData.map(
          (item) =>
            item.images.map((image, index) => (
              <View key={`${item.id}-${index}`} style={styles.card}>
                <Image
                  source={{ uri: image }}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                <View style={styles.flatListContent}>
                  <Text style={styles.cardTitle}>{item.name}</Text>
                  <Text style={styles.cardPrice}>${item.price}</Text>
                </View>
              </View>
            ))
          // item.images.map((image, index) => (
          //   <Image
          //     key={`${item.id}-${index}`}
          //     src={image}
          //     alt={item.name}
          //     height={150}
          //     width={160}
          //     style={{
          //       borderRadius: 8,
          //       marginRight: 10,
          //     }}
          //   />
          // ))
        )}
      </View> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 30,
          paddingBottom: 90,
        }}
      >
        {creatorAndSellerData.map((item) => (
          <View
            key={item.id}
            style={{
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "gray",
              }}
            >
              ${item.price}
            </Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={item.images}
              keyExtractor={(image, index) => `${item.id}-${index}`}
              renderItem={({ item: image }) => (
                <View
                  style={{
                    marginRight: 10,
                    borderRadius: 8,
                    overflow: "hidden",
                    elevation: 5,
                  }}
                >
                  <Image
                    source={{ uri: image }}
                    style={{
                      width: 230,
                      height: 150,
                      borderRadius: 15,
                    }}
                    resizeMode="cover"
                  />
                </View>
              )}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default MarketPlacePage;

const styles = StyleSheet.create({
  button: {},
  buttonText: {
    // color: "#fff",
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: "center",
  },
  modalItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  modalItemText: {
    marginLeft: 10,
    fontSize: 18,
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: "#ff0000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  container: {
    // flex: 1,
    paddingVertical: 30,
    // paddingHorizontal: 10,
  },
  flatListContent: {
    paddingHorizontal: 10,
  },
  card: {
    marginTop: 20,
    // backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 20,
    marginRight: 15,
    width: 250,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 12,
    color: "#555",
    marginBottom: 10,
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#007BFF",
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  ratingText: {
    fontSize: 12,
    color: "#FFD700",
  },
  seeMoreButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 10,
    alignItems: "center",
  },
  seeMoreButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
