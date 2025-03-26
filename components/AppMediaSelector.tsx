import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/constants/ThemeProvider";
import AppActivityIndicator from "./AppActivityIndicator";
import { Video, ResizeMode } from "expo-av";
const AppMediaSelector = () => {
  const { colors } = useTheme();
  const [media, setMedia] = useState([]);
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectMedia = async () => {
    try {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permissionResult.granted) {
        Alert.alert(
          "Permission Denied",
          "You need to enable permissions to access the media library."
        );
        return;
      }

      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images", "videos"],
        allowsMultipleSelection: true,
        quality: 1,
      });

      if (!pickerResult.canceled) {
        const selectedMedia = pickerResult.assets.map((asset) => ({
          uri: asset.uri,
          name: asset.fileName || asset.uri.split("/").pop(),
          type: asset.type || "application/octet-stream",
        }));

        setMedia((prev) => [...prev, ...selectedMedia]);
      }
    } catch (error) {
      console.error("Error selecting media:", error);
      Alert.alert("Error", "Failed to select media.");
    }
  };
  const renderMediaPreview = (item) => {
    if (item.type.startsWith("image")) {
      return (
        <Image
          source={{ uri: item.uri }}
          style={styles.mediaPreview}
          resizeMode="cover"
        />
      );
    } else if (item.type.startsWith("video")) {
      return (
        <Video
          source={{ uri: item.uri }}
          style={styles.mediaPreview}
          useNativeControls
          isLooping
          shouldPlay={false}
          resizeMode="cover"
        />
      );
    }
    return null;
  };
  const handleRemoveMedia = (index: number) => {
    setMedia((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!content.trim() && media.length === 0) {
      Alert.alert("Validation Error", "Content or media is required.");
      return;
    }

    const formData = new FormData();
    formData.append("content", content);

    if (media.length > 0) {
      media.forEach((file, index) => {
        formData.append(`files`, {
          uri: file.uri,
          type: file.type,
          name: file.name || `file_${index}`,
        });
      });
    }

    try {
      Alert.alert("Success", "Post created successfully.");

      setContent("");
      setMedia([]);
    } catch (error) {
      console.error("Error uploading post:", error);
      Alert.alert("Error", "Failed to create post.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addMediaButton}
        onPress={handleSelectMedia}
      >
        <Ionicons name="images-outline" size={24} color={colors.text} />
        <Text style={[styles.addMediaText, { color: colors.text }]}>
          Select Media
        </Text>
      </TouchableOpacity>

      <FlatList
        data={media}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.mediaItem}>
            {renderMediaPreview(item)}
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => handleRemoveMedia(index)}
            >
              <Ionicons name="close-circle" size={20} color="red" />
            </TouchableOpacity>
          </View>
        )}
        style={styles.mediaList}
        contentContainerStyle={styles.mediaListContainer}
      />

      <TouchableOpacity
        style={[styles.submitButton, { backgroundColor: colors.primary }]}
        onPress={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? (
          <AppActivityIndicator visible />
        ) : (
          <Text style={styles.submitButtonText}>Submit</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AppMediaSelector;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  addMediaButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  addMediaText: {
    marginLeft: 8,
    fontSize: 16,
  },
  mediaList: {
    marginVertical: 16,
  },
  mediaListContainer: {
    paddingHorizontal: 8,
  },
  mediaItem: {
    position: "relative",
    marginRight: 8,
  },
  mediaPreview: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  removeButton: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "white",
    borderRadius: 10,
  },
  submitButton: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
