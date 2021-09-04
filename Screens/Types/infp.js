import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const infp = ({ navigation }) => {
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
          INFP
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
            INFP - 열정적인 중재자
          </Text>
        </View>
        <View style={{ alignItems: "flex-start", margin: 10 }}>
          <Text style={{ fontSize: 25, color: "black" }}>
            → 잡생각 많음 (망상 잦음)
            {"\n"}→ 게으른 완벽주의자 (완벽하게 하지 못할거면 아예 시작을 안함)
            {"\n"}→ 시간 오래 걸림. 되게 오래 투자하고 집중 오지게 해서 그것만
            팜{"\n"}→ 처음보는 사람한테는 말 잘 거는데 조직생활하는 곳에서는 낯
            엄청 가림
            {"\n"}→ 멀티 안됨. 연락 귀찮아함. 안읽씹 잘함
            {"\n"}→ 내적 성장 엄청 중요하게 여김
            {"\n"}→ 가끔 우울한 나에 심취
            {"\n"}→ 내 개인적인 얘기 남들한테는 하는 거 싫어함(가족포함)
            {"\n"}→ 한번 싫은 건 끝까지 싫음 (호불호 명확)
            {"\n"}→ 남한테 정말 관심 없음. 남을 잘 안 믿음
            {"\n"}→ 남이 나를 어떻게 생각할 지 고민 많이 함{"\n"}→ 누가 내
            일하는 방식에 대해 간섭하면 빡침
            {"\n"}→ 남의 가치관 같은거에 별로 신경 안쓰고 인정하는 편
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default infp;
