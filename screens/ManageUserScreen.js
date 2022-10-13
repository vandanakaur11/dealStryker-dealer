import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TextInput,
    Image,
    Pressable,
    SafeAreaView,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import avatarImg4 from "../images/avatarImg4.png";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { BottomSheet } from "react-native-btr";
import { CheckBox, Icon } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

let win = Dimensions.get("window");
function ManageUserScreen({ navigation }) {
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");
    const [userRole, setUserRole] = useState("Admin");
    const [userName, setUserName] = useState("Dealership Name");
    const [userEmail, setUserEmail] = useState("xyz@xyz.com");

    const [text3, setText3] = useState("");
    const [visible, setVisible] = useState(false);

    ///////////////////////////////////
    let [selectedImage, setSelectedImage] = React.useState(null);

    let openImagePickerAsync = async () => {
        try {
            let permissionResult = await ImagePicker.ImagePicker.requestMediaLibraryPermissionsAsync();

            if (permissionResult.granted === false) {
                alert("Permission to access camera roll is required!");
                return;
            }
        } catch (err) {}
        try {
            let pickerResult = await ImagePicker.launchImageLibraryAsync();
            if (pickerResult.cancelled === true) {
                return;
            }
            setSelectedImage({ localUri: pickerResult.uri });
        } catch (err) {}

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

    const toggleBottomNavigationView = () => {
        setVisible(!visible);
    };

    function handleCheckbox(val) {
        if (val === "check1") {
            setUserRole("Admin");
            setCheck1(true);
            setCheck2(false);
            setCheck3(false);
            setCheck4(false);
        }
        if (val === "check2") {
            setUserRole("Manager");
            setCheck1(false);
            setCheck2(true);
            setCheck3(false);
            setCheck4(false);
        }
        if (val === "check3") {
            setUserRole("Sales");
            setCheck1(false);
            setCheck2(false);
            setCheck3(true);
            setCheck4(false);
        }
        if (val === "check4") {
            setUserRole("Finance");
            setCheck1(false);
            setCheck2(false);
            setCheck3(false);
            setCheck4(true);
        }
    }

    const registerSubUser = async () => {
        let filterData = await AsyncStorage.getItem("data");
        const body = {
            email: filterData.email.toString(),
            role: filterData.role.toString(),
            name: filterData.name.toString(),
            type: filterData.type.toString(),
        };
        console.log(body.data);
        const header = {
            Authorization: `Token ${await AsyncStorage.getItem("token")}`,
        };
        try {
            let res = await axios.post(`${"https://app.dealstryker.com/api/users/registerSubUser"}`, body, header);
            console.log(res);
            navigation.navigate("AddMemberScreen");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <View style={styles.containers}>
            <View style={styles.headingWrap}>
                {/* <Image style={styles.imgIcon}/> */}
                <FontAwesome5 name="user-cog" size={win.height / 25} color="#0F3749" />
                <Text style={styles.headingText}>Manage User</Text>
            </View>

            <View style={styles.formWrap}>
                <View style={styles.innerWrap}>
                    <View style={styles.innWrap}>
                        {selectedImage !== null ? (
                            <Image source={{ uri: selectedImage.localUri }} style={styles.imgStyle} />
                        ) : (
                            <Image source={avatarImg4} style={styles.imgStyle} />
                        )}
                        <View style={styles.nameWrap}>
                            <Text style={styles.nameInfo}>{userName}</Text>
                            <Text style={styles.nameInfo}>{userEmail}</Text>
                        </View>
                    </View>
                    <Pressable style={styles.innWrap} onPress={toggleBottomNavigationView}>
                        <Text style={styles.role}>{userRole}</Text>
                        <FontAwesome name="pencil-square-o" size={win.height / 30} color="#1F9DD9" />
                    </Pressable>
                </View>

                <View>
                    <Pressable style={styles.btn} onPress={() => registerSubUser()}>
                        <Text style={styles.btnText}>Add Team Member</Text>
                    </Pressable>
                    {/* <Pressable style={styles.btnEdit} >
                    <Text style={styles.btnTextEdit}>Edit User</Text>
                </Pressable> */}
                </View>
            </View>

            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <BottomSheet
                        visible={visible}
                        onBackButtonPress={toggleBottomNavigationView}
                        onBackdropPress={toggleBottomNavigationView}
                    >
                        {/*Bottom Sheet inner View*/}
                        <ScrollView style={styles.bottomNavigationView}>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: "column",
                                    justifyContent: "space-around",

                                    // alignItems:"center",
                                    // backgroundColor:"crimson",
                                }}
                            >
                                <View>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            marginVertical: win.height / 45,
                                            marginTop: win.height / 25,
                                            paddingHorizontal: win.width / 10,
                                        }}
                                    >
                                        <FontAwesome5 name="user-edit" size={win.height / 25} color="#0F3749" />
                                        <Text style={{ marginLeft: 10, color: "#0F3749", fontWeight: "bold", fontSize: win.height / 30 }}>
                                            Edit User
                                        </Text>
                                    </View>
                                    <View></View>
                                </View>
                                <View style={{ paddingHorizontal: win.width / 10 }}>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text
                                            style={{
                                                //   textAlign: 'center',
                                                paddingTop: win.height / 70,
                                                paddingBottom: win.height / 120,
                                                fontSize: win.height / 45,
                                                color: "#0F3749",
                                            }}
                                        >
                                            User Name
                                        </Text>
                                        <Text></Text>
                                    </View>
                                    <TextInput placeholder="Enter User Name" style={styles.sheetInput} onChangeText={setUserName} />
                                </View>
                                <View style={{ paddingHorizontal: win.width / 10 }}>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text
                                            style={{
                                                //   textAlign: 'center',
                                                paddingTop: win.height / 70,
                                                paddingBottom: win.height / 120,
                                                fontSize: win.height / 45,
                                                color: "#0F3749",
                                            }}
                                        >
                                            Email
                                        </Text>
                                        {/* <Text></Text> */}
                                    </View>
                                    <TextInput placeholder="Enter Email" style={styles.sheetInput} onChangeText={setUserEmail} />
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: win.width / 10 }}>
                                    <Text
                                        style={{
                                            //   textAlign: 'center',
                                            paddingTop: win.height / 40,
                                            fontSize: win.height / 46,
                                            color: "#0F3749",
                                        }}
                                    >
                                        Member Role
                                    </Text>
                                    {/* <Text></Text> */}
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginLeft: win.width / 30,
                                        paddingHorizontal: win.width / 10,
                                    }}
                                >
                                    <Text style={{ fontSize: win.height / 55 }}>Admin</Text>
                                    <CheckBox
                                        title=""
                                        center
                                        checkedIcon="dot-circle-o"
                                        uncheckedIcon="circle-o"
                                        textStyle={{ color: "gray", fontWeight: "normal", fontSize: win.width / 38 }}
                                        // containerStyle={{ borderWidth:0 }}
                                        size={win.height / 35}
                                        checked={check1}
                                        onPress={() => handleCheckbox("check1")}
                                    />
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginLeft: win.width / 30,
                                        paddingHorizontal: win.width / 10,
                                    }}
                                >
                                    <Text style={{ fontSize: win.height / 55 }}>Manager</Text>
                                    <CheckBox
                                        title=""
                                        center
                                        checkedIcon="dot-circle-o"
                                        uncheckedIcon="circle-o"
                                        textStyle={{ color: "gray", fontWeight: "normal", fontSize: win.width / 38 }}
                                        // containerStyle={{ borderWidth: 0, backgroundColor: "white" }}
                                        size={win.height / 35}
                                        checked={check2}
                                        onPress={() => handleCheckbox("check2")}
                                    />
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginLeft: win.width / 30,
                                        paddingHorizontal: win.width / 10,
                                    }}
                                >
                                    <Text style={{ fontSize: win.height / 55 }}>Sales</Text>

                                    <CheckBox
                                        title=""
                                        center
                                        checkedIcon="dot-circle-o"
                                        uncheckedIcon="circle-o"
                                        textStyle={{ color: "gray", fontWeight: "normal", fontSize: win.width / 38 }}
                                        // containerStyle={{ borderWidth: 0, backgroundColor: "white" }}
                                        size={win.height / 35}
                                        checked={check3}
                                        onPress={() => handleCheckbox("check3")}
                                    />
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginLeft: win.width / 30,
                                        paddingHorizontal: win.width / 10,
                                    }}
                                >
                                    <Text style={{ fontSize: win.height / 55 }}>Finance</Text>
                                    <CheckBox
                                        title=""
                                        center
                                        checkedIcon="dot-circle-o"
                                        uncheckedIcon="circle-o"
                                        textStyle={{ color: "gray", fontWeight: "normal", fontSize: win.width / 38 }}
                                        // containerStyle={{ borderWidth: 0, backgroundColor: "white" }}
                                        size={win.height / 35}
                                        checked={check4}
                                        onPress={() => handleCheckbox("check4")}
                                    />
                                </View>
                                <View style={styles.uploadWrap}>
                                    <Entypo name="upload" size={win.height / 35} color="#0F3749" />
                                    {/* <Text style={styles.uploadText}>Upload profile picture</Text> */}
                                    <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                                        <Text style={styles.buttonText}>Upload your profile picture</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.btnCont}>
                                    <Pressable style={styles.sheetBtn} onPress={toggleBottomNavigationView}>
                                        <Text style={styles.sheetBtnText}>Save</Text>
                                    </Pressable>
                                    <Pressable style={styles.sheetBtn2} onPress={toggleBottomNavigationView}>
                                        <Text style={styles.sheetBtnText}>Delete</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </ScrollView>
                    </BottomSheet>
                </View>
            </SafeAreaView>

            {/* here end */}
        </View>
    );
}

const styles = StyleSheet.create({
    containers: {
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
        height: win.height / 1.4,
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
        justifyContent: "space-between",
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

    innerWrap: {
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor:"red",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
        paddingVertical: win.height / 80,
    },
    innWrap: {
        flexDirection: "row",

        alignItems: "center",
    },
    imgStyle: {
        width: win.height / 12,
        height: win.height / 12,
        borderRadius: win.width / 2,
    },
    nameWrap: {
        marginLeft: win.width / 50,
    },
    role: {
        marginRight: win.width / 50,
        color: "gray",
        fontSize: win.height / 60,
    },
    nameInfo: {
        color: "#0F3749",
        fontSize: win.height / 50,
    },
    btnTextEdit: {
        color: "white",
        fontSize: win.height / 50,
        textAlign: "center",
        backgroundColor: "crimson",
        padding: win.width / 30,
        borderRadius: 10,
    },
    btnEdit: {
        marginTop: win.height / 100,
        fontWeight: "bold",
    },

    container: {
        flex: 1,
        // margin: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    bottomNavigationView: {
        backgroundColor: "#fff",
        width: "100%",
        height: win.height / 1.3,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingBottom: win.height / 40,
        borderTopLeftRadius: win.width / 10,
        borderTopRightRadius: win.width / 10,
    },

    sheetInput: {
        borderWidth: 1,
        borderColor: "lightgray",
        width: win.width / 1.25,
        borderRadius: 10,
        paddingLeft: win.width / 20,
        height: win.height / 18,
    },
    uploadWrap: {
        flexDirection: "row",
        paddingBottom: win.height / 70,
        paddingHorizontal: win.width / 10,
    },
    uploadText: {
        fontSize: win.height / 55,
        color: "#0F3749",
        marginLeft: win.width / 60,
    },
    btnCont: {
        // flexDirection:"row",
        alignItems: "center",
        // justifyContent:"space-around",
        marginVertical: win.height / 50,
    },
    sheetBtn: {
        backgroundColor: "#1F9DD9",
        height: win.height / 17,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        width: win.width / 1.3,
        marginVertical: win.height / 90,

        //  marginLeft:win.width/30
    },
    sheetBtn2: {
        backgroundColor: "crimson",
        height: win.height / 17,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        width: win.width / 1.3,
        marginVertical: win.height / 90,
        //    marginLeft:win.width/30,
        //    marginTop:win.height/80
    },
    sheetBtnText: {
        color: "white",
        fontSize: win.height / 55,
    },

    container4: {
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    logo: {
        width: 305,
        height: 159,
        marginBottom: 20,
    },
    instructions: {
        color: "#888",
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
        marginLeft: win.width / 35,
        fontSize: win.height / 50,
    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: "contain",
    },
});
export default ManageUserScreen;
