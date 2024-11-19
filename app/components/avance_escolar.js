import React from "react";
import { View, Text } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const AvanceEscolar = ({
  totalCreditos,
  creditosAdquiridos,
  creditosPendientes,
}) => {
  const data = [
    {
      name: "Créditos Adquiridos",
      population: creditosAdquiridos,
      color: "#4CAF50",
      legendFontColor: "#000",
      legendFontSize: 15,
    },
    {
      name: "Créditos Pendientes",
      population: creditosPendientes,
      color: "#FF5722",
      legendFontColor: "#000",
      legendFontSize: 15,
    },
  ];

  return (
    <View style={{ alignItems: "center", padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Avance Escolar</Text>
      <PieChart
        data={data}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        center={[10, 10]}
        absolute
      />
      <Text style={{ marginTop: 10, fontSize: 16 }}>
        Créditos Adquiridos: {creditosAdquiridos} / {totalCreditos}
      </Text>
    </View>
  );
};

export default AvanceEscolar;
