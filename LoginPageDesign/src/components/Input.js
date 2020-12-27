import React, { Component } from 'react';
import { View, TextInput,StyleSheet } from 'react-native';

class Input extends Component {
    state={
        name:''
    }
  render() {
    return (
      <View>
        <TextInput 
        {...this.props}
        style={styles.Input}
        value={this.state.name}
        ref={this.props.inputRef}
        onChangeText={text => this.setState({text})}
         />
      </View>
    );
  }
}
const styles =StyleSheet.create({
    Input:{
      height:40,
      paddingHorizontal:5,
      borderWidth:2,
      borderRadius:4,
      borderColor:'#f3f3f3',
      color:'#999',
      marginBottom:8,
      fontSize:14,
      fontWeight:'600'
    }
});

export default Input;