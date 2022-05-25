import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home'
import showImage from './src/showImage'



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{title:''}}component={Home}  />
        <Stack.Screen name="showImage" options={{title:''}} component={showImage}  />
      </Stack.Navigator>
    
    </NavigationContainer>
  
  );
}

export default App;
