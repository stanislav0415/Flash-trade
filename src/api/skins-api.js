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
export const deleteSkin = async (id) => {
        const skin = await request.del(`${BASE_URL}/skins/${id}`);
        return skin;
}
export const createSkin = async (skinData) => {
    try {

        const createdSkin = await request.post(`${BASE_URL}/skins/create`, skinData);
        return createdSkin;
    } catch (err) {
        console.error("Failed to create skin:", err);
        throw err;
    }
};
export const editSkin = async (id, skinData) => {
    try {
        const updatedSkin = await request.put(`${BASE_URL}/skins/${id}`, skinData);
        return updatedSkin;
    } catch (err) {
        console.error("Failed to edit skin:", err);
        throw err;
    }
};
export const sellSkin = async (id) => {
    try {
        const skin = await request.post(`${BASE_URL}/skins/${id}/sell`);
        return skin;
    } catch (err) {
        console.error("Failed to sell skin:", err);
        throw err;
    }
};