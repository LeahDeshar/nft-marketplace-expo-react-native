import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Vibration,
  TouchableOpacity,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useTheme } from "@/constants/ThemeProvider";
import { globalStyles } from "@/styles/styles";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const AppBarcode = () => {
  const { colors } = useTheme();
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState<string | null>(null);
  const isDark = useSelector((state: RootState) => state.theme.dark);
  const [permission, requestPermission] = useCameraPermissions();

  // Request camera permissions
  useEffect(() => {
    const getCameraPermissions = async () => {
      const status = await requestPermission();
      setHasPermission(status.granted);
    };
    getCameraPermissions();
  }, []);
  console.log(permission);
  const handleBarcodeScanned = ({ data }: { data: string }) => {
    Vibration.vibrate(500);
    setScanned(true);
    setScannedData(data);
  };
  if (hasPermission === null) {
    return (
      <View style={[globalStyles(isDark ? "dark" : "light").container]}>
        <Text style={styles.infoText}>Requesting camera permission...</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={[globalStyles(isDark ? "dark" : "light").container]}>
        <Text style={[styles.infoText, { color: colors.error }]}>
          No access to camera
        </Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <CameraView
        style={StyleSheet.absoluteFillObject}
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
      />

      {scanned && scannedData && (
        <View style={[globalStyles(isDark ? "dark" : "light").container]}>
          <Text style={styles.resultText}>Scanned Data:</Text>
          <Text style={styles.resultData}>{scannedData}</Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.primary }]}
            onPress={() => {
              setScanned(false);
              setScannedData(null);
            }}
          >
            <Text style={styles.buttonText}>Scan Again</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  infoText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },

  resultContainer: {
    position: "absolute",
    bottom: 30,
    width: "90%",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  resultText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  resultData: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
});

export default AppBarcode;
