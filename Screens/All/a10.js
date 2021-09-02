import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";

const a10 = ({ navigation }) => {
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
          놀림 많이 받는 순위
        </Text>
        <Entypo
          name="chevron-thin-left"
          size={24}
          color="black"
          style={{ marginLeft: 10, opacity: 0 }}
        />
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ alignItems: "flex-start", margin: 10 }}>
          <Text style={{ fontSize: 30, color: "black" }}>
            01위 <Text style={{ fontSize: 50, color: "#c7a4ff" }}>INFP</Text>
          </Text>
          <Text style={{ fontSize: 30, color: "black" }}>
            02위 <Text style={{ fontSize: 50, color: "#c7a4ff" }}>ISFJ</Text>
          </Text>
          <Text style={{ fontSize: 30, color: "black" }}>
            03위 <Text style={{ fontSize: 50, color: "#c7a4ff" }}>INFJ</Text>
          </Text>
          <Text style={{ fontSize: 30, color: "black" }}>
            04위 <Text style={{ fontSize: 50, color: "#c7a4ff" }}>ISFP</Text>
          </Text>
          <Text style={{ fontSize: 30, color: "black" }}>
            05위 <Text style={{ fontSize: 50, color: "#c7a4ff" }}>ENFP</Text>
          </Text>
          <Text style={{ fontSize: 30, color: "black" }}>
            06위 <Text style={{ fontSize: 50, color: "#c7a4ff" }}>INTP</Text>
          </Text>
          <Text style={{ fontSize: 30, color: "black" }}>
            07위 <Text style={{ fontSize: 50, color: "#c7a4ff" }}>ISTJ</Text>
          </Text>
          <Text style={{ fontSize: 30, color: "black" }}>
            08위 <Text style={{ fontSize: 50, color: "#c7a4ff" }}>ESFP</Text>
          </Text>
          <Text style={{ fontSize: 30, color: "black" }}>
            09위 <Text style={{ fontSize: 50, color: "#c7a4ff" }}>INTJ</Text>
          </Text>
          <Text style={{ fontSize: 30, color: "black" }}>
            10위 <Text style={{ fontSize: 50, color: "#c7a4ff" }}>ENFJ</Text>
          </Text>
          <Text style={{ fontSize: 30, color: "black" }}>
            11위 <Text style={{ fontSize: 50, color: "#c7a4ff" }}>ISTP</Text>
          </Text>
          <Text style={{ fontSize: 30, color: "black" }}>
            12위 <Text style={{ fontSize: 50, color: "#c7a4ff" }}>ESFJ</Text>
          </Text>
          <Text style={{ fontSize: 30, color: "black" }}>
            13위 <Text style={{ fontSize: 50, color: "#c7a4ff" }}>ESTP</Text>
          </Text>
          <Text style={{ fontSize: 30, color: "black" }}>
            14위 <Text style={{ fontSize: 50, color: "#c7a4ff" }}>ENTP</Text>
          </Text>
          <Text style={{ fontSize: 30, color: "black" }}>
            15위 <Text style={{ fontSize: 50, color: "#c7a4ff" }}>ENTJ</Text>
          </Text>
          <Text style={{ fontSize: 30, color: "black" }}>
            16위 <Text style={{ fontSize: 50, color: "#c7a4ff" }}>ESTJ</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default a10;
