import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";

const a4 = ({ navigation }) => {
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
          새로운 사람을 만날 때
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
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ENFP, ENFJ, ESFJ, ESFP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              나 새 친구 사귀었어 완전 좋아!!
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ISFJ, INFP, ISFP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              괜찮은 사람인 걸? 더 알아가고 싶어
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            INFJ, ENTJ, ESTJ, ISTJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              어떻게 하면 "너 성가셔"를 착하게 말하지?
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            INTJ, INTP, ENTP, ESTP, ISTP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              난 너 별로임. ㅂㅂ
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default a4;
