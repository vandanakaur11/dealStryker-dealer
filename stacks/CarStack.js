import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CarsScreen from "../screens/CarsScreen";
import CarScreen from "../screens/CarScreen";
import volvoIcon from "../images/volvoIcon.png";

const Stack = createNativeStackNavigator();

function CarStack() {
    return (
        <Stack.Navigator
            screenOptions={
                {
                    // headerShown: false,
                }
            }
        >
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "#0F3749",
                    },
                    headerTintColor: "white",
                    headerTitle: (props) => (
                        <View style={styles.headerWrap}>
                            {/* <Image source={volvoIcon} /> */}
                            <Text style={styles.brandHeading}>Volvo</Text>
                        </View>
                    ),
                }}
                name="CarsScreen"
                component={CarsScreen}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "#0F3749",
                    },
                    headerTintColor: "white",
                    headerTitle: (props) => (
                        <View style={styles.headerWrap}>
                            {/* <Image source={volvoIcon} /> */}
                            {/* <Text style={styles.brandHeading}>Car Detail</Text> */}
                        </View>
                    ),
                }}
                name="CarScreen"
                component={CarScreen}
            />

            {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
        </Stack.Navigator>
    );
}

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
export default CarStack;