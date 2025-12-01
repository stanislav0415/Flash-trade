import { useContext } from "react";
import { login, register } from "../api/auth-api";
import { AuthContext } from "../context/AuthContext";

export const useLogin = () => {
  const { changeAuthState } = useContext(AuthContext);

  const loginHandler = async (email, password) => {
    const result = await login(email, password);

    changeAuthState({
      email: result.user.email,
      steamTradeLink: result.user.steamTradeLink,
      isAuthenticated: true,
    });
    localStorage.setItem("user", JSON.stringify(result.user));
    return result.user;
  };

  return loginHandler;
};
export const useRegister  = () =>{
 const registerHandler = async (email,password,steamTradeLink)=>{
    const result = await register(email, password,steamTradeLink);
    return result
 }
 return registerHandler;
}