import React, {Component} from "react";
import {ScrollView,View,TouchableNativeFeedback} from "react-native";
import {Text} from "pebble-native";
import {connect} from "react-redux";
import {colors} from "pebble-native";
import {Container, Header, Content, List, ListItem, Left, Right, Icon, Title} from 'native-base';

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({dispatch});

class YourList extends Component {

    delete = (word) => { this.props.dispatch({type: "DELETE_WORD", payload: word});};

    render() {
        console.log(this.props);
        const {addWord} = this.props;
        return (
            <ScrollView>
                <Container>
                    <Header style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                        <Title>Word List</Title>
                    </Header>
                    <Content>
                        <List>
                            {
                                Object.keys(addWord).map((word, index) =>
                                    (<ListItem key={index}>
                                        <Left>
                                            <Text bold color={colors.gray.darker}>{word.toUpperCase()}</Text>
                                        </Left>
                                        <Right>
                                            <TouchableNativeFeedback onPress={() => this.delete(word)}>
                                                <View>
                                                    <Icon name="trash" color={colors.red.base}/>
                                                </View>
                                            </TouchableNativeFeedback>
                                        </Right>
                                    </ListItem>))
                            }

                        </List>
                    </Content>
                </Container>
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(YourList);