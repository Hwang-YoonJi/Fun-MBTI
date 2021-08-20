import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";


class All extends Component {
    render() {
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.text}>단톡방 채팅 유형</Text>
                <Text style={styles.text}>SNS할 때 특징</Text>
                <Text style={styles.text}>상사한테 혼날 때 반응</Text>
                <Text style={styles.text}>새로운 사람을 만날 때</Text>
                <Text style={styles.text}>무인도에 떨어졌을 때</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        margin: 10
    }
})

export default All;