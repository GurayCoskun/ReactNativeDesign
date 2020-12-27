import React, { Component } from 'react';
import { View, TouchableOpacity,Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'
class MyButton extends Component {
    render() {
        const {color,backgroundColor}=this.props;

        return (
        <TouchableOpacity style={[styles.button,{backgroundColor}]}>
            <Text style={{color,fontSize:15}}>{this.props.text}</Text>
        </TouchableOpacity>
        );
  }
}
const styles =StyleSheet.create({
    button:{
       paddingVertical:15,
       paddingHorizontal:10,
       borderRadius:4,
       alignItems:'center'
    }
});
export default MyButton;
