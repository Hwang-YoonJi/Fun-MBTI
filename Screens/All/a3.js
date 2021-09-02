import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";

const a3 = ({ navigation }) => {
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
          상사한테 혼날 때 반응
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
            INTP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              아..예..아 죄송합니다. 아 근데 이거는 숫자는 다 맞는건데요. 글자가
              좀 틀린건데 그거 수정하겠습니다..(귀찮다는 말투)
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            INFJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              아, 예 죄송합니다. 빨리 다시해서 올리겠습니다.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ESTJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              예, 죄송합니다. 즉시 수정해서 올리겠습니다.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ESFJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              아 이거 다시 다해서 보고올리겠습니다.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ISTP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              아 죄송합니다. 다시 고쳐서 보고드리겠습니다.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ENTJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              옙! 알겠습니다.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ENFJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              아~~ 맞다 팀장님 아 그거 고친다는 걸 깜빡했다!
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ISFP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              아..죄송합니다. 예 시정하겠습니다..
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            INFP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              아 진짜 죄송합니다. 제가 빨리 끝내서 퇴근전까지 보고할게요.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ENTP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              아니 근데 팀장님 이거 꼭 해야돼요?
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ISFJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              아 죄송합니다. 근데 이걸 워드로요..?
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ESFP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              아 죄송합니다. 아 근데 이거 금방 해결할 수 있어요!
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ESTP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              아 예예예 죄송합니다. 일단 고쳐서 오늘까지 보고하겠습니다.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ENFP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              어.. 아니요! 팀장님 이게 잘못된게 아니구요 사장님이 오히려
              바꼈잖아요. 그래서 이 양식이 다 바꼈는데..
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ISTJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              아, 죄송합니다. 일단 제가 책임지고 오늘까지 반드시 끝내도록
              하겠습니다.
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            INTJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              예. 죄송합니다. 일단 시정하겠습니다.
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default a3;
