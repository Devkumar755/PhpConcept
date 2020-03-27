import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,TextInput, Alert} from 'react-native';

export default class ThirdScreen extends Component 
{
    static navigationOptions =
    {
        title:'Udate and delete'
    }
    constructor(props)
    {
        super(props)
        this.state =
        {
            TextInputemail:'',
            TextInputpassword:'',
        }
    }
    componentDidMount()
    {
        this.setState({
            TextInputemail:this.props.navigation.state.params.emailId,
            TextInputpassword:this.props.navigation.state.params.passWord,
        })
    }
    Updateuser()
    {
        
    }
    DeleteUser()
    {
        fetch('http://192.168.8.101/ReactPhp/delete.php',{
            method:'POST',
            headers:{
            'Accep':'application/json',
            'Content-Type' :'application/json'
            },
            body:JSON.stringify({
              email: 'saxenas@gmail.com',
         
            })
            
            }).then((response) => response.json())
            .then((responseJson) =>{
            
              Alert.alert(responseJson);
              
            }).catch((error) => {
              console.error(error);
            })
            this.props.navigation.navigate('Second')
    }
    render()
    {
        return(
            <View>
<TextInput style ={ styles.inputstyle}
value ={this.state.TextInputemail}
placeholder = 'Enter your email'
onChangeText={TextInputemail => this.setState({TextInputemail})}

>
</TextInput>
<TextInput 
style ={ styles.inputstyle}
value = {this.state.TextInputpassword}
placeholder='Enter your password'
onChangeText ={TextInputpassword => this.setState({TextInputpassword})}
>

</TextInput>

<TouchableOpacity
style={{
  margin:10,
  backgroundColor:'skyblue',
  height:50,
  borderRadius:8,
  width:300,
}}
onPress ={this.UpdateUsers}

>
  <Text style={{color:'white',textAlign:'center',marginTop:10,fontSize:18}}>Update Users</Text>
</TouchableOpacity>
<TouchableOpacity
style={{
  margin:10,
  backgroundColor:'red',
  height:50,
  borderRadius:8,
  width:300,
}}
onPress ={this.DeleteUser}

>
  <Text style={{color:'white',textAlign:'center',marginTop:10,fontSize:18}}>Delete Users</Text>
</TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    inputstyle:
    {
      marginTop:10,
      marginLeft:10,
      marginRight:10,
      borderWidth:2,
      borderRadius:7,
      padding:5,
      borderColor:'black',
    }
    
    
    });