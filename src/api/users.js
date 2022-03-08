import axios from "axios";

export default axios.create({

   baseURL: "http://localhost:3006/" 
})

export const addUser = async(user) => {
    return await axios.post("http://localhost:3006/users", user)
}