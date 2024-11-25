import React, { createContext, PropsWithChildren, useContext, useState } from "react";

type AuthContextType = any;

const AuthContext = createContext<AuthContextType>(null);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [user, setUser] = useState<any>();
    const handleSetUser = (user:any) => {
        setUser(user);
    }
  return (
    <AuthContext.Provider value={{ user, handleSetUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
