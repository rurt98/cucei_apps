import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "./utils/supabase";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(true);

  GoogleSignin.configure({
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
    webClientId:
      "1015108287266-t28jnsqn038s62cv5i1nvhdedtlb0g6o.apps.googleusercontent.com",
  });

  useEffect(() => {
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
  }, []);

  const login = async (email, password) => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo.data.idToken) {
        const { data, error } = await supabase.auth.signInWithIdToken({
          provider: "google",
          token: userInfo.data.idToken,
        });
        console.log(error, data);
      } else {
        throw new Error("no ID token present!");
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
    // const { error } = await supabase.auth.signInWithPassword({ email, password });
    // if (error) return error.message;
    return null;
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
