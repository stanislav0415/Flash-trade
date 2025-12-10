import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

const initialValues = { email: '', password: '', steamTradeLink: '' };

export default function Register() {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const register = useRegister();

  const registerHandler = async (formValues) => {
    const { email, password, steamTradeLink } = formValues;

    if (!email || !password || !steamTradeLink) {
      setError("All fields are required.");
      return;
    }

    try {
    await register({ email, password, steamTradeLink });
      navigate("/login");
    } catch (err) {
      setError(err.message || "Registration failed.");
    }
  };
  const { values, changeHandler, submitHandler } = useForm(initialValues, registerHandler);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#222831] px-4">
      <div className="w-full max-w-md bg-[#31363F] rounded-2xl shadow-2xl p-8 border border-[#505661]">

        <h1 className="text-3xl font-bold text-center mb-6 text-[#76ABAE]">
          Register
        </h1>

        <form onSubmit={submitHandler} className="flex flex-col gap-5">

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={changeHandler}
            className="p-3 rounded-xl bg-gray-800 text-white border border-gray-700
            focus:outline-none focus:ring-2 focus:ring-[#76ABAE]"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={changeHandler}
            className="p-3 rounded-xl bg-gray-800 text-white border border-gray-700
            focus:outline-none focus:ring-2 focus:ring-[#76ABAE]"
            required
          />

          <input
            type="text"
            name="steamTradeLink"
            placeholder="Steam Trade Link"
            value={values.steamTradeLink}
            onChange={changeHandler}
            className="p-3 rounded-xl bg-gray-800 text-white border border-gray-700
            focus:outline-none focus:ring-2 focus:ring-[#76ABAE]"
            required
          />

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#76ABAE] hover:bg-[#5c8c8f] text-white text-lg font-semibold
            transition-all duration-200 shadow-lg"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-[#76ABAE] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
