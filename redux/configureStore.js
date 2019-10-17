import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import {createStore, compose} from 'redux';

import {combineReducers} from 'redux';
import addWord from "./reducers/addWord.reducer";
import removeWord from "./reducers/removeWord.reducer";

const rootReducer = combineReducers({
     addWord,
     removeWord
});

const persistConfig = {
    key: 'addWord',
    storage
};

const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') {
    enhancerList.push(devToolsExtension());
}

const composedEnhancer = compose(...enhancerList);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(persistedReducer, composedEnhancer);
    let persistor = persistStore(store);
    return {store, persistor};
};


