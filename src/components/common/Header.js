import React, { Component } from 'react';
import {
    View, 
    Text,
    StyleSheet
  } from 'react-native';

const Header = (props) => {
    const { text, container } = styles;
    return(
    <View style={container}>
        <Text style={text} >{props.children}</Text>
    </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: "#E8E8E8",
        paddingTop: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        elevation: 10,
    }, 
    text: {
        fontSize: 20,
    }
});

export { Header };