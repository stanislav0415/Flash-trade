import SkinCard from "../SkinCard";
import Loading from "../../loading/Loading";
import { useGetAllSkins } from "../../../hooks/useSkins";

export default function Skins() {
  const [skins] = useGetAllSkins();

  if (!skins || skins.length === 0) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-[#222831] p-6 flex flex-wrap justify-center gap-6 items-start pt-24">

      {skins.map((skin) => (
        <SkinCard key={skin.id} skin={skin} />
      ))}
    </div>
  );
}
