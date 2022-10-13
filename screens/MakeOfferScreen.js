import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image, FlatList, SafeAreaView, Pressable, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";
import avatarImg from "../images/avatarImg.png";
import { BottomSheet } from "react-native-btr";
import { TextInput } from "react-native-gesture-handler";

const win = Dimensions.get("window");
function MakeOfferScreen() {
    const [visible, setVisible] = useState(false);

    const toggleBottomNavigationView = () => {
        setVisible(!visible);
    };
    return (
        <View style={styles.containers}>
            <View style={styles.wrap}>
                <View>
                    <View style={styles.userWrap}>
                        <Image source={avatarImg} style={styles.userImg} />
                        <Text style={styles.userName}>User Name</Text>
                    </View>
                    <View style={styles.infoWrap}>
                        <Text style={styles.leftInfo}>Vehicle Name</Text>
                        <Text style={styles.rightInfo}>Toyota Corolla Hybrid</Text>
                    </View>
                    <View style={styles.infoWrapBot}>
                        <Text style={styles.leftInfo}>Price</Text>
                        <Text style={styles.rightInfo}>$90,000</Text>
                    </View>
                    <View style={styles.infoWrapBot}>
                        <Text style={styles.leftInfo}>Offer made by</Text>
                        <Text style={styles.rightInfo}>Name</Text>
                    </View>
                    <View style={styles.infoWrapBot}>
                        <Text style={styles.leftInfo}>Finance Option</Text>
                        <Text style={styles.rightInfo}>Dealer</Text>
                    </View>
                </View>
                <Pressable onPress={toggleBottomNavigationView} style={styles.btn}>
                    <Text style={styles.btnText}>Make Offer</Text>
                </Pressable>
            </View>
            {/* here start */}
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <BottomSheet
                        visible={visible}
                        onBackButtonPress={toggleBottomNavigationView}
                        onBackdropPress={toggleBottomNavigationView}
                    >
                        {/*Bottom Sheet inner View*/}
                        <View style={styles.bottomNavigationView}>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: "column",
                                    justifyContent: "space-around",
                                }}
                            >
                                <View>
                                    <Text
                                        style={{
                                            textAlign: "center",
                                            padding: win.height / 40,
                                            fontSize: win.height / 35,
                                            color: "#0F3749",
                                        }}
                                    >
                                        Enter an Amount
                                    </Text>

                                    <TextInput placeholder="$90,000" style={styles.sheetInput} keyboardType="numeric" />
                                </View>
                                {/* <View style={{ flex: 1, flexDirection: 'row' }}> */}
                                {/* </View> */}
                                {/* <View style={{ flex: 1, flexDirection: 'row' }}>
               
              </View> */}
                                <Pressable onPress={toggleBottomNavigationView} style={styles.sheetBtn}>
                                    <Text style={styles.sheetBtnText}>Make Offer</Text>
                                </Pressable>
                            </View>
                        </View>
                    </BottomSheet>
                </View>
            </SafeAreaView>

            {/* here end */}
        </View>
    );
}

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        width: "100%",
        height: win.height,
        // backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    wrap: {
        width: win.width / 1.1,
        height: win.height / 1.25,
        backgroundColor: "white",
        borderRadius: 10,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: win.height / 50,
    },
    btn: {
        width: win.width / 1.2,
        backgroundColor: "#1F9DD9",
        height: win.height / 16,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    btnText: {
        color: "white",
        fontSize: win.height / 50,
    },
    userName: {
        fontSize: win.height / 40,
        color: "#0F3749",
    },
    userImg: {
        width: win.height / 11,
        height: win.height / 11,
    },
    userWrap: {
        alignItems: "center",
    },
    infoWrap: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: win.width / 1.3,
        marginVertical: win.height / 30,
        // backgroundColor:"pink"
    },
    infoWrapBot: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: win.width / 1.3,
        marginVertical: win.height / 50,
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
        paddingVertical: win.height / 100,
    },
    leftInfo: {
        fontSize: win.height / 50,
        color: "#0F3749",
    },
    rightInfo: {
        fontSize: win.height / 50,
        fontWeight: "bold",
        color: "#0F3749",
    },

    container: {
        flex: 1,
        margin: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E0F7FA",
    },
    bottomNavigationView: {
        backgroundColor: "#fff",
        width: "100%",
        height: win.height / 2.8,
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },

    sheetInput: {
        borderWidth: 1,
        borderColor: "lightgray",
        width: win.width / 1.3,
        borderRadius: 10,
        paddingLeft: win.width / 20,
        height: win.height / 15,
    },
    sheetBtn: {
        backgroundColor: "#1F9DD9",
        height: win.height / 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        width: win.width / 1.3,
    },
    sheetBtnText: {
        color: "white",
        fontSize: win.height / 40,
    },
});
export default MakeOfferScreen;
