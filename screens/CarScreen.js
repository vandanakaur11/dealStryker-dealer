import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions, TextInput, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CheckBox, Icon } from "react-native-elements";
import car1 from "../images/car1.png";
import carLogo10 from "../images/carLogo10.png";
const win = Dimensions.get("window");
function CarScreen({ navigation }) {
    // const [isSelected, setSelection] = useState(false);
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [check5, setCheck5] = useState(false);
    const [check6, setCheck6] = useState(false);
    function handleCheckbox(val) {
        if (val === "check1") {
            setCheck1(true);
            setCheck2(false);
            setCheck3(false);
        }
        if (val === "check2") {
            setCheck1(false);
            setCheck2(true);
            setCheck3(false);
        }
        if (val === "check3") {
            setCheck1(false);
            setCheck2(false);
            setCheck3(true);
        }
        if (val === "check4") {
            setCheck4(true);
            setCheck5(false);
            setCheck6(false);
        }
        if (val === "check5") {
            setCheck4(false);
            setCheck5(true);
            setCheck6(false);
        }
        if (val === "check6") {
            setCheck4(false);
            setCheck5(false);
            setCheck6(true);
        }
    }
    return (
        <View style={styles.main}>
            <View style={styles.carModel}>
                <View style={styles.carImg}>
                    <Image source={car1} style={styles.carImgInner} />
                </View>
                <View style={styles.carImgInfo}>
                    <Image source={carLogo10} style={styles.carImgLogo} />
                    <Text style={styles.carTextHeading}>V60 Cross Country</Text>
                    <Text style={styles.carText}>T5 4dr Wagon AWD</Text>
                    <Text style={styles.carText}>2021</Text>
                </View>
            </View>
            <View style={styles.carDetail}>
                <View style={styles.inputWrap}>
                    <Text style={styles.inputText}>Name</Text>
                    <TextInput style={styles.input} placeholder="Mike Tyson" />
                </View>
                <View style={styles.inputWrap}>
                    <Text style={styles.inputText}>Zip Code</Text>
                    <TextInput style={styles.input} placeholder="81048" />
                </View>
                <View style={styles.radioWrap}>
                    <Text style={styles.radioWrapText}>Travel radius</Text>
                    <View style={styles.inputRadio}>
                        <View style={styles.inputRadioInner}>
                            <CheckBox
                                title="30 Miles"
                                center
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"
                                textStyle={{ color: "#0F3749", fontWeight: "normal", fontSize: win.width / 38 }}
                                containerStyle={{ borderWidth: 0, backgroundColor: "white" }}
                                // onValueChange={setSelection}
                                // value={isSelected}
                                checked={check1}
                                onPress={() => handleCheckbox("check1")}
                            />
                        </View>
                        <View style={styles.inputRadioInner}>
                            <CheckBox
                                title="50 Miles"
                                center
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"
                                textStyle={{ color: "#0F3749", fontWeight: "normal", fontSize: win.width / 38 }}
                                containerStyle={{ borderWidth: 0, backgroundColor: "white" }}
                                // onValueChange={setSelection}
                                // value={isSelected}
                                checked={check2}
                                onPress={() => handleCheckbox("check2")}
                            />
                        </View>
                        <View style={styles.inputRadioInner}>
                            <CheckBox
                                title="80 Miles"
                                center
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"
                                textStyle={{ color: "#0F3749", fontWeight: "normal", fontSize: win.width / 38 }}
                                containerStyle={{ borderWidth: 0, backgroundColor: "white" }}
                                // onValueChange={setSelection}
                                // value={isSelected}
                                checked={check3}
                                onPress={() => handleCheckbox("check3")}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.radioWrap}>
                    <Text style={styles.radioWrapText}>Financing Preference</Text>
                    <View style={styles.inputRadio}>
                        <View style={styles.inputRadioInner}>
                            <CheckBox
                                title="Dealership"
                                center
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"
                                textStyle={{ color: "#0F3749", fontWeight: "normal", fontSize: win.width / 38 }}
                                containerStyle={{ borderWidth: 0, backgroundColor: "white" }}
                                checked={check4}
                                onPress={() => handleCheckbox("check4")}
                            />
                        </View>
                        <View style={styles.inputRadioInner}>
                            <CheckBox
                                title="Outside"
                                center
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"
                                textStyle={{ color: "#0F3749", fontWeight: "normal", fontSize: win.width / 38 }}
                                containerStyle={{ borderWidth: 0, backgroundColor: "white" }}
                                checked={check5}
                                onPress={() => handleCheckbox("check5")}
                            />
                        </View>
                        <View style={styles.inputRadioInner}>
                            <CheckBox
                                title="None"
                                center
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"
                                textStyle={{ color: "#0F3749", fontWeight: "normal", fontSize: win.width / 38 }}
                                containerStyle={{ borderWidth: 0, backgroundColor: "white" }}
                                checked={check6}
                                onPress={() => handleCheckbox("check6")}
                            />
                        </View>
                    </View>
                </View>
                <Pressable style={styles.btnSubmit} onPress={() => navigation.navigate("HomeScreen")}>
                    <Text style={styles.btnText}>Submit</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        height: "100%",
        backgroundColor: "#FBFBFB",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    carModel: {
        height: win.height / 2.9,
        width: "94%",
        backgroundColor: "white",
        borderRadius: 10,
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
    carDetail: {
        height: win.height / 2,
        width: "94%",
        backgroundColor: "white",
        borderRadius: 10,
        justifyContent: "space-evenly",
        paddingHorizontal: win.width / 90,
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
    carImg: {
        width: "100%",
        height: "50%",
       
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    carImgInner: {
        // height: win.height / 6,
        width: win.width / 1.2,
        
    },
    carImgInfo: {
        width: "100%",
        height: "50%",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    carImgLogo: {
        height: win.width / 7,
        width: win.width / 7,
    },
    carTextHeading: {
        color: "#0F3749",
        fontSize: win.height / 40,
        fontWeight: "bold",
    },
    carText: {
        color: "#0F3749",
        fontSize: win.height / 55,
    },
    inputRadio: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    radioWrap: {},
    radioWrapText: {
        color: "#0F3749",
        marginHorizontal: win.width / 40,
        fontSize: win.height / 60,
        fontWeight: "bold",
    },
    input: {
        height: win.height / 20,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#0F3749",
        paddingLeft: win.width / 35,
        marginHorizontal: win.width / 50,
    },
    inputText: {
        color: "#0F3749",
        marginVertical: win.width / 80,
        marginHorizontal: win.width / 40,
        fontSize: win.height / 60,
        fontWeight: "bold",
    },
    inputRadioInner: {
        width: "33%",
        // backgroundColor: "crimson",
    },
    btnSubmit: {
        height: win.height / 20,
        backgroundColor: "#1F9DD9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginHorizontal: win.width / 50,
    },
    btnText: {
        color: "white",
        fontSize: win.height / 50,
    },
});

export default CarScreen;
