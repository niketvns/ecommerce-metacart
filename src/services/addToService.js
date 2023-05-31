import axios from "axios";

export const addToService = async (product, service) => {
    const encodedToken = localStorage.getItem('encodedToken')
    if (encodedToken) {
        try {
            const {data} = await axios.post(`/api/user/${service}`,
                {product}, {headers: {authorization: encodedToken}}
            )
            return data;
        } catch (err) {
            console.log(err)
        }
    }
}