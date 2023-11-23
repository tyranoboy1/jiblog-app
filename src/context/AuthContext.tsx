import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "firebaseApp";
import { createContext, useState } from "react";
import { IAuthContextProps } from "./interface/authContext.interface";
import React from "react";

const AuthContext = createContext({
  user: null as User | null,
});

export const AuthContextProvider = ({ children }: IAuthContextProps) => {
  const auth = getAuth(app);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(user);
      }
    });
  }, [auth]);

  return (
    <AuthContext.Provider value={{ user: currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;