import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingScreen from "../screens/SettingScreen";
import EditProfile from "../screens/EditProfileScreen";
import ChangePassword from "../screens/ChangePassword";
import LanguageScreen from "../screens/LanguageScreen";
import TermsNcondition from "../screens/TermsNcondition";
import AllOfferScreen from "../screens/AllOfferScreen";
import ChatMessageScreen from "../screens/ChatMessageScreen";
import MakeOfferScreen from "../screens/MakeOfferScreen";

const Stack = createNativeStackNavigator();
const MakeOfferStack = ({ navigation }) => {
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
                            <Text style={styles.brandHeading}>Offer</Text>
                        </View>
                    ),
                }}
                name="MakeOfferScreen"
                component={MakeOfferScreen}
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

export default MakeOfferStack;
