/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import {
  DocumentPicker,
  DocumentPickerUtil
} from "react-native-document-picker";
import RNFetchBlob from "rn-fetch-blob";
import RNGRP from "react-native-get-real-path";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
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

type Props = {};

readContent = async uri => {
  console.log(uri);
  RNGRP.getRealPathFromURI(uri)
    .then(filePath => console.log(filePath))
    .catch(err => console.log(err));
  // .then(stream => {
  //   console.log(stream);
  //   let data = "";
  //   stream.open();
  //   stream.onData(chunk => {
  //     data += chunk;
  //   });
  //   stream.onEnd(() => {
  //     console.log(data);
  //   });
  // })
  // .catch(e => console.log(e));
};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>File Picker starts here</Text>
        <Button
          title={"Explorer"}
          onPress={() =>
            DocumentPicker.show(
              { filetype: [DocumentPickerUtil.allFiles()] },
              (e, r) => readContent(r)
            )
          }
        />
      </View>
    );
  }
}
