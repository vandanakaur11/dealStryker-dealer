import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import SplashScreen from "./screens/SplashScreen";
// import LoginScreen from "./screens/LoginScreen";
import AuthStack from "./stacks/AuthStack";
import HomeStack from "./stacks/HomeStack";

const Stack = createNativeStackNavigator();
const StackLogin = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="authstack" component={AuthStack} />
                <Stack.Screen name="homestack" component={HomeStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
