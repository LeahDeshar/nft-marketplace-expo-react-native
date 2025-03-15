import { RootState } from "@/redux/store";
import {
  buttonStyles,
  getRadius,
  globalStyles,
  PaddingStyles,
  radius,
  spacing,
  typography,
} from "@/styles/styles";
import {
  EvilIcons,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";

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

const HomePage = () => {
  const isDark = useSelector((state: RootState) => state.theme.dark);
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("SearchBar");
  };
  const micHandler = () => {
    console.log("speech to text");
  };
  // const searchHandler = () => {
  //   console.log(search);
  //   setSearch("");
  // };
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
      <View
        style={[globalStyles(isDark ? "dark" : "light").containerFlexRowSpace]}
      >
        <View
          style={[
            globalStyles(isDark ? "dark" : "light", 0, 0, 12).containerFlexRow,
          ]}
        >
          <Image
            source={require("../../../../assets/images/logo/logo.png")}
            style={[styles.profileImage]}
          />

          <TouchableOpacity>
            <Text
              style={[
                typography().heading2,
                typography(isDark ? "dark" : "light").textColor,
                typography().primaryRegularFont,
              ]}
            >
              NFT
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            globalStyles(isDark ? "dark" : "light", 0, 0, 12).containerFlexRow,
          ]}
        >
          <TouchableOpacity
            style={[
              globalStyles(isDark ? "dark" : "light").opacityBG,
              PaddingStyles(0, 10, 10).container,

              {
                marginRight: 10,
                borderRadius: getRadius("2xl"),
                position: "relative",
              },
            ]}
          >
            <View
              style={{
                position: "absolute",
                zIndex: 1,
              }}
            >
              <Image
                source={require("../../../../assets/images/logo/logo.png")}
                style={{
                  width: 10,
                  height: 10,
                  top: 8,
                  tintColor: "white",
                  marginLeft: 20,
                }}
              />
            </View>
            <Feather
              name="bell"
              size={20}
              style={[globalStyles(isDark ? "dark" : "light").opacityText]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              globalStyles(isDark ? "dark" : "light").opacityBG,
              PaddingStyles(0, 10, 10).container,

              {
                marginRight: 10,
                borderRadius: getRadius("2xl"),
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <MaterialIcons
              name="currency-bitcoin"
              size={16}
              style={[
                typography(isDark ? "dark" : "light").textColor,
                { marginRight: 5 },
              ]}
            />
            <Text style={[typography(isDark ? "dark" : "light").textColor]}>
              6.980
            </Text>
            <Text
              style={[
                globalStyles(isDark ? "dark" : "light").opacityText,
                { marginLeft: 5 },
              ]}
            >
              ETH
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View
          style={[
            globalStyles().containerFlexRowSpace,
            {
              paddingTop: 15,
            },
          ]}
        >
          <Image
            source={require("../../../../assets/images/create2.png")}
            style={{
              // width: 10,
              // height: 90,
              top: 8,
              // tintColor: "white",
              // marginLeft: 20,
              // resizeMode: "contain",
            }}
          />
          {/* <Text
            style={[
              typography().heading2,
              typography(isDark ? "dark" : "light").textColor,
              typography().primaryRegularFont,
            ]}
          >
            Create ,sell and own NFTS
          </Text> */}
        </View>
        {/* <View
          style={[
            globalStyles(isDark ? "dark" : "light").containerFlexRow,
            PaddingStyles(spacing.small, spacing.medium, 0).container,
            globalStyles(isDark ? "dark" : "light").bgColor,
            {
              height: 40,
              marginTop: 20,

              borderRadius: radius.xl,

              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.1,
              shadowColor: "#a1a1a1b9",
              shadowRadius: 3,
            },
          ]}
        >
          <TouchableOpacity
            style={[
              {
                flex: 1,
                alignSelf: "center",
                paddingVertical: 5,
              },
            ]}
            onPress={handlePress}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome name="search" size={20} />
              <Text
                style={{
                  color: "#9a9a9ae9",
                  textAlign: "center",
                  marginLeft: 10,
                }}
              >
                Search the product ...
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={micHandler}>
            <Feather name="mic" size={20} />
          </TouchableOpacity>
        </View> */}

        <View style={styles.container}>
          <Text
            style={[
              typography().heading2,
              typography(isDark ? "dark" : "light").textColor,
            ]}
          >
            Forum
          </Text>
          <FlatList
            data={forumData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
          />
        </View>
        <View style={styles.container}>
          <Text
            style={[
              typography().heading2,
              typography(isDark ? "dark" : "light").textColor,
            ]}
          >
            News
          </Text>
          <FlatList
            data={forumData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  profileImage: {
    width: 15,
    height: 15,
    resizeMode: "contain",
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
