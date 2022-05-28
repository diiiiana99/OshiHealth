import React from 'react'
import {View, Text, TouchableOpacity, Image, Dimensions, ScrollView} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomHeader from './CustomHeader';



function Header() {
  return (
  <View style={{fontWeight: '300'}}>
      <CustomHeader/>
  </View>
  )
}

export default Header
