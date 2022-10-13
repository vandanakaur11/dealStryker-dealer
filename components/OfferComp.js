import * as React from "react";
import { View, Text, StyleSheet, Dimensions, Pressable, FlatList, Image, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import avatarImg from "../images/avatarImg.png";
import { MaterialIcons } from '@expo/vector-icons'; 


const win = Dimensions.get("window");
const DATA = [
    { name: "User Name", price: "$90,000", id: "01",model:"Toyota Corolla Hybrid" },
    // { name: "Dealer Name", price: "$15,000", id: "02" },
];
function OfferComp({ navigation, check }) {
    return (
        <View style={styles.main}>
            {/* <View style={styles.topWrap}>
                <Text style={styles.heading}>{item.name}</Text>
                <Text style={styles.subheading}>{item.subName}</Text>
                <Text style={styles.subheading}>{item.year}</Text>
            </View> */}
            <Pressable style={styles.bottomWrap} onPress={()=>navigation.navigate("MakeOfferStack")}>
                {DATA?.map((item) => (
                    <View style={styles.listWrap} key={item.id}>
                        <View style={styles.listWrapInner}>
                            <Image source={avatarImg}  />
                            <View style={styles.info}>
                                <Text style={styles.dealerName}>{item.name}</Text>
                                <Text style={styles.dealerModel}>{item.model}</Text>
                                {check.offer==="make" ?<View style={styles.mkBtn}><Text style={styles.mkText}>Make Offer</Text></View>:
                                <Text style={styles.dealerPrice}>{item.price}</Text>}
                            </View>
                        </View>
                        <View style={styles.listWrapInnerRight}>
                            {/* <Pressable onPress={() => navigation.navigate("MapStack")}>
                                <Text style={styles.viewMap}>View Map</Text>
                            </Pressable>
                            <View>
                                <Text style={styles.viewChat} onPress={() => navigation.navigate("MessageStack")}>
                                    Chat
                                </Text>
                            </View> */}
                            <Pressable>
                           <MaterialIcons name="keyboard-arrow-right" size={win.width/16} color="#0F3749" />
                           </Pressable>
                        </View>
                    </View>
                ))}
                {/* <Pressable onPress={() => navigation.navigate("OfferStack", { item: item })}>
                    <Text style={styles.listDealers}>View All Dealers</Text>
                </Pressable> */}
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        width: "100%",
        justifyContent:"center",
        // flex: 1,
        height: win.height / 7,
        backgroundColor: "white",

        borderRadius: 12,
        marginVertical: win.height / 70,
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
        height: win.height / 10,
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
    listWrap: { flexDirection: "row", height: win.height / 10, justifyContent: "space-between"},
    listWrapInner: {
        flexDirection: "row",
        width: win.width / 1.3,
        // backgroundColor: "pink",
        // borderWidth: 1,
        alignItems: "center",
        paddingHorizontal:win.width/40
        // justifyContent: "space-evenly",
    },
    info:{
      marginLeft:win.width/50
    },
    listWrapInnerRight:{
      justifyContent:"center",
    //   backgroundColor:"yellow",
      marginRight:win.width/20
    },
    bottomWrap: {
        // backgroundColor: "lightgreen",
        height: win.height / 3.9,

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
        fontSize: win.height / 50,
        color: "#0F3749",
    },
    dealerPrice: {
        fontSize: win.height / 40,
        color: "#0F3749",
        fontWeight:"bold"
    },
    dealerModel:{
        fontSize: win.height / 55,
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
        paddingVertical: win.height / 120,
    },
    mkBtn:{
        backgroundColor:"rgba(31, 157, 217, 1)",
        width:win.width/5,
        height:win.height/26,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:win.width/70,
        marginVertical:win.height/100
        
    },
    mkText:{
        fontSize:win.height/60,
        color:"white",
        
    }
    
});

export default OfferComp;
