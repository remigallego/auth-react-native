import React, { Component } from 'react';
import { 
    View,
    StyleSheet 
} from 'react-native'

const CardSection = (props) => {
    const { containerStyle } = styles;
    return(
        <View style={containerStyle} >
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: "#FFF",
        justifyContent: "flex-start",
        flexDirection: "row",
        borderColor: "#DDD",
        position: "relative"
    },
});

export {CardSection};