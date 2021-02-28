import { createStore } from 'redux';
import { DashReducer } from './reducers/dashReducer';

const initialState = [
];

export const store = (state = initialState) => {
    return createStore(DashReducer, state);
}


