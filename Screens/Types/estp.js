import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const estp = ({ navigation }) => {
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
          ESTP
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
            ESTP - 모험을 즐기는 사업가
          </Text>
        </View>
        <View style={{ alignItems: "flex-start", margin: 10 }}>
          <Text style={{ fontSize: 25, color: "black" }}>
            → 외로움 오지게 탐{"\n"}→ 손재주 좋아서 취미가 베이킹, 뜨개질,
            인형만들기
            {"\n"}→ 리더쉽있음. 조별활동 조장 혹은 반장 도맡아 함{"\n"}→ 좀 관종{" "}
            {"\n"}→ 표현을 아끼지 않음{"\n"}→ 어른들이 좋아함
            {"\n"}→ 밖에서 사람만나는 거 개 좋아하는 데 게을러서 나가기까지가
            싫음
            {"\n"}→ 하고 싶은거 다 해야됨. 못하면 혼자서 부들부들하다가 곧
            까먹음
            {"\n"}→ 걍 대충살고 눈치도 안봄
            {"\n"}→ 스트레스도 잘 안받음 근데 그렇게 적극적인 편도 아님 걍
            사는대로 삼{"\n"}→ 공감능력 조금 부족
            {"\n"}→ 남한테 관심없고 생각하는 것도 귀찮음
            {"\n"}→ 모임에서 어는새 내가 분위기 주도하고 있음
            {"\n"}→ 근자감 쩔
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default estp;
