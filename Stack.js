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
import isfp from "./Screens/Types/isfp";
import istp from "./Screens/Types/istp";
import isfj from "./Screens/Types/isfj";
import istj from "./Screens/Types/istj";
import enfj from "./Screens/Types/enfj";
import enfp from "./Screens/Types/enfp";
import entj from "./Screens/Types/entj";
import entp from "./Screens/Types/entp";
import infj from "./Screens/Types/infj";
import infp from "./Screens/Types/infp";
import intj from "./Screens/Types/intj";
import intp from "./Screens/Types/intp";
import esfj from "./Screens/Types/esfj";
import esfp from "./Screens/Types/esfp";
import estj from "./Screens/Types/estj";
import estp from "./Screens/Types/estp";

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
    isfp: isfp,
    istp: istp,
    isfj: isfj,
    istj: istj,
    enfj: enfj,
    enfp: enfp,
    entj: entj,
    entp: entp,
    infj: infj,
    infp: infp,
    intj: intj,
    intp: intp,
    esfj: esfj,
    esfp: esfp,
    estj: estj,
    estp: estp,
  },
  {
    initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(myStack);

export default Stack;
