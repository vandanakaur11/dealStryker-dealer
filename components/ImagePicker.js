import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View,Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
let win = Dimensions.get("window");


export default function ImagePickerComp({setProPic}) {
  let [selectedImage, setSelectedImage] = React.useState(null);
 

  let openImagePickerAsync = async () => {
      try{
        let permissionResult = await ImagePicker.ImagePicker.requestMediaLibraryPermissionsAsync();
    
    
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }
      }
      catch(err){

      }
   try{
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
   }
   catch(err){

   }   

    // setSelectedImage({ localUri: pickerResult.uri });
    
  };

  if (selectedImage !== null) {
    setProPic(selectedImage)
    // return (
    //   <View style={styles.container}>
    //     <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
    //   </View>
    // null
    // );
  }

  return (
    <View style={styles.container}>
      {/* <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} /> */}
      {/* <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button below!
      </Text> */}

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Upload your profile picture</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    // backgroundColor: 'blue',
    // padding: 20,
    // borderRadius: 5,
  },
  buttonText: {
    color: "#1F9DD9",
    marginLeft:win.width/35,
    fontSize:win.height/50
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});
