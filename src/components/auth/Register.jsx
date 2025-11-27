export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-700">
        
        <h1 className="text-3xl font-bold text-center mb-6 text-red-500">
          REGISTER
        </h1>

        <form className="flex flex-col gap-5">

          <input
            type="text"
            placeholder="Username"
            className="p-3 rounded-xl bg-gray-800 text-white border border-gray-700
            focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-xl bg-gray-800 text-white border border-gray-700
            focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-xl bg-gray-800 text-white border border-gray-700
            focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <button
            className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-lg font-semibold
            transition-all duration-200 shadow-lg hover:shadow-red-700/40"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-red-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
