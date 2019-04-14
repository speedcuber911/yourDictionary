import React, {Component} from "react";
import {View, ScrollView} from "react-native";
import {Text, SearchInput} from "pebble-native";
import {connect} from "react-redux";
import {colors} from "pebble-native";

const mapStateToProps = (state) => state;

class SearchWord extends Component {
    render() {
        const {addWord} = this.props;
        return (
            <ScrollView>
                <View style={{flexDirection: "column", paddingTop: 50, paddingLeft: 30, backgroundColor: "#F5FCFF",}}>
                    <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", flex: 1}}>
                        <Text size={24}>Your list
                        </Text>
                    </View>
                    <View style={{flexDirection: "column", paddingTop: 50}}>
                        {
                            Object.keys(addWord).map((word, index) => <Text size={20} style={{
                                marginBottom: 15
                            }}
                                                                            key={index}>{`${index + 1}) ${word}`}</Text>)
                        }
                    </View>
                    <SearchInput results={[]} onPress={() => {
                    }} placeholder="Search Your List"/>
                </View>
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(SearchWord);