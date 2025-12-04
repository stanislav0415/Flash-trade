
import { useEffect, useState } from "react"

import { getAll, getOne,} from "../api/skins-api";

export function useGetAllSkins() {
    const [skins, setSkins] = useState([]);
    useEffect(() => {
        getAll()
            .then(result => setSkins(result));
    }, []);
 
    return [skins, setSkins]
}

export function useGetOneSkin(skinId) {

    const [skin, setSkins] = useState(null);
    useEffect(() => {
        getOne(skinId)
            .then(result => {
                setSkins(result);
            });
    }, [skinId]);
 
    return [skin, setSkins];
}


