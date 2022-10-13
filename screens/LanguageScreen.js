import { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";
// import { RadioButton } from 'react-native-paper';

let win = Dimensions.get("window");

function LanguageScreen() {
    const [text, setText] = useState("Enter Old Password");
    const [text2, setText2] = useState("Enter New Password");

    const [text3, setText3] = useState("Cofirm New Password");
    const lanArr = ["English", "Spanish", "Chinese", "English", "Spanish", "Spanish", "Chinese", "English", "Spanish", "Chinese"];
    return (
        <View style={styles.container}>
            <View style={styles.headingWrap}>
                {/* <Image style={styles.imgIcon}/> */}
                <MaterialIcons name="language" size={win.height / 25} color="#0F3749" />
                <Text style={styles.headingText}>Language</Text>
            </View>
            <View style={styles.formWrap}>
                {lanArr.map((data, i) => (
                    <View style={styles.langWrap} key={i}>
                        <Text style={styles.langText}>{data}</Text>
                        <View style={styles.round}></View>
                    </View>
                ))}

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
        fontSize: win.height / 35,
        color: "#0F3749",
        marginLeft: win.width / 50,
    },
    formWrap: {
        //   height:win.height/1.8,
        backgroundColor: "white",
        width: "100%",
        marginTop: win.height / 90,
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

    btn: {
        backgroundColor: "#1F9DD9",
        height: win.height / 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginVertical: win.height / 30,
    },
    btnText: {
        color: "white",
        fontSize: win.height / 45,
    },
    langWrap: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "lightgray",
        paddingVertical: win.height / 80,
        alignItems: "center",
        justifyContent: "space-between",
    },
    langText: {
        fontSize: win.height / 50,
        color: "#0F3749",
    },
    round: {
        width: win.width / 30,
        height: win.width / 30,
        backgroundColor: "#1F9DD9",
        borderRadius: win.width / 2,
        borderWidth: 2,
        borderColor: "lightgray",
    },
});
export default LanguageScreen;
