import {ADD_WORD} from '../actions/index.actions';

const addWord = (state = {}, {type, payload}) => {
    switch (type) {
        case ADD_WORD: {
            return {...state, ...payload};
        }
        default:
            return state;
    }
};

export default addWord;