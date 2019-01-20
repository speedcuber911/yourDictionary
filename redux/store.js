import {createStore, compose/* , applyMiddleware*/} from 'redux';
import rootReducer from './reducers/root.reducer';
import { createEpicMiddleware } from "redux-observable";
import storePersistConfig from "../config/storePersist";
