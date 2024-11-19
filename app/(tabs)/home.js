import {
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  FlatList,
  View,
  ScrollView,
} from "react-native";

import { useRouter } from "expo-router";
import { useAuth } from "../AuthContext";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { Spinner } from "@/components/ui/spinner";
import { Center } from "@/components/ui/center";
import { Box } from "@/components/ui/box";

import axios from "axios";

import CustomHeader from "../components/custom_header";
import CustomAppBar from "../components/custom_app_bar";
import AvanceEscolar from "../components/avance_escolar";

export default Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  const [totalCreditos, setCreditos] = useState(0);
  const [creditosAdquiridos, setAdquiridos] = useState(0);
  const [creditosPendientes, setPendientes] = useState(0);

  const [creditosArea, setCreditosArea] = useState([]);

  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`https://cuceimobile.space/Escuela/kardex.php`)
      .then((response) => {
        const totalCreditos = response.data.creditosRequeridos;
        const adquiridos = response.data.creditosAdquiridos;

        setCreditosArea(response.data.creditosArea);

        setCreditos(totalCreditos);
        setAdquiridos(adquiridos);
        setPendientes(
          adquiridos > totalCreditos ? 0 : totalCreditos - adquiridos
        );
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error al obtener el kardex:", error);
        setLoading(false);
        setError(true);
      });
  };

  const renderItem = ({ item }) => (
    <View style={styles.listItem} className="p-5 mb-3 ">
      <Text className="text-lg font-semibold text-gray-900 pt-3">
        {item.area}
      </Text>
      <Text className="text-sm text-gray-500">
        Créditos Adquiridos: {item.creditosAdquiridos} /{" "}
        {item.creditosRequeridos}
      </Text>
      <Text className="text-sm text-gray-500">
        Diferencia: {item.diferencia}
      </Text>
    </View>
  );

  if (isLoading) {
    return (
      <Center className="h-full w-full">
        <Spinner size="large" />
      </Center>
    );
  }

  if (hasError) {
    return (
      <Center className="h-full w-full">
        <Text>Error</Text>
      </Center>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CustomAppBar showLogoutButton={true} removePop={true} />

        <Box style={{ flex: 1 }}>
          <CustomHeader />
          <Pressable className="p-3" onPress={() => router.push("./directory")}>
            <Box
              width="100%"
              height={50}
              style={{ ...styles.containerStyle, backgroundColor: "#6D6B8B" }}
            >
              <Text width={100} style={styles.textStyles2}>
                Directorio
              </Text>
            </Box>
          </Pressable>
          <Pressable className="p-3" onPress={() => router.push("./materias")}>
            <Box
              width="100%"
              height={50}
              style={{ ...styles.containerStyle, backgroundColor: "#028090" }}
            >
              <Text width={100} style={styles.textStyles2}>
                Materias
              </Text>
            </Box>
          </Pressable>
          <Box className="m-3">
            <AvanceEscolar
              totalCreditos={totalCreditos}
              creditosAdquiridos={creditosAdquiridos}
              creditosPendientes={creditosPendientes}
            />
            {creditosArea.map((item, index) => (
              <View key={index}>{renderItem({ item })}</View>
            ))}
          </Box>
        </Box>
      </ScrollView>
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
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  listItem: {
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    borderColor: "#ddd",
    borderWidth: 1,
  },
});
