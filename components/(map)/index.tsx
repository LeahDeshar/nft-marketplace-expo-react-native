import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import appartments from "@/assets/data/appartments.json";

import MapView from "react-native-maps";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import CustomMarker from "@/components/map/CustomMarker";
import AppListItem from "@/components/map/AppListItem";

const MapScreen = () => {
  const [selectedAppt, setSelectedAppt] = useState(null);

  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // References
  const mapRef = useRef<MapView>(null); // MapView reference
  const bottomSheetRef = useRef<BottomSheet>(null); // BottomSheet reference

  const snapPoints = useMemo(() => ["8%", "50%", "90%"], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);

    if (mapRef.current) {
      let zoomLevel = 0.5;

      if (index === 0) {
        zoomLevel = 0.05;
      } else if (index === 1) {
        zoomLevel = 0.01;
      } else if (index === 2) {
        zoomLevel = 0.0005;
      }

      mapRef.current.animateCamera({
        center: {
          latitude: mapRegion.latitude,
          longitude: mapRegion.longitude,
        },
        zoom: zoomLevel,
      });
    }
  }, []);

  return (
    <View>
      <MapView
        ref={mapRef}
        style={styles.map}
        region={mapRegion}
        initialRegion={mapRegion}
      >
        {appartments?.map((app) => (
          <CustomMarker
            key={app.id}
            app={app}
            onPress={() => setSelectedAppt(app)}
          />
        ))}
      </MapView>

      <View
        style={{
          position: "absolute",
          bottom: 80,
          left: 11,
        }}
      >
        {selectedAppt && <AppListItem app={selectedAppt} />}
      </View>

      <BottomSheet
        index={0}
        snapPoints={snapPoints}
        ref={bottomSheetRef}
        onChange={handleSheetChanges} // Handle sheet changes
      >
        <View style={styles.contentContainer}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 10,
              marginTop: 5,
            }}
          >
            Over {appartments.length} Places
          </Text>
          <BottomSheetFlatList
            contentContainerStyle={{
              paddingVertical: 20,
            }}
            data={appartments}
            renderItem={({ item }) => <AppListItem app={item} />}
          />
        </View>
      </BottomSheet>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
