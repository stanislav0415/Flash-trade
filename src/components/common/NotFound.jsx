import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#222831] text-white px-4">
     
      <h1 className="text-8xl font-extrabold mb-4 text-[#76ABAE] animate-pulse">404</h1>
      <p className="text-2xl mb-6 text-center">
        Oops! The page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-[#76ABAE] hover:bg-[#5c8c8f] rounded-2xl text-lg font-semibold transition-all shadow-lg"
      >
        Go Home
      </button>
    </div>
  );
}
