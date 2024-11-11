import { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import { useAuth } from "../AuthContext";

export default function Home() {
  const [redirectTo, setRedirectTo] = useState<string | null>(null);
  const { isAuthenticated, loadingAuth } = useAuth();

  useEffect(() => {
    if (!loadingAuth) {
      if (isAuthenticated) {
        setRedirectTo("./home");
      } else {
        setRedirectTo("./initial");
      }
    }
  }, [isAuthenticated, loadingAuth]);

  if (loadingAuth) {
    return (
      <View>
        <Text>Cargando...</Text>
      </View>
    );
  }

  if (redirectTo) {
    return <Redirect href={redirectTo as any} />;
  }

  return null;
}
