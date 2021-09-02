import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const a2 = ({ navigation }) => {
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
          SNS할 때 특징
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
            ENFJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              추천게시물보면서 친구들을 자주 떠올리고 공유도 자주 해줌
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            INTP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              무심코 남긴 댓글에 사람들이 웃어주면 '뭐지?'하면서도 내적관종이라
              조용히 뿌듯해 함
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ESTP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              보고 있는 글이 너무 길면 가차 없이 스크롤 쭉쭉 내림. 세 줄 요약
              제일 좋아함
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ENTP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              다른 사람이랑 겹치는 건 딱 질색. 프로필 사진, BGM, 블로그는 취향
              듬뿍 담아서 꾸미는 걸 좋아함
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            INTJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              타고난 완벽주의자 성향 때문에 읽고 있던 포스팅이 이상한 길로
              빠지는 걸 싫어함
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ISFP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              댓글보다는 좋아요로 마음을 표현하는 편
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ESFP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              웃긴 글 볼 때마다 '친구들한테 이야기해줘야겠다'라고 생각함
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ISFJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              친구가 여행 가자고 태그하면 바로 검색해서 정보 공유하고 구체적인
              계획까지 척척세움
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default a2;
