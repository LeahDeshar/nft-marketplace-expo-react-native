import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "@/redux/store";
import { buttonStyles, globalStyles, typography } from "@/styles/styles";
import { Picker } from "@react-native-picker/picker";
import DropDownPicker from "react-native-dropdown-picker";

const NewPostPage = () => {
  const isDark = useSelector((state: RootState) => state.theme.dark);
  const navigation = useNavigation();

  const [selectedImage, setSelectedImage] = useState(null);
  const [postTitle, setPostTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("event");
  const [price, setPrice] = useState("");
  const [isPinned, setIsPinned] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Event", value: "event" },
    { label: "Banana", value: "banana" },
    { label: "Pear", value: "pear" },
  ]);
  const handleSelectImage = async () => {
    try {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permissionResult.granted) {
        Alert.alert(
          "Permission required",
          "Permission to access the camera roll is required!"
        );
        return;
      }

      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!pickerResult.canceled && pickerResult.assets.length > 0) {
        const firstAsset = pickerResult.assets[0];
        setSelectedImage(firstAsset.uri); // Update state with selected image URI
      }
    } catch (error) {
      console.error("Error picking an image:", error);
      Alert.alert("Error", "An error occurred while picking the image.");
    }
  };

  const handlePostSubmit = () => {
    console.log({
      postTitle,
      description,
      category,
      price,
      selectedImage,
      isPinned,
    });

    Alert.alert("Post Submitted!", "Your post has been successfully created.");
  };

  return (
    <View
      style={[
        globalStyles(isDark ? "dark" : "light").containerFlex,
        { padding: 24 },
      ]}
    >
      <Header isDark={isDark} />

      <ImageUpload
        selectedImage={selectedImage}
        handleSelectImage={handleSelectImage}
      />

      <TextInput
        placeholder="Enter Post Title"
        value={postTitle}
        onChangeText={setPostTitle}
        style={[styles.inputField, { marginTop: 20 }]}
      />

      <TextInput
        placeholder="Describe your post"
        value={description}
        onChangeText={setDescription}
        style={[styles.inputField]}
        multiline
      />

      <View
        style={{
          paddingVertical: 20,
        }}
      >
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          multiple={true}
          placeholder={"Select the category"}
        />
      </View>
      <View style={styles.pickerContainer}>
        <TextInput
          placeholder="Price (if applicable)"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
          style={styles.inputField}
          placeholderTextColor={"grey"}
        />
        <View style={[buttonStyles().outline, globalStyles().containerFlexRow]}>
          <Text
            style={[
              styles.pinToggleText,
              typography(isDark ? "dark" : "light").textColor,
            ]}
          >
            Pin Post
          </Text>
          <TouchableOpacity
            onPress={() => setIsPinned((prev) => !prev)}
            style={styles.pinToggleButton}
          >
            <Ionicons
              name={isPinned ? "pin" : "pin-outline"}
              size={24}
              color={isPinned ? "gold" : "gray"}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Submit Button */}
      <TouchableOpacity onPress={handlePostSubmit} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit Post</Text>
      </TouchableOpacity>
    </View>
  );
};

export const Header = ({ isDark }) => {
  return (
    <View
      style={[globalStyles(isDark ? "dark" : "light").containerFlexRowSpace]}
    >
      <View
        style={[
          globalStyles(isDark ? "dark" : "light", 0, 0, 12).containerFlexRow,
        ]}
      >
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
          }}
          style={styles.profileImage}
        />
        <TouchableOpacity>
          <Ionicons name="notifications" size={25} color="white" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={[typography(isDark ? "dark" : "light").textColor]}>
          Good Morning
        </Text>
      </View>
    </View>
  );
};

const ImageUpload = ({ selectedImage, handleSelectImage }) => {
  return (
    <View style={styles.imageUploadContainer}>
      <TouchableOpacity
        onPress={handleSelectImage}
        style={styles.imageUploadButton}
      >
        <View style={styles.imageUploadInnerContainer}>
          {selectedImage ? (
            <Image
              source={{ uri: selectedImage }}
              style={styles.selectedImage}
            />
          ) : (
            <Ionicons name="camera-outline" size={40} color="#aaa" />
          )}
        </View>
      </TouchableOpacity>
      {selectedImage && (
        <Text style={styles.imageSelectedText}>Image Selected!</Text>
      )}
    </View>
  );
};

const styles = {
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  inputField: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: "#fff",
    marginBottom: 12,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  pickerContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: "#333",
  },
  dropdown: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
  },
  dropdownText: {
    fontSize: 16,
    color: "#333",
  },
  pinToggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  pinToggleText: {
    // fontSize: 16,
    // marginRight: 8,
  },
  pinToggleButton: {
    padding: 2,
  },
  submitButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
  },
  imageUploadContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  imageUploadButton: {
    width: 210,
    height: 210,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#ccc",
    backgroundColor: "#f0f0f0",
  },
  imageUploadInnerContainer: {
    width: 202,
    height: 202,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
  },
  selectedImage: {
    width: 190,
    height: 190,
    borderRadius: 100,
  },
  imageSelectedText: {
    marginTop: 10,
    fontSize: 14,
    color: "#333",
  },
};

export default NewPostPage;
