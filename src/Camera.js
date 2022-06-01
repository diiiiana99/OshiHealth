import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Feather from 'react-native-vector-icons/Feather';

Feather.loadFont();

const Selfie = props => {
  return (
    <View style={styles.container}>
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        permissionDialogTitle={'Permission to use camera'}
        permissionDialogMessage={
          'We need your permission to use your camera phone'
        }
      />
      {
        <TouchableOpacity
          onPress={this.takePicture.bind(this)}
          style={{marginTop: 350, alignItems: 'center'}}>
          <Feather color="white" name="circle" size={60}></Feather>
        </TouchableOpacity>
      }
    </View>
  );
};

const takePicture = async function () {
  if (this.camera) {
    const options = {quality: 0.5, base64: true};
    const data = await this.camera.takePictureAsync(options);
    console.log(data.uri);
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default Selfie;
