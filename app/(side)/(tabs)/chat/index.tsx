import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Header } from "../newpost";
import { globalStyles, typography } from "@/styles/styles";
import { useSelector } from "react-redux";
import { useNavigation } from "expo-router";
import { RootState } from "@/redux/store";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const ChatPage = () => {
  const isDark = useSelector((state: RootState) => state.theme.dark);
  const navigation = useNavigation();
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
          Messages
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
      <ChatSection />
    </View>
  );
};

export default ChatPage;

const ChatSection = () => {
  const isDark = useSelector((state: RootState) => state.theme.dark);
  const [activeTab, setActiveTab] = useState("allChat");

  const peopleList = [
    {
      id: "1",
      name: "John Doe",
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: "2",
      name: "Jane Smith",
      imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: "3",
      name: "Alice Johnson",
      imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: "4",
      name: "Bob Lee",
      imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
    },
  ];

  const groupsList = [
    {
      id: "1",
      name: "Family Group",
      imageUrl: "https://placeimg.com/80/80/people",
    },
    {
      id: "2",
      name: "Work Team",
      imageUrl: "https://placeimg.com/80/80/people",
    },
  ];

  const chatLeadersList = [
    {
      id: "1",
      name: "John Doe",
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: "2",
      name: "Jane Smith",
      imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
    },
  ];

  const renderList = () => {
    let data = [];
    if (activeTab === "allChat") {
      data = peopleList;
    } else if (activeTab === "groups") {
      data = groupsList;
    } else if (activeTab === "chatLeaders") {
      data = chatLeadersList;
    }

    return (
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.profileImage}
            />
            <Text style={[typography(isDark ? "dark" : "light").textColor]}>
              {item.name}
            </Text>
          </View>
        )}
      />
    );
  };

  return (
    <View>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "allChat" && {
              backgroundColor: "#8080805f",
              borderRadius: 25,
            },
          ]}
          onPress={() => setActiveTab("allChat")}
        >
          <Text style={[typography(isDark ? "dark" : "light").textColor]}>
            All Chat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "groups" && {
              backgroundColor: "grey",
              borderRadius: 25,
            },
          ]}
          onPress={() => setActiveTab("groups")}
        >
          <Text style={[typography(isDark ? "dark" : "light").textColor]}>
            Groups
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "chatLeaders" && {
              backgroundColor: "grey",
              borderRadius: 25,
            },
          ]}
          onPress={() => setActiveTab("chatLeaders")}
        >
          <Text style={[typography(isDark ? "dark" : "light").textColor]}>
            Chat Leaders
          </Text>
        </TouchableOpacity>
      </View>

      {/* Chat List */}
      <View style={styles.chatListContainer}>{renderList()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  darkBackground: {
    backgroundColor: "#1e1e1e",
  },
  lightBackground: {
    backgroundColor: "#ffffff",
  },
  tabBar: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#8080805f",
    borderRadius: 25,
    marginVertical: 30,
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  tabButtonText: {
    fontSize: 16,
    color: "#333",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#8080805f",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  listItemText: {
    fontSize: 18,
  },
  chatListContainer: {
    paddingLeft: 15,
  },
});
