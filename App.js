import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home'
import showImage from './src/showImage'



const Stack = createNativeStackNavigator();

const App = () => {
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
