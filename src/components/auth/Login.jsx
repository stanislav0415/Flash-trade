import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";


const initialValues = { email: "", password: "" };

export default function Login() {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const login = useLogin();

  const loginHandler = async ({ email, password }) => {
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
    loginHandler
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#222831] px-4">
      <div className="w-full max-w-md bg-[#31363F] rounded-2xl shadow-2xl p-8 border border-[#505661]">

        <h1 className="text-3xl font-bold text-center mb-6 text-[#76ABAE]">
          Login
        </h1>

        <form onSubmit={submitHandler} className="flex flex-col gap-5">

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={values.email}
            onChange={changeHandler}
            className="p-3 rounded-xl bg-gray-800 text-white border border-gray-700
              focus:outline-none focus:ring-2 focus:ring-[#76ABAE]"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={values.password}
            onChange={changeHandler}
            className="p-3 rounded-xl bg-gray-800 text-white border border-gray-700
              focus:outline-none focus:ring-2 focus:ring-[#76ABAE]"
          />

          {error && (
            <p className="text-center text-red-400 text-sm font-semibold">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#76ABAE] hover:bg-[#5c8c8f] 
              text-white text-lg font-semibold transition-all duration-200 shadow-lg"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#76ABAE] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
