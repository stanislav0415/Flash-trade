
const rarityColors = {
  "Consumer Grade": "#B0C3D9",
  "Industrial Grade": "#5E98D9",
  "Mil-Spec": "#4B69FF",
  "Restricted": "#D32CE6",
  "Classified": "#D32CE6",
  "Covert": "#EB4B4B",
  "Contraband": "#FFD700",
  "Special": "#FF8000",
};

export default function SkinCard({ skin }) {
  const rarityColor = rarityColors[skin.rarity] || "#76ABAE";

  return (
    <div className="w-full max-w-sm bg-[#31363F] rounded-2xl shadow-2xl p-6 border border-[#505661] overflow-hidden flex flex-col justify-between">
      
     
      <div className="relative mb-6 flex justify-center rounded-xl border border-[#505661] overflow-hidden h-64">
      
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `radial-gradient(circle at bottom center, ${rarityColor}40 0%, transparent 70%)`,
            filter: "blur(20px)",
          }}
        />
       
        <img
          className="rounded-xl relative z-10 object-cover w-full h-full"
          src={skin.imageUrl}
          alt={skin.name}
        />
      </div>

    
      <div className="text-center flex-1 flex flex-col justify-between">
        <div>
          <h5 className="text-xl font-bold mb-2 truncate" style={{ color: rarityColor }}>
            {skin.name}
          </h5>

          <p className="text-sm text-gray-300 mb-4">
            {skin.exterior} • Float: {skin.float.toFixed(2)}
            {skin.statTrak && " • StatTrak™"}
          </p>
        </div>

        <div className="flex justify-center items-center gap-4 mt-2">
          <span className="text-2xl font-bold text-white">${skin.price}</span>

          <button
            type="button"
            className="px-5 py-2 rounded-xl font-medium hover:brightness-110 transition-all duration-200 shadow-md bg-[#76ABAE] hover:bg-[#5c8c8f]"
          
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
