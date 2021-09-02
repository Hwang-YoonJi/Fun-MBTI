import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";

const a5 = ({ navigation }) => {
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
          무인도에 떨어졌을 때
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
            INTJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              식량을 쪼개서 정해진 분량만 먹어가며 얇고 길게 생존함
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            INFJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              날 여기로 오게 만든 모든 것을 원망하며 일단 음식을 모음
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            INTP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              INTJ가 쪼개놓은 식량이 비효율적이라 생각하지만 반박하기 귀찮아서
              그냥 먹음
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            INFP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              충격을 받고 얼어있다가 사태의 심각성을 파악할수록 광광 울어댐
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ISTJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              구석에 가서 불부터 피우고 봄
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ISFJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              우는 애들을 달래주다가 어차피 나갈 방법 없으니 그냥 냅두고 ISTJ를
              도움
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ISTP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              시끄럽게 우는 애도 생존하려고 호들갑 떠는 애도 걍 다 짜증남
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ISFP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              INFP 우는 소리에 같이 우울해지지만 일단 ENTJ가 시키는대로 함
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ENTJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              허무하게 앉아있는 사람들에게 일이라도 하라며 이것저것 지시를 내림
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ENFJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              금방 나갈 수 있다며 용기를 북돋아주지만 정작 구체적인 계획은 없음
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ENTP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              먹을거 주워오는 애들한테 그거 못먹는건데? 를 시전. 불 피우는
              애들한테 그렇게 하는거 아닌데 시전.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ENFP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              INFJ 따라서 먹을거 주우러 갔다가 백사장에서 예쁜 돌을 발견해서
              주머니에 넣음
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ESTJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              빠릿빠릿 움직이지 않는 사람들에게 그렇게 해서 살아남겠냐고
              답답해함
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ESFJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              단독행동 용납 못함. 힘을 모아 탈출하자고 사기만땅 화이팅을 외침
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ESTP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              고기 먹을거라며 사냥하러 사라짐
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ESFP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              타고온 배 옆에 앉아 고장난 배를 바라보지만 그냥 보면서 멍때릴 뿐임
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default a5;
