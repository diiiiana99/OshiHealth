import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home'
import showImage from './src/showImage'



const Stack = createNativeStackNavigator();




const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Selfies" options={{title:'Selfies', 
         headerTintColor: '#757575',
         headerTitleStyle: {
           fontWeight: '300',
           
        
         },  
         }}component={Home}  />
        <Stack.Screen name="showImage" options={{title:'',
        headerTintColor: '#757575',
        headerTitleStyle: {
          fontWeight: '300',
        },  
        headerMode: 'none'
         }} component={showImage}  />
      </Stack.Navigator>
    
    </NavigationContainer>
  
  );
}

export default App;
