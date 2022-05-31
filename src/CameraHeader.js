import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Surface, Title} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

Feather.loadFont();

const CameraHeader = props => {
  return (
    <Surface style={styles.header}>
      <View style={styles.view}>
        {
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
            <Feather name="arrow-left" color="white" size={29}></Feather>
          </TouchableOpacity>
        }
      </View>
    </Surface>
  );
};

export default CameraHeader;

const styles = StyleSheet.create({
  header: {
    height: 28,
    elevation: 1,
    marginTop: 38,
    fontFamily: 'Inter',
    justifyContent: '',
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  view: {
    flex: 1,
    marginLeft: 15,
    flexDirection: 'row',
  },
  rightView: {
    justifyContent: 'flex-start',
    marginRight: 15,
  },
});
