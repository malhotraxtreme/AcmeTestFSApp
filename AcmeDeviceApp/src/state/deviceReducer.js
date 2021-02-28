const deviceReducer = (state, action) => {
    switch (action.type) {
        case 'SET_DEVICES':
            return {
                ...state,
                devices: [...action.payload]
            };
        case 'CREATED_DEVICE':
            return {
                ...state,
                devices: state.devices.concat(action.payload)
            };
        case 'UPDATED_DEVICE':
            return {
                ...state,
            };
        case 'DELETED_DEVICE':
            return {
                ...state,
                devices: state.devices.filter(device => device._id !== action.payload)
            };
        default:
            return state;
    }
};

export default deviceReducer;