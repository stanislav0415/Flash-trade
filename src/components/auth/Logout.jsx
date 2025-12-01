import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";
import { logoutReq } from "../../api/auth-api.js";

const Logout = () => {
  const navigate = useNavigate();
  const { changeAuthState } = useContext(AuthContext);

  useEffect(() => {
    async function logout() {
      try {
        await logoutReq(changeAuthState);
        navigate("/");
      } catch (error) {
        console.error("Logout failed", error);
      }
    }

    logout();
  }, [changeAuthState, navigate]);

  return null;
};

export default Logout;