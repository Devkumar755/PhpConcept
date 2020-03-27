import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Image,StyleSheet, Alert} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';



const options = {
    title: 'Select a photo',
    takePhotoButtonTitle: 'Take a photo',
    chooseFromLibraryButtonTitle:'Choose image form gallery',
    quality:1
  };
export default class ImagePickerr extends Component
{
    constructor()
    {
        super()
        this.state =
        {
            imageSource :null,
            pic: null
        }
    }
    selectPhoto =()=>
    {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
           
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };         
              this.setState({
                imageSource: source,
                pic:response.data
              });
            } 
          });
    }
    uploadphoto =()=>
    {
        RNFetchBlob.fetch('POST', 'http://192.168.8.101/ReactPhp/upload.php', {
            Authorization: "Bearer access-token",
            otherHeader: "foo",
            'Content-Type': 'multipart/form-data',
          }, [
              { name: 'image', filename: 'image.png', type: 'image/png', data:this.state.pic},
              
            ]).then((resp) => {
       
            console.log(resp);
            }).catch((err) => {
              Alert.alert(""+err)
            })
       
    }
    render()
    {
        return(
            <View>
                <Image  source={this.state.imageSource !=null ? this.state.imageSource: require('../image/naturetwo.jpg')} 
                 style={styles.imagestyle} />
<TouchableOpacity
style={{
  margin:10,
  backgroundColor:'green',
  height:50,
  borderRadius:8,
  width:300,
}}
onPress ={this.selectPhoto}

>
  <Text style={{color:'white',textAlign:'center',marginTop:10,fontSize:18}}>Select Image</Text>
</TouchableOpacity>
<TouchableOpacity
style={{
  margin:10,
  backgroundColor:'skyblue',
  height:50,
  borderRadius:8,
  width:300,
}}
onPress ={this.uploadphoto}

>
  <Text style={{color:'white',textAlign:'center',marginTop:10,fontSize:18}}>Upload</Text>
</TouchableOpacity>
<TouchableOpacity
style={{
  margin:10,
  backgroundColor:'skyblue',
  height:50,
  borderRadius:8,
  width:300,
}}
onPress ={() =>
this.props.navigation.navigate('Five')
}

>
  <Text style={{color:'white',textAlign:'center',marginTop:10,fontSize:18}}>Go to View</Text>
</TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    imagestyle:{
        height:100,
        width:100,
        marginLeft:10,
        marginTop:10,
    }
})