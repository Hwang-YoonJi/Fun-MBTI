import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const istj = ({ navigation }) => {
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
          ISTJ
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
            ISTJ - 청렴결백한 논리주의자
          </Text>
        </View>
        <View style={{ alignItems: "flex-start", margin: 10 }}>
          <Text style={{ fontSize: 25, color: "black" }}>
            → 원리원칙적, 계획적{"\n"}→ 여행가면 나서서 계획짬{"\n"}→ 즉흥적인거
            싫어함, 약속어기는것도 난감{"\n"}→ 약속시간 꼭 지키려고 노력
            {"\n"}→ 사람들 많은 곳 가면 기빨림{"\n"}→ 누가 내 일에 관여하는 거
            싫어함
            {"\n"}→ 협동하고 이런거 난감 그냥 나 혼자 하는게 젤 편하고 젤 빠름
            {"\n"}→ 누가 도와준다고 해도 혼자 할 수 있음 혼자 함{"\n"}→ 남한테
            관심 별로 없는 편{"\n"}→ 내 얘기 하는것도 싫고 남 얘기 들어주는 것도
            힘듦{"\n"}→ 내가 왜 듣고 있어야 하는 지 모르겠음 {"\n"}→ 책임감 많음
            {"\n"}→ 가끔 공감능력 부족한 거 같다는 소리 들음
            {"\n"}→ 프로젝트같은거 할 때 이야기 딴데로 새는거 싫어함
            {"\n"}→ 시작했으면 목표한거 끝내야함
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default istj;
