import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";

const CustomMarker = ({ app, onPress }) => {
  return (
    <Marker
      key={app.id}
      onPress={onPress}
      coordinate={{
        latitude: app.lat,
        longitude: app.long,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 5,
          paddingHorizontal: 18,
          borderWidth: 1,
          borderColor: " gray",
          borderRadius: 20,
        }}
      >
        <Text style={{ fontFamily: "InterBold" }}>${app.price}</Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;

const styles = StyleSheet.create({});
