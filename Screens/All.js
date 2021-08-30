import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const All = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "skyblue" }}>
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
          모든유형
        </Text>
        <Entypo
          name="chevron-thin-left"
          size={24}
          color="black"
          style={{ marginLeft: 10, opacity: 0 }}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={styles.text}>단톡방 채팅 유형</Text>
        <Text style={styles.text}>SNS할 때 특징</Text>
        <Text style={styles.text}>상사한테 혼날 때 반응</Text>
        <Text style={styles.text}>새로운 사람을 만날 때</Text>
        <Text style={styles.text}>무인도에 떨어졌을 때</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    margin: 10,
  },
});

export default All;
