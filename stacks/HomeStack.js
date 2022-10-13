import * as React from "react";
import { View, Text, Image, StyleSheet,Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
// import LoginScreen from "./screens/LoginScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import OffersScreen from "../screens/OffersScreen";
import MessagesScreen from "../screens/MessageScreen";
import NotificationScreen from "../screens/NotificationScreen";
// import motorIcon from "../images/motorIcon.png";
// import offerIcon from "../images/offerIcon.png";
// import messageIcon from "../images/messageIcon.png";
// import bellIcon from "../images/bellIcon.png";
import smallLogo from "../images/smallLogo.png";
// import settingIcon from "../images/settingIcon.png";
// import plusIcon from "../images/plusIcon.png";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const StackLogin = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const win = Dimensions.get("window");

function HomeStack({ navigation }) {
    return (
        <Tab.Navigator>
            {/* <Tab.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "#0F3749",
                    },
                    headerTitle: (props) => (
                        <View style={styles.headerWrap}>
                            <AntDesign name="plus" size={24} color="white" />
                            <Image source={smallLogo} />
                            <Feather name="settings" size={24} color="white" onPress={() => navigation.navigate("Settings")} />
                        </View>
                    ),
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons name="car-sport" size={28} color={focused ? "#0F3749" : "#CDCDCD"} />
                    ),
                    tabBarLabel: ({ focused, color, size }) => (
                        <Text style={{ color: focused ? "#0F3749" : color, fontSize: 10 }}>Home</Text>
                    ),
                }}
                name="Home"
                component={HomeScreen}
            /> */}
            <Tab.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "#0F3749",
                    },
                    headerTitle: (props) => (
                        <View style={styles.headerWrap}>
                            {/* <AntDesign name="plus" size={24} color="white" onPress={()=>navigation.navigate("MainScreen")}/> */}
                            <View style={{width:win.width/15}}></View>
                            <Image source={smallLogo} />
                            <Feather name="settings" size={24} color="white" onPress={() => navigation.navigate("Settings")} />
                        </View>
                    ),
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialIcons name="local-offer" size={28} color={focused ? "#0F3749" : "#CDCDCD"} />
                    ),
                    tabBarLabel: ({ focused, color, size }) => (
                        <Text style={{ color: focused ? "#0F3749" : color, fontSize: 10 }}>Offers</Text>
                    ),
                }}
                name="Offers"
                component={OffersScreen}
            />
            <Tab.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "#0F3749",
                    },
                    headerTitle: (props) => (
                        <View style={styles.headerWrap}>
                            {/* <AntDesign name="plus" size={24} color="white" /> */}
                            <View style={{width:win.width/15}}></View>
                            <Image source={smallLogo} />
                            <Feather name="settings" size={24} color="white" onPress={() => navigation.navigate("Settings")} />
                        </View>
                    ),
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialCommunityIcons name="android-messages" size={28} color={focused ? "#0F3749" : "#CDCDCD"} />
                    ),
                    tabBarLabel: ({ focused, color, size }) => (
                        <Text style={{ color: focused ? "#0F3749" : color, fontSize: 10 }}>Messages</Text>
                    ),
                }}
                name="Messages"
                component={MessagesScreen}
            />
            {/* <Tab.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "#0F3749",
                    },
                    headerTitle: (props) => (
                        <View style={styles.headerWrap}>
                            <AntDesign name="plus" size={24} color="white" />
                            <Image source={smallLogo} />
                            <Feather name="settings" size={24} color="white" onPress={() => navigation.navigate("Settings")} />
                        </View>
                    ),
                    tabBarIcon: ({ focused, color, size }) => <Feather name="bell" size={28} color={focused ? "#0F3749" : "#CDCDCD"} />,
                    tabBarLabel: ({ focused, color, size }) => (
                        <Text style={{ color: focused ? "#0F3749" : color, fontSize: 10 }}>Notifications</Text>
                    ),
                }}
                name="Notification"
                component={NotificationScreen}
            /> */}
            {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    headerWrap: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
    },
});

export default HomeStack;