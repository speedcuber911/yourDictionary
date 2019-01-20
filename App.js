/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View, Fragment } from "react-native";
import { Button, Text, Input, Icon } from "pebble-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import SearchWord from "./SearchWord";
import YourList from "./YourList";
import Quiz from "./Quiz";

const TabNavigator = createBottomTabNavigator({
  SearcScreen: { screen: SearchWord },
  YourList: { screen: YourList },
  Quiz: { screen: Quiz }
});

export default TabNavigator;
