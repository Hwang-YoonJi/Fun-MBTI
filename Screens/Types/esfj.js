import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const esfj = ({ navigation }) => {
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
          ESFJ
        </Text>
        <Entypo
          name="chevron-thin-left"
          size={24}
          color="black"
          style={{ marginLeft: 10, opacity: 0 }}
        />
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ alignItems: "center", margin: 10 }}>
          <Text style={{ fontSize: 35, color: "#c7a4ff", fontWeight: "bold" }}>
            ESFJ - 사교적인 외교관
          </Text>
        </View>
        <View style={{ alignItems: "flex-start", margin: 10 }}>
          <Text style={{ fontSize: 25, color: "black" }}>
            → 생각보다 철저함 혼자 계획세우고 그 계획 틀어지는 거 싫어함
            {"\n"}→ 술자리 좋아함 (특히 새로운 사람과의)
            {"\n"}→ 남 눈치 많이 봄 (남 생각 잘해서 그에 맞춰줌)
            {"\n"}→ 책읽고 영화보는거 좋아함
            {"\n"}→ 상담, 고민 들어주는 거 잘함
            {"\n"}→ 친구, 가족 내 주변 인물들 다 챙기고 이 사람들 불행하면 내가
            다 불행해지는 수준임
            {"\n"}→ 인간관계 틀어지면 스트레스 오지게 받음
            {"\n"}→ 인간관계에서 상처받아도 그 사람 배려한다고 얘기 못함
            {"\n"}→ 어디 나가면 어색한거 못참고 먼저 말 검
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default esfj;
