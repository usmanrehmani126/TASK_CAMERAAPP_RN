import {
  Text,
  View,
  Image,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera} from 'react-native-image-picker';

let CapturePhotoScreen = () => {
  const [cameraPhoto, setCameraPhoto] = useState();
  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };

  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      setCameraPhoto(result.assets[0].uri);
    }
  };

  return (
    <View style={{marginTop: 50}}>
      <Image
        source={{
          uri: cameraPhoto
            ? cameraPhoto
            : 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        }}
        style={{
          width: 200,
          height: 200,
          alignSelf: 'center',
          marginBottom: 12,
          borderRadius: 20,
        }}
      />
      {cameraPhoto ? (
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 3,
            top: -32,
            backgroundColor: 'skyblue',
            padding: 6,
            borderRadius: 5,
          }}
          onPress={() => setCameraPhoto('')}>
          <Text style={{color: 'black', color: 'white', fontSize: 12}}>
            Cancel Photo
          </Text>
        </TouchableOpacity>
      ) : null}
      <TouchableOpacity
        onPress={openCamera}
        style={{
          backgroundColor: 'skyblue',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
          width: '60%',
          height: 50,
          alignSelf: 'center',
        }}>
        <Text>Capture Picture</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CapturePhotoScreen;
