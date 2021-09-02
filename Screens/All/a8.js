import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";

const a8 = ({ navigation }) => {
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
          유형별 이상형
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
            ISFJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              매사에 성실하고 똑똑한 사람을 좋아한다.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ESTP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              나만 아는 무언가를 가진 사람에게 호기심을 느낀다.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ISTP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              너무 집착하며 연락을 많이 하는 사람은 부담스러워한다.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ESFJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              처음부터 친한사이가 아니라면 플러팅은 비추이다.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ISFP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              첫인상이 굉장히 중요하다.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ESTJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              나를 떠받들어 주는 사람을 좋아한다.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ISTJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              신뢰감을 주고 책임감과 예의가 있는 사람이여야한다.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ESFP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              자신의 마음에 드는 사람이여야한다.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            INFJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              믿을 수 있는 도덕적인 사람을 원함.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ENTP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              일단 무조건 그들 마음에 드는 사람이여야한다.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            INFP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              다정한 사람을 기본적으로 좋아한다.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ENTJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              먼저 다가갈 때까지 기다려야한다.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            INTP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              특이한 이들의 취향에 맞는 사람이여야한다.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ENFJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              먼저 다가와주는 사람을 선호한다.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            INTJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              이들은 일단 금사빠이다. (거의 3분내로 결정됨)
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ENFP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              내가 좋아하는 사람이여야한다.
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default a8;
