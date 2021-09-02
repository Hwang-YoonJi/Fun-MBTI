import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const a1 = ({ navigation }) => {
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
          단톡방 채팅 유형
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
            ISTP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              단톡에서 조용히 사라지는 1 담당
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ISFP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              가끔 보내기 전에 이상한 부분 없는지 체크해 보고 친하다고 생각하는
              사람아니면 선톡하는 일 거의 없음
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            INTJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              여가시간에는 완벽 off 모드 쉴 때는 연락도 잘 확인 안 함
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            INFP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              누가 이름만 부르고 사라지면 오만가지 생각 다 들기 시작함
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ESTP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              별 생각 없이 그냥 말한 건데 해맑게 팩폭하지 말라는 말 자주들음
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ESFP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              사람들이랑 이야기하는 거 좋아하는데 은근 연락 귀찮아해서 안 읽은
              메시지 쌓여있음
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ENTP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              썼다 지우면서 망설이기보다는 막힘없이 생각 써 내려감
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ENFJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              공감 능력이 좋아서 고민 상담해달라는 연락 자주 오고 이모티콘 많이
              씀
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default a1;
