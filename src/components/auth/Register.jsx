import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#222831] px-4">
      <div className="w-full max-w-md bg-[#31363F] rounded-2xl shadow-2xl p-8 border border-[#505661]">
        
        <h1 className="text-3xl font-bold text-center mb-6 text-[#76ABAE]">
          Register
        </h1>

        <form className="flex flex-col gap-5">

          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-xl bg-gray-800 text-white border border-gray-700
            focus:outline-none focus:ring-2 focus:ring-[#76ABAE]"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-xl bg-gray-800 text-white border border-gray-700
            focus:outline-none focus:ring-2 focus:ring-[#76ABAE]"
          />

          <button
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
