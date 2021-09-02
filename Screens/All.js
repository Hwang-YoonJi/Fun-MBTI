import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const All = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#efebe9" }}>
      <View
        style={{
          paddingVertical: 20,
          paddingTop: 30,
          alignItems: "center",
          borderBottomColor: "lightgray",
          borderBottomWidth: 1,
          backgroundColor: "#efebe9",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo
            name="chevron-thin-left"
            size={24}
            color="#017aff"
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
          모든유형
        </Text>
        <Entypo
          name="chevron-thin-left"
          size={24}
          color="black"
          style={{ marginLeft: 10, opacity: 0 }}
        />
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("a1")}
            style={{
              width: 350,
              height: 60,
              backgroundColor: "#c7a4ff",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>단톡방 채팅 유형🙂</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("a2")}
            style={{
              width: 350,
              height: 60,
              backgroundColor: "#c7a4ff",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>SNS할 때 특징📱</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("a3")}
            style={{
              width: 350,
              height: 60,
              backgroundColor: "#c7a4ff",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>상사한테 혼날 때 반응😡</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("a4")}
            style={{
              width: 350,
              height: 60,
              backgroundColor: "#c7a4ff",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>새로운 사람을 만날 때🤩</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("a5")}
            style={{
              width: 350,
              height: 60,
              backgroundColor: "#c7a4ff",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>무인도에 떨어졌을 때🏝</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("a6")}
            style={{
              width: 350,
              height: 60,
              backgroundColor: "#c7a4ff",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>유형별 분노🔥</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("a7")}
            style={{
              width: 350,
              height: 60,
              backgroundColor: "#c7a4ff",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>유형별 욕망👊</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("a8")}
            style={{
              width: 350,
              height: 60,
              backgroundColor: "#c7a4ff",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>유형별 이상형😍</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("a9")}
            style={{
              width: 350,
              height: 60,
              backgroundColor: "#c7a4ff",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>이별 대처법😭</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("a10")}
            style={{
              width: 350,
              height: 60,
              backgroundColor: "#c7a4ff",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>놀림 많이 받는 순위🤪</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("a11")}
            style={{
              width: 350,
              height: 60,
              backgroundColor: "#c7a4ff",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>참을 수 없는 것☹️</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
