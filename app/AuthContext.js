import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "./utils/supabase";
import * as Google from "expo-auth-session/providers/google";
import { useRouter } from "expo-router";
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(true);

  const router = useRouter();

  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId:
      "693199826709-saq1vjkk0o1r8hd9ac96d37ajpclekpl.apps.googleusercontent.com",
  });

  useEffect(() => {
    handleSignInWithGoogle();
    // Verificación inicial de sesión
    supabase.auth.getSession().then(({ data: { session } }) => {
      // console.log('session', session);
      setIsAuthenticated(!!session);
      setLoadingAuth(false);
    });

    // Listener de cambios en el estado de autenticación
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setIsAuthenticated(!!session);
      }
    );

    return () => {
      if (authListener?.subscription) {
        authListener.subscription.unsubscribe();
      }
    };
  }, [response]);

  const handleSignInWithGoogle = async () => {
    if (response?.type === "success") {
      await handlerLoginSupaase(response.authentication.idToken);
    }
  };

  const handlerLoginSupaase = async (idToken) => {
    try {
      const { data, error } = await supabase.auth.signInWithIdToken({
        provider: "google",
        token: idToken,
      });

      if (error) return;
      router.replace("./home");
    } catch (e) {
      console.log(e);
    }
  };

  const login = async () => {
    await promptAsync();
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) return error.message;
    return null;
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loadingAuth, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
