import {TEST_ACTION} from '../actions/index.actions';

const test = (state = {}, action) => {
    switch (action.type) {
        case TEST_ACTION: {
            return ({...state, words: [...state.words, action.payload]});
        }
        case "persist/REHYDRATE": {
            return action[payload];
        }

        default:
            return state;
    }
};

export default test;
