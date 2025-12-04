import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useState, useEffect } from "react";
import { getOne, editSkin } from "../../api/skins-api.js";
import Loading from "../loading/Loading.jsx";

export default function EditSkin() {
    const navigate = useNavigate();
    const { skinId } = useParams();

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    const { values, changeHandler, setValues, submitHandler } = useForm(
        {
            name: "",
            weapon: "",
            skin: "",
            exterior: "Factory New",
            float: 0,
            price: 0,
            statTrak: false,
            imageUrl: "",
        },
        async (formData) => {
            setSaving(true);
            setError("");
            try {
                await editSkin(skinId, {
                    ...formData,
                    float: Number(formData.float),
                    price: Number(formData.price),
                    statTrak:
                        formData.statTrak === "true" || formData.statTrak === true,
                });
                navigate(`/skins/${skinId}`);
            } catch (err) {
                setError(err.message || "Failed to edit skin");
            } finally {
                setSaving(false);
            }
        }
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getOne(skinId);
                const skin = data?.skin;
                setValues({
                    name: skin.name,
                    weapon: skin.weapon,
                    skin: skin.skin,
                    exterior: skin.exterior,
                    float: skin.float,
                    price: skin.price,
                    statTrak: skin.statTrak,
                    imageUrl: skin.imageUrl,
                });
            } catch (err) { 
                console.log(err)
                setError("Failed to load skin data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [skinId, setValues]);

    if (loading) {
        return (
           <Loading/>
        );
    }

    return (
        <div className="min-h-screen flex items-start justify-center bg-[#222831] pt-28">
            <div className="relative w-full max-w-md bg-[#31363F] rounded-3xl shadow-2xl p-8 flex flex-col gap-6 transform transition-transform duration-500 hover:-translate-y-2">
                <h2 className="text-white text-3xl font-bold text-center">Edit Skin</h2>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <form onSubmit={submitHandler} className="flex flex-col gap-4">
                    <label className="text-white">Skin Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Skin Name"
                        value={values.name}
                        onChange={changeHandler}
                        required
                        className="p-2 rounded-lg bg-[#222831] text-white"
                    />

                    <label className="text-white">Weapon</label>
                    <input
                        type="text"
                        name="weapon"
                        placeholder="Weapon"
                        value={values.weapon}
                        onChange={changeHandler}
                        required
                        className="p-2 rounded-lg bg-[#222831] text-white"
                    />

                    <label className="text-white">Skin Pattern</label>
                    <input
                        type="text"
                        name="skin"
                        placeholder="Skin Pattern"
                        value={values.skin}
                        onChange={changeHandler}
                        required
                        className="p-2 rounded-lg bg-[#222831] text-white"
                    />

                    <label className="text-white">Exterior</label>
                    <select
                        name="exterior"
                        value={values.exterior}
                        onChange={changeHandler}
                        className="p-2 rounded-lg bg-[#222831] text-white"
                    >
                        <option>Factory New</option>
                        <option>Minimal Wear</option>
                        <option>Field-Tested</option>
                        <option>Well-Worn</option>
                        <option>Battle-Scarred</option>
                    </select>

                    <label className="text-white">Float Value</label>
                    <input
                        type="number"
                        step="0.01"
                        name="float"
                        placeholder="Float Value"
                        value={values.float}
                        onChange={changeHandler}
                        min="0"
                        max="1"
                        required
                        className="p-2 rounded-lg bg-[#222831] text-white"
                    />

                    <label className="text-white">Price ($)</label>
                    <input
                        type="number"
                        step="0.01"
                        name="price"
                        placeholder="Price"
                        value={values.price}
                        onChange={changeHandler}
                        min="0"
                        required
                        className="p-2 rounded-lg bg-[#222831] text-white"
                    />

                    <label className="flex items-center gap-2 text-white">
                        <input
                            type="checkbox"
                            name="statTrak"
                            checked={values.statTrak}
                            onChange={(e) =>
                                changeHandler({
                                    target: {
                                        name: "statTrak",
                                        value: e.target.checked,
                                    },
                                })
                            }
                            className="accent-[#76ABAE]"
                        />
                        StatTrak
                    </label>

                    <label className="text-white">Image URL</label>
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="Image URL"
                        value={values.imageUrl}
                        onChange={changeHandler}
                        className="p-2 rounded-lg bg-[#222831] text-white"
                    />

                    <button
                        type="submit"
                        disabled={saving}
                        className="mt-4 py-2 rounded-xl font-bold text-[#EEEEEE] shadow-md bg-[#76ABAE] hover:bg-[#5c8c8f]"
                    >
                        {saving ? "Saving..." : "Save Changes"}
                    </button>
                </form>
            </div>
        </div>
    );
}