import axios from 'axios';

const apiUrl = process.env.url || "http://localhost:8000/api"
export const getAllDevices = async () => {
    const resp = await axios.get(`${apiUrl}/device`);
    return resp.data;
}