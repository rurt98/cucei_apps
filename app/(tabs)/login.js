import React, { useState, useRef } from "react";
import { useRouter } from "expo-router";

import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Alert,
} from "react-native";

import CustomButton from "../components/custom_button";

import CustomTextInput from "../components/custom_text_input";
import { useAuth } from "../AuthContext";
import CustomAppBar from "../components/custom_app_bar";

export default Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordInputRef = useRef();
  const router = useRouter();

  const { login } = useAuth();

  const loginMethod = async () => {
    const hasError = await login(email, password);

    if (hasError) {
      Alert.alert("Error", hasError);
      return;
    }

    router.replace("./home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        keyboardDismissMode="on-drag"
      >
        <CustomAppBar showLoginButton={false} />
        <View
          style={{
            height: 200,
          }}
        />
        <CustomTextInput
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          onEndEditing={() => passwordInputRef.current.focus()}
        />
        <CustomTextInput
          placeholder="Password"
          onChangeText={setPassword}
          ref={passwordInputRef}
          secureTextEntry
        />
        <CustomButton title={"Login"} onPress={loginMethod}></CustomButton>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
