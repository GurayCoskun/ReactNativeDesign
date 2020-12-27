import React, { Component } from 'react';
import { View, Text, ActivityIndicator,Linking, FlatList, ToastAndroid, StyleSheet ,Button, TouchableOpacity,SafeAreaView} from 'react-native';
import data from './src/database/Data.json'
import StoryForm from './src/components/StoryForm'
import TweetsForm from './src/components/TweetsForm'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      dataSource:[],
    };
  }
  componentDidMount(){
      this.setState({
        isLoading:false,
        dataSource:data.result
      });
};
    
    renderContactsItem=(  {item,index})=>{
      return(
        <TweetsForm
          url={item.pp}
          nickname={item.NickName}
          tweet={item.tweet}
          mentionC={item.countMention}
          RTC={item.countRT}
          FAVC={item.countFAV}
          username={item.UserName}
          time={item.time}
        ></TweetsForm>
      )
    }
    
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex:1,padding:20}}>
          <ActivityIndicator></ActivityIndicator>
        </View>
      );
    }

    return (
      

      <SafeAreaView style={styles.header}>
        <View style={styles.navBar}>
          <View style={styles.navBarItem}>
            <TouchableOpacity>
                  <Icon name="align-justify" size={20} color={'#1FA4CF'} ></Icon>
              </TouchableOpacity>
                  <Icon3 name="twitter" size={20} color={'#1FA4CF'}></Icon3>
              <TouchableOpacity>
                  <Icon4 name="star-four-points-outline" size={20} color={'#1FA4CF'}></Icon4>

              </TouchableOpacity>



          </View>
        </View>
        <StoryForm
        />
        
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderContactsItem}
          keyExtractor={(item,index)=>index.toString()}
          
        >
        </FlatList>
        <TouchableOpacity style={styles.FixButton}>
              <Icon2 name="add-circle-sharp" size={50} color={'#1FA4CF'}></Icon2>
          </TouchableOpacity>
        <View style={styles.BottomBarItem}>
        <TouchableOpacity>
                <Icon name="home" size={30} color={'#1FA4CF'}></Icon>
              </TouchableOpacity> 
              <TouchableOpacity>
              <Icon name="search" size={30} color={'#7C8283'}></Icon>
              </TouchableOpacity> 
              <TouchableOpacity>
              <Icon2 name="notifications-sharp" size={30} color={'#7C8283'}></Icon2>
              </TouchableOpacity> 
              <TouchableOpacity>
              <Icon name="envelope" size={30} color={'#7C8283'}  ></Icon>
              </TouchableOpacity> 

        </View>
    </SafeAreaView>
        
    );
  }
}

const styles =StyleSheet.create({
  header:{
    flex:1,
  },
  navBar:{
    borderBottomWidth:1,
    borderBottomColor:'#737171',
  },
  navBarItem:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:10,
    marginVertical:10
  },
  BottomBarItem:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginHorizontal:15,
    marginVertical:10

  },
  FixButton:{
    position:'absolute',
    right:0,
    bottom:50,
    marginHorizontal:8,
    marginVertical:8
  }
 

});
export default App;
