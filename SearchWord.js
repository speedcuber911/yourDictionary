import React, {Component} from "react";
import {Platform, StyleSheet, View, Fragment} from "react-native";
import {Button, Text, Input, colors} from "pebble-native";
import {ajax} from "rxjs/observable/dom/ajax";
import {connect} from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";


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
const mapDispatchToProps = (dispatch) => ({dispatch});
const mapStateToProps = ({addWord}) => {
    return {words: addWord};
};


class SearchWord extends Component {

    state = {word: null, meanings: [], errorMessage: null};

    fetchStream$ = ajax({
        url: `https://od-api.oxforddictionaries.com/api/v1/entries/en/${this.state.word}/definitions;regions=us`,
        method: "GET",
        headers: {
            "Accept": "application/json",
            "app_id": "34a38a1b",
            "app_key": "e75ad02cdeff6ec68b45fe7747c04fde"
        }
    });
    getMeaning = (word) => {
        if (this.props.words[word]) {
            this.setState({errorMessage: "Already in word list."});
            return;
        }
        this.fetchStream$.subscribe(({response}) => {
                let meanings = [];
                response.results[0]['lexicalEntries'].map(({entries}) => entries.map(({senses}) => senses.map(({definitions}) => ((definitions.map(definition => meanings.push(definition)))))));
                this.props.dispatch({type: "ADD_WORD", payload: {[word]: meanings}});
                this.setState({meanings, errorMessage: null});
            }, error => {
                this.setState({errorMessage: "Word not found"});
            }
        )
    };

    render() {
        const {word, meanings, errorMessage} = this.state;
        console.log(this.props);
        return (
            <React.Fragment>
                <View style={styles.container}>
                    <Text size={25}>Your Dictionary</Text>
                    <Icon name='glass'/>
                    <View style={{flexDirection: "row", alignItems: "center", flex: 1}}>
                        <Input
                            placeholder="Add word"
                            onChange={text => this.setState({word: text})}
                            value={word}
                            errorMessage={errorMessage}
                            successMessage={meanings.length && "Success"}
                        />
                    </View>
                </View>
                <View>
                    {
                        meanings.map((meaning, i) => <Text key={i} size={18} style={{
                            backgroundColor: "#F5FCFF",
                            paddingHorizontal: 10
                        }}>{`${i + 1}) ${meaning}`}</Text>)
                    }
                </View>
                <Button.FooterButton title={"Explorer"} onPress={() => this.getMeaning(word)}>
                    Add Word
                </Button.FooterButton>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchWord);