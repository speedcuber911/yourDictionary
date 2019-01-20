import React, { Component } from "react";
import { Platform, StyleSheet, View, Fragment } from "react-native";
import { Button, Text, Input } from "pebble-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingHorizontal: 25,
    paddingTop: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default class SearchWord extends Component {
  state = { word: null };
  render() {
    const { word } = this.state;
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Text size={25}>Your Dictionary</Text>
          <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            <Input
              placeholder="Add word"
              onChange={text => this.setState({ word: text })}
              value={word}
              errorMessage={word === "abc" && "word not present"}
            />
          </View>
        </View>
        <Button.FooterButton title={"Explorer"} onPress={() => {}}>
          Add Word
        </Button.FooterButton>
      </React.Fragment>
    );
  }
}
