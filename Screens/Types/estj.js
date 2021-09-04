import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const estj = ({ navigation }) => {
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
          ESTJ
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
            ESTJ - 엄격한 관리자
          </Text>
        </View>
        <View style={{ alignItems: "flex-start", margin: 10 }}>
          <Text style={{ fontSize: 25, color: "black" }}>
            → 고집 셈. 현실적. 이성적. 직설적
            {"\n"}→ 리더 맡는 거 싫어하는데 막상하면 잘함
            {"\n"}→ 나가서 노는것보단 이것저것 배우는게 좋음
            {"\n"}→ 외로움 별로 안탐
            {"\n"}→ 싸우는거 싫어하지만 싸워서 지는거 싫어함
            {"\n"}→ 일처리 못하는거 세상에서 제일 싫음
            {"\n"}→ 시간약속어기느 거 싫고 즉흥적인거 싫음 번개약속 극혐
            {"\n"}→ 남에게 관심없고 오로지 나한테만 집중
            {"\n"}→ 목표 설정해놓고 그 목표 이룰때까지 한 우물만 팜{"\n"}→
            사람들이 아는 내 성격이랑 혼자있을때랑 조금 다름
            {"\n"}→ 모든게 제자리에 있어야 하고 내 계획이 절대 틀어지면 안됨
            {"\n"}→ 뭐든 확실한 게 좋음 딱딱떨어지는거
            {"\n"}→ 누가 일 못하는 거 못 보고 차라리 그럴바에 내가 두세배로 일
            다 해놓음
            {"\n"}→ 공감능력 X
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default estj;
