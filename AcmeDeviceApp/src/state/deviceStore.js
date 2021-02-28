import React, { createContext, useReducer } from "react";
import deviceReducer from './deviceReducer';


const initialState = {
    devices: [],
};

const DeviceStore = ({ children }) => {
    const [state, dispatch] = useReducer(deviceReducer, initialState);
    return (
        <DeviceContext.Provider value={[state, dispatch]}>
            {children}
        </DeviceContext.Provider>
    )
};

export const DeviceContext = createContext(initialState);
export default DeviceStore;