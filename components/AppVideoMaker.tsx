import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import {
  Camera,
  CameraView,
  CameraType,
  useCameraPermissions,
} from "expo-camera";
import { Video } from "expo-av";
import { useTheme } from "@/constants/ThemeProvider";
import { globalStyles } from "@/styles/styles";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const AppVideoMaker = () => {
  const { colors } = useTheme();
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [videoUri, setVideoUri] = useState<string | null>(null);
  const [cameraRef, setCameraRef] = useState<Camera | null>(null);
  const isDark = useSelector((state: RootState) => state.theme.dark);
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  // Request camera permissions
  useEffect(() => {
    const getCameraPermissions = async () => {
      const status = await requestPermission();
      setHasPermission(status.granted);
    };
    getCameraPermissions();
  }, []);

  // Start recording
  const startRecording = async () => {
    if (cameraRef) {
      const videoRecordPromise = cameraRef.recordAsync();
      if (videoRecordPromise) {
        const data = await videoRecordPromise;
        setVideoUri(data.uri);
        setIsRecording(false);
      }
    }
  };

  // Stop recording
  const stopRecording = () => {
    if (cameraRef) {
      cameraRef.stopRecording();
    }
    setIsRecording(false);
  };

  if (hasPermission === null) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.infoText}>Requesting camera permission...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={[styles.infoText, { color: colors.error }]}>
          No access to camera
        </Text>
      </View>
    );
  }
  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        width: "100%",
        height: "100%",
        borderWidth: 1,
      }}
    >
      <CameraView style={StyleSheet.absoluteFillObject} facing={facing}>
        <View style={styles.controlPanel}>
          <Button
            title={isRecording ? "Stop Recording" : "Start Recording"}
            onPress={() => {
              if (isRecording) {
                stopRecording();
              } else {
                setIsRecording(true);
                startRecording();
              }
            }}
            color={colors.primary}
          />
        </View>
      </CameraView>

      <Video
        source={{ uri: videoUri }}
        style={styles.video}
        shouldPlay
        isLooping
        resizeMode="contain"
      />
      {videoUri && (
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={() => setVideoUri(null)} // Reset and allow new recording
        >
          <Text style={styles.buttonText}>Record New Video</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  infoText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },

  controlPanel: {
    position: "absolute",
    bottom: 350,
    left: 50,
    right: 50,
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
});

export default AppVideoMaker;
