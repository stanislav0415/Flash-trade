import { createContext } from "react";

export const AuthContext = createContext({
  email: '',
  isAuthenticated: false,
  changeAuthState: () => null,
  fetchUser:()=>null
});