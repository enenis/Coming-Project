import { View,Text, StyleSheet,SafeAreaView, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Card from "./Card"
import Cevap from "./Cevap/Cevap"

const App =()=>{
  return(
    <View >
        <Card title="Enis Yavuz" text="Çok çalışmak değil, akıllıca çalışmak."/>
        
        <Cevap word="A" answer="Harry" word2="B" answer2="Ron" word3="C" answer3="Draco" word4="D" answer4="Hermione"/>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    width:75,
    height:75,
    borderRadius:10,
    borderWidth:1,
  },
})


export default App
