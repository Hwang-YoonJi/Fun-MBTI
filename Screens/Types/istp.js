import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const istp = ({ navigation }) => {
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
          ISTP
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
            ISTP - 만능 재주꾼
          </Text>
        </View>
        <View style={{ alignItems: "flex-start", margin: 10 }}>
          <Text style={{ fontSize: 25, color: "black" }}>
            → 만사가 귀찮음{"\n"}→ 무미건조, 낯가림 근데 친해지면 말 많고 장난도
            잘 침{"\n"}→ 남한테 관심 없고 내 얘기도 잘 안함{"\n"}→ 쓸데없는 소비
            엄청함{"\n"}→ 노력절약형, 효율적인거 개 좋아함{"\n"}→ 내가 제일
            잘난줄 안다.{"\n"}→ 카톡 할말 없으면 읽씹, 대화이어가기 안함{"\n"}→
            자기자랑 꼴뵈기 싫음{"\n"}→ 이것저것 공부하고 싶은게 너무 많음 근데
            끝을 못 봄{"\n"}→ 미루다 발등에 불떨어져도 안하다가 발등 타들어가면
            그제야 함{"\n"}→ 기계조작 잘하고 재미있어함{"\n"}→ 관심있고 하고
            싶은것만 함{"\n"}→ 위계질서 싫어하고 내가 하는 거 간섭받으면
            육성으로 욕나옴{"\n"}→ 관종이라 관심받는건 좋은데 시끄러운 건 싫어함
            {"\n"}→ 관찰력 뛰어남, 머리 안됨, 호불호 강함
            {"\n"}→ 공감능력 X (티안내려고 노력은 하는데 티남)
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default istp;
