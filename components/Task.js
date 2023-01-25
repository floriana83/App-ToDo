import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = (props) => {
    return (
        <View style={style.items}>
             <View style={style.itemsLeft}>
                <View style={style.square}></View>
            <Text style={style.itemsText}>{props.text}</Text>
             </View>
             <View style={style.circular}></View>
        </View>
    )
}
const style = StyleSheet.create({
    items:{
backgroundColor: '#fff',
padding:15,
borderRadius:10,
flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
       
       marginBottom: 10 ,
    },
    itemsLeft:{
        flexDirection: 'row',
        alignItems:'center',
        flexWrap: 'wrap',
    },
    square:{
      height: 24 ,
      width:24,
      backgroundColor: '#55BCF6',
      opacity:0.4,
      borderRadius: 5,
      marginRight:15,
    },
    itemsText: {
        color:'black',
        fontSize: 14,
        maxWidth: '80%',
    },
    circular:{
        height: 12,
      width:12,
      borderColor: '#55BCF6',
      borderWidth: 2,
      borderRadius: 5,
    }
})
export default Task