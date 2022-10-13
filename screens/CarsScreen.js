import * as React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, Pressable, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CarOptionComp from "../components/CarOptionComp";
import car1 from "../images/car1.png";
import car2 from "../images/car2.png";
const win = Dimensions.get("window");

const DATA = [
    {
        id: "001",
        car: car1,
    },
    {
        id: "002",
        car: car2,
    },
    {
        id: "003",
        car: car1,
    },
];

function CarsScreen({ navigation }) {
    const renderItem = ({ item }) => (
        <Pressable style={styles.carCard}>
            <CarOptionComp item={item} navigation={navigation} />
        </Pressable>
    );
    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
                <FlatList numColumns={1} data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBFBFB",
        // height: "100%",
        paddingVertical: "5%",
    },
    wrap: {
        // backgroundColor: "coral",
        // display: "flex",
        // flex: 1,
        // flexDirection: "column",
        // height: "100%",
    },
    carCard: {},
});
export default CarsScreen;