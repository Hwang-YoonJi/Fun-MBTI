import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";


class Home extends Component {
    render() {
        return(
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', header: null}}>
                <Text style={{alignItems: 'flex-start',fontSize: 50}}>Fun MBTI</Text>
                <Text style={{fontSize: 30, backgroundColor: 'skyblue', borderRadius:10, marginTop: 100}} 
                    onPress={()=>this.props.navigation.navigate('All')}>
                    모든유형</Text>
                <Text style={{fontSize: 30, backgroundColor: 'skyblue', borderRadius:10, margin: 30}} 
                onPress={()=>this.props.navigation.navigate('Types')}>
                    유형별
                </Text>
            </View>
        )
    }
}

export default Home;