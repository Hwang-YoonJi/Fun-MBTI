import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const enfj = ({ navigation }) => {
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
          ENFJ
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
            ENFJ - 정의로운 사회운동가
          </Text>
        </View>
        <View style={{ alignItems: "flex-start", margin: 10 }}>
          <Text style={{ fontSize: 25, color: "black" }}>
            → 존나 시끄러움{"\n"}→ 핵인싸 되고 싶어함{"\n"}→ 사람들을 이끄는
            것에 타고난 기질이 있고 좋아하기도 함{"\n"}→ 상대방도 본인을
            신뢰한다는 느낌을 받으면 살아있음을 느낌{"\n"}→ 단숨함, 멘탈강함
            {"\n"}→ 무리에 속해있는 것도 좋아하지만 마이웨이기질 약간 있음
            {"\n"}→ 여가시간 혼자 보내는거 좋아함
            {"\n"}→ 많은 사람들의 신뢰를 받는 성격
            {"\n"}→ 사람들한테 잘 맞춰주는 성격
            {"\n"}→ 객관적, 직관적{"\n"}→ 내가 스스로를 잘 앎{"\n"}→ 일에 흥미가
            많은 사람이라 꿈이 여러개
            {"\n"}→ 센스있고 눈치가 빠름
            {"\n"}→ 계획짜는거 개 좋아함 조금이라도 벗어나면 개빡침
            {"\n"}→남들 눈치봄
            {"\n"}→ 남들 신경쓰고 잘해주려하는데 그만큼 상처도 받음
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default enfj;
