import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const infj = ({ navigation }) => {
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
          INFJ
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
            INFJ - 선의의 옹호자
          </Text>
        </View>
        <View style={{ alignItems: "flex-start", margin: 10 }}>
          <Text style={{ fontSize: 25, color: "black" }}>
            → 생각이 너무 많음{"\n"}→ 새로운 일 시작하는거, 새로운 사람 만나는거
            난감
            {"\n"}→ 낯가림 심함, 눈치 빠름{"\n"}→ 겉으로 웃는데 속으로 욕많이 함
            {"\n"}→ 할 거 미리 해치우는 편{"\n"}→ 관심받고 싶은데 나서는 건
            싫어함
            {"\n"}→ 내사람한테는 진짜 잘해줌
            {"\n"}→ 나 혼자 생각할 시간 꼭 필요
            {"\n"}→ 계획적인거 좋아함. 항상 계획을 세움
            {"\n"}→ 친하고 마음맞는 애랑 단 둘이 노는거 좋아함
            {"\n"}→ 내가 하고 싶은 건 열심히 함 특히 예술쪽으로
            {"\n"}→ 감수성 풍부 {"\n"}→ 다 같이 노는 무의미한 시간이 제일 지루
            {"\n"}→ 무슨 말을 하더라도 근거가 없으면 너무 싫음
            {"\n"}→ 어디서 주워들어서 말하는 거 절대 못믿음
            {"\n"}→ 생각 많고 망상 잦음
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default infj;
