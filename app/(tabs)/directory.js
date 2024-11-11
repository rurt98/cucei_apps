import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import CustomAppBar from "../components/custom_app_bar";
import { WebView } from "react-native-webview";

const LinkViewer = ({ url }) => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: url }}
        style={styles.webview}
        startInLoadingState
        renderLoading={() => <Text>Cargando...</Text>}
      />
    </View>
  );
};

export default Directory = () => {
  const link = "https://www.cucei.udg.mx/es/directorio";

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <CustomAppBar showLoginButton={true} />
      <View style={{ flex: 1 }}>
        <LinkViewer url={link} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  webview: {
    flex: 1,
  },
});
