/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React, {Component} from 'react';
import initStore from './redux/configureStore';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'



const storeConf = initStore();
const store = storeConf.store;

class YourDictionary extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={storeConf.persistor}>
                <App/>
                </PersistGate>
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => YourDictionary);
