import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Pressable,
    FlatList,
    Dimensions,
    Animated,
    KeyboardAvoidingView,
    ActivityIndicator,
    Input,
    Picker,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import splashBackImg from "../images/splashBackImg.png";
import DealStrykerLogo from "../images/DealStrykerLogo.png";
import carImg from "../images/carImg.png";
// import userIcon from "../images/userIcon.png";
// import eyeIcon from "../images/eyeIcon.png";
import facebookIcon from "../images/facebookIcon.png";
import googleIcon from "../images/googleIcon.png";
// import { TouchableOpacity } from "react-native-web";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { CheckBox, Icon } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BottomSheet } from "react-native-btr";
const win = Dimensions.get("window");

function SplashScreen({ navigation }) {
    const [text, onChangeText] = useState("");
    const [password, onChangePass] = useState("");

    const [dName, onChangeDname] = useState("");
    const [manu, onChangeManu] = useState("");
    const [street, onChangeStreet] = useState("");
    const [zipC, onChangeZipC] = useState("");
    const [emailSign, onChangeEmailSign] = useState("");
    const [passSign, onChangePassSign] = useState("");
    const [cpassSign, onChangeCPassSign] = useState("");
    const [number, onChangeNumber] = useState(null);
    const [selectedUser, setSelectedUser] = useState("user");
    const [forSign, setForSign] = useState(true);

    const [checkAnime, setCheckAnime] = useState(false);
    const [check1, setCheck1] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [manuData, setManuData] = useState([]);
    const [newManuData, setNewManuData] = useState([]);
    const [handleManuData, setHandleManuData] = useState(true);
    const [visible3, setVisible3] = useState(false);
    const [handleCheck, setHandleCheck] = useState(false);
    const [checkData, setCheckData] = useState([]);

    useEffect(async () => {
        if ((await AsyncStorage.getItem("token")) !== null) {
            goto();
        }
        getManuData();
        console.log(await AsyncStorage.getItem("token"));
        console.log(await AsyncStorage.getItem("data"));
    }, []);
    const toggleBottomNavigationView3 = () => {
        // toggleBottomNavigationView()
        setVisible3(!visible3);
    };
    const getManuData = async () => {
        await axios.get("https://www.dealstryker.com/manu").then((res) => {
            for (let name of res.data) {
                let dataInObj = Object.assign({ name });
                manuData.push(dataInObj);
            }
            setManuData(manuData);
            console.clear();
        });
    };

    function goto(val) {
        // navigation.navigate("MainScreen");
        setCheckAnime(true);
        setTimeout(() => {
            navigation.navigate("HomeScreen");
        }, 1500);
        // alert(val);
    }

    function handleCheckbox(val) {
        setCheck1(!check1);
    }

    var leftValue = useState(new Animated.Value(win.width))[0];
    var formValue = useState(new Animated.Value(win.width * 2))[0];
    var logoValue = useState(new Animated.Value(win.height / 3))[0];
    function moveCar() {
        Animated.timing(leftValue, {
            toValue: !checkAnime ? win.width / 20 : win.width / 20 - win.width * 2,
            duration: 1500,
            useNativeDriver: false,
        }).start();
    }
    moveCar();
    function moveForm() {
        Animated.timing(formValue, {
            toValue: !checkAnime ? win.width / 90 : win.width / 90 - win.width * 2,
            duration: 1500,
            useNativeDriver: false,
        }).start();
    }
    moveForm();
    function moveLogo() {
        Animated.timing(logoValue, {
            toValue: !checkAnime ? win.height / 17 : win.height / 17 - win.width * 2,
            duration: 2000,
            useNativeDriver: false,
        }).start();
    }
    moveLogo();
    async function signupDealer() {
        setIsLoading(true);
        const bodySign = {
            user: {
                email: emailSign.toString(),
                password: passSign.toString(),
                role: "dealer",
                name: dName.toUpperCase(),
                zip: zipC.toString(),
                manufacturers: checkData,
            },
        };

        try {
            let token;
            let dealerData;

            await axios.post(`${"https://app.dealstryker.com/api/users/registerDealer"}`, bodySign).then((res) => {
                console.log("start----------------", res, "----------------end");

                token = JSON.stringify(res?.data?.user?.token);
                dealerData = JSON.stringify(res?.data);
                setIsLoading(false);
            });

            await AsyncStorage.setItem("token", token);
            await AsyncStorage.setItem("data", dealerData);
            goto();
        } catch (err) {
            console.log(err);
            setIsLoading(false);
        }
    }
    async function loginDealer() {
        console.log("1");
        // if ((await AsyncStorage.getItem("token")) !== null || undefined) {
        //     var bodyLog = {
        //         user: {
        //             email: text.toString(),
        //             password: password.toString(),
        //             token: await AsyncStorage.getItem("token"),
        //         },
        //     };
        // } else {
        // var bodyLog = {
        //     user: {
        //         email: text.toString(),
        //         password: password.toString(),
        //     },
        // };
        // }
        var bodyLog = {
            user: {
                email: text.toString(),
                password: password.toString(),
            },
        };
        console.log("user loggedin data", bodyLog);

        try {
            let res = await axios.post(`https://app.dealstryker.com/api/users/login`, bodyLog);
            let token = JSON.stringify(res?.data?.user?.token);
            await AsyncStorage.setItem("token", token);
            const dealerData = JSON.stringify(res?.data?.user);
            await AsyncStorage.setItem("data", dealerData);

            if (res) {
                console.log("boooooooooooooom", res.data.user);
                goto();
            }
        } catch (err) {
            console.log(err);
        }
    }
    function handleCheckboxmanu(item, i) {
        const newVal = [];
        newVal.push(item);

        setCheckData([...checkData, newVal]);
        // if (checkData.includes(item, i)) {
        //     setHandleCheck(!handleCheck);
        // } else {
        //     setHandleCheck(handleCheck);
        // }
        // setHandleCheck(!handleCheck);
    }

    console.log(checkData);
    const renderItem2 = ({ item, i }) => (
        <View style={styles.addUserWrap}>
            <View style={styles.userWrapInn}>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flexDirection: "row" }}>
                        <CheckBox
                            title=""
                            center
                            textStyle={{
                                color: "gray",
                                fontWeight: "normal",
                                fontSize: win.width / 38,
                            }}
                            containerStyle={{ borderWidth: 0, backgroundColor: "white" }}
                            size={win.height / 40}
                            checked={handleCheck}
                            onPress={() => handleCheckboxmanu(item.name, i)}
                        />
                    </View>
                    {/* <Image source={avatarImg2} /> */}
                    <View style={{ justifyContent: "center", marginLeft: win.width / 40 }}>
                        <Text style={{ fontSize: win.height / 50, color: "#0F3749" }}>{item.name}</Text>
                        <Text style={{ fontSize: win.height / 50, color: "lightgray" }}>{item.role}</Text>
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* <ImageBackground source={splashBackImg} resizeMode="contain" imageStyle={styles.} style={styles.image} imageStyle={styles.backgroundStyle}> */}
            <Animated.View style={{ position: "absolute", top: logoValue }}>
                <View style={styles.imageMid}>
                    <Image source={DealStrykerLogo} resizeMode="contain" style={styles.imageStyling} />
                </View>
            </Animated.View>
            <Animated.View style={{ width: win.width / 0.99, alignItems: "center", marginLeft: formValue }}>
                <View style={[forSign ? styles.logForm : styles.signForm]}>
                    {/* <View style={styles.inpHeading}>
                    <Text>Email</Text>
                    <Text></Text>
                </View> */}
                    {/* <View style={styles.userOpt} onPress={goto}>
                    <Pressable
                        onPress={() => setSelectedUser("user")}
                        style={selectedUser === "user" ? styles.userOptInner : styles.userOptInner2}
                    >
                        <Text style={selectedUser === "user" ? styles.userOptText : styles.userOptText2}>User</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => setSelectedUser("dealer")}
                        style={selectedUser === "dealer" ? styles.dealerOptInner : styles.dealerOptInner2}
                    >
                        <Text style={selectedUser === "dealer" ? styles.dealerOptText2 : styles.dealerOptText}>Dealer</Text>
                    </Pressable>
                </View> */}
                    {forSign && (
                        <View style={styles.inputWrap}>
                            <TextInput onChangeText={onChangeText} value={text} style={styles.input} placeholder="Enter Email" />
                            {/* <FontAwesome name="user" size={win.width/18} color="#0F3749" /> */}
                            <MaterialIcons name="email" size={win.width / 18} color="#0F3749" />
                        </View>
                    )}
                    {/* <View style={styles.inpHeading}>
                    <Text>Email</Text>
                    <Text></Text>
                </View> */}
                    {forSign && (
                        <View style={styles.inputWrap}>
                            <TextInput
                                onChangeText={onChangePass}
                                placeholder="Enter your password"
                                value={password}
                                style={styles.input}
                            />
                            <Entypo name="lock" size={win.width / 18} color="#0F3749" />
                            {/* <Entypo name="eye" size={win.width/18} color="#0F3749" /> */}
                        </View>
                    )}
                    {/* SignUp Start here */}
                    {!forSign && (
                        <View style={styles.inputWrap}>
                            <TextInput onChangeText={onChangeDname} placeholder="Dealership Name" value={dName} style={styles.input} />
                            <FontAwesome name="building" size={win.width / 18} color="#0F3749" />
                            {/* <FontAwesome name="user" size={win.width/18} color="#0F3749" /> */}
                        </View>
                    )}
                    {!forSign && (
                        <View style={styles.inputWrap}>
                            {/* <TextInput onChangeText={onChangeManu} placeholder="Manufacturer" value={manu} style={styles.input} /> */}
                            {console.log("manu", manuData.data, "manu")}
                            <Pressable
                                onPress={() => setVisible3(!visible3)}
                                style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}
                            >
                                <Text style={{ fontSize: win.height / 50, color: "gray" }}>Manufacturer</Text>
                                {/* <Picker
                                selectedValue={manuData}
                                style={{ height: 50, width: 150 }}
                                onValueChange={(itemValue, itemIndex) => setManuData(itemValue)}
                            >
                                <Picker.Item label="Java" value="java" />
                                {manuData.map((data, i) => (
                                    <Picker.Item key={i} label={data.name} value={data.name} />
                                ))}
                            </Picker> */}

                                <MaterialCommunityIcons name="car-sports" size={win.width / 16} color="#0F3749" />
                            </Pressable>
                            {/* <MaterialIcons name="miscellaneous-services" size={win.width/18} color="#0F3749" /> */}
                        </View>
                    )}
                    {!forSign && (
                        <View style={styles.inputWrap}>
                            <TextInput onChangeText={onChangeStreet} placeholder="Street Address" value={street} style={styles.input} />
                            <Entypo name="address" size={win.width / 18} color="#0F3749" />
                            {/* <Entypo name="location-pin" size={win.width/18} color="#0F3749" /> */}
                        </View>
                    )}
                    {!forSign && (
                        <View style={styles.inputWrap}>
                            <TextInput onChangeText={onChangeZipC} placeholder="Zip Code" value={zipC} style={styles.input} />
                            <Entypo name="location-pin" size={win.width / 18} color="#0F3749" />
                            {/* <FontAwesome name="file-zip-o" size={win.width/18} color="#0F3749" /> */}
                        </View>
                    )}
                    {!forSign && (
                        <View style={styles.inputWrap}>
                            <TextInput onChangeText={onChangeEmailSign} placeholder="Email" value={emailSign} style={styles.input} />

                            <MaterialIcons name="email" size={win.width / 18} color="#0F3749" />
                        </View>
                    )}
                    {!forSign && (
                        <View style={styles.inputWrap}>
                            <TextInput onChangeText={onChangePassSign} placeholder="Password" value={passSign} style={styles.input} />
                            <Entypo name="lock" size={win.width / 18} color="#0F3749" />
                            {/* <Entypo name="eye" size={win.width/18} color="#0F3749" /> */}
                        </View>
                    )}
                    {!forSign && (
                        <View style={styles.inputWrap}>
                            <TextInput
                                onChangeText={onChangeCPassSign}
                                placeholder="Confirm password"
                                value={cpassSign}
                                style={styles.input}
                            />
                            <Entypo name="lock" size={win.width / 18} color="#0F3749" />
                            {/* <Entypo name="eye" size={win.width/18} color="#0F3749" /> */}
                        </View>
                    )}
                    {!forSign && (
                        <View style={styles.agreeBox}>
                            <CheckBox
                                title="By signing up, i agree that i have read and accepted the Terms and Services to login now"
                                center
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"
                                textStyle={{ color: "gray", fontWeight: "normal", fontSize: win.width / 38 }}
                                containerStyle={{ borderWidth: 0, backgroundColor: "white" }}
                                size={win.height / 40}
                                checked={check1}
                                onPress={() => handleCheckbox("check1")}
                            />
                        </View>
                    )}
                    {/* SignUp end here */}
                    {forSign && (
                        <View style={styles.inpHeading}>
                            <Text></Text>
                            <Text style={styles.forgetText}>Forgot Password?</Text>
                        </View>
                    )}

                    {/* <View> */}
                    <View style={styles.loginBtn}>
                        {forSign ? (
                            <Pressable onPress={() => loginDealer()}>
                                <Text style={styles.loginText}>Login</Text>
                            </Pressable>
                        ) : (
                            <Pressable onPress={signupDealer}>
                                <Text style={styles.loginText}>Signup</Text>
                            </Pressable>
                        )}
                    </View>
                    {/* <View style={styles.loginBtn}>
                        {forSign ? (
                            <Pressable onPress={() => loginUser()}>
                                <Text style={styles.loginText}>Login</Text>
                            </Pressable>
                        ) : isLoading && !forSign ? (
                            <ActivityIndicator />
                        ) : (
                            <Pressable onPress={signupDealer}>
                                <Text style={styles.loginText}>Signup</Text>
                            </Pressable>
                        )}
                    </View> */}
                    {/* </View> */}

                    {/* <View style={styles.loginBtnFb}>
                        <Image source={facebookIcon} />
                        {forSign ? (
                            <Text style={styles.loginTextFb}>Login with Facebook</Text>
                        ) : (
                            <Text style={styles.loginTextFb}>Signup with Facebook</Text>
                        )}
                    </View> */}
                    {/* <View style={styles.loginBtnGoogle}>
                        <Image source={googleIcon} />
                        {forSign ? (
                            <Text style={styles.loginTextGo}>Login with Google</Text>
                        ) : (
                            <Text style={styles.loginTextGo}>Signup with Google</Text>
                        )}
                    </View> */}
                    <View>
                        {forSign ? (
                            <Pressable onPress={() => setForSign(false)}>
                                <Text style={styles.createAcc}>
                                    Dont Have an Account? <Text style={styles.createAccInner}>SignUp</Text>
                                </Text>
                            </Pressable>
                        ) : (
                            <Pressable onPress={() => setForSign(true)} style={styles.already}>
                                <Text style={styles.createAcc}>
                                    Already Have an Account? <Text style={styles.createAccInner}>Login</Text>
                                </Text>
                            </Pressable>
                        )}
                    </View>
                    {!forSign && (
                        <View>
                            <Text style={styles.termN}>Terms and Conditions</Text>
                        </View>
                    )}
                    {!forSign && (
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
                                            <FlatList
                                                numColumns={1}
                                                data={manuData}
                                                renderItem={renderItem2}
                                                keyExtractor={(item, i) => i}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </BottomSheet>
                        </View>
                    )}
                </View>
            </Animated.View>
            <Image source={splashBackImg} style={styles.image} resizeMode="contain" />
            {/* <Image source={carImg} style={styles.imageCar} resizeMode="contain" /> */}
            <Animated.View style={{ right: leftValue, position: "absolute", bottom: 0 }}>
                <Image source={carImg} style={styles.imageCar} resizeMode="contain" />
            </Animated.View>
            {/* </ImageBackground> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0e3749",
        alignItems: "center",
        justifyContent: "center",
        minHeight: Math.round(win.height),
    },
    image: {
        flex: 1,
        // opacity: 0.5,
        position: "absolute",
        bottom: "0%",
    },
    imageMid: {
        // flex: 1,
        // marginBottom: "40%",
        // position: "absolute",
        // top: win.height / 20,
    },
    imageStyling: {
        width: win.width / 2,
        height: win.height / 7,
    },
    imageCar: {
        flex: 1,

        // position: "absolute",
        // bottom: "0%",
        // right: "20%",
        width: win.width / 0.5,
        height: win.height / 3.2,
    },
    logForm: {
        // flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        // position: "absolute",
        // top: "20%",
        height: win.height / 2.5,
        width: "80%",
        backgroundColor: "white",
        opacity: 1,
        borderRadius: 10,
        zIndex: 1000,
        marginBottom: win.height / 8,
    },
    signForm: {
        // flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        // position: "absolute",
        // top: "20%",
        height: win.height / 1.5,
        width: "80%",
        backgroundColor: "white",
        opacity: 1,
        borderRadius: 10,
        zIndex: 1000,
        // marginBottom: win.height / 200,
        marginTop: win.height / 20,
        paddingVertical: win.height / 80,
    },
    userOpt: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "12%",
        // shadowColor: "rgba(0, 0, 0, 0.5);",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 5,
        // borderRadius: 5,
        // elevation: 4,
        width: "85%",
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: 1,
    },
    userOptInner: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#1F9DD9",
        height: "100%",
        alignItems: "center",
    },
    dealerOptInner: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "lightgray",
        height: "100%",
        alignItems: "center",
    },
    userOptInner2: {
        flexDirection: "row",
        justifyContent: "center",
        color: "#0F3749",
        width: "50%",
        textAlign: "center",
    },
    dealerOptInner2: {
        flexDirection: "row",
        justifyContent: "center",
        color: "#0F3749",
        width: "50%",
        textAlign: "center",
    },
    userOptText: {
        color: "white",
        width: "50%",
        textAlign: "center",
        fontSize: win.height / 60,
    },
    dealerOptText: {
        color: "#0F3749",
        width: "50%",
        textAlign: "center",
        fontSize: win.height / 60,
    },
    userOptText2: {
        color: "#0F3749",
        width: "50%",
        textAlign: "center",
        fontSize: win.height / 60,
    },
    dealerOptText2: {
        color: "white",
        width: "50%",
        textAlign: "center",
        fontSize: win.height / 60,
    },
    userOptTextSel: {
        color: "#0F3749",
        width: "50%",
        textAlign: "center",
    },
    dealerOptTextSel: {
        color: "#0F3749",
        width: "50%",
        textAlign: "center",
    },
    inputWrap: {
        display: "flex",
        flexDirection: "row",
        height: "10%",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(205, 205, 205, 1)",

        justifyContent: "space-between",
        width: "85%",
        // backgroundColor: "pink",
    },
    input: {
        // backgroundColor: "blue",
        height: 40,
        width: "90%",
        fontSize: win.height / 50,
        color: "lightgray",
    },
    inpHeading: {
        display: "flex",
        justifyContent: "space-between",

        width: "85%",
        flexDirection: "row",
    },

    loginBtn: {
        backgroundColor: "rgba(31, 157, 217, 1)",
        width: "85%",
        height: win.height / 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    loginText: {
        color: "white",
        fontSize: win.height / 55,
    },
    loginTextFb: {
        marginLeft: 5,
        color: "white",
        fontSize: win.height / 58,
    },
    loginTextGo: {
        marginLeft: 5,
        color: "gray",
        fontSize: win.height / 58,
    },
    loginBtnFb: {
        backgroundColor: "rgba(80, 112, 169, 1)",
        width: "85%",
        height: "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 10,
    },
    loginBtnGoogle: {
        backgroundColor: "white",
        width: "85%",
        height: "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 10,
        // boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        borderWidth: 1,
        borderColor: "lightgray",
    },
    forgetText: {
        color: "rgba(31, 157, 217, 1)",
        fontSize: win.height / 62,
    },
    createAcc: {
        color: "lightgray",
        fontSize: win.height / 60,
    },
    createAccInner: {
        color: "#1F9DD9",
        fontWeight: "bold",
    },
    termN: {
        color: "#1F9DD9",
        fontSize: win.height / 60,
        fontWeight: "bold",
        marginVertical: win.height / 200,
    },

    agreeBox: {
        // backgroundColor:"crimson",
        paddingHorizontal: win.width / 50,
    },
    already: {
        marginTop: win.height / 130,
    },
    container3: {
        flex: 1,
        margin: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    addUserWrap: {
        marginHorizontal: win.width / 20,
        marginVertical: win.height / 40,
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
});

export default SplashScreen;
