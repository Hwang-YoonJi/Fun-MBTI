import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const enfp = ({ navigation }) => {
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
          ENFP
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
            ENFP - 재기발랄한 활동가
          </Text>
        </View>
        <View style={{ alignItems: "flex-start", margin: 10 }}>
          <Text style={{ fontSize: 25, color: "black" }}>
            → 정신산만함, 생각 많음, 고집 셈{"\n"}→ 일머리 있음{"\n"}→ 흥미있고
            관심있는건 열정적
            {"\n"}→ 나서서 무얼 하진 않는데 아무도 안나서면 답답해서 나서는
            스타일
            {"\n"}→ 낯을 좀 가리는데 풀리면 금방 친해지고 말도 많아짐
            {"\n"}→ 무언가에 쉽게 몰두했다 쉽게 그만둠
            {"\n"}→ 외향적이라 친구들이랑 노는게 좋지만 내 시간을 갖고 싶을 땐
            철저하게 혼자있음
            {"\n"}→ 남 얘기에 리액션을 잘 해줘서 고민상담하는 애들 많음
            {"\n"}→ 거짓말을 잘 못해서 입에 발린 말 잘 못함
            {"\n"}→ 하루에 행복한 일 하나씩 정해놓고 설레함
            {"\n"}→ 새롭게 친구 사귀는 거 좋아함
            {"\n"}→ 감정기복 심함, 감정이 얼굴에 다 드러나는 편{"\n"}→ 일 크게
            만들고 싫증나서 안한거 오조오억개
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default enfp;
