import * as React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const win = Dimensions.get("window");
function NotificationComp({ navigation, item }) {
    return (
        <GestureHandlerRootView>
            <Swipeable
                renderRightActions={() => (
                    <View
                        style={{
                            width: 70,
                            backgroundColor: "#EA2626",
                            // height: 70,
                            marginVertical: win.height / 200,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <AntDesign name="delete" size={win.height / 30} color="white" />
                    </View>
                )}
            >
                <View style={styles.main}>
                    {item.name === "Dealer Name" && (
                        <View style={styles.forNotify}>
                            <View style={styles.leftWrap}>
                                <Image source={item.image} style={styles.imgWrap} />
                            </View>
                            <View style={styles.rightWrap}>
                                <Text style={styles.nameText}>
                                    {item.name}
                                    <Text style={{ fontWeight: "normal" }}> send you a message</Text>
                                </Text>
                                <Text style={styles.timeText}>{item.text}</Text>
                            </View>
                        </View>
                    )}
                    {item.name === "Promotion offers" && (
                        <View style={styles.forPromote}>
                            <View style={styles.leftWrap}>
                                <Image source={item.image} style={styles.imgWrap} />
                            </View>
                            <View style={styles.rightWrap}>
                                <Text style={styles.nameText}>{item.name}</Text>
                                <Text style={styles.longText}>{item.text}</Text>
                                <Text style={styles.timeText}>{item.time}</Text>
                            </View>
                        </View>
                    )}
                </View>
            </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    main: {
        width: "100%",

        backgroundColor: "white",
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
        marginVertical: win.height / 200,
    },
    forNotify: {
        flexDirection: "row",
        paddingVertical: win.height / 70,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    forPromote: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: win.height / 70,
        justifyContent: "space-evenly",
    },
    imgWrap: {
        width: win.width / 7,
        height: win.width / 7,
    },
    nameText: {
        fontSize: win.height / 60,
        fontWeight: "bold",
        color: "#0F3749",
    },
    nameText: {
        fontSize: win.height / 60,
        fontWeight: "bold",
        color: "#0F3749",
    },
    timeText: {
        color: "#CDCDCD",
        fontSize: win.height / 60,
    },
    longText: {
        color: "#CDCDCD",
        fontSize: win.height / 65,
    },
    leftWrap: {
        width: win.width / 5,

        alignItems: "center",
    },
    rightWrap: {
        width: win.width / 1.4,
    },
});
export default NotificationComp;
