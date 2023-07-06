import {StyleSheet, Dimensions, View, Text} from 'react-native';
import React from 'react';
import _ from 'lodash';
import Image360Viewer from '@hauvo/react-native-360-image-viewer';
const images = _.reverse([
  require(`../assets/ecom.jpg`),
  require(`../assets/pic1.jpg`),
  require(`../assets/pic2.jpg`),
  require(`../assets/pic3.jpg`),
]);
import * as Icons from 'react-native-heroicons/solid';
const ImageViewerScreen = () => {
  return (
    <View style={{marginTop: 30}}>
      <Text
        style={{
          color: 'black',
          alignSelf: 'center',
          marginVertical: 12,
          fontSize: 18,
        }}>
        Image Slider
      </Text>
      <Image360Viewer srcset={images} style={{width: 300, height: 300}} />
      <View
        style={{
          position: 'absolute',
          flexDirection: 'row',
          alignItems: 'center',
          top: 130,
          justifyContent: 'space-between',
        }}>
        <Icons.ArrowLeftCircleIcon color="red" fill="black" size={42} />
      </View>
      <View
        style={{
          position: 'absolute',
          flexDirection: 'row',
          alignItems: 'center',
          top: 130,
          right: 20,
          justifyContent: 'space-between',
        }}>
        <Icons.ArrowRightCircleIcon color="red" fill="black" size={42} />
      </View>
    </View>
  );
};

export default ImageViewerScreen;

const styles = StyleSheet.create({});
