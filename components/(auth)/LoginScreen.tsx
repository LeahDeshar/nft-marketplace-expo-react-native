import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";

import { loginSuccess } from "@/redux/slices/userSlice";
import AppForm from "@/components/AppForm";
import { globalStyles } from "@/styles/styles";
import { RootState } from "@/redux/store";

const { width, height } = Dimensions.get("window");

const LoginScreen = () => {
  const navigation = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  // const handleLogin = async () => {
  //   if (!email || !password) {
  //     Alert.alert("Error", "Please enter both email and password");
  //     return;
  //   }

  //   try {
  //     const response = await login({ email, password }).unwrap();

  //     if (response.success) {
  //       dispatch(loginSuccess(response));
  //       // refetch();
  //       Alert.alert("Success", "Logged in successfully");
  //       console.log("LOGIN TEST", profile);
  //       navigation.navigate("plan");
  //     } else {
  //       Alert.alert("Error", response.message || "Login failed");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     Alert.alert(
  //       "Error",
  //       error.message || "An error occurred. Please try again."
  //     );
  //   }
  // };
  const isDark = useSelector((state: RootState) => state.theme.dark);
  return (
    <View>
      <AppForm
        fields={[
          {
            name: "email",
            placeholder: "Email",
            rules: {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            },
            icon: "mail",
          },
          {
            name: "password",
            placeholder: "Password",
            rules: {
              required: "Password is required",
            },
            secureTextEntry: true,
            icon: "lock-closed",
          },
        ]}
        onSubmit={(data) => {
          console.log("LOGIN DATA", data);
          // handleLogin();
        }}
        submitButtonText="Login"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
