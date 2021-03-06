import axios from 'axios';

const apiUrl = process.env.url || "http://localhost:8000";
export const getAllDevices = async () => {
    const resp = await axios.get(`${apiUrl}/api/device`);
    return resp.data;
}