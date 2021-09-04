import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const entj = ({ navigation }) => {
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
          ENTJ
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
            ENTJ - 대담한 통솔자
          </Text>
        </View>
        <View style={{ alignItems: "flex-start", margin: 10 }}>
          <Text style={{ fontSize: 25, color: "black" }}>
            → 시원찮은 애랑 팀플하면 엄청 답답해하고 결국 총대매고 내가 함{"\n"}
            → 활동적이고 집순이 기질은 아님 근데 누구한테 의존하거나 의지하는
            스타일도 아님
            {"\n"}→ 열등감 느낀적 극히 드뭄
            {"\n"}→ 피해주는거 피해받는거 싫어하고 남 일에 노관심
            {"\n"}→ 남이 이래라 저래라 하는거 싫어하고 냉철해질땐 끝도 없이
            냉철해짐
            {"\n"}→ 남들이 하는 꼬라지가 맘에 안들어서 내가 나서서함
            {"\n"}→누가 뭐 못하면 답답하고 이해가 안됨
            {"\n"}→ 성격 불도저 같은 경향 자기애 강함
            {"\n"}→ 감정적 공감 안됨{"\n"}→ 친구들이 하소연해도 공감이 아니라
            해결책 찾아줌
            {"\n"}→ 머리 개똑똑해서 인생사는게 쉽지만 내가 하기 싫은건 안함
            {"\n"}→ 억지로 해야할땐 최대한 빨리 끝낼 수 있는 방법 찾느라 머리
            오지게 굴림
            {"\n"}→ 새로운 사람 만나는 거 좋아하지만 인간과 깊은 관계맺는건 별로
            안좋아함
            {"\n"}→ 현실적, 논리적이지만 혼자있을땐 상상력 오짐
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default entj;
