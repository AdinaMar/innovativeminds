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

{/*const urlBuilding = "http://localhost:3006/buildings";
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
    
*/}
   {/* const urlOffice = "http://localhost:3006/offices";
    export const getOffices = async (id) => {
        id = id || '';
        return await axios.get(`${urlOffice}/${id}`);
    }

    export const deleteOffice = async(id) => {
        return await axios.delete(`${urlOffice}/${id}`);
    }

    export const addOffice = async (office) => {
        return await axios.post(urlOffice, office)
        }

        export const editOffice = async(id, office) => {
            return await axios.put(`${urlOffice}/${id}`, office);
        }
    */ }

const urlOffice = 'http://localhost:3006/offices'


export const getAllOffices = async (id) => {
    id = id || '';
    return await axios.get(`${urlOffice}/${id}`)
}


export const addOffice = async(office) => {
    return await axios.post(urlOffice, office)
}

export const editOffice = async(id,office) => {
    return await axios.put(`${urlOffice}/${id}`, office)
}
 
export const deleteOffice = async(id) => {
    return await axios.delete(`${urlOffice}/${id}`)
}

//////////////////////////////////////


const buildings = 'http://localhost:3006/buildings'

export const getBuildings = async (id) => {
    id = id || '';
    return await axios.get(`${buildings}/${id}`)
}


export const addBuilding = async(building) => {
    return await axios.post(`${buildings}`, building)
}

export const editBuilding = async(id, building) => {
    return await axios.put(`${buildings}/${id}`, building)
}

export const deleteBuilding = async(id) => {
    return await axios.delete(`${buildings}/${id}`)
}
////////////////////
const urlRequests = 'http://localhost:3006/management/remote'

export const getRequests =  async (id) => {
    id = id || '';
    return await axios.get(`${urlRequests}/${id}`)
}

export const addRequest = async(request) => {
    return await axios.post(urlRequests, request)
}

export const editRequest = async(request) => {
    return await axios.put(`${urlRequests}`, request)
}


const urlRemote = 'http://localhost:3006/remote'

export const getRemote =  async (id) => {
    id = id || '';
    return await axios.get(`${urlRemote}/${id}`)
}

export const addRemote = async(remote) => {
    return await axios.post(urlRemote, remote)
}

export const editRemote = async(remote) => {
    return await axios.put(`${urlRemote}`, remote)
}



const urlDesk = 'http://localhost:3006/deskRequest'

export const getDesk =  async (id) => {
    id = id || '';
    return await axios.get(`${urlDesk}/${id}`)
}

export const addDesk = async(desk) => {
    return await axios.post(urlDesk, desk)
}

export const editDesk = async(desk) => {
    return await axios.put(`${urlDesk}`, desk)
}