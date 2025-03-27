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
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "@/redux/store";
import {
  buttonStyles,
  getRadius,
  globalStyles,
  PaddingStyles,
  typography,
} from "@/styles/styles";
import { Picker } from "@react-native-picker/picker";
import DropDownPicker from "react-native-dropdown-picker";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import Button from "@/components/AppButton";

const NewProfilePage = () => {
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
        setSelectedImage(firstAsset.uri);
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
    // <View
    //   style={[
    //     globalStyles(isDark ? "dark" : "light").containerFlex,
    //     { padding: 24 },
    //   ]}
    // >
    //   <Header isDark={isDark} />

    //   <ImageUpload
    //     selectedImage={selectedImage}
    //     handleSelectImage={handleSelectImage}
    //   />

    //   <TextInput
    //     placeholder="Enter Post Title"
    //     value={postTitle}
    //     onChangeText={setPostTitle}
    //     style={[styles.inputField, { marginTop: 20 }]}
    //   />

    //   <TextInput
    //     placeholder="Describe your post"
    //     value={description}
    //     onChangeText={setDescription}
    //     style={[styles.inputField]}
    //     multiline
    //   />

    //   <View
    //     style={{
    //       paddingVertical: 20,
    //     }}
    //   >
    //     <DropDownPicker
    //       open={open}
    //       value={value}
    //       items={items}
    //       setOpen={setOpen}
    //       setValue={setValue}
    //       setItems={setItems}
    //       multiple={true}
    //       placeholder={"Select the category"}
    //     />
    //   </View>
    //   <View style={styles.pickerContainer}>
    //     <TextInput
    //       placeholder="Price (if applicable)"
    //       value={price}
    //       onChangeText={setPrice}
    //       keyboardType="numeric"
    //       style={styles.inputField}
    //       placeholderTextColor={"grey"}
    //     />
    //     <View style={[buttonStyles().outline, globalStyles().containerFlexRow]}>
    //       <Text
    //         style={[
    //           styles.pinToggleText,
    //           typography(isDark ? "dark" : "light").textColor,
    //         ]}
    //       >
    //         Pin Post
    //       </Text>
    //       <TouchableOpacity
    //         onPress={() => setIsPinned((prev) => !prev)}
    //         style={styles.pinToggleButton}
    //       >
    //         <Ionicons
    //           name={isPinned ? "pin" : "pin-outline"}
    //           size={24}
    //           color={isPinned ? "gold" : "gray"}
    //         />
    //       </TouchableOpacity>
    //     </View>
    //   </View>

    //   {/* Submit Button */}
    //   <TouchableOpacity onPress={handlePostSubmit} style={styles.submitButton}>
    //     <Text style={styles.submitButtonText}>Submit Post</Text>
    //   </TouchableOpacity>
    // </View>
    <View style={{ flex: 1 }}>
      <View style={{ position: "relative" }}>
        <View
          style={{
            position: "absolute",
            top: 50,
            zIndex: 10,
            paddingHorizontal: 24,
            backgroundColor: "transparent",
          }}
        >
          <Header isDark={isDark} />
        </View>
      </View>

      <ParallaxScrollView
        headerImage={
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1621193596485-90a3c38023f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={{
              width: "100%",
              height: "100%",
            }}
            resizeMode="cover"
          />
        }
        headerBackgroundColor={{ dark: "#000", light: "#fff" }}
      >
        <View>
          <View
            style={{
              top: -100,
              zIndex: 10,
            }}
          >
            <ImageUpload
              selectedImage={selectedImage}
              handleSelectImage={handleSelectImage}
            />

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={[typography().textColor]}>Bessie Cooper</Text>
              <Text style={[globalStyles().opacityText]}>
                98fsdf53rfsd3343ds
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
                marginBottom: 20,
              }}
            >
              <TouchableOpacity
                style={[
                  buttonStyles(isDark ? "dark" : "light", "xl").secondary,
                ]}
                onPress={() => navigation.navigate("EditProfile")}
              >
                <Text style={[typography().primaryTextColor]}>
                  Edit Profile{" "}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[buttonStyles(isDark ? "dark" : "light", "2xl").outline]}
              >
                <AntDesign
                  name="upload"
                  style={[typography().primaryTextColor]}
                  size={15}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[buttonStyles(isDark ? "dark" : "light", "2xl").outline]}
              >
                <Ionicons
                  name="ellipsis-horizontal"
                  style={[typography().primaryTextColor]}
                  size={15}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ParallaxScrollView>
    </View>
  );
};

export const Header = ({ isDark }: { isDark: boolean }) => {
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
          source={require("../../../../assets/images/logo/logo.png")}
          style={{
            width: 15,
            height: 15,
            resizeMode: "contain",
          }}
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
  );
};

interface ImageUploadProps {
  selectedImage: string | null;
  handleSelectImage: (image: string) => void;
}
const ImageUpload = ({
  selectedImage,
  handleSelectImage,
}: ImageUploadProps) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={handleSelectImage}
        style={{
          width: 150,
          height: 150,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 100,
          backgroundColor: "#2c2c2c",

          shadowColor: "#5a524c",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 10,
          elevation: 4,
        }}
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
  submitButton: {},
  submitButtonText: {
    color: "white",
    fontSize: 18,
  },
  imageUploadContainer: {},
  imageUploadButton: {},
  imageUploadInnerContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedImage: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  imageSelectedText: {
    marginTop: 10,
    fontSize: 14,
    color: "#333",
  },
};

export default NewProfilePage;
