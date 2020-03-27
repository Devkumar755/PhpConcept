import React,{Component} from 'react';
import {View,Text,TextInput, Button,StyleSheet, Alert,TouchableOpacity} from 'react-native';
import { createAppContainer, withOrientation} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import SecondScreen from './Another/SecondScreen.js';
import ThirdScreen from './Another/ThirdScreen.js';
import ImagePickerr from './Another/ImagePicker.js';
import ViewImage from './Another/ViewImage.js';

 class FirstScreen extends Component
{
  static navigationOptions=
  {
    title:'Input'
  }
  constructor(props)
  {
    super(props)
    this.state = 
    {
      TextInputemail : '',
      TextInputpassword : '',
    }
  }
  InserUsers =() =>
  {
    const {TextInputemail} = this.state;
    const {TextInputpassword} = this.state;

fetch('http://192.168.8.101/ReactPhp/insert.php',{
method:'POST',
headers:{
'Accep':'application/json',
'Content-Type' :'application/json'
},
body:JSON.stringify({
  email:TextInputemail,
  password:TextInputpassword,
})

}).then((response) => response.json())
.then((responseJson) =>{

  Alert.alert(responseJson);
}).catch((error) => {
  console.error(error);
})
 }


 ViewUsers =() =>
 {
this.props.navigation.navigate('Second')


 }
render()
{
  return(
<View style={{flex:1,flexDirection:"column"}}>
<TextInput style ={ styles.inputstyle}
placeholder = 'Enter your email'
onChangeText={TextInputemail => this.setState({TextInputemail})}

>
</TextInput>
<TextInput 
style ={ styles.inputstyle}
placeholder='Enter your password'
onChangeText ={TextInputpassword => this.setState({TextInputpassword})}
>

</TextInput>

<TouchableOpacity
style={{
  margin:10,
  backgroundColor:'green',
  height:50,
  borderRadius:8,
  width:300,
}}
onPress ={this.InserUsers}

>
  <Text style={{color:'white',textAlign:'center',marginTop:10,fontSize:18}}>Submit</Text>
</TouchableOpacity>
<TouchableOpacity
style={{
  margin:10,
  backgroundColor:'green',
  height:50,
  borderRadius:8,
  width:300,
}}
onPress ={this.ViewUsers}

>
  <Text style={{color:'white',textAlign:'center',marginTop:10,fontSize:18}}>View Users</Text>
</TouchableOpacity>
<TouchableOpacity
style={{
  margin:10,
  backgroundColor:'green',
  height:50,
  borderRadius:8,
  width:300,
}}
onPress ={() =>
{
  this.props.navigation.navigate('Four')
}}

>
  <Text style={{color:'white',textAlign:'center',marginTop:10,fontSize:18}}>Upload Image</Text>
</TouchableOpacity>

</View>


  );
}

}

const Stacnavigaagtor = createStackNavigator({
First:
{
  screen:FirstScreen,
},
Second:
{
  screen:SecondScreen,
},
Third:
{
  screen:ThirdScreen,
},
Four:
{
  screen:ImagePickerr,
},
Five:
{
  screen:ViewImage,
}

},
{
  initialRouteName:'First',

});
const AppContainer = createAppContainer(Stacnavigaagtor);

export default function App()
{
  return(
<AppContainer />

  );

}
const styles = StyleSheet.create({
inputstyle:
{
  marginTop:10,
  marginLeft:10,
  borderWidth:2,
  padding:5,
  borderColor:'black',
}


});