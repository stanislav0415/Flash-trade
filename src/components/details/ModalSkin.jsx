import { useNavigate, useParams } from "react-router-dom";
import { useGetOneSkin } from "../../hooks/useSkins";
import Loading from "../loading/Loading";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { HeartIcon as OutlineHeart } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeart } from "@heroicons/react/24/solid";
import { like, deleteSkin } from "../../api/skins-api";
import DeleteModal from "../delete/DeleteModal";

export default function ModalSkin() {
    const { skinId } = useParams();
    const [obj] = useGetOneSkin(skinId);
    const skin = obj?.skin;
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);

    const [liked, setLiked] = useState(obj.isLiked);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        if (obj?.isLiked !== undefined) setLiked(obj.isLiked);
    }, [obj]);

    const handleLike = async () => {
        try {
            const result = await like(skinId);
            setLiked(result?.isLiked ?? !liked);
        } catch (err) {
            console.log("Like Error:", err);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteSkin(skinId);
            navigate("/skins");
        } catch (err) {
            console.error("Failed to delete skin:", err);
        }
    };

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

    const onClose = () => navigate("/skins");
    if (!skin || Object.keys(skin).length === 0) return <Loading />;
    const rarityColor = rarityColors[skin.rarity] || "#76ABAE";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">

           
            <div
                className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                onClick={onClose}
            />

         
            <div className="relative z-10 w-full max-w-sm mx-4 bg-[#31363F] rounded-2xl shadow-2xl p-6 flex flex-col justify-between">

               
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-red-500 transition"
                >
                    &times;
                </button>

             
                <div className="relative m-4 flex justify-center rounded-xl overflow-hidden h-64 border border-[#505661]">
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            background: `radial-gradient(circle at bottom center, ${rarityColor}40 0%, transparent 70%)`,
                            filter: "blur(20px)",
                        }}
                    />
                    <img
                        className="rounded-xl relative z-10 object-cover w-full h-full shadow-2xl"
                        src={skin.imageUrl}
                        alt={skin.name}
                    />
                </div>

              
                <div className="text-center flex-1 flex flex-col justify-between">
                    <h5 className="text-xl font-bold mb-2" style={{ color: rarityColor }}>
                        {skin.name}
                    </h5>
                    <p className="text-white mb-1">Weapon: {skin.weapon}</p>
                    <p className="text-white mb-1">Skin: {skin.skin}</p>
                    <p className="text-white mb-1">Exterior: {skin.exterior}</p>
                    <p className="text-white mb-1">Float: {skin.float.toFixed(2)}</p>
                    <p className="text-white mb-1">Price: ${skin.price}</p>
                    <p className="text-white mb-1">StatTrak: {skin.statTrak ? "Yes" : "No"}</p>
                    <p className="text-white mb-1">Rarity: {skin.rarity}</p>

                  
                    <div className="mt-4 flex gap-3 justify-center items-center">
                        <button
                            className="flex-1 py-2 rounded-xl font-bold text-[#EEEEEE] shadow-md bg-[#76ABAE] hover:bg-[#5c8c8f]"
                            onClick={() => console.log("Do action")}
                        >
                            Take Action
                        </button>

                        {isAuthenticated && (
                            <div
                                className="p-2 rounded-xl cursor-pointer flex justify-center items-center transition"
                                onClick={handleLike}
                            >
                                {liked ? (
                                    <SolidHeart className="h-7 w-7" style={{ color: "#76ABAE" }} />
                                ) : (
                                    <OutlineHeart className="h-7 w-7 text-white" />
                                )}
                            </div>
                        )}
                    </div>

                 
                    {obj.isOwner && (
                        <div className="flex gap-3 w-full justify-center mt-4">
                            <button
                                onClick={() => navigate(`/skins/${skinId}/edit`)}
                                className="flex-1 py-2 rounded-xl font-bold text-[#222831] shadow-md bg-yellow-500 hover:bg-yellow-400"
                            >
                                Edit
                            </button>

                            <button
                                onClick={() => setShowDeleteModal(true)}
                                className="flex-1 py-2 rounded-xl font-bold text-white shadow-md bg-red-600 hover:bg-red-500"
                            >
                                Delete
                            </button>
                        </div>
                    )}
                </div>
            </div>

          
            {showDeleteModal && (
                <DeleteModal
                    message="Are you sure you want to delete this skin?"
                    onConfirm={handleDelete}
                    onCancel={() => setShowDeleteModal(false)}
                />
            )}
        </div>
    );
}
