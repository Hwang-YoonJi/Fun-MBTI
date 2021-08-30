import React, { Component } from "react";
import Stack from "./Stack";
import { NavigationContainer } from "@react-navigation/native";

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    );
  }
}

export default App;
