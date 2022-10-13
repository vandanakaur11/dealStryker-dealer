import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";

let win = Dimensions.get("window");
function ChangePasswordScreen() {
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");

    const [text3, setText3] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.headingWrap}>
                {/* <Image style={styles.imgIcon}/> */}
                <FontAwesome name="unlock-alt" size={win.height / 20} color="#0F3749" />
                <Text style={styles.headingText}>Change Password</Text>
            </View>
            <View style={styles.formWrap}>
                <View style={styles.inpWrap}>
                    <View style={styles.inpWrapInner}>
                        <Text style={styles.nameHeading}>Old Password</Text>
                        <Text></Text>
                    </View>
                    <TextInput style={styles.inpStyle} placeholder="Enter Old Password" onChangeText={setText} value={text}></TextInput>
                </View>
                <View style={styles.inpWrap}>
                    <View style={styles.inpWrapInner}>
                        <Text style={styles.nameHeading}>New Password</Text>
                        <Text></Text>
                    </View>
                    <TextInput style={styles.inpStyle} placeholder="Enter New Password" onChangeText={setText2} value={text2}></TextInput>
                </View>
                <View style={styles.inpWrap}>
                    <View style={styles.inpWrapInner}>
                        <Text style={styles.nameHeading}>Confirm Password</Text>
                        <Text></Text>
                    </View>
                    <TextInput style={styles.inpStyle} placeholder="Confirm New Password" onChangeText={setText3} value={text3}></TextInput>
                </View>

                <View style={styles.btn}>
                    <Text style={styles.btnText}>Save</Text>
                </View>
            </View>
        </View>
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
        fontSize: win.height / 40,
        color: "#0F3749",
        marginLeft: win.width / 50,
    },
    formWrap: {
        //   height:win.height/1.8,
        backgroundColor: "white",
        width: "100%",
        marginTop: win.height / 40,
        paddingHorizontal: win.width / 20,
        paddingVertical: win.height / 40,
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
        paddingVertical: win.height / 40,
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
        height: win.height / 18,
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
});
export default ChangePasswordScreen;
