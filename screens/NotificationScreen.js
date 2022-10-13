import * as React from "react";
import { View, Text, StyleSheet, Dimensions, FlatList, Pressable, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotificationComp from "../components/NotificationComp";
import avatarImg2 from "../images/avatarImg2.png";
import avatarImg3 from "../images/avatarImg3.png";
import Swipeable from "react-native-gesture-handler/Swipeable";
// import { GestureHandler } from "expo";
// const { Swipeable } = GestureHandler;
import { GestureHandlerRootView } from "react-native-gesture-handler";

const DATA = [
    { name: "Dealer Name", text: "Today", id: "001", image: avatarImg2 },
    {
        name: "Promotion offers",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        id: "002",
        image: avatarImg3,
        time: "3:14pm",
    },
    { name: "Dealer Name", text: "Today", id: "003", image: avatarImg2 },
    {
        name: "Promotion offers",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        id: "004",
        image: avatarImg3,
        time: "3:14pm",
    },
    { name: "Dealer Name", text: "Today", id: "005", image: avatarImg2 },
    {
        name: "Promotion offers",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        id: "006",
        image: avatarImg3,
        time: "3:14pm",
    },
];
const win = Dimensions.get("window");
function NotificationScreen({ navigation }) {
    const renderItem = ({ item }) => (
        // <GestureHandlerRootView>
        //     <Swipeable
        //         renderRightActions={() => (
        //             <View
        //                 style={{
        //                     width: 70,
        //                     backgroundColor: "red",
        //                     height: 70,
        //                 }}
        //             ></View>
        //         )}
        //     >
        <Pressable>
            <GestureHandlerRootView>
            <NotificationComp item={item} />
            </GestureHandlerRootView>
        </Pressable>
        // </Swipeable>
        // </GestureHandlerRootView>
    );
    return (
        <View style={styles.main}>
            <View style={styles.heading}>
                <Text style={styles.headingText}>App Notification</Text>
            </View>
            <View style={styles.listWrap}>
                <FlatList numColumns={1} data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {},
    heading: {
        // backgroundColor: "red",
        height: win.height / 12,
        justifyContent: "center",
        paddingHorizontal: win.width / 30,
    },
    headingText: {
        fontSize: win.height / 35,
        color: "#0F3749",
    },
    listWrap: {
        marginHorizontal: win.width / 35,
        marginBottom: 110,
    },
});
export default NotificationScreen;
