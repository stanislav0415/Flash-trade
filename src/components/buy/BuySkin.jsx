import { useNavigate, useParams } from "react-router-dom";
import { useGetOneSkin } from "../../hooks/useSkins";
import Loading from "../loading/Loading";
import { useState } from "react";
import { useCardValidation } from "../../hooks/useCardValidation";
import { sellSkin } from "../../api/skins-api";


export default function BuySkin() {
  const { skinId } = useParams();
  const [obj] = useGetOneSkin(skinId);
  const skin = obj?.skin;

  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [isBuying, setIsBuying] = useState(false);


  const errors = useCardValidation(cardNumber, expiry, cvv);

  const isFormValid =
    !errors.cardNumber &&
    !errors.expiry &&
    !errors.cvv &&
    cardNumber &&
    expiry &&
    cvv;

  const handleBuy = async(e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsBuying(true);
  
    await sellSkin(skinId);
    setTimeout(() => {
      setIsBuying(false);
      navigate("/payment-complete");
    }, 1500);
  };

  if (!skin) return <Loading />;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#2B2F38]">
      <div className="max-w-4xl w-full bg-[#2B2F38] rounded-2xl shadow-xl p-6 flex flex-col md:flex-row gap-6">

      
        <div className="flex-1 flex flex-col items-center">
          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden border border-[#505661] shadow-lg">
            <img src={skin.imageUrl} alt={skin.name} className="w-full h-full object-cover" />
          </div>
          <h2 className="text-2xl font-bold text-white mt-4">{skin.name}</h2>
          <p className="text-gray-300 mt-2">Weapon: {skin.weapon}</p>
          <p className="text-gray-300 mt-1">Price: ${skin.price}</p>
        </div>

      
        <div className="flex-1 bg-[#3A3F4B] rounded-xl p-6 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-4">Payment Information</h3>

          <form className="flex flex-col gap-4" onSubmit={handleBuy}>
            
            
            <div>
              <label className="text-gray-300 mb-1 block">Card Number</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className={`w-full p-3 rounded-lg bg-[#26282F] text-white border ${
                  errors.cardNumber ? "border-red-500" : "border-gray-600"
                } focus:outline-none focus:border-[#76ABAE]`}
                placeholder="1234567812345678"
                required
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
              )}
            </div>

            <div className="flex gap-4">
              
             
              <div className="flex-1">
                <label className="text-gray-300 mb-1 block">Expiry</label>
                <input
                  type="text"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  className={`w-full p-3 rounded-lg bg-[#26282F] text-white border ${
                    errors.expiry ? "border-red-500" : "border-gray-600"
                  } focus:outline-none focus:border-[#76ABAE]`}
                  placeholder="MM/YY"
                  required
                />
                {errors.expiry && (
                  <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>
                )}
              </div>

              
              <div className="flex-1">
                <label className="text-gray-300 mb-1 block">CVV</label>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className={`w-full p-3 rounded-lg bg-[#26282F] text-white border ${
                    errors.cvv ? "border-red-500" : "border-gray-600"
                  } focus:outline-none focus:border-[#76ABAE]`}
                  placeholder="123"
                  required
                />
                {errors.cvv && (
                  <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={!isFormValid || isBuying}
              className={`mt-4 py-3 rounded-xl font-bold text-white shadow-md ${
                isBuying ? "bg-gray-500 cursor-not-allowed" : "bg-[#76ABAE] hover:bg-[#5c8c8f]"
              }`}
            >
              {isBuying ? "Processing..." : `Buy for $${skin.price}`}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
