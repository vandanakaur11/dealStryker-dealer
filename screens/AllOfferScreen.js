import * as React from "react";
import { View, Text, StyleSheet, Dimensions, Pressable, FlatList, Image, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import avatarImg from "../images/avatarImg.png";

const win = Dimensions.get("window");
const DATA2 = [{ id: "01", name: "Toyota corolla Hybrid", subName: "LE 4dr Sedan Blueprint", year: "2021" }];
const DATA = [
    { name: "Dealer Name", price: "$10,000", id: "01" },
    { name: "Dealer Name", price: "$15,000", id: "02" },
    { name: "Dealer Name", price: "$10,000", id: "03" },
    { name: "Dealer Name", price: "$15,000", id: "04" },
    { name: "Dealer Name", price: "$10,000", id: "05" },
    { name: "Dealer Name", price: "$15,000", id: "06" },
    { name: "Dealer Name", price: "$10,000", id: "07" },
    { name: "Dealer Name", price: "$15,000", id: "08" },
    { name: "Dealer Name", price: "$10,000", id: "09" },
    { name: "Dealer Name", price: "$15,000", id: "10" },
    { name: "Dealer Name", price: "$10,000", id: "11" },
    { name: "Dealer Name", price: "$15,000", id: "12" },
];
function AllOfferScreen({ navigation }) {
    const renderItem = ({ item }) => (
        <View style={styles.listWrap} key={item.id}>
                        <View style={styles.listWrapInner}>
                            <Image source={avatarImg} />
                            <View>
                                <Text style={styles.dealerName}>{item.name}</Text>
                                <Text style={styles.dealerPrice}>{item.price}</Text>
                            </View>
                        </View>
                        <View style={styles.listWrapInner}>
                            <View>
                                <Text style={styles.viewMap}>View Map</Text>
                            </View>
                            <View>
                                <Text style={styles.viewChat}>Chat</Text>
                            </View>
                        </View>
                    </View>
    );
    return (
        <View style={styles.main}>
            <View style={styles.topWrap}>
                <Text style={styles.heading}>Toyota corolla Hybrid</Text>
                <Text style={styles.subheading}>LE 4dr Sedan Blueprint</Text>
                <Text style={styles.subheading}>2021</Text>
            </View>
            <View style={styles.bottomWrap}>
                <FlatList numColumns={1} data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id}/>
                {/* {DATA.map((item) => (
                    <View style={styles.listWrap} key={item.id}>
                        <View style={styles.listWrapInner}>
                            <Image source={avatarImg} />
                            <View>
                                <Text style={styles.dealerName}>{item.name}</Text>
                                <Text style={styles.dealerPrice}>{item.price}</Text>
                            </View>
                        </View>
                        <View style={styles.listWrapInner}>
                            <View>
                                <Text style={styles.viewMap}>View Map</Text>
                            </View>
                            <View>
                                <Text style={styles.viewChat}>Chat</Text>
                            </View>
                        </View>
                    </View>
                ))} */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        // width: "100%",
        // flex: 1,
        // height: win.height / 2.8,
        backgroundColor: "white",

        borderRadius: 12,
        // marginVertical: win.height / 60,
        marginHorizontal: win.width / 30,
        marginTop: win.height / 20,
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
    topWrap: {
        height: win.height / 8,
        // borderWidth: 1,
        // borderColor: "#CDCDCD",

        justifyContent: "space-evenly",
        alignItems: "center",
    },
    heading: {
        fontWeight: "bold",
        fontSize: win.height / 40,
        color: "#0F3749",
    },
    subheading: {
        fontSize: win.height / 65,
        color: "#0F3749",
    },
    listWrap: { flexDirection: "row", height: win.height / 10, justifyContent: "space-between" },
    listWrapInner: {
        flexDirection: "row",
        width: win.width / 2.4,
        // backgroundColor: "pink",
        // borderWidth: 1,
        alignItems: "center",
        justifyContent: "space-around",
    },
    bottomWrap: {
        // backgroundColor: "lightgreen",
        height: win.height / 1.5,

        // flex: 1,
        overflow: "hidden",
        justifyContent: "space-evenly",
    },
    listDealers: {
        textAlign: "center",
        color: "#1F9DD9",
        fontSize: win.height / 60,
    },
    dealerName: {
        fontSize: win.height / 70,
        color: "#0F3749",
    },
    dealerPrice: {
        fontSize: win.height / 50,
        color: "#0F3749",
    },
    viewMap: {
        fontSize: win.height / 70,
        color: "#1F9DD9",
        fontWeight: "bold",
    },
    viewChat: {
        fontSize: win.height / 70,
        backgroundColor: "#1F9DD9",
        color: "white",
        paddingHorizontal: win.width / 22,
        alignItems: "center",
        borderRadius: win.width / 5,
        paddingVertical: win.height / 130,
    },
});

export default AllOfferScreen;
