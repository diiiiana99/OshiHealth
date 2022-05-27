import React from 'react'
import {View, Text, Button,TouchableOpacity, Image, Dimensions, ScrollView} from 'react-native'
import Images from './Images'

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;



const showImage = (props, navigation) =>{
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
        <View>
        </View>
        <View style={{alignItems: 'center'}}>
            <Image 
                source={props.route.params.url} 
                style={{ 
                    marginTop: 100, 
                    height: deviceHeight/2.6, 
                    width: deviceWidth/1.2, 
                    borderRadius: 20, 
                    margin: 2}}
             
            />
              <View>
                  <Text>Hiiii</Text>
        </View>
       
        </View>
   </ScrollView>
  )
}

export default showImage