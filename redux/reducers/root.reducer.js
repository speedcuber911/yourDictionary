import {combineReducers} from 'redux';
import addWord from "./addWord.reducer";
import removeWord from "./removeWord.reducer";

export default combineReducers({
    addWord,
    removeWord
});

