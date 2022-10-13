import * as React from "react";
import { View, Text, Dimensions, FlatList, StyleSheet, Image, Pressable,TouchableOpacity,TouchableWithoutFeedback  } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import avatarImg2 from "../images/avatarImg2.png";
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 



const win = Dimensions.get("window");
const DATA = [
    { name: "Buyers Name", message: "Toyota corolla Hybrid Metallic red 2021", id: "01", time: "3:44" },
    { name: "Buyers Name", message: "Toyota corolla Hybrid Metallic red 2021", id: "02", time: "10:12" },
    { name: "Buyers Name", message: "Toyota corolla Hybrid Metallic red 2021", id: "03", time: "11:44" },
    { name: "Buyers Name", message: "Toyota corolla Hybrid Metallic red 2021", id: "04", time: "3:44" },
    { name: "Buyers Name", message: "Toyota corolla Hybrid Metallic red 2021", id: "05", time: "3:44" },
    { name: "Buyers Name", message: "Toyota corolla Hybrid Metallic red 2021", id: "06", time: "9:20" },
    { name: "Buyers Name", message: "Toyota corolla Hybrid Metallic red 2021", id: "07", time: "3:44" },
    { name: "Buyers Name", message: "Toyota corolla Hybrid Metallic red 2021", id: "08", time: "3:44" },
    { name: "Buyers Name", message: "Toyota corolla Hybrid Metallic red 2021", id: "09", time: "3:44" },
];
function MessagesScreen({ navigation }) {
    const [showDelete,setShowDelete] = React.useState(false)
    const [selected,setSelected] = React.useState("")
    const handlerLongClick = (val) => {
        setShowDelete(true)
        setSelected(val)
      };
      const handlerNormalCLick=()=>{
          if(!showDelete){
            navigation.navigate("PrivateMsgStack")

          }
      }
    const renderItem = ({ item }) => (
        // <TouchableOpacity onLongPress={handlerLongClick} > 
        <Pressable style={styles.userWrap} onPress={handlerNormalCLick} onLongPress={()=>handlerLongClick(item.id)}>
           <View style={selected===item.id && showDelete? styles.chosedMsg:styles.otherMsg}>
            <View style={styles.userimgWrap}>
                <Image source={avatarImg2} style={styles.userimgPic} />
            </View>
            <View style={styles.userinfoWrap}>
                <Text style={styles.dealerName}>{item.name}</Text>
                <Text style={styles.dealerMsg}>{item.message}</Text>
            </View>
            <View style={styles.usertimeWrap}>
                <Text style={styles.msgTime}>{item.time}</Text>
            </View>
            </View>
        </Pressable>
        // </TouchableOpacity>
    );
    return (
        <View style={styles.main}>
            <View style={styles.titleWrap}>
                <Text style={styles.heading}>Messages</Text>
               {showDelete ? <View
               style={{marginHorizontal: win.width / 25,flexDirection:"row",justifyContent:"space-between",width:win.width/6}}
               ><AntDesign name="delete" size={win.height/30} color="#0F3749" />
               <Pressable onPress={()=>setShowDelete(false)}>
               <MaterialIcons name="cancel" size={win.height/30} color="#0F3749" />
               </Pressable>
               </View>:
                <View></View>}
            </View>
            <View>
                <FlatList numColumns={1} data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        paddingBottom: win.height / 13,
        // backgroundColor: "darkcyan",
    },
    titleWrap: {
        height: win.height / 14,
        // backgroundColor: "blue",
        alignItems: "center",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    heading: {
        color: "#0F3749",
        fontSize: win.height / 30,
        marginHorizontal: win.width / 25,
    },
    userWrap: {
        flexDirection: "row",
        justifyContent: "space-around",
        // backgroundColor: "crimson",
        borderBottomWidth: 1,
        borderColor: "lightgray",
        marginVertical: win.height / 90,
        alignItems: "center",
        paddingVertical: win.height / 60,
    },
    userimgWrap: {
        width: win.width / 6.5,
        // height: win.width / 6.5,
        alignItems: "center",
    },
    userinfoWrap: {
        width: win.width / 1.5,
        // backgroundColor: "green",
    },
    usertimeWrap: {
        width: win.width / 7,

        alignItems: "center",
    },
    userimgPic: {
        width: win.width / 8,
        height: win.width / 8,
    },
    dealerName: {
        fontSize: win.height / 50,
        fontWeight: "bold",
        color: "#0F3749",
    },
    dealerMsg: {
        fontSize: win.height / 60,
        color: "#BCBCBC",
    },
    msgTime: {
        color: "#0099FF",
        fontSize: win.width / 30,
    },
    chosedMsg:{
        flexDirection:"row",opacity:0.2
    },
    otherMsg:{
        flexDirection:"row"
    }
});
export default MessagesScreen;
