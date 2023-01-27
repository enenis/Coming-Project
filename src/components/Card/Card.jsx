import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native'
import styles from "./card_style"

const App = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.body}>
            <Image source={require("../fonts/yasak.jpg")} style={stylee.container} />
            </View>
            <TouchableOpacity style={styles.button_container} onPress={()=>Alert.alert("Thank You ~"+props.title)}>
                <Text style={styles.button_text}>Report</Text>
            </TouchableOpacity>
        </View>
    )
}

const stylee=StyleSheet.create({
    container: {
      width:250,
      height:150,
      borderRadius:10,
      borderWidth:1,
      alignItems:"center",

    },
  })

export default App;