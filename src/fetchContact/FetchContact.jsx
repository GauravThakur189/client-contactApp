import axios from 'axios';

// base url


const  BASE_URL = import.meta.env.VITE_BASEURL;

export const getAllData = async ()=>{
    try {
       const res = await axios.get(`${BASE_URL}/api/contact`) ;
       return res.data;
    } catch (error) {
        console.log(error);
    }
}