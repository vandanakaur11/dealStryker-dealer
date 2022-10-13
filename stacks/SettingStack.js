import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingScreen from "../screens/SettingScreen";
import EditProfile from "../screens/EditProfileScreen";
import ChangePassword from "../screens/ChangePassword";
import LanguageScreen from "../screens/LanguageScreen";
import TermsNcondition from "../screens/TermsNcondition";
import NotificationScreen from "../screens/NotificationScreen";
import ManageUserScreen from "../screens/ManageUserScreen";
import AddMemberScreen from "../screens/AddMemberScreen"

const Stack = createNativeStackNavigator();
const SettingStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "#0F3749",
                    },
                    headerTintColor: "white",
                    headerTitle: (props) => (
                        <View style={styles.headerWrap}>
                            <Text style={styles.brandHeading}>Settings</Text>
                        </View>
                    ),
                }}
                name="SettingScreen"
                component={SettingScreen}
            ></Stack.Screen>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "#0F3749",
                    },
                    headerTintColor: "white",
                    headerTitle: (props) => (
                        <View style={styles.headerWrap}>
                            <Text style={styles.brandHeading}>Settings</Text>
                        </View>
                    ),
                }}
                name="EditProfile"
                component={EditProfile}
            ></Stack.Screen>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "#0F3749",
                    },
                    headerTintColor: "white",
                    headerTitle: (props) => (
                        <View style={styles.headerWrap}>
                            <Text style={styles.brandHeading}>Settings</Text>
                        </View>
                    ),
                }}
                name="ChangePassword"
                component={ChangePassword}
            ></Stack.Screen>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "#0F3749",
                    },
                    headerTintColor: "white",
                    headerTitle: (props) => (
                        <View style={styles.headerWrap}>
                            <Text style={styles.brandHeading}>Settings</Text>
                        </View>
                    ),
                }}
                name="LanguageScreen"
                component={LanguageScreen}
            ></Stack.Screen>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "#0F3749",
                    },
                    headerTintColor: "white",
                    headerTitle: (props) => (
                        <View style={styles.headerWrap}>
                            <Text style={styles.brandHeading}>Settings</Text>
                        </View>
                    ),
                }}
                name="TermsNcondition"
                component={TermsNcondition}
            ></Stack.Screen>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "#0F3749",
                    },
                    headerTintColor: "white",
                    headerTitle: (props) => (
                        <View style={styles.headerWrap}>
                            <Text style={styles.brandHeading}>App Notification</Text>
                        </View>
                    ),
                }}
                name="NotificationScreen"
                component={NotificationScreen}
            ></Stack.Screen>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "#0F3749",
                    },
                    headerTintColor: "white",
                    headerTitle: (props) => (
                        <View style={styles.headerWrap}>
                            <Text style={styles.brandHeading}>Settings</Text>
                        </View>
                    ),
                }}
                name="ManageUserScreen"
                component={ManageUserScreen}
            ></Stack.Screen>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "#0F3749",
                    },
                    headerTintColor: "white",
                    headerTitle: (props) => (
                        <View style={styles.headerWrap}>
                            <Text style={styles.brandHeading}>Settings</Text>
                        </View>
                    ),
                }}
                name="AddMemberScreen"
                component={AddMemberScreen}
            ></Stack.Screen>
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    headerWrap: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "crimson",
        width: "75%",
    },
    brandHeading: {
        fontWeight: "bold",
        color: "white",
        fontSize: 20,
    },
});

export default SettingStack;
