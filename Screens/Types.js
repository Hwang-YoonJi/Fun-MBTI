import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const Types = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "pink" }}>
      <View
        style={{
          paddingVertical: 20,
          paddingTop: 30,
          alignItems: "center",
          borderBottomColor: "black",
          borderBottomWidth: 1,
          backgroundColor: "white",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo
            name="chevron-thin-left"
            size={24}
            color="black"
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#40A4FF" }}>
          유형별
        </Text>
        <Entypo
          name="chevron-thin-left"
          size={24}
          color="black"
          style={{ marginLeft: 10, opacity: 0 }}
        />
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,
          }}
        >
          <Text style={styles.text}>ISTP</Text>
          <Text style={styles.text}>ISTJ</Text>
          <Text style={styles.text}>ISFP</Text>
          <Text style={styles.text}>ISFJ</Text>
          <Text style={styles.text}>INTP</Text>
          <Text style={styles.text}>INTJ</Text>
          <Text style={styles.text}>INFP</Text>
          <Text style={styles.text}>INFJ</Text>
          <Text style={styles.text}>ESTP</Text>
          <Text style={styles.text}>ESTJ</Text>
          <Text style={styles.text}>ESFP</Text>
          <Text style={styles.text}>ESFJ</Text>
          <Text style={styles.text}>ENTP</Text>
          <Text style={styles.text}>ENTJ</Text>
          <Text style={styles.text}>ENFP</Text>
          <Text style={styles.text}>ENFJ</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    margin: 5,
  },
});

export default Types;
