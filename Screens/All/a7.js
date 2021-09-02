import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";

const a7 = ({ navigation }) => {
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
          유형별 욕망
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
            INFP, ENFP, INFJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              자신을 이해해줬으면 함
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ENTP, ISTJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              자신을 존중해줬으면 함
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            INTJ, ENTJ, ESTJ{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              자신이 최고였으면 함
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ESFJ, ISFJ, ENFJ, ESFP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              자신과 통했으면 함
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            ISFP, ISTP, ESTP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              자유로웠으면 함
            </Text>
          </Text>
          <Text style={{ fontSize: 50, color: "#c7a4ff" }}>
            INTP{"\n"}
            <Text style={{ fontSize: 30, color: "black" }}>
              타인을 이해할 수 있었으면 함
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default a7;
