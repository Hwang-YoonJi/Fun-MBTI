import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const isfp = ({ navigation }) => {
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
          ISFP
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
            ISFP - 호기심 많은 예술가
          </Text>
        </View>
        <View style={{ alignItems: "flex-start", margin: 10 }}>
          <Text style={{ fontSize: 25, color: "black" }}>
            → 그냥 귀찮음, 행동 느림{"\n"}→ 감정기복 심하고 공감능력 뛰어남
            {"\n"}→ 모든 일 미룰 수 있을 때까지 다 미룸{"\n"}→ 집에가면
            연락두절됨{"\n"}→ 누구랑 약속있었는데 취소되면 속으로 기뻐함
            (약속잡히는거 난감){"\n"}→ 혼자가 좋은데 놀 때가 좋을때가 있기도
            하고 (막상 만나면 잘 놈){"\n"}→ 조용한 관종 (관심받는거 싫은데 좋음.
            소심한 관종){"\n"}→ 칭찬받으면 그거 하루종일 생각남.{"\n"}→ 갈등,
            불화 싫어함{"\n"}→ 다이어리 끝까지 써본 적 없음{"\n"}→ 한 번 받은
            일은 끝까지 해야한다는 생각이 있음 근데 하다가 잠{"\n"}→ 하기 싫은거
            안하고 하고싶은것만 함{"\n"}→ 착한 줄 아는데 사실 이기적 (겉으로
            착한척하고 속으로 영악한 생각함)
            {"\n"}→ 고집, 자존심 진짜 셈{"\n"}→ 남한테 속마음 얘기 잘 안함 (제일
            친한 사람에게도 얘기할까 말까)
            {"\n"}→ 사람 만나는거 좋은데 싫음{"\n"}→ 분석, 판단은 잘하는데
            이러한 판단을 적극적으로 행동으로 옮기지는 않음{"\n"}→ 미룰 수
            있을때까지 미룸{"\n"}→ 규칙적이고 틀에 묶인건 싫어함
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default isfp;
