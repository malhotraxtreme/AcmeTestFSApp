export const DashReducer = (state, action) => {
    switch (action.type) {
        case "SET_DEVICES_DATA":
            return [
                ...action.payload
            ];
        default:
            return state;
    }
};