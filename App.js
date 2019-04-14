/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {Fragment} from "react-native";
import {createBottomTabNavigator, createAppContainer} from "react-navigation";
import SearchWord from "./SearchWord";
import YourList from "./YourList";
import Quiz from "./Quiz";
import {connect} from 'react-redux';
import {colors} from "pebble-native";
import Icon from "react-native-vector-icons/FontAwesome";

const TabNavigator = createBottomTabNavigator({
        SearchScreen: {
            screen: SearchWord,
            navigationOptions: {
                tabBarIcon: () => <Icon name='search' size={18}/>
            }
        },
        YourList: {
            screen: YourList,
            navigationOptions: {
                tabBarIcon: () => <Icon name='book' size={18}/>
            }
        },
        Quiz: {
            screen: Quiz,
            navigationOptions: {
                tabBarIcon: () => <Icon name='binoculars' size={18}/>
            }
        }
    },
    {
        tabBarOptions: {
            showLabel: true,
            activeTintColor: colors.violet.base,
            inactiveTintColor: colors.gray.dark,
            style: {
                height: 60,
                paddingVertical: 6,
                borderTopColor: colors.gray.base
            }
        },
    }
);


const mapStateToProps = (state) => ({state});
const mapDispatchToProps = (dispatch) => ({dispatch});

class Root extends React.Component {
    render() {
        return (
            <TabNavigator/>
        )
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Root);
