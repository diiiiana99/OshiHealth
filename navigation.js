import * as React from 'react';
import { Platform, Button,StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home'
import Camera from './src/Camera'

import showImage from './src/showImage'




const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    icon: {
      paddingLeft: 10
    },
    iconContainer: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: 120
    }
  });



const Navigation = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator s>
        <Stack.Screen name="Selfies"
        options={{title:'Selfies',
        fontFamily: 'Inter', 
         headerTintColor: '#757575',
         headerTransparent: true,
         headerStyle: {
            backgroundColor: 'white'
          },
         headerTitleStyle: {
           fontWeight: '400',
         },  
      
         
         
         }}component={Home}   />
            <Stack.Screen name="Camera" options={{title:'Camera', 
         headerTintColor: '#757575',
         headerTitleStyle: {
           fontWeight: '300',
           fontFamily: 'Inter', 
         },  
         }}component={Camera}  />
        <Stack.Screen name="showImage" options={{title:'Selfie',
        headerTintColor: '#757575',
        headerTitleStyle: {
          fontWeight: '300',
        },  
        headerBackTitleVisible: false,
        headerTransparent: true,
        headerStyle: {
            backgroundColor: 'white'
          },
          
   
       

         }} component={showImage}  />
         
      </Stack.Navigator>
    
    </NavigationContainer>
//
  );
}

export default Navigation;


