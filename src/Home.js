import * as  React from 'react'
import {View, Text, TouchableOpacity, Image, Dimensions, ScrollView, FlatList,Animated } from 'react-native'
import Header  from './Header';
import Images from './Images'
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;



const Home = (props) => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            marginTop: 100,
            backgroundColor: 'white' }} >
        {    
            Images.map((image, index) => (
               <TouchableOpacity 
                    key={index}    
                    onPress={() => props.navigation.navigate('showImage' , {url: image.url})}>
                <Image 
                    source={image.url} 
                    style={{
                        height: deviceHeight /3.5- 12, 
                        width: deviceWidth/ 2.2 - 6, 
                        borderRadius: 20, 
                        margin: 9, }}
                />
                
               </TouchableOpacity>
                ))
        }    
         </View>
    </ScrollView>
 
  )
}

export default Home
