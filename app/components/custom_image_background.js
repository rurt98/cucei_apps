import { StyleSheet, Text, ImageBackground } from "react-native";

import { Box } from "@/components/ui/box";

const CustomImageBackground = ({ image, title }) => {
  return (
    <ImageBackground
      source={image}
      style={[styles.containerStyle, { height: 180 }]}
      imageStyle={{ borderRadius: 10 }}
    >
      <Box
        position="absolute"
        bottom={0}
        width="100%"
        backgroundColor="rgba(0, 0, 0, 0.5)"
        p={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text style={styles.textStyles}>{title}</Text>
      </Box>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "#20B2AA",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 10,
  },
  textStyles: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default CustomImageBackground;
