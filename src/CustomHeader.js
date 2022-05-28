import {View,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import {Surface, Title} from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'

Feather.loadFont();



const CustomHeader = () => {
  return (
  <Surface style={styles.header}>
        <View style={styles.view}>
            <Title>Selfies</Title>
        </View>
      <View style={ styles.rightView}>
          {<TouchableOpacity>
            <Feather name='camera' size={24}></Feather>
          </TouchableOpacity>}
      </View>

  </Surface>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
    header: {
        height: 28,
        elevation: 1,
        marginTop: 38,
        fontFamily: 'Inter',
        justifyContent:'space-between',
        flexDirection: 'row',
        alignItems: 'center', 
        backgroundColor: 'white'
    },
    view: {
        flex: 1, 
        marginLeft: 45,
        flexDirection: 'row',
        justifyContent: 'center', 

        
    },
    rightView: {
        justifyContent:'flex-end',
        marginRight: 15

    }
})