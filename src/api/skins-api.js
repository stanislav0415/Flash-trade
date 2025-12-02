import * as request from "./requester";

const BASE_URL = 'http://localhost:3000'

export const getAll = async () => {
        return await request.get(`${BASE_URL}/skins`);
}
export const getOne = async (id) => {  
       return request.get(`${BASE_URL}/skins/${id}`);
}

