import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";

const a9 = ({ navigation }) => {
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
          이별 대처법
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
            ENFP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              평소에 밝은 캐릭터라서 특유의 우울함이 느껴진다.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ISFJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              헌신짝을 맡고 있을 확률이 높은 스타일이다.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ESTP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              힘들다고 하는데 입은 웃고있음
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ESTJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              카톡 차단 잘하는 사람들이 제일 많은 유형
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ISFP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              연애할 때 이 유형처럼 순둥순둥한 사람이 없지만 돌아서면 그냥 끝인
              스타일이다.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ENFJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              이별하기 직전까지 갈등을 해결하기 위해 끊임없이 노력했을
              스타일이라 가장 지쳐있을 유형임.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            INTP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              헤어지고 나서도 칼같이 끊어내진 않고 애매하게 선을 넘나드는 관계를
              유지하는 경우가 많다.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            INTJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              연애해제와 동시에 일의 생산력과 양이 배로 증가함
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default a9;
