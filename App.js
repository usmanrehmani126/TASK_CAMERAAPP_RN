import {View} from 'react-native';
import React from 'react';
import CapturePhotoScreen from './src/CapturePhotoScreen';
import ImageViewerScreen from './src/ImageViewerScreen';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ImageViewerScreen />
      <CapturePhotoScreen />
    </View>
  );
};

export default App;
