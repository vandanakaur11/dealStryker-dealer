import React,{useState} from "react";
import { View, Text, Image, StyleSheet, ScrollView, Pressable, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import car1 from "../images/car1.png";
import car2 from "../images/car2.png"
import leftArr from "../images/leftArr.png";
import rightArr from "../images/rightArr.png";

const win = Dimensions.get("window");


const colorData = [{color:"red",id:"01"},{color:"gray",id:"02"},{color:"lightgray",id:"03"},{color:"#938E88",id:"04"},{color:"#000000",id:"05"},{color:"gray",id:"06"},{color:"lightgray",id:"07"},{color:"#DADADA",id:"08"},{color:"red",id:"09"}]
const yearData=["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2021"]
const modelData=["T5 4dr Wagon AWD","T4 3dr Wagon SUV","T2 4dt Wagon EBR"]
function CarOptionComp({ navigation, item }) {
    const [carColor,setCarColor] = useState(car1)
    const [carModel,setCarModel] = useState(0)
    const [carYear,setCarYear] = useState(0)
  function handleCar(){
      if(item.car===carColor){
        setCarColor(car2)
      }
     else{
         setCarColor(car1)
     }
      
  }

  const handleYear=(val)=>{
      if(val==="add"){
          if(carYear == yearData.length){
             setCarYear(0)
          }
          else{
            setCarYear(carYear + 1)
          }
  
      }
      if(val==="minus"){
        if(carYear == 0){
            setCarYear(0)
         }
         else{
           setCarYear(carYear - 1)
         }
        
      }
  }
  
  const handleModel=(val)=>{
    if(val==="add"){
        if(carModel == modelData.length){
           setCarModel(0)
        }
        else{
            setCarModel(carModel + 1)
        }

    }
    if(val==="minus"){
        if(carModel == 0){
            setCarYear(0)
         }
         else{
            setCarModel(carModel - 1)
         }
        
      }
}
  
    return (
        <View style={styles.containerMain}>
            <View style={styles.container}>
                <Pressable
                    onPress={() => {navigation.navigate("CarScreen")}}
                >
                    <Image source={item.car === carColor?car1:car2} />
                </Pressable>
                <Text style={styles.brandName}>V60 Cross Country</Text>

                <View style={styles.optWrap1}>
                <Pressable  onPress={()=>handleYear('minus')} style={styles.arrowCont}>
                    <Image source={leftArr} />
                    </Pressable>
                    <Text style={styles.brandText}>{yearData[carYear]}</Text>
                    <Pressable  onPress={()=>handleYear('add')}  style={styles.arrowCont}>
                    <Image source={rightArr} />
                    </Pressable>
                </View>
                <View style={styles.optWrap2}>
                    <Pressable onPress={()=>handleModel("minus")} style={styles.arrowCont}>
                    <Image source={leftArr} />
                    </Pressable>
                 
                    <Text style={styles.brandText}>{modelData[carModel]}</Text>
                    <Pressable onPress={()=>handleModel("add")} style={styles.arrowCont}>
                    <Image source={rightArr} />
                    </Pressable>
                </View>
                <View style={styles.colorWrap}>
                    {colorData.map((data,i)=>(
                         <Pressable onPress={()=>handleCar()} key={data.id} style={{ width: win.width / 15,
                         height: win.width/ 15,
                         backgroundColor: data.color,
                         borderWidth: 1,
                         borderRadius: win.width / 2,}}>

                         </Pressable>
                    ))}
                    {/* <View style={styles.colorWrapInner}></View>
                    <View style={styles.colorWrapInner}></View>
                    <View style={styles.colorWrapInner}></View>
                    <View style={styles.colorWrapInner}></View>
                    <View style={styles.colorWrapInner}></View>
                    <View style={styles.colorWrapInner}></View>
                    <View style={styles.colorWrapInner}></View>
                    <View style={styles.colorWrapInner}></View>
                    <View style={styles.colorWrapInner}></View> */}
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    containerMain: {
        width: "100%",
        alignItems: "center",
        // height: "50%",
        // backgroundColor: "lightgray",
        justifyContent: "center",
        // flex: 1,
        paddingVertical: "10%",
    },
    container: {
        width: "90%",
        backgroundColor: "white",
        alignItems: "center",
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
        // height: "50%",
        // flex: 1,
        // backgroundColor: "lightgray",
    },
    optWrap1: {
        flexDirection: "row",
        width: "70%",
        justifyContent: "space-between",
        paddingVertical: "2.55%",
        borderBottomColor: "#CDCDCD",
        borderBottomWidth: 1,
        borderTopColor: "#CDCDCD",
        borderTopWidth: 1,
        alignItems: "center",
    },
    optWrap2: {
        flexDirection: "row",
        width: "70%",
        justifyContent: "space-between",
        paddingVertical: "2.5%",
        alignItems: "center",
    },
    brandName: {
        color: "#0F3749",
        fontWeight: "bold",
        fontSize: 16,
        paddingVertical: "2.5%",
    },
    brandText: {
        color: "#0F3749",
        fontWeight: "100",
        fontSize: 15,
        opacity: 0.5,
    },
    colorWrap: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        marginVertical: win.height / 50,
    },
    colorWrapInner: {
        // width: win.width / 15,
        // height: win.height / 30,
        // backgroundColor: "red",
        // borderWidth: 1,
        // borderRadius: win.width / 2,
    },
    arrowCont:{
        width:win.width/20,height:win.width/20,alignItems:"center",justifyContent:"center"
    }
});
export default CarOptionComp;