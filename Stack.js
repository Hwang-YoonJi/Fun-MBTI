import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import All from "./Screens/All";
import Types from "./Screens/Types";
import Home from "./Screens/Home";


class Stack extends Component {
    render() {
        return(
            <AppContainer />
        )
    }
}

const myStack = createStackNavigator({
    'Home' : Home,
    'All' : All,
    'Types' : Types
},{
    initialRouteName: 'Home'
});

const AppContainer = createAppContainer(myStack)

export default Stack;