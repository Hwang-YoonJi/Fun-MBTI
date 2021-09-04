import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const entp = ({ navigation }) => {
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
          ENTP
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
            ENTP - 뜨거운 논쟁을 즐기는 변론가
          </Text>
        </View>
        <View style={{ alignItems: "flex-start", margin: 10 }}>
          <Text style={{ fontSize: 25, color: "black" }}>
            → 혼자서 돌아다니느게 제일 편함
            {"\n"}→ 독립심 강함 (한국에 진짜 없는 유형)
            {"\n"}→ 나한테 잘해주는 사람은 두배로 잘해주는데 나한테 못해주면 걍
            1도 없음
            {"\n"}→ 내 의견이랑 상대 의견 다르면 설득하려는 스타일
            {"\n"}→ 토론이나 논쟁할때 내 의견으로 끝나야 속이 시원
            {"\n"}→ 성공하려면 ㅈㄴ성공하고 싶고 바닥을 치려면 아예 방탕하게.
            중간은 없음
            {"\n"}→ 직설적이고 솔직하게 내 맘을 표현하는 것에 거리낌이 없음
            {"\n"}→ 감정기복 심함. 남들한테 기분 바뀌는거 다 티냄
            {"\n"}→ 좋아하는 사람 싫어하는 사람 명확히 구분됨
            {"\n"}→ 뒷심 부족, 끈기 부족, 의지 부족
            {"\n"}→ 무식한 사람 이해하기 힘듬
            {"\n"}→ 친구들이랑 어디가면 계획 다 짜는데 잘 안지킴
            {"\n"}→ 정해진 틀에 갇힌 생활 못함
            {"\n"}→ 과정보다 결과 중요
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default entp;
