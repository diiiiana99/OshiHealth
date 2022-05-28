import React from 'react'
import {View, Text, Button,TouchableOpacity, Image, Dimensions, ScrollView} from 'react-native'
import Images from './Images'

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;



const showImage = (props, navigation) =>{
  return (
    <ScrollView style={{
        backgroundColor: 'white'}}>
        <View style={{
            alignItems: 'center', 
            marginBottom: 100}}>
            <Image 
                source={props.route.params.url} 
                style={{ 
                    marginTop: 110, 
                    height: deviceHeight/2.6, 
                    width: deviceWidth/1.2, 
                    borderRadius: 20, 
                    margin: 2}}
             
            />
              <View style={{
                  flexDirection: 'row', 
                  justifyContent: 'space-between', 
                  marginTop:15,
                  }}>
                    <Text style={{ 
                      right: 115, 
                      letterSpacing: 1,
                      fontWeight: '500'
                    }}>
                          4/20/21
                    </Text>
                    <Text style={{ 
                      left: 110,
                      textDecorationLine: 'underline',
                      letterSpacing: 1, 
                      fontWeight: '500'
                    }}>
                          4:30pm
                    </Text>
             </View>
        </View>
   </ScrollView>
  )
}

export default showImage