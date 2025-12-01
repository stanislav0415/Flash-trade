import {get, post} from "./requester";

const BASE_URL = "http://localhost:3000/users";

export const login = async(email,password) => {
    const authData = await post(`${BASE_URL}/login`,{email,password});
    return authData;
}
export const register = async(email,password,steamTradeLink) => {
    const result = await post(`${BASE_URL}/register`,{email,password,steamTradeLink});
    return result;
}

  export const logoutReq = async(changeAuthState)=>{
    await post(`${BASE_URL}/logout`);
  
        changeAuthState({
          email: "",
          isAuthenticated: false,
        });
        localStorage.removeItem('user')
  }