import * as  React from 'react'
import {View, Text, TouchableOpacity, Image, Dimensions, ScrollView, FlatList,Animated, StyleSheet } from 'react-native'
import ImageOverlay from "react-native-image-overlay";


import Header  from './Header';
import Images from './Images'
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;




const Home = (props) => {
  return (
    <ScrollView style={{backgroundColor:'white'}} >
        
        <View style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            marginTop: 35,
            backgroundColor: 'white' }} >
        {    
            Images.map((image, index) => (
               <TouchableOpacity 
                    key={index}    
                    onPress={() => props.navigation.navigate('showImage' , {url: image.url})}>
                <Image style={{ }}
                    source={image.url}
                    overlayColor="orange"
                    overlayAlpha={0.4} 
                    contentPosition="bottom"
                    rounded={25}
                    containerStyle=''
                    
                    style={{
                        opacity: 1 ,
                        bgColor: "#D09040",
                        height: deviceHeight /3.5- 12, 
                        width: deviceWidth/ 2.2 - 6, 
                        borderRadius: 20, 
                        margin: 9, }}
                />
                    <Text style={{
                        position: 'relative', textAlign: 'center',
                        color: 'white',
                         bottom: 150,
                        fontSize: 13}}>
                        4/20/21
                    </Text>
                    <Text style={{
                        position: 'relative', textAlign: 'center', bottom: 148,
                        color: 'white',
                        fontSize: 12}}>
                        4:30pm
                    </Text>

                  
                 

               </TouchableOpacity>
                ))
        }    
         </View>
    </ScrollView>
 
  )
}

export default Home
