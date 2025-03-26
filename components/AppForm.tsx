import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";
import { buttonStyles } from "@/styles/styles";

type InputFieldProps = {
  name: string;
  control: any;
  placeholder: string;
  rules?: object;
  secureTextEntry?: boolean;
  label?: string;
  icon?: string;
  iconPosition?: "left" | "right";
  inputStyle?: ViewStyle;
  error?: string;
};

type FormProps = {
  fields: {
    name: string;
    placeholder: string;
    secureTextEntry?: boolean;
    label?: string;
    icon?: string;
    iconPosition?: "left" | "right";
    rules?: object;
  }[];
  onSubmit: (data: any) => void;
  submitButtonText?: string;
  buttonStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
};

const InputField: React.FC<InputFieldProps> = ({
  name,
  control,
  placeholder,
  rules = {},
  secureTextEntry = false,
  label,
  icon,
  iconPosition = "left",
  inputStyle = {},
  error,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputWrapper}>
        {icon && iconPosition === "left" && (
          <Ionicons name={icon} size={20} style={styles.icon} />
        )}
        <Controller
          control={control}
          rules={rules}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, inputStyle]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              secureTextEntry={!isPasswordVisible && secureTextEntry}
            />
          )}
          name={name}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible((prev) => !prev)}
            style={styles.passwordToggle}
          >
            <Ionicons
              name={isPasswordVisible ? "eye" : "eye-off"}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        )}
        {icon && iconPosition === "right" && (
          <Ionicons name={icon} size={20} style={styles.icon} />
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const AppForm: React.FC<FormProps> = ({
  fields,
  onSubmit,
  submitButtonText = "Submit",
  buttonStyle = {},
  buttonTextStyle = {},
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <View style={styles.form}>
      {fields.map((field) => (
        <InputField
          key={field.name}
          name={field.name}
          control={control}
          placeholder={field.placeholder}
          secureTextEntry={field.secureTextEntry}
          label={field.label}
          icon={field.icon}
          iconPosition={field.iconPosition}
          rules={field.rules}
          error={errors[field.name]?.message as string}
        />
      ))}
      <TouchableOpacity
        style={[buttonStyles.primary, styles.button, buttonStyle]}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={[buttonStyles.text, buttonTextStyle]}>
          {submitButtonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    width: "100%",
    padding: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 16,
  },
  icon: {
    marginHorizontal: 10,
    color: "#888",
  },
  passwordToggle: {
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 16,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
});

export default AppForm;
