import React, { Component } from 'react';
import { View, Text,StyleSheet,ScrollView } from 'react-native';
import ImageForm from './ImageForm'
class StoryForm extends Component {

  render() {
    const {url}=this.props;

    return (

      <View style={styles.StoryContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.StoryBar}>
            <ImageForm sources={require('../images/oneguy.jpeg')}/>
            <ImageForm sources={require('../images/secondguy.jpg')}/>
            <ImageForm sources={require('../images/thirdguy.jpg')}/>
          </View>
        </ScrollView>

      </View>
    );
  }
}
const styles =StyleSheet.create({
    StoryContainer:{
        borderBottomWidth:1,
        borderBottomColor:'#DBE5E8',
    },
    StoryBar:{
        flexDirection:'row',
    }
});
export default StoryForm;
