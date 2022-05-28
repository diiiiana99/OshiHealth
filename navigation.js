import * as React from 'react';
import { Platform, Button,StyleSheet, Text, View } from "react-native";
import { StatusBar } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home'
import Header from './src/CustomHeader'

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

  StatusBar.setHidden(true, 'none');


const Navigation = () => {
  return (
      
    // <NavigationContainer >
    //   <Stack.Navigator >
    //     <Stack.Screen name="Selfies"
    //     options={{title:'Selfies',
    //     fontFamily: 'Inter', 
    //      headerTintColor: '#757575',
    //      headerTransparent: true,
    //      headerStyle: {
    //         backgroundColor: 'white'
    //       },
    //      headerTitleStyle: {
    //        fontWeight: '300',
    //      },  
          
      
         
         
    //      }}
    //      component={Home}   />
         
    //     <Stack.Screen name="showImage" options={{title:'Selfie',
    //     headerTintColor: '#757575',
    //     headerTitleStyle: {
    //       fontWeight: '300',
    //     },  
    //     headerBackTitleVisible: false,
    //     headerTransparent: true,
    //     headerStyle: {
    //         backgroundColor: 'white'
    //       },
          
   
       

    //      }} component={showImage}  />
         
    //   </Stack.Navigator>
    //   <Header/>

    // </NavigationContainer>
//
<NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Selfies"
        options={{title:'',
         headerTintColor: '#757575',
         headerTransparent: true,
         headerStyle: {
            backgroundColor: 'white'
          },
         
         }}
         component={Home} 
         options={({ navigation }) => ({
            header: () => <Header navigation={navigation} />,
           
          })}  />
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
         }} component={showImage}/>        
         </Stack.Navigator>
</NavigationContainer>
  );
}

export default Navigation;


