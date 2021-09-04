import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const isfj = ({ navigation }) => {
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
          ISFJ
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
            ISFJ - 용감한 수호자
          </Text>
        </View>
        <View style={{ alignItems: "flex-start", margin: 10 }}>
          <Text style={{ fontSize: 25, color: "black" }}>
            → 원칙주의자{"\n"}→ 남 눈치봄, 남들 챙기는 거 좋아함{"\n"}→ 외로움
            많이 타는데 많은 사람이랑 있는건 싫음{"\n"}→ 전화오면 고민
            오조오억번 하고 받음
            {"\n"}→ 게으른 완벽주의자. 게으름뱅이{"\n"}→ 조 짜서 하는 단체활동
            안 좋아함
            {"\n"}→ 남이 볼땐 인생 노잼처럼 보이지만 자기선에선 매우 만족하며
            살고있음
            {"\n"}→ 배려심 쩔고 공감잘해줌. 생각많음
            {"\n"}→ 인간관계에 스트레스 많이 받음{"\n"}→ 아니면 아니고 말면 말자
            마인드
            {"\n"}→ 겉으론 무덤덤해보여도 속으론 온갖 생각 다 함{"\n"}→ 어쩔 땐
            내향적이고 어쩔 땐 외향적, 성격이 왔다갔다 해서 나도 내 성격 잘 모름
            {"\n"}→ 겸손하고 칭찬많이 해줌
            {"\n"}→ 진짜 싫어하는 사람아니면 잘 안까고 남한테 관심도 별로 없음
            {"\n"}→ 성격 온화. 하자고 하면 거의 다 해줌
            {"\n"}→ 계획세우는거 좋아하고 메모하고 기억해둠 사람들한테 나에 대한
            어필 잘 안함
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default isfj;
