import axios from 'axios';

const apiUrl = process.env.api || "http://localhost:8000/api";

export const getAllDevices = async () => {
    const resp = await axios.get(`${apiUrl}/device`);
    return resp.data;
}

export const getDeviceById = async (id) => {
    const resp = await axios.get(`${apiUrl}/device/${id}`);
    return resp.data;
}

export const createDevice = async (device) => {
    const resp = await axios.post(`${apiUrl}/device`, device);
    return resp.data;
}

export const updateDevice = async (deviceId, device) => {
    const resp = await axios.patch(`${apiUrl}/device/${deviceId}`, device);
    return resp.data;
}

export const deleteDevice = async (id) => {
    const resp = await axios.delete(`${apiUrl}/device/${id}`);
    return resp.data;
}