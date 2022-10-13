import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import avatarImg4 from "../images/avatarImg4.png";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { CheckBox, Icon } from "react-native-elements";



let win = Dimensions.get("window");
function AddMemberScreen() {
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");

    const [text3, setText3] = useState("");
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);

    function handleCheckbox(val) {
        if(val==="check1"){
            setCheck1(true);
            setCheck2(false)
            setCheck3(false)
        }
        if(val==="check2"){
            setCheck1(false);
            setCheck2(true)
            setCheck3(false)
        }
        if(val==="check3"){
            setCheck1(false);
            setCheck2(false)
            setCheck3(true)
        }
       }

    return (
        <View style={styles.container}>
            <View style={styles.headingWrap}>
                {/* <Image style={styles.imgIcon}/> */}
                <AntDesign name="adduser" size={win.height / 25} color="#0F3749" />
               
                <Text style={styles.headingText}>Add Team Member</Text>
            </View>
            
            <View style={styles.formWrap}>
               <View style={styles.innerWrap}>
                  <View style={styles.innInner}>
                      <Text style={styles.nameHeading}>Name</Text>
                     
                      <TextInput placeholder="Enter User Name" style={styles.inputStyles}/>
                  </View>
                  <View style={styles.innInner}>
                      <Text style={styles.nameHeading}>Email</Text>
                      
                      <TextInput placeholder="Enter Email" style={styles.inputStyles}/>
                  </View>
                  <View>
                      <Text style={styles.nameHeading}>Member Role</Text>
                      
                  </View>
                  <View style={styles.checkWrap}>
                      <View style={styles.roleWrap}>
                      <Text style={styles.roleText}>Manager</Text>
                      </View>
                      <View style={styles.checkBoxWrap}>
                      <CheckBox
                                title=""
                                center
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"
                                textStyle={{ color: "gray", fontWeight: "normal", fontSize: win.width / 38 }}
                                containerStyle={{ borderWidth: 0, backgroundColor: "white" }}
                                
                                checked={check1}
                                onPress={() => handleCheckbox("check1")}
                            />
                            </View>
                  </View>
                  <View style={styles.checkWrap}>
                      <View style={styles.roleWrap}>
                      <Text style={styles.roleText}>Sales</Text>
                      </View>
                      <View style={styles.checkBoxWrap}>
                      <CheckBox
                                title=""
                                center
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"
                                textStyle={{ color: "gray", fontWeight: "normal", fontSize: win.width / 38 }}
                                containerStyle={{ borderWidth: 0, backgroundColor: "white" }}
                                
                                checked={check2}
                                onPress={() => handleCheckbox("check2")}
                            />
                            </View>
                  </View>
                  <View style={styles.checkWrap}>
                      <View style={styles.roleWrap}>
                      <Text style={styles.roleText}>Finance</Text>
                      </View>
                      <View style={styles.checkBoxWrap} >
                      <CheckBox
                                title=""
                                center
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"
                                textStyle={{ color: "gray", fontWeight: "normal", fontSize: win.width / 38 }}
                                containerStyle={{ borderWidth: 0, backgroundColor: "white" }}
                                
                                checked={check3}
                                onPress={() => handleCheckbox("check3")}
                            />
                            </View>
                  </View>
               </View>
                
                
                <View style={styles.btn}>
                    <Text style={styles.btnText}>Add Team Member</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: win.width / 25,
    },
    headingWrap: {
        width: "100%",
        height: win.height / 10,
        //   backgroundColor:'pink',
        alignItems: "center",
        paddingHorizontal: win.width / 50,
        color: "blue",
        flexDirection: "row",
    },
    headingText: {
        fontSize: win.height / 35,
        color: "#0F3749",
        marginLeft: win.width / 50,
    },
    formWrap: {
        //   height:win.height/1.7,
        backgroundColor: "white",
        width: "100%",
        marginTop: win.height / 60,
        paddingHorizontal: win.width / 20,
        paddingVertical: win.height / 50,
        width: "100%",
        borderRadius: 10,
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
        justifyContent:"space-between"
    },
    
    
    
    btn: {
        backgroundColor: "#1F9DD9",
        height: win.height / 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginTop:win.height/60
    },
    btnText: {
        color: "white",
        fontSize: win.height / 50,
    },
    nameHeading: {
        fontSize: win.height / 55,
        color: "#0F3749",
    },
   
    innerWrap:{
    //    backgroundColor:"lightgray"
    },
    innInner:{
        marginVertical:win.height/50,
        // backgroundColor:"lightgray",
        // borderWidth:1,
        
    },
    nameHeading:{
        fontSize:win.height/45,
        color:"#0F3749",
        marginVertical:win.width/80
    },
    inputStyles:{
        borderWidth:1,
        height:win.height/16,
        borderRadius:10,
        borderColor:'lightgray',
        paddingLeft:win.width/30
    },
    checkWrap:{
        // backgroundColor:"red",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        height:win.height/12
    },
    checkBoxWrap:{
        width:win.width/6,
        justifyContent:'flex-end',
        // backgroundColor:"green",
        alignItems:"center",
       
        
    },
    roleWrap:{
        width:win.width/5
    },
    roleText:{
        fontSize:win.height/50,
        color:"#0F3749"
    }
   
    
});
export default AddMemberScreen;
