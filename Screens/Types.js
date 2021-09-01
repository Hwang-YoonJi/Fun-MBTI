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
    <View style={{ flex: 1, backgroundColor: "#efebe9" }}>
      <View
        style={{
          paddingVertical: 20,
          paddingTop: 30,
          alignItems: "center",
          borderBottomColor: "#efebe9",
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
            color="black"
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
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
            paddingTop: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              backgroundColor: "#c7a4ff",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>ISTP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              backgroundColor: "#c7a4ff",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>ISTJ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              backgroundColor: "#c7a4ff",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>ISFP</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingTop: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              backgroundColor: "#c7a4ff",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>ISFJ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              backgroundColor: "pink",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>INTP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              backgroundColor: "pink",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>INTJ</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingTop: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              backgroundColor: "pink",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>INFP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              backgroundColor: "pink",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>INFJ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              backgroundColor: "lightgreen",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>ESTP</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingTop: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              backgroundColor: "lightgreen",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>ESTJ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              backgroundColor: "lightgreen",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>ESFP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              backgroundColor: "lightgreen",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>ESFJ</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingTop: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              backgroundColor: "skyblue",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>ENTP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              backgroundColor: "skyblue",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>ENTJ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              backgroundColor: "skyblue",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>ENFP</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingTop: 10,
            flexDirection: "row",
            paddingLeft: 10,
          }}
        >
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              backgroundColor: "skyblue",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={styles.text}>ENFJ</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    margin: 5,
  },
});

export default Types;
