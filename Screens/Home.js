import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";


class Home extends Component {
    render() {
        return(
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.text}>Home</Text>
                <Text style={styles.text} onPress={()=>this.props.navigation.navigate('All')}>
                    All
                </Text>
                <Text style={styles.text} onPress={()=>this.props.navigation.navigate('Types')}>
                    Types
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 22
    }
})

export default Home;