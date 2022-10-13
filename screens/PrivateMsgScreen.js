import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Pressable,
    FlatList,
    Image,
    ScrollView,
    TouchableWithoutFeedback,
    TextInput,
    SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import avatarImg from "../images/avatarImg.png";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import avatarImg2 from "../images/avatarImg2.png";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { BottomSheet } from "react-native-btr";
// import { TextInput } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

const win = Dimensions.get("window");

const DATA = [
    { side: "get", name: "User Name", role: "Role", msg: "Lorem ipsum dolor sit amet, consetetur", time: "8:45pm", id: "001" },
    { side: "sent", name: "User Name", role: "Role", msg: "Lorem ipsum dolor sit amet, consetetur", time: "8:45pm", id: "002" },
    { side: "get", name: "User Name", role: "Role", msg: "Lorem ipsum dolor sit amet, consetetur", time: "8:45pm", id: "003" },
    { side: "sent", name: "User Name", role: "Role", msg: "Lorem ipsum dolor sit amet, consetetur", time: "8:45pm", id: "004" },
    { side: "get", name: "User Name", role: "Role", msg: "Lorem ipsum dolor sit amet, consetetur", time: "8:45pm", id: "005" },
    { side: "sent", name: "User Name", role: "Role", msg: "Lorem ipsum dolor sit amet, consetetur", time: "8:45pm", id: "006" },
    { side: "get", name: "User Name", role: "Role", msg: "Lorem ipsum dolor sit amet, consetetur", time: "8:45pm", id: "007" },
    { side: "sent", name: "User Name", role: "Role", msg: "Lorem ipsum dolor sit amet, consetetur", time: "8:45pm", id: "008" },
];
const DATA2 = [
    {
        name: "jhon",
        id: "001",
        role: "Manager",
    },
    {
        name: "Micheal",
        id: "002",
        role: "Finance",
    },
    {
        name: "Sarah",
        id: "003",
        role: "Sales",
    },
];
function PrivateMsgScreen({ navigation }) {
    const [mess, setMess] = useState("Messages");
    const [openModal, setOpenModal] = useState(false);

    const [visible, setVisible] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [addCheck, setAddCheck] = useState("Add");
    const [checkBtn, setCheckBtn] = useState(false);
    const [toDelete, setToDelete] = useState("");
    const [checkingModal, setCheckingModal] = useState(false);

    const toggleBottomNavigationView = () => {
        setVisible(!visible);
    };
    const toggleBottomNavigationView3 = () => {
        // toggleBottomNavigationView()
        setVisible3(!visible3);
    };
    function checkingAdd(val) {
        setAddCheck(!addCheck);

        setCheckBtn(val);
    }

    function handlerLongClick(val) {
        setToDelete(val);
    }

    function clickingModal() {
        setOpenModal(!openModal);
    }

    const renderItem2 = ({ item }) => (
        <View style={styles.addUserWrap}>
            <View style={styles.userWrapInn}>
                <View style={{ flexDirection: "row" }}>
                    <Image source={avatarImg2} />
                    <View style={{ justifyContent: "center", marginLeft: win.width / 40 }}>
                        <Text style={{ fontSize: win.height / 50, color: "#0F3749" }}>{item.name}</Text>
                        <Text style={{ fontSize: win.height / 50, color: "lightgray" }}>{item.role}</Text>
                    </View>
                </View>
                <Pressable
                    onPress={() => checkingAdd(item.name)}
                    style={addCheck && checkBtn === item.name ? styles.btnCont2 : styles.btnCont}
                >
                    {addCheck && checkBtn === item.name ? (
                        <Text style={styles.btn2Text}>Added</Text>
                    ) : (
                        <Text style={styles.btn1Text}>Add</Text>
                    )}
                </Pressable>
            </View>
        </View>
    );

    const renderItem = ({ item }) => (
        <Pressable>
            {item.side === "get" ? (
                <View>
                    <View>
                        <Pressable style={styles.msgChatUser} onLongPress={() => handlerLongClick(item.id)}>
                            <View style={toDelete === item.id ? styles.chosingOpt : ""}>
                                <View style={styles.msgChatInnerUser}>
                                    <View style={styles.msgChatMid}>
                                        <Text style={styles.msgTextUser}>{item.msg}</Text>
                                    </View>
                                    <View style={styles.msgChatBottom}>
                                        <Text></Text>
                                        <Text style={styles.msgTextUser}>{item.time}</Text>
                                    </View>
                                </View>
                            </View>
                            {toDelete === item.id && (
                                <View style={{ justifyContent: "space-around", paddingHorizontal: win.width / 12 }}>
                                    <AntDesign name="delete" size={win.height / 30} color="#0F3749" />
                                    <Pressable onPress={() => setToDelete("")}>
                                        <MaterialIcons name="cancel" size={win.height / 30} color="#0F3749" />
                                    </Pressable>
                                </View>
                            )}
                        </Pressable>
                    </View>
                </View>
            ) : (
                <View>
                    <Pressable style={styles.msgChat} onLongPress={() => handlerLongClick(item.id)}>
                        {/* <Image source={avatarImg2} style={styles.imgAva} /> */}
                        {toDelete === item.id && (
                            <View style={{ justifyContent: "space-around", paddingHorizontal: win.width / 12 }}>
                                <AntDesign name="delete" size={win.height / 30} color="#0F3749" />
                                <Pressable onPress={() => setToDelete("")}>
                                    <MaterialIcons name="cancel" size={win.height / 30} color="#0F3749" />
                                </Pressable>
                            </View>
                        )}
                        <View style={toDelete === item.id ? styles.chosingOpt : ""}>
                            <View style={styles.msgChatInner}>
                                <View style={styles.msgChatTop}>
                                    <Text style={styles.msgText}>{item.name}</Text>
                                    <Text style={styles.msgText}>{item.role}</Text>
                                </View>
                                <View style={styles.msgChatMid}>
                                    <Text style={styles.msgText}>{item.msg}</Text>
                                </View>
                                <View style={styles.msgChatBottom}>
                                    <Text></Text>
                                    <Text style={styles.msgText}>{item.time}</Text>
                                </View>
                            </View>
                        </View>
                    </Pressable>
                </View>
            )}
        </Pressable>
    );
    return (
        <View style={styles.main}>
            <View style={styles.nameWrap}>
                <Image source={avatarImg2} style={styles.buyerImg} />

                <View>
                    <Text style={styles.subheading}>Buyer Name</Text>
                    <Text style={styles.heading}>Toyota corolla Hybrid</Text>

                    <Text style={styles.priceheading}>$90,000</Text>
                </View>
            </View>
            <View style={styles.messagesCont}>
                <FlatList numColumns={1} data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
            </View>
            <Pressable style={!openModal ? styles.modalStyle : styles.modalStyle2}>
                {checkingModal ? (
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={styles.innerModal}>
                            <Entypo name="upload" size={win.height / 25} color="white" />
                            <Text style={styles.innerModalText}>Upload Files</Text>
                        </View>
                        <View style={styles.innerModal}>
                            <Ionicons name="pricetag" size={win.height / 25} color="white" />
                            <Text style={styles.innerModalText}>Door price</Text>
                        </View>
                    </View>
                ) : (
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Pressable style={styles.innerModal}>
                            <Entypo name="upload" size={win.height / 25} color="white" />
                            <Text style={styles.innerModalText}>Upload Files</Text>
                        </Pressable>
                        <Pressable style={styles.innerModal} onPress={toggleBottomNavigationView3}>
                            <AntDesign name="adduser" size={win.height / 25} color="white" />
                            <Text style={styles.innerModalText}>Add User</Text>
                        </Pressable>
                    </View>
                )}
            </Pressable>
            <View style={styles.sendMessageWrap}>
                <View style={styles.inputWrap}>
                    <TextInput style={styles.inputStyle} value={mess}></TextInput>
                    <Pressable onPress={() => clickingModal()}>
                        <EvilIcons name="paperclip" size={win.width / 13} color="#0F3749" />
                    </Pressable>
                </View>
                {/* {openModal && <View style={styles.modalStyle}>
                   <View style={styles.innerModal}>
                <Entypo name="upload" size={win.height/25} color="white" />
                <Text style={styles.innerModalText}>Upload Files</Text>
                </View>
                <Pressable  style={styles.innerModal} onPress={toggleBottomNavigationView}>
                    
                <AntDesign name="adduser" size={win.height / 25} color="white" />
                
                <Text style={styles.innerModalText}>Add Member</Text>
                </Pressable >
                </View>} */}
                <View style={styles.sentIconWrap}>
                    <Feather name="send" size={win.height / 25} color="white" />
                </View>
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
                                    flexDirection: "row",
                                    justifyContent: "space-evenly",
                                    width: win.width,
                                    alignItems: "center",
                                }}
                            >
                                <Pressable style={{ alignItems: "center" }} onPress={toggleBottomNavigationView}>
                                    <Entypo name="upload" size={win.height / 25} color="white" />
                                    <Text style={{ color: "white", fontSize: win.height / 60 }}>Upload Files</Text>
                                </Pressable>
                                <Pressable style={{ alignItems: "center" }} onPress={toggleBottomNavigationView3}>
                                    <AntDesign name="adduser" size={win.height / 25} color="white" />
                                    <Text style={{ color: "white", fontSize: win.height / 60 }}>Add Members</Text>
                                </Pressable>
                            </View>
                        </View>
                    </BottomSheet>
                </View>
            </SafeAreaView>

            {/* here end */}
            {/* here start */}
            <SafeAreaView style={styles.container3}>
                <View style={styles.container3}>
                    <BottomSheet
                        visible={visible3}
                        onBackButtonPress={toggleBottomNavigationView3}
                        onBackdropPress={toggleBottomNavigationView3}
                    >
                        {/*Bottom Sheet inner View*/}
                        <View style={styles.bottomNavigationView3}>
                            <View
                                style={{
                                    flex: 1,
                                    // flexDirection: 'row',
                                    // justifyContent: 'space-evenly',
                                    width: win.width,
                                    // alignItems:"center"
                                }}
                            >
                                <View style={styles.userListWrap}>
                                    <FlatList numColumns={1} data={DATA2} renderItem={renderItem2} keyExtractor={(item) => item.id} />
                                </View>
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
    main: {
        height: "100%",
        backgroundColor: "white",
    },
    nameWrap: {
        height: win.height / 7.5,
        borderBottomWidth: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "lightgray",
        flexDirection: "row",
    },
    heading: {
        fontSize: win.height / 50,
        color: "#0F3749",
        fontWeight: "bold",
    },
    priceheading: {
        fontSize: win.height / 50,
        color: "#0F3749",
        fontWeight: "bold",
    },
    subheading: {
        fontSize: win.height / 60,
        color: "#0F3749",
    },
    sendMessageWrap: {
        height: win.height / 10,
        width: win.width,
        backgroundColor: "white",
        position: "absolute",
        bottom: win.height / 45,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: win.width / 25,
        zIndex: 1000,
    },
    inputStyle: {
        width: win.width / 1.6,
        height: win.height / 20,
        // backgroundColor: "crimson",
        fontSize: win.height / 50,
        color: "gray",
    },
    inputWrap: {
        borderWidth: 1,
        borderColor: "#0F3749",
        width: win.width / 1.35,
        height: win.height / 19,
        borderRadius: win.width / 2,
        paddingLeft: 10,
        flexDirection: "row",
        // justifyContent: "space-around",
        alignItems: "center",
    },
    sentIconWrap: {
        backgroundColor: "#23A3F9",
        width: win.height / 13,
        height: win.height / 13,
        borderRadius: win.width / 2,
        alignItems: "center",
        justifyContent: "center",
    },
    messagesCont: {
        height: win.height / 1.65,
        // backgroundColor: "crimson",
    },
    msgChat: {
        // height: win.height / 10,
        // backgroundColor: "pink",
        flexDirection: "row",
        marginVertical: win.height / 110,
        marginHorizontal: win.width / 30,
        justifyContent: "flex-end",
    },
    msgChatUser: {
        // height: win.height / 10,
        // backgroundColor: "pink",
        flexDirection: "row",
        marginVertical: win.height / 110,
        // justifyContent: "flex-end",
        marginHorizontal: win.width / 30,
    },
    imgAva: {
        height: win.height / 15,
        width: win.height / 15,
        marginHorizontal: win.width / 40,
    },
    msgChatInner: {
        backgroundColor: "#CDCDCD",
        // backgroundColor: "#0F3749",
        width: win.width / 1.4,
        padding: win.width / 50,
        borderRadius: 5,
    },
    msgChatInnerUser: {
        // backgroundColor: "#CDCDCD",
        backgroundColor: "#0F3749",
        width: win.width / 1.4,
        padding: win.width / 50,
        borderRadius: 5,
    },
    msgChatTop: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    msgText: {
        // color: "white",
        color: "#0F3749",
        fontSize: win.height / 50,
    },
    msgTextUser: {
        fontSize: win.height / 50,
        // color: "#0F3749",
        color: "white",
    },
    msgChatMid: {
        paddingVertical: win.height / 120,
    },
    msgChatBottom: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    modalStyle: {
        // position:"absolute",
        // height:win.height/10,
        // width: win.width / 1.5,
        // backgroundColor:"#0F3749",
        // bottom:win.height/8.5,
        // marginLeft:win.width/13,
        // borderRadius:win.width/20,
        // flexDirection:"row",
        // alignItems:'center',
        // justifyContent:'space-around',
        // borderWidth:1,
        // borderColor:"#CDCDCD",
    },
    modalStyle: {
        // position:"absolute",
        height: win.height / 10,
        width: win.width / 1.5,
        backgroundColor: "#0F3749",
        bottom: win.height / 8.5,
        marginLeft: win.width / 13,
        borderRadius: win.width / 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderWidth: 1,
        borderColor: "#CDCDCD",
        opacity: 0,
    },
    modalStyle2: {
        // position:"absolute",
        height: win.height / 10,
        width: win.width / 1.5,
        backgroundColor: "#0F3749",
        bottom: win.height / 8.5,
        marginLeft: win.width / 13,
        borderRadius: win.width / 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderWidth: 1,
        borderColor: "#CDCDCD",
        opacity: 1,
    },
    innerModalText: {
        color: "white",
        fontSize: win.height / 70,
    },
    innerModal: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: win.width / 15,
    },
    buyerImg: {
        width: win.height / 12,
        height: win.height / 12,
        marginHorizontal: win.width / 30,
    },

    container: {
        flex: 1,
        margin: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    bottomNavigationView: {
        backgroundColor: "#0F3749",
        width: "100%",
        height: win.height / 5.5,
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // borderWidth:1,
        // borderColor:'white'
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

    container3: {
        flex: 1,
        margin: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    bottomNavigationView3: {
        backgroundColor: "white",
        width: "100%",
        height: win.height / 2.3,
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderWidth: 1,
        borderColor: "white",
    },
    userWrapInn: {
        flexDirection: "row",
        //   backgroundColor:"crimson",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: "lightgray",
        borderBottomWidth: 1,
        paddingBottom: win.height / 100,
    },
    addUserWrap: {
        marginHorizontal: win.width / 20,
        marginVertical: win.height / 40,
    },
    btnCont: {
        backgroundColor: "#23A3F9",
        width: win.width / 5,
        height: win.height / 19,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    btnCont2: {
        backgroundColor: "#CDCDCD",
        width: win.width / 5,
        height: win.height / 19,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    btn1Text: {
        color: "white",
        fontSize: win.height / 50,
    },
    btn2Text: {
        color: "#0F3749",
        fontSize: win.height / 50,
    },
    chosingOpt: {
        opacity: 0.2,
    },
});

export default PrivateMsgScreen;
