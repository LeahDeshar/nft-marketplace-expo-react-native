import { useNavigationSearch } from "@/hooks/useNavigationSearch";
import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

const SearchBar = () => {
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: "Search...",
      textColor: "black",
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={"black"}
        value={search}
        editable={false}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    color: "#333",
    borderWidth: 1,
    borderRadius: 5,
  },
});
