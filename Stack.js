import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import All from "./Screens/All";
import Types from "./Screens/Types";
import Home from "./Screens/Home";
import a1 from "./Screens/All/a1";
import a2 from "./Screens/All/a2";
import a3 from "./Screens/All/a3";
import a4 from "./Screens/All/a4";
import a5 from "./Screens/All/a5";
import a6 from "./Screens/All/a6";
import a7 from "./Screens/All/a7";
import a8 from "./Screens/All/a8";
import a9 from "./Screens/All/a9";
import a10 from "./Screens/All/a10";
import a11 from "./Screens/All/a11";

class Stack extends Component {
  render() {
    return <AppContainer headerMode="none" />;
  }
}

const myStack = createStackNavigator(
  {
    Home: Home,
    All: All,
    Types: Types,
    a1: a1,
    a2: a2,
    a3: a3,
    a4: a4,
    a5: a5,
    a6: a6,
    a7: a7,
    a8: a8,
    a9: a9,
    a10: a10,
    a11: a11,
  },
  {
    initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(myStack);

export default Stack;
