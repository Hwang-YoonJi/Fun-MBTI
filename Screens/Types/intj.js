import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const intj = ({ navigation }) => {
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
          INTJ
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
            INTJ - 용의주도한 전략가
          </Text>
        </View>
        <View style={{ alignItems: "flex-start", margin: 10 }}>
          <Text style={{ fontSize: 25, color: "black" }}>
            → 혼자있는 거 좋아함. 근데 단체 활동때 주도적인 역할 자주 맡음
            {"\n"}→ 굉장한 개인주의자. 이기적
            {"\n"}→ 하루하루 세세하게 계획짜놓고 지내는 것 좋아함
            {"\n"}→ 돈관리도 잘 하는 편{"\n"}→ 감정에 휘둘리는 거 싫어함
            {"\n"}→ 남에게 관심 없고 친구가 고민 상담할때도 공감 못함
            {"\n"}→ 수다 떠는 거 좋아함
            {"\n"}→ 사람 얼굴, 이름 잘 기억 못함
            {"\n"}→ 약간 관종끼 있지만 내성적이라 표출은 안함
            {"\n"}→ 동물들에게는 한없이 친절
            {"\n"}→ 몇몇 물건에 집착함
            {"\n"}→ 무신경하다는 소리 들음 근데 좋아하는 건 또 쩔게 집착함
            {"\n"}→ 특이하고 특별한데 남에게 그런소리 듣는 건 싫음
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default intj;
