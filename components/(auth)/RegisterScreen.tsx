import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "@/redux/api/apiClient";
import AppForm from "@/components/AppForm";

const { width, height } = Dimensions.get("window");

const RegisterScreen = () => {
  const navigation = useRouter();

  const dispatch = useDispatch();
  const [register, { isLoading }] = useRegisterMutation();

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
            placeholder: "Enter Password",
            rules: {
              required: "Password is required",
            },
            secureTextEntry: true,
            icon: "lock-closed",
          },
          {
            name: "conPassword",
            placeholder: "Confirm Password",
            rules: {
              required: "Confirm Password is required",
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RegisterScreen;
