/* eslint-disable react-native/no-inline-styles */
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Center } from "@/components/ui/center";
import { Spinner } from "@/components/ui/spinner";

import CustomAppBar from "../components/custom_app_bar";

export default Materias = () => {
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  const [materias, setMaterias] = useState([]);
  const [promedio, setPromedio] = useState(0.0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`https://cuceimobile.space/Escuela/kardex.php`)
      .then((response) => {
        setMaterias(response.data.materias);
        setPromedio(response.data.promedio);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error al obtener el kardex:", error);
        setLoading(false);
        setError(true);
      });
  };

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
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, paddingTop: 20 }}>
          <CustomAppBar />
          <Text style={{ paddingLeft: 20 }} className="text-lg font-bold  pt-3">
            Promedio {promedio}
          </Text>
          <FlatList
            contentContainerStyle={{ paddingTop: 20 }}
            data={materias}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <ListTile item={item} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const ListTile = ({ item }) => {
  const colors = [
    "#FFB3B3",
    "#B3FFB3",
    "#B3B3FF",
    "#FFB3E6",
    "#D1B3FF",
    "#B3FFFF",
  ];

  const getRandomColorFromList = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const formatDate = (dateString) => {
    const date = parseISO(dateString);
    return format(date, "d 'de' MMMM 'del' yyyy", { locale: es });
  };

  return (
    <View style={styles.listTileView}>
      {/* <View
        style={[
          styles.circuleView,
          { backgroundColor: getRandomColorFromList() },
        ]}
      >
        <Text style={styles.sectionTxt}>{item.seccion}</Text>
      </View> */}
      {/* Content */}
      <View style={styles.ListTileContent}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>{item.descripcion}</Text>
          <Text style={styles.infoTitle}>
            {item.clave} / {item.nrc}
          </Text>
          <Text style={styles.infoSubtitle}>{item.calificacion}</Text>
          <Text style={styles.infoSubtitle}>{item.ciclo}</Text>
        </View>

        <View>
          <Text>Créditos {item.creditos}</Text>
          <Text>{formatDate(item.fecha)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listTileView: {
    flexDirection: "row",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    gap: 10,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  circuleView: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTxt: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  ListTileContent: {
    gap: 15,
    flex: 1,
    flexDirection: "column",
  },
  infoTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  infoSubtitle: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 14,
  },
  button: {
    backgroundColor: "blue",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonView: {
    width: "100%",
    paddingHorizontal: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  infoContainer: {
    flex: 1,
    flexDirection: "column",
  },
  scrollContainer: {
    paddingTop: 20,
  },
});
