import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
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
        backgroundColor: "white",
      }}
    >
      <Text style={{ alignItems: "flex-start", fontSize: 50 }}>Fun MBTI</Text>
      <Text style={{ margin: 10 }}>재미로 보는 MBTI</Text>
      <ScrollView horizontal={true} style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("All")}
          style={{
            width: 150,
            height: 200,
            backgroundColor: "skyblue",
            borderRadius: 10,
            marginTop: 50,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 20,
            shadowColor: "gray",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            elevation: 5,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            모든유형
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 150,
            height: 200,
            backgroundColor: "pink",
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
          <Text
            style={{
              fontSize: 30,
            }}
          >
            유형별
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Home;
