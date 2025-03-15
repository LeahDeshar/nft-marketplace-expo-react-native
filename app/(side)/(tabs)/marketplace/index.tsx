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
import { Header } from "../newpost";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useNavigation } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Button from "@/components/AppButton";
import DropDownPicker from "react-native-dropdown-picker";

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
const ItemButton = ({ isDark }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const items = [
    { id: "1", name: "Explore All", icon: "search" },
    { id: "2", name: "My Sales", icon: "cart" },
    { id: "3", name: "My Purchase", icon: "list" },
  ];

  return (
    <View
      style={[
        {
          marginTop: 20,
        },
      ]}
    >
      <TouchableOpacity
        style={{
          position: "relative",
        }}
        onPress={() => setModalVisible(true)}
      >
        <View
          style={[
            buttonStyles(isDark ? "dark" : "light", "xl").primary,
            {
              width: 150,
            },
          ]}
        >
          <Text style={styles.buttonText}>Show Items</Text>
        </View>
        <View
          style={{
            backgroundColor: "#272D2D",
            position: "absolute",
            borderRadius: 25,
            zIndex: 50,
            left: -9,
          }}
        >
          <View
            style={{
              // #677777
              backgroundColor: "#48d769",
              borderRadius: 25,
              margin: 4,
              padding: 5,
            }}
          >
            <Ionicons name="play" size={23} />
          </View>
        </View>
      </TouchableOpacity>
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <FlatList
              data={items}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.modalItem}>
                  <Ionicons name={item.icon} size={24} color="black" />
                  <Text style={styles.modalItemText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const MarketPlacePage = () => {
  const isDark = useSelector((state: RootState) => state.theme.dark);
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState("event");
  const navigation = useNavigation();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Pear", value: "pear" },
  ]);
  // const slideAnim = useRef(new Animated.Value(-300)).current;
  // useEffect(() => {
  //   if (visible) {
  //     Animated.timing(slideAnim, {
  //       toValue: 0,
  //       duration: 500,
  //       useNativeDriver: true,
  //     }).start();
  //   } else {
  //     Animated.timing(slideAnim, {
  //       toValue: -300,
  //       duration: 500,
  //       useNativeDriver: true,
  //     }).start();
  //   }
  // }, [visible, slideAnim]);

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
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 25,
        }}
      >
        <Text
          style={[
            typography().heading2,
            typography(isDark ? "dark" : "light").textColor,
          ]}
        >
          Marketplace
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "grey",
              borderRadius: 50,
              padding: 5,
            }}
            onPress={() => setVisible(!visible)}
          >
            <Ionicons name="search" color="white" size={15} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
      {visible && (
        <Animated.View
          style={[
            {
              position: "absolute",
              zIndex: 100,

              width: width,
              // height: "auto",
              justifyContent: "center",
              overflow: "hidden",
              borderBottomLeftRadius: 100,
              borderBottomRightRadius: 100,
            },
            {
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <BlurView
            intensity={50}
            tint="light"
            // style={{
            //   position: "absolute",
            //   zIndex: 100,

            //   width: width,
            //   height: 300,
            //   justifyContent: "center",
            //   padding: 15,
            //   overflow: "hidden",
            //   borderBottomLeftRadius: 100,
            //   borderBottomRightRadius: 100,
            // }}
            style={{
              flex: 1,
              padding: 15,
              paddingVertical: 50,
              justifyContent: "center",
            }}
          >
            <Text
              style={[
                typography(isDark ? "dark" : "light").textColor,
                typography().heading3,
                {
                  textAlign: "center",
                  paddingVertical: 10,
                },
              ]}
            >
              Search For The Best
            </Text>
            <TextInput
              placeholder="Search..."
              style={{
                backgroundColor: "#ffffff",
                paddingVertical: 15,

                padding: 10,
                paddingLeft: 20,
                borderRadius: 25,
                marginBottom: 10,
              }}
              placeholderTextColor={"#363636"}
            />
            {/* <Picker
              mode="dialog"
              selectedValue={category}
              onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
            >
              <Picker.Item label="Event" value="event" />
              <Picker.Item
                label="Lost object or animal"
                value="lost object or animal"
              />
              <Picker.Item label="Sell or exchange" value="sell or exchange" />
            </Picker> */}
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 15,
              }}
            >
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder={"Choose a fruit."}
              />
            </View>
            <View
              style={[
                { flexDirection: "row", justifyContent: "space-between" },
              ]}
            >
              <Button
                style={[buttonStyles().primary]}
                title="Search"
                onPress={() => console.log("Searching...")}
              />
              <Button
                style={[buttonStyles().secondary]}
                title="Cancel"
                onPress={() => setVisible(false)}
              />
            </View>
          </BlurView>
        </Animated.View>
      )}
      <ItemButton isDark={isDark} />

      <ScrollView>
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
