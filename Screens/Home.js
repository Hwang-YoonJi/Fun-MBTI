import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 50,
        backgroundColor: "#efebe9",
      }}
    >
      <Text style={{ alignItems: "flex-start", fontSize: 50 }}>
        Fun <Text style={{ color: "red" }}>M</Text>
        <Text style={{ color: "orange" }}>B</Text>
        <Text style={{ color: "green" }}>T</Text>
        <Text style={{ color: "blue" }}>I</Text>
      </Text>
      <Text style={{ alignItems: "flex-start", margin: 10, fontSize: 20 }}>
        재미로 보는 MBTI
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("All")}
        style={{
          width: 300,
          height: 150,
          backgroundColor: "#8e99f3",
          borderRadius: 10,
          marginTop: 70,
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "gray",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          elevation: 5,
        }}
      >
        <Text style={{ fontSize: 30 }}>모 든 유 형</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 300,
          height: 150,
          backgroundColor: "#ffa270",
          borderRadius: 10,
          marginTop: 50,
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "gray",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          elevation: 5,
        }}
        onPress={() => navigation.navigate("Types")}
      >
        <Text style={{ fontSize: 30 }}>유 형 별</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
