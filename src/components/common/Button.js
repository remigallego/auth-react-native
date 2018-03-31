import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native';


  const Button = ({ onPress, children }) => {
      const { buttonStyle, textStyle } = styles;

      return(
          <TouchableOpacity style={buttonStyle} onPress={onPress} >
            <Text style={textStyle} >{children}</Text> 
          </TouchableOpacity>
      )
  }

  const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#007AFF",
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: "center",
        color: "#007AFF",
        fontSize: 16,
        fontWeight: "500",
        paddingBottom: 10,
        paddingTop: 10,
        
    }
  })
  export {Button};