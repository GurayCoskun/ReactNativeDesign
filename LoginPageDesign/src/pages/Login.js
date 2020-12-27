import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,KeyboardAvoidingView, TouchableOpacity,ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import LoginForm from './LoginForm'

const windowHeight = Dimensions.get('window').height;
class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.headerImage}>
          <Image
              resizeMode='stretch'
              style={styles.image}
              source={require('../images/headerBackground.png')}
            />
          </View>
          <KeyboardAvoidingView>
            <ScrollView>
          <View style={styles.headerInfoApp}>
            <Text style={styles.textLogo}> APP NAME </Text>
            <Text style={styles.LogoDescription}> Information about this app. </Text>
          </View>
          <View style={styles.loginArea}>
            <Text style={styles.headerInput}>Let's Get Start</Text>
            <LoginForm/>
          </View>
          <View style={styles.SignUpContainer}>
              <Text style={styles.SignUpDescription}>Don't have an account?</Text>
              <TouchableOpacity>
                <Text style={styles.SignUpText}>Sign Up!</Text>
              </TouchableOpacity>
          </View>
          </ScrollView>
          </KeyboardAvoidingView>
      </View>
    );
  }
}
const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f2f2f2'
  },
  headerImage:{
    position:'absolute',
    top:0,
    left:0,
    height:windowHeight/3,
    width:'100%'
  },
  image:{
      flex:1,
      width:'100%', 
  },
  headerInfoApp:{
    marginVertical:30
  },
  textLogo:{
    fontSize:40,
    textAlign:'center',
    fontWeight:'bold',
    color:'#fff',

  },
  LogoDescription:{
    textAlign:'center',
    color:'#fff',
   
  },
  loginArea:{
    marginVertical:40,
    marginHorizontal:40,
    backgroundColor:'#fff',
    padding:20,
    borderRadius:8,
    shadowColor:'black',
    shadowOpacity:.2,
    shadowOffset:{
      width:0,
      height:2
    },
    elevation:10
  },
  headerInput:{
    fontSize:20,
    textAlign:'center',
    color:'#000',
    fontWeight:'400'
  },
  SignUpContainer:{
    alignItems:'center'
  },
  SignUpDescription:{
    color:'#999'
  },
  SignUpText:{
    color:'#666'
  }
});
export default Login;
