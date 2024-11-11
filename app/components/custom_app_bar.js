import React from "react";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Box } from "@/components/ui/box";
const logo = require("../../assets/images/cucei_logo.png");

const CustomAppBar = ({ showLoginButton }) => {
  const router = useRouter();

  const goToLogin = () => router.push("./login");

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      p={4}
      className="p-3"
      style={{ alignItems: "center" }}
    >
      {/* TODO: hacer el icono del clima justo aqui */}
      <MaterialIcons name="sunny" size={24} color="black" />
      <Image source={logo} style={styles.image} />
      {showLoginButton ? (
        <Pressable style={styles.button} onPress={goToLogin}>
          <MaterialIcons name="login" size={24} color="black" />
        </Pressable>
      ) : (
        <Box width={24} />
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 50,
    alignSelf: "center",
  },
});

export default CustomAppBar;
