import { createContext } from "react";

export const AuthContext = createContext({
  email: '',
  steamTradeLink:'',
  isAuthenticated: false,
  changeAuthState: () => null,
 });