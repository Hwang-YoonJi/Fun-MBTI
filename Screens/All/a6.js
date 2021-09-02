import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";

const a6 = ({ navigation }) => {
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
          유형별 분노
        </Text>
        <Entypo
          name="chevron-thin-left"
          size={24}
          color="black"
          style={{ marginLeft: 10, opacity: 0 }}
        />
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ alignItems: "flex-start", margin: 10 }}>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            불유형 - ENFP, ESTP, ENTP, ENTJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              1. 목소리가 엄청 커지고 소리를 지른다. 2. 감정이 대개 얼굴에 다
              들어나고 표정만으로도 빡친것을 알 수 있다. 3. 행동이 거칠어지며
              폭팔하기 일보직전 4. 필터 없이 내뱉는다.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            얼음유형 - ISTJ, INTJ, ESTJ, ESFJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              1. 잔잔/은은한 분노 2. 조곤조곤 설명 다하면서 화 냄 3.화가 난
              포인트를 말하며 논리적으로 반박 4. 의도하진 않지만 상대방의
              정신적인 면에 타격을 준다.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            돌유형 - INTP, ISTP, INFJ, ISFP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              1. 하가 쉽게 나는 성격이 아님. 만약 화가 났다면 선을 씨게 넘은
              거임. 2. 화가나면 서늘해짐 표정변화X 3. 주변이 냉기로 가득해져
              갑분싸 4. 하지만 표현을 많이 안하고 일을 크게 벌이기 싫어서 그냥
              참는 경우 많음 (체념+포기+쌓아둠=그러다 크게 터지는 편)
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            물유형 - INFP, ISFJ, ENFJ, ESFP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              1.화가 나면 저절로 눈물이 나고 목소리 떨림 2. 눈물 때문에 말 잘 못
              함 3. 혼자 감정 정리할 시간이 필요함 4. 화가 난 당시에 확실히
              말하지 못한 걸 아쉬워함 (집에와서 상상 말싸움)
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default a6;
