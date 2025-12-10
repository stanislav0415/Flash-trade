import { useNavigate } from "react-router-dom";

export default function PaymentComplete() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#2B2F38] p-4">
      <div className="bg-[#3A3F4B] rounded-2xl p-8 shadow-xl text-center max-w-md">
        <h1 className="text-3xl font-bold text-white mb-4">Payment Complete!</h1>
        <p className="text-gray-300 mb-6">
          Your trade offer has been sent to your Steam account. Please accept it there to receive your skin.
        </p>
        <button
          onClick={() => navigate("/skins")}
          className="px-6 py-3 bg-[#76ABAE] text-white font-bold rounded-xl hover:bg-[#5c8c8f] shadow-md"
        >
          Back to Skins
        </button>
      </div>
    </div>
  );
}
