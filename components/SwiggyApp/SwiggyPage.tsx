import React from "react";
import { View,Text, TouchableOpacity,Image, ImageBackground, ScrollView } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';
import { FaLocationArrow } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdContact } from "react-icons/io";

export default function SwiggyPage(){
    return(
        <View style={{ backgroundColor: "#f0f0f0", flex: 1,padding:10 }}>
            <ScrollView> 
            <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                <View >
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <FaLocationArrow />
                        <Text style={{fontSize:20,fontWeight:"bold"}}>Cadenza</Text>
                        <IoIosArrowDown style={{height:20,width:20}}/> 
                    </View>
                    <Text>1980 calypgo cadenzo kudu....</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Text style={{fontSize:35,fontWeight:"bold"}}>ONE</Text>
                    <IoMdContact  style={{height:50,width:50}}/>
                </View>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:10}}>
                <View>
                    <Text>InsanelyGood</Text>
                    <Text>Freshly Hand Made Pannner and more</Text>
                    <TouchableOpacity style={{ backgroundColor: 'green', padding: 10, alignItems: 'center', borderRadius: 5,width:"40%" }}>
                        <Text style={{ color: 'white' }}>Shop Now</Text>
                    </TouchableOpacity>
                </View>
                <Image source={require("../../assets/Malai-Panner.png")} style={{height:80,width:110}}/>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",flex:1}}>
                <ImageBackground source={require("../../assets/biryani-panner.png")} style={{height:"100%",width:150,backgroundColor:"white",padding:10,borderRadius:20}}>
                        <Text>Food Delivery</Text>
                        <Text>ONE Food Fiesta</Text>
                        <Text>Up to 60% OFF + Free Del</Text>   
                </ImageBackground>
                <View style={{justifyContent:"space-between",flex:1,marginLeft:10}}>
                    <ImageBackground source={require("../../assets/instamart3.png")} style={{height:280,width:200,backgroundColor:"white",padding:10,borderRadius:20,marginBottom:10}}>
                        <View>
                            <Text>Instamart</Text>
                            <Text>Instant Grocery</Text>
                            <Text>Free Delivery</Text>
                        </View>
                    </ImageBackground>
                    <View style={{justifyContent:"space-between",flexDirection:"row",alignItems:"center",backgroundColor:"white",borderRadius:10,padding:10}}>
                         <View>
                            <Text>GENIE</Text>
                            <Text>PickUp & Drop</Text>
                         </View>
                         <Image source={require("../../assets/genie.png")} style={{height:80,width:110}}/>
                    </View>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}