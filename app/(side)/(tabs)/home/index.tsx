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
        <Image source={{ uri: item.image }} style={styles.cardImage} />
        <View
          style={{
            marginHorizontal: 10,
            position: "absolute",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#212121",
              padding: 5,
              width: 15,
              aspectRatio: 1,
              borderRadius: 20,
              right: -160,
              top: 15,

              alignItems: "center",
              justifyContent: "center",
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
            Live Auction
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
            Hot Bids
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
            Explore
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
  card: {},
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
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
  seeMoreButton: {},
  seeMoreButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
