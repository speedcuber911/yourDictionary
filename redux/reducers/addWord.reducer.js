import {ADD_WORD} from '../actions/index.actions';

const addWord = (state = {}, {type, payload}) => {
    switch (type) {
        case ADD_WORD: {
            return {...state, ...payload};
        }
        case "DELETE_WORD": {
            console.log(payload);
            const {payload, ...rest} = state;
            console.log(rest)           ;
            // return rest;
            return state;
        }
        default:
            return state;
    }
};

export default addWord;
