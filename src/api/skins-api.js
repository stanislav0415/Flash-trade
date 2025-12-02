import * as request from "./requester";

const BASE_URL = 'http://localhost:3000'

export const getAll = async () => {
        return await request.get(`${BASE_URL}/skins`);
}
export const getOne = async (id) => {
        return request.get(`${BASE_URL}/skins/${id}`);
}
export const like = async (id) => {
        const skin = await request.post(`${BASE_URL}/skins/${id}/like`);
        return skin;
}

