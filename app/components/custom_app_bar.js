import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Image, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Box } from "@/components/ui/box";
import axios from "axios";

const logo = require("../../assets/images/cucei_logo.png");

const CustomAppBar = ({ showLoginButton }) => {
  const router = useRouter();

  // Definir el estado inicial
  const [weather, setWeather] = useState({
    temp_c: null,
    imagenT: null,
  });
  const [city] = useState("Guadalajara"); // Cambia 'Guadalajara' por la ciudad que quieras

  const goToLogin = () => router.push("./login");

  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=05bfbf6c5ddb4f84a7e163009242908&q=${city}&days=5&aqi=no&alerts=no`
      )
      .then((response) => {
        setWeather({
          temp_c: response.data.current.temp_c,
          imagenT: response.data.current.condition.icon,
        });
      })
      .catch((error) => {
        console.log("Error al obtener el clima:", error);
      });
  }, [city]); // El array de dependencias incluye `city`, para ejecutar cuando cambia

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      p={4}
      className="p-3"
      style={{ alignItems: "center" }}
    >
      <Pressable
        onPress={() => {
          if (!router.canGoBack()) return;
          return router.back();
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          style={{ alignItems: "center" }}
        >
          {weather.imagenT && (
            <Image
              source={{ uri: `http:${weather.imagenT}` }}
              style={styles.icon}
            />
          )}
          {weather.temp_c !== null && (
            <Text style={styles.tempText}>{weather.temp_c}°C</Text>
          )}
        </Box>
      </Pressable>

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
  icon: {
    width: 40,
    height: 40,
  },
  tempText: {
    fontSize: 16,
    marginLeft: 8,
    color: "black",
  },
});

export default CustomAppBar;
