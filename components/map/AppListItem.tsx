import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const AppListItem = ({ app }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const descriptionText = showFullDescription
    ? app.description
    : `${app.description.slice(0, 50)}...`;

  return (
    <View style={styles.card}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Image
          source={{
            uri: app.image,
          }}
          style={{
            width: 150,
            height: "auto",
            resizeMode: "cover",
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
          }}
        />
        <View
          style={{
            padding: 10,
            width: "60%",
          }}
        >
          <Text style={styles.title}>{app.title}</Text>
          <Text style={styles.desc}>{descriptionText}</Text>
          <TouchableOpacity
            style={{
              marginLeft: 5,
              marginBottom: 8,
            }}
            onPress={toggleDescription}
          >
            <Text>{showFullDescription ? "Show less" : "Read more"}</Text>
          </TouchableOpacity>
          {/* <Text style={styles.desc}>
            {showFullDescription ? "Show less" : "Read more"}
          </Text> */}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.title}>$ {app.price} night</Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Ionicons name="star" color={"orange"} style={{ marginTop: 1 }} />
              <Text style={styles.title}>
                {app.rating} ({app?.numOfStars})
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AppListItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    // position: "absolute",
    // top: 550,
    // right: 10,
    // left: 10,
    margin: 10,
    borderRadius: 20,
    flexDirection: "row",
    shadowColor: "#00000056",
    shadowOffset: { width: 5, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    // overflow: "hidden",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 5,
  },
  price: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  desc: {
    color: "grey",
    marginLeft: 5,
    marginBottom: 5,
  },
});
