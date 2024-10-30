import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from './utils/supabase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    // Verificación inicial de sesión
    supabase.auth.getSession().then(({ data: { session } }) => {
      // console.log('session', session);
      setIsAuthenticated(!!session);
      setLoadingAuth(false);
    });

    // Listener de cambios en el estado de autenticación
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => {
      if (authListener?.subscription) {
        authListener.subscription.unsubscribe();
      }
    };
  }, []);

  const login = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return error.message;
    return null;
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) return error.message;
    return null;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loadingAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
