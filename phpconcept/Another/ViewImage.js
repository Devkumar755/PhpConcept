import React,{Component} from 'react';
import {View,Text,StyleSheet,FlatList, ActivityIndicator, Alert, Image} from 'react-native';
export default class ViewImage extends Component{
    static navigationOptions =
    {
        title:'Data Users'
    }
    constructor(props){
        super(props)

        this.state = {
            isLoading: true
        }
    }
componentDidMount()
{
    return fetch('http://192.168.8.101/ReactPhp/FetchImage.php')
    .then((response) => response.json())
    .then((responseJson) => {

        
        this.setState({
            isLoading:false,
           dataSource:responseJson
        },function(){})

    }).catch((error) => {
        console.error(error);
    })
}


    render()
    {
        if(this.state.isLoading)
        {
            return(
                <View style={{flex:1,paddingTop:20}}>
                   <ActivityIndicator />
                </View>
            );
        }
        return(
    
                <FlatList
                data = {this.state.dataSource}
                renderItem={({item}) =>(
                  <View style={{margin:10,borderRadius:8,padding:5,backgroundColor:'green'}} 
                  
                  >
        <Image 
        source ={{uri:item.url}}
        style={{height:130,width:130,margin:10}}
        
        
        />
                            

                      </View>

                )}
               
              keyExtractor={(item, password) => item.type}
         
                
                
                />
            
        );
    }
}

const styles = StyleSheet.create({
mainContainer:
{
flex:1,
},

rowViewContainer:
{
    textAlign:'center',
    fontSize:20,
    paddingTop:10,
    paddingRight:10,
    paddingBottom:10,
}


})