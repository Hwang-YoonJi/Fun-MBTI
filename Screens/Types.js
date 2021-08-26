import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";


class Types extends Component {
    render() {
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'pink'}}>
                <Text style={styles.text}>ISTP</Text>
                <Text style={styles.text}>ISTJ</Text>
                <Text style={styles.text}>ISFP</Text>
                <Text style={styles.text}>ISFJ</Text>
                <Text style={styles.text}>INTP</Text>
                <Text style={styles.text}>INTJ</Text>
                <Text style={styles.text}>INFP</Text>
                <Text style={styles.text}>INFJ</Text>
                <Text style={styles.text}>ESTP</Text>
                <Text style={styles.text}>ESTJ</Text>
                <Text style={styles.text}>ESFP</Text>
                <Text style={styles.text}>ESFJ</Text>
                <Text style={styles.text}>ENTP</Text>
                <Text style={styles.text}>ENTJ</Text>
                <Text style={styles.text}>ENFP</Text>
                <Text style={styles.text}>ENFJ</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        margin: 5
    }
})

export default Types;