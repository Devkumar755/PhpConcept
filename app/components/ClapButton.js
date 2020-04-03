import React,{ Component } from "react";
import {View,Text, TouchableOpacity,StyleSheet, Image,Animated} from 'react-native';

export default class ClapButton extends Component 
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            count:0,
            claps:[]
        }
        this.Clap = this.Clap.bind(this);
        this.keepClapping = this.keepClapping.bind(this);
        this.stopClapping = this.stopClapping.bind(this);
    }
    Clap()
    { 
   let count = this.state.count;
   let claps = this.state.claps;
   count++;
   claps.push(count);
   this.setState({count});

    }
    stopClapping()
    {
        if(this.clapTimer)
        {
             clearInterval(this.clapTimer);
        }
    }
    animationComplelte(countNum)
    {
        claps = this.state.claps;
        claps.splice(claps.indexOf(countNum),1);
        this.setState({claps});
    }
    renderClaps()
    {
       return (this.state.claps.map(countNum => <ClapBubble 
       key ={countNum} count={countNum}
       animationComplelte = {this.animationComplelte.bind(this)}
       
       
       />));
    }
    keepClapping()
    {
       this.clapTimer = setInterval(() => this.Clap(),20);
    }
    render()
    {
        let ClapIocn = this.state.count >0 ?     <Image 
        source={require('../images/images.png')}
        
        style={styles.imagestyle}
        /> :
        <Image 
        source={require('../images/clapped.jpg')}
        
        style={styles.imagestyle}
        />
        return(
            <View style={{flex:1,backgroundColor:'#15ed19'}}>
              <TouchableOpacity 
              onPress={this.Clap}
              onPressIn= {this.keepClapping}
              onPressOut={this.stopClapping}
              activeOpacity={0.7}
              
              style={styles.ClapButtonstyle}>
           {ClapIocn}

                

              </TouchableOpacity>
              {this.renderClaps()}
             
            </View>
        );
    }
}

class ClapBubble extends Component
{
    constructor()
    {
        super()
        this.state=
        {
            yPosition: new Animated.Value(0),
            opacity: new Animated.Value(0)
        }
    }
    componentDidMount()
    {
        Animated.parallel([
            Animated.timing(this.state.yPosition,{
                toValue:-150,
                duration: 3000,
            }),
            Animated.timing(this.state.opacity,{
                toValue:1,
                duration: 3000
            })

        ]).start(() =>
        {
          setTimeout(() =>{
              this.props.animationComplelte(this.props.count);
          },500)
        });
 
    }
    render()
    {
        let animationStyle = {
            transform:[{translateY:this.state.yPosition}],
            opacity: this.state.opacity
        }
        return(
            <Animated.View style={[styles.clapbubble,animationStyle]}>
             <Text style={styles.claptext}>+ {this.props.count}</Text>
            </Animated.View>
        );
    }
}
const styles = StyleSheet.create({
ClapButtonstyle:
{
    position:'absolute',
    height:70,
    width:70,
    backgroundColor:'#fff',
    borderRadius:35,
    bottom:20,
    right:20,
    elevation:10,
    alignItems:'center',
    justifyContent:'center',

},
imagestyle:
{
    height:40,
    width:40,
},
clapbubble:
{
    position:'absolute',
    height:70,
    width:70,
    backgroundColor:'#fff',
    borderRadius:35,
    alignItems:'center',
    justifyContent:'center',
    bottom:20,
    right:20,
},
claptext:
{
    fontSize:21,
    color:'green',
    fontWeight:'bold',
 
}

});