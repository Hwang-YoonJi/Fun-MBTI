import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const esfp = ({ navigation }) => {
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
          ESFP
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
            ESFP - 자유로운 영혼의 연예인
          </Text>
        </View>
        <View style={{ alignItems: "flex-start", margin: 10 }}>
          <Text style={{ fontSize: 25, color: "black" }}>
            → 성격 개급함 (처리하고 싶은 일은 빨리빨리 해야됨)
            {"\n"}→ 우주최강오지랖
            {"\n"}→ 생각없이 잘 삼 아무리 걱정되는 일 있어도 좀만 지나면 무생각
            {"\n"}→ 하고 싶다고 생각한거 다 해야됨 근데 하기 싫은 건 끝까지 미룸
            {"\n"}→ 소액결제 할 때 대부분 미래의 나에게 맡김
            {"\n"}→ 혼자있으면 지루해서 뭔갈 계속하고 있어야함
            {"\n"}→ 모임장소에서 침묵흐르는 거 제일 싫어함
            {"\n"}→ 사람의 단점보단 장점을 보려하고 싸움보단 평화가 좋음
            {"\n"}→ 자존감 개 높음 모든게 내 위주
            {"\n"}→ 카톡 용건 있는거 아니면 오래 안일씹 근데 안오는건 싫음
            {"\n"}→ 사람 너무 좋고 어울리는 거 개좋은데 집밖에 나가기 귀찮음
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default esfp;
