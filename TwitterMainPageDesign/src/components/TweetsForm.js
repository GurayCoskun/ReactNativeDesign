import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,TouchableOpacity,ScrollView} from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
import data from '../database/Data.json'
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/EvilIcons';


class TweetsForm extends Component {

  render() {
    const {url,nickname,tweet,mentionC,RTC,FAVC,username,time}=this.props;
    return (<ScrollView>
        <View style={styles.TweetContainer}>
            <View style={styles.Task}>
                <View style={styles.imageContainer}>
                    <TouchableOpacity>
                        <Image source={{uri:url}} style={styles.ProfilImage}></Image>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.UserNameTweetContainer}>
                    <View >
                        <View style={styles.UsersInfo}>
                            <TouchableOpacity><Text style={styles.UserName}>{this.props.nickname}</Text></TouchableOpacity>
                            <Text style={{color:'#737171', marginLeft:4}}>{this.props.username}</Text>
                            <Text style={{color:'#737171', marginLeft:4}}>-{this.props.time}</Text>
                            <TouchableOpacity style={{position:'absolute',right:0}}>
                                <Icon2 name="caret-down" size={15} color={'#7C8283'}></Icon2>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.Tweet}>{this.props.tweet}</Text>
                        <View style={styles.interaction}>
                            <View style={styles.countInteraction}>
                                <TouchableOpacity>
                                        <Icon2 name="chatbubble-outline" size={15} color={'#7C8283'}></Icon2>
                                </TouchableOpacity>
                                <Text style={styles.interactionText}>{this.props.mentionC}</Text>
                            </View>

                            <View style={styles.countInteraction}>

                                <TouchableOpacity>
                                        <Icon3 name="retweet" size={22} color={'#7C8283'}></Icon3>
                                </TouchableOpacity>
                                <Text style={styles.interactionText}>{this.props.RTC}</Text>
                            </View>

                            <View style={styles.countInteraction}>
                                <TouchableOpacity>
                                        <Icon2 name="heart-outline" size={15} color={'#7C8283'}></Icon2>
                                </TouchableOpacity>
                                <Text style={styles.interactionText}>{this.props.FAVC}</Text>
                            </View>

                            <View style={styles.countInteraction}>
                                <TouchableOpacity>                                  
                                        <Icon2 name="share-social-outline" size={15} color={'#7C8283'} ></Icon2>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
        </View>
          
         
      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    TweetContainer:{
        width,
    },
    Task:{
        borderBottomWidth:1,
        borderBottomColor:'#DBE5E8',
        flex:1,
        flexDirection:'row',
        marginHorizontal:10,
        marginVertical:8,
    },
    imageContainer:{
        margin:2
    },
    ProfilImage:{
        height:60,
        width:60,
        borderRadius:80,
    },
    UserNameTweetContainer:{
        marginHorizontal:8,
        flex:1
    },
    UserName:{
        fontSize:14,
        fontWeight:'bold'
    },
    Tweet:{
        fontSize:14,
        flex: 1, 
        flexWrap: 'wrap'
    }
    ,interaction:{
        flex:1,
        flexDirection:'row',
        marginEnd:50,
        marginVertical:5
    },
    countInteraction:{
        flexDirection:'row',
        marginVertical:2,
        marginHorizontal:17,

    },
    interactionText:{
        fontSize:12,
        color:'#7C8283'
    },
    UsersInfo:{
        flexDirection:'row',
        flex:1 }
    
});
export default TweetsForm;
