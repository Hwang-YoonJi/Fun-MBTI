import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const intp = ({ navigation }) => {
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
          INTP
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
            INTP - 논리적인 사색가
          </Text>
        </View>
        <View style={{ alignItems: "flex-start", margin: 10 }}>
          <Text style={{ fontSize: 25, color: "black" }}>
            → 자발적 아웃사이더(혼자 있는게 제일 편하고 행복)
            {"\n"}→ 공상 자주함. 분석, 추리 좋아함. 생각 많음
            {"\n"}→ 무뚝뚝한 편이고 잡담같은것도 잘 못하고 싫어함
            {"\n"}→ 책 진짜 좋아하는 데 읽기 귀찮아서 리스트에만 적어놓음
            {"\n"}→ 지식에 대한 욕망 강함
            {"\n"}→ 인간은 싫지만 흥미로운 존재라고 생각
            {"\n"}→ 팩폭하지말라는 소리 자주 들음
            {"\n"}→ 감수설 풍부. 말 많이 안함. 귀찮은거 싫어함
            {"\n"}→ 게으르고 미루기 끝판왕
            {"\n"}→ 웬만한 일에 상처 안받음
            {"\n"}→ 남이 내 욕하는거 신경 안쓰고 남 욕도 안함
            {"\n"}→ 무논리 무능력인데 목소리만 큰 사람 진짜 싫어함
            {"\n"}→ 논리적인거 환장하는데 막상 본인은 논리적으로 말이 안나옴
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default intp;
