import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Input from '../components/Input'
import MyButton from '../components/MyButton'
class LoginForm extends Component {
   
  render() {
    return (
      <View>
        <Text style={styles.SignInText}> Sign In </Text>
        <Input placeholder ='Username' autoCapitalize="none" returnKeyType={"next"}
        onSubmitEditing={()=> this.passwordInput.focus()}/>
        <Input 
        returnKeyType={"go"}
        placeholder ='Password' secureTextEntry={true}
        inputRef={input =>this.passwordInput=input}/>
        <Input 
        returnKeyType={"go"}
        placeholder ='Password' secureTextEntry={true}
        inputRef={input =>this.passwordInput=input}/>
        
        <MyButton
        color={"#f1f1f1"}
        backgroundColor={"#C64525"}
        text={"Sign In Now"}/>

      </View>
    );
  }
}
const styles =StyleSheet.create({
    SignInText:{
        marginVertical:10,
        fontSize:14,
        color:'#333'
    }
});
export default LoginForm;
