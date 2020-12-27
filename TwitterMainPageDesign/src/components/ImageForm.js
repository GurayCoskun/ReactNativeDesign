import React, { Component } from 'react';
import { View,StyleSheet,Image,TouchableOpacity } from 'react-native';

class ImageForm extends Component {
  render() {
    const {sources}=this.props;
    return (
      <View style={styles.a}>
          <TouchableOpacity>
            <Image
                resizeMode='stretch'
                style={styles.image}
                source={this.props.sources}
                />
            </TouchableOpacity>
      </View>
    );
  }
}
const styles =StyleSheet.create({
    image:{
        height:45,
        width:45,
        borderRadius:80,
        margin:2       
    },
    a:{
        flexDirection:'row',
        borderWidth:2,
        borderColor:'#25BFC6',
        borderRadius:80,
        margin:6
    }
});
export default ImageForm;
