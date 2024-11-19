import { useRouter } from "expo-router";
import { SafeAreaView, StyleSheet, Text, Pressable } from "react-native";

import MapView, { Marker } from "react-native-maps";
import CustomAppBar from "../components/custom_app_bar";
import { Box } from "@/components/ui/box";
import CustomHeader from "../components/custom_header";

export default Login = () => {
  const router = useRouter();

  const initialRegion = {
    latitude: 20.655001629778365,
    longitude: -103.32544970400296,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0121,
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomAppBar showLoginButton={true} />
      <Box style={{ flex: 1 }}>
        <CustomHeader />
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          p={4}
          className="p-3"
        >
          <Pressable onPress={() => router.push("./directory")}>
            <Box
              width={50}
              height={300}
              style={{ ...styles.containerStyle, backgroundColor: "#6D6B8B" }}
            >
              <Text width={100} style={styles.textStyles2}>
                Directorio
              </Text>
            </Box>
          </Pressable>
          <Box width={10} />
          <Box flex={1} height={300} style={styles.containerStyle}>
            <MapView style={styles.map} initialRegion={initialRegion}>
              <Marker
                coordinate={{
                  latitude: initialRegion.latitude,
                  longitude: initialRegion.longitude,
                }}
                title="Ubicación específica"
                description="Descripción opcional de la ubicación"
              />
            </MapView>
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  containerStyle: {
    backgroundColor: "#20B2AA",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 10,
  },
  textStyles2: {
    transform: [{ rotate: "-90deg" }],
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  map: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
