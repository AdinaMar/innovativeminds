import axios from "axios"

const url = "http://localhost:3006/users";

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addUser = async (user) => {
return await axios.post(url, user)
}

export const editUser = async(id, user) => {
    return await axios.put(`${url}/${id}`, user);
}

export const deleteUser = async(id) => {
    return await axios.delete(`${url}/${id}`);
}

const urlBuilding = "http://localhost:3006/buildings";
export const getBuildings = async (id) => {
    id = id || '';
    return await axios.get(`${urlBuilding}/${id}`);
}

export const deleteBuilding = async(id) => {
    return await axios.delete(`${urlBuilding}/${id}`);
}

export const addBuilding = async (building) => {
    return await axios.post(urlBuilding, building)
    }

    export const editBuilding = async(id, building) => {
        return await axios.put(`${urlBuilding}/${id}`, building);
    }
    