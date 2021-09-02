import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";

const a11 = ({ navigation }) => {
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
          참을 수 없는 것
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
            ISFP{" "}
            <Text style={{ fontSize: 30, color: "black" }}>규칙, 루틴</Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ISFJ{" "}
            <Text style={{ fontSize: 30, color: "black" }}>
              무자비하고 냉담함
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ISTP <Text style={{ fontSize: 30, color: "black" }}>계획짜기</Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ISTJ{" "}
            <Text style={{ fontSize: 30, color: "black" }}>
              약속어김, 신뢰안감
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ESFP{" "}
            <Text style={{ fontSize: 30, color: "black" }}>
              제약많고 거북함
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ESFJ{" "}
            <Text style={{ fontSize: 30, color: "black" }}>
              거만하고 오만함
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ESTP <Text style={{ fontSize: 30, color: "black" }}>심심함</Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ESTJ <Text style={{ fontSize: 30, color: "black" }}>애매함</Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            INFP{" "}
            <Text style={{ fontSize: 30, color: "black" }}>가식 쩌는 사람</Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            INFJ <Text style={{ fontSize: 30, color: "black" }}>부정직함</Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            INTP <Text style={{ fontSize: 30, color: "black" }}>무지함</Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            INTJ <Text style={{ fontSize: 30, color: "black" }}>멍청함</Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ENFP{" "}
            <Text style={{ fontSize: 30, color: "black" }}>
              나만 모르거나 없는 상황
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ENFJ <Text style={{ fontSize: 30, color: "black" }}>이기적</Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ENTP <Text style={{ fontSize: 30, color: "black" }}>전통</Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ENTJ <Text style={{ fontSize: 30, color: "black" }}>무능력함</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default a11;
