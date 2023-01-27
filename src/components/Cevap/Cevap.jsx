import { View,Text,TouchableOpacity, Alert, Image } from 'react-native';
import React from 'react';
import styles from './cevap_style';


const Cevap=(props)=>{
    return(
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.title}>Who is the tallest?</Text>
            </View>
            <TouchableOpacity style={styles.button_container} onPress={()=>Alert.alert("Doğru Bildiniz! Tebrikler..." )}>
                <Text style={styles.button_text}>{props.word}  :  {props.answer}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_container2} onPress={()=>Alert.alert("Yanlış Bildiniz!" )}>
                <Text style={styles.button_text}>{props.word2}  :  {props.answer2}   </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_container3} onPress={()=>Alert.alert("Yanlış Bildiniz!" )}>
                <Text style={styles.button_text}>{props.word3}  :  {props.answer3}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_container4} onPress={()=>Alert.alert("Yanlış Bildiniz!" )}>
                <Text style={styles.button_text}>          {props.word4}  :   {props.answer4}  </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Cevap;