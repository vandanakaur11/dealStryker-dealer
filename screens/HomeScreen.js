import * as React from "react";
import { View, Text, StyleSheet, Image, FlatList, Pressable, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import carOne from "../images/carOne.png";
import carLogo1 from "../images/carLogo1.png";
import carLogo2 from "../images/carLogo2.png";
import carLogo3 from "../images/carLogo3.png";
import carLogo4 from "../images/carLogo4.png";
import carLogo5 from "../images/carLogo5.png";
import carLogo6 from "../images/carLogo6.png";
import carLogo7 from "../images/carLogo7.png";
import carLogo8 from "../images/carLogo8.png";
import carLogo9 from "../images/carLogo9.png";
import carLogo10 from "../images/carLogo10.png";
import carLogo11 from "../images/carLogo11.png";
import carLogo12 from "../images/carLogo12.png";
import carLogo13 from "../images/carLogo13.png";
import carLogo14 from "../images/carLogo14.png";
import carLogo15 from "../images/carLogo15.png";
import carLogo16 from "../images/carLogo16.png";
import carLogo17 from "../images/carLogo17.png";
import carLogo18 from "../images/carLogo18.png";
import carLogo19 from "../images/carLogo19.png";
import carLogo20 from "../images/carLogo20.png";

const DATA = [
    {
        id: "001",
        carLogo: carLogo1,
    },
    {
        id: "002",
        carLogo: carLogo2,
    },
    {
        id: "003",
        carLogo: carLogo3,
    },
    {
        id: "004",
        carLogo: carLogo4,
    },
    {
        id: "005",
        carLogo: carLogo5,
    },
    {
        id: "006",
        carLogo: carLogo6,
    },
    {
        id: "007",
        carLogo: carLogo7,
    },
    {
        id: "008",
        carLogo: carLogo8,
    },
    {
        id: "009",
        carLogo: carLogo9,
    },
    {
        id: "0010",
        carLogo: carLogo10,
    },
    {
        id: "011",
        carLogo: carLogo11,
    },
    {
        id: "012",
        carLogo: carLogo12,
    },
    {
        id: "013",
        carLogo: carLogo13,
    },
    {
        id: "014",
        carLogo: carLogo14,
    },
    {
        id: "015",
        carLogo: carLogo15,
    },
    {
        id: "016",
        carLogo: carLogo16,
    },
    {
        id: "017",
        carLogo: carLogo17,
    },
    {
        id: "018",
        carLogo: carLogo18,
    },
    {
        id: "019",
        carLogo: carLogo19,
    },
    {
        id: "020",
        carLogo: carLogo20,
    },
    {
        id: "021",
        carLogo: carLogo1,
    },
    {
        id: "022",
        carLogo: carLogo2,
    },
    {
        id: "023",
        carLogo: carLogo3,
    },
    {
        id: "024",
        carLogo: carLogo4,
    },
    {
        id: "025",
        carLogo: carLogo5,
    },
    {
        id: "026",
        carLogo: carLogo6,
    },
    {
        id: "027",
        carLogo: carLogo7,
    },
    {
        id: "028",
        carLogo: carLogo8,
    },
    {
        id: "029",
        carLogo: carLogo9,
    },
    {
        id: "030",
        carLogo: carLogo10,
    },
    {
        id: "031",
        carLogo: carLogo11,
    },
    {
        id: "032",
        carLogo: carLogo12,
    },
    {
        id: "033",
        carLogo: carLogo13,
    },
    {
        id: "034",
        carLogo: carLogo14,
    },
    {
        id: "035",
        carLogo: carLogo15,
    },
    {
        id: "036",
        carLogo: carLogo16,
    },
    {
        id: "037",
        carLogo: carLogo17,
    },
    {
        id: "038",
        carLogo: carLogo18,
    },
    {
        id: "039",
        carLogo: carLogo19,
    },
    {
        id: "040",
        carLogo: carLogo20,
    },
];
const win = Dimensions.get("window");
function HomeScreen({ navigation }) {
    // navigation.navigate("Cars");
    const renderItem = ({ item }) => (
        <Pressable style={styles.logoImg} onPress={() => navigation.navigate("Cars")}>
            <Image source={item.carLogo} style={styles.carLogoImg} />
        </Pressable>
    );
    return (
        <View style={styles.main}>
            <View style={styles.imgWrap}>
                <View style={styles.imgWrapInner}>
                    <Image source={carOne} style={styles.imgStyle} />
                </View>
            </View>
            <Text style={styles.textHeading}>Select Manufacturer to Get Started</Text>
            <Pressable style={styles.logoImgWrap}>
                <FlatList numColumns={4} data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        paddingBottom: win.height / 15,
        height: "100%",
        // paddingBottom: "5%",
        // backgroundColor: "blue",
    },
    imgWrap: {
        width: "100%",
        // height: win.height / 4,
    },
    imgWrapInner: {
        // borderWidth: 1,
        height: win.height / 4,
    },
    imgStyle: {
        width: "100%",
        height: "100%",
        // height: win.height / 3.5,
        // resizeMode: "contain",
    },
    textHeading: {
        color: "#0F3749",
        textAlign: "center",
        marginVertical: win.height / 60,
        fontWeight: "bold",
        fontSize: win.height / 60,
    },
    logoImg: {
        backgroundColor: "white",
        // width: "100%",
        marginVertical: win.height / 50,
        marginHorizontal: win.width / 40,
        // borderWidth: 1,
        borderColor: "#CDCDCD",
        shadowColor: "#CDCDCD",
        shadowOffset: {
            width: 0,
            // height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 4,
    },
    logoImgWrap: {
        width: "100%",

        display: "flex",
        alignItems: "center",
        // height: "55%",
        height: win.height / 1.8,
        // paddingVertical: "10%",
    },
    carLogoImg: { width: win.width / 5, height: win.width / 5, resizeMode: "contain" },
});

export default HomeScreen;
