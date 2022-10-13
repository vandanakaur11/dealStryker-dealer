import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, Image ,TouchableOpacity} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import avatarImg4 from "../images/avatarImg4.png";
// import ImagePicker from "../components/ImagePicker"
import { ScrollView } from "react-native-gesture-handler";
import * as ImagePicker from 'expo-image-picker';
import avatarImg from "../images/avatarImg.png"



let win = Dimensions.get("window");
function EditProfileScreen() {
    const [text, setText] = useState("Mike Tyson");
    const [text2, setText2] = useState("");

    const [text3, setText3] = useState("");
    const [userName,setUserName] = useState("Mike Tyson")

    ///////////////////////////////////
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
    //   setProPic(selectedImage)
      // return (
      //   <View style={styles.container}>
      //     <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
      //   </View>
      // null
      // );
    }
    //////////////////////////////////
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headingWrap}>
                {/* <Image style={styles.imgIcon}/> */}
                <Feather name="edit" size={win.height / 25} color="#0F3749" />
                <Text style={styles.headingText}>Edit Profile</Text>
            </View>
            <View style={styles.userWrap}>
                 {selectedImage!==null ?<Image source={{ uri: selectedImage.localUri }} style={styles.userImage}/>:
                <Image source={avatarImg} style={styles.userImage} />}
                <Text style={styles.userName}>{text}</Text>
            </View>
            <View style={styles.formWrap}>
                <View style={styles.inpWrap}>
                    <View style={styles.inpWrapInner}>
                        <Text style={styles.nameHeading}>Name</Text>
                        <Text></Text>
                    </View>
                    <TextInput style={styles.inpStyle} placeholder="Enter Your Name" onChangeText={setText} ></TextInput>
                </View>
                <View style={styles.inpWrap}>
                    <View style={styles.inpWrapInner}>
                        <Text style={styles.nameHeading}>Email</Text>
                        <Text></Text>
                    </View>
                    <TextInput style={styles.inpStyle} placeholder="Enter Your Email" onChangeText={setText2} value={text2}></TextInput>
                </View>
                <View style={styles.inpWrap}>
                    <View style={styles.inpWrapInner}>
                        <Text style={styles.nameHeading}>Zip Code</Text>
                        <Text></Text>
                    </View>
                    <TextInput style={styles.inpStyle} placeholder="Enter Your Zipcode" onChangeText={setText3} value={text3}></TextInput>
                </View>
                <View style={styles.profilePic}>
                    <Entypo name="upload" size={win.height / 30} color="#0F3749" />
                    {/* <Text style={styles.picText}>Upload your profile picture</Text> */}
                    {/* //////////////// */}
                    <View style={styles.container4}>
      

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Upload your profile picture</Text>
      </TouchableOpacity>
    </View>
                    {/* ////////////////////// */}
                </View>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>Save</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: win.width / 25,
    },
    headingWrap: {
        width: "100%",
        height: win.height / 10,
        //   backgroundColor:'pink',
        alignItems: "center",
        paddingHorizontal: win.width / 50,
        color: "blue",
        flexDirection: "row",
    },
    headingText: {
        fontSize: win.height / 35,
        color: "#0F3749",
        marginLeft: win.width / 50,
    },
    formWrap: {
        //   height:win.height/1.8,
        backgroundColor: "white",
        width: "100%",
        marginTop: win.height / 60,
        paddingHorizontal: win.width / 20,
        paddingVertical: win.height / 50,
        width: "100%",
        borderRadius: 10,
        borderWidth: 0,
        borderColor: "#CDCDCD",
        shadowColor: "#CDCDCD",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 4,
    },
    inpWrap: {
        paddingVertical: win.height / 50,
        // backgroundColor: "lightgray",
    },
    inpWrapInner: {
        height: win.height / 25,
        justifyContent: "center",
    },
    inpStyle: {
        borderWidth: 1,
        fontSize: win.height / 50,
        borderColor: "#CDCDCD",
        height: win.height / 18,
        borderRadius: 8,
        paddingLeft: win.width / 50,
    },
    btn: {
        backgroundColor: "#1F9DD9",
        height: win.height / 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    btnText: {
        color: "white",
        fontSize: win.height / 50,
    },
    nameHeading: {
        fontSize: win.height / 55,
        color: "#0F3749",
    },
    profilePic: {
        flexDirection: "row",
        marginVertical: win.height / 50,
    },
    picText: {
        color: "#1F9DD9",
        marginLeft: win.width / 50,
    },
    userWrap: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: win.height / 7,
        borderRadius: 8,
    },
    userImage: {
        height: win.width / 5.6,
        width: win.width / 5.5,
        borderRadius:win.width/2
    },
    userName: {
        fontSize: win.height / 50,
        color: "#0F3749",
    },


    container4: {
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
export default EditProfileScreen;
