import { StyleSheet } from 'react-native'
import React from 'react';


const styles=StyleSheet.create({
    container: {
        backgroundColor:"white",
        margin:10,
        borderWidth:1,
        borderColor:"gray",
        borderRadius:10,
        marginTop:100,
        
    },
    body:{
        padding:20,
        alignItems:"center",

    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        margin:10,
        marginBottom:3,
      },
      text:{
        fontSize:16,
        margin:10,
        marginTop:3,
      },
      button_container:{
        backgroundColor:"#00c2FF",
        alignItems:"center",
        padding:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
      },
      button_text:{
        color:"white",
        fontSize:16,
        fontWeight:"bold",
      }
});

export default styles;