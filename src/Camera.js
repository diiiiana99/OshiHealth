import React from 'react';
import {StyleSheet, View, Alert, TouchableOpacity} from 'react-native';
import { RNCamera } from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import Feather from 'react-native-vector-icons/Feather';

Feather.loadFont();

const Selfie = props => {
  const [{cameraRef}, {takePicture}] = useCamera(null);

  return (
    <View style={styles.container}>
      <RNCamera />
      {
        <TouchableOpacity
          style={{marginTop: 350, alignItems: 'center'}}
          onPress={() => props.navigation.navigate('')}>
          <Feather color="white" name="circle" size={60}></Feather>
        </TouchableOpacity>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Selfie;
