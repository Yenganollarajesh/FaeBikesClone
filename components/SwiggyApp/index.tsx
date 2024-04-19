// import React from "react";
// import { View, Text } from "react-native";
// // import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { SiSwiggy } from "react-icons/si";
 

// export default function SwiggyApp() {
//     return (
//         <View>
//             <Text style={{ fontSize: 50 }}>Rajesh</Text>
//             {/* <Icon name="food-fork-drink" size={30} color="#900" /> */}
//             <Icon name="rocket" size={30} color="#900" />
//             <SiSwiggy />
             
//         </View>
//     )

// }

import React, { useState } from "react";
import { View,Text,Image, TouchableOpacity, ScrollView, TextInput, } from "react-native";
 
import { PiBowlFood } from "react-icons/pi";

 
import { SiSwiggy } from "react-icons/si";
import { IoFastFood } from "react-icons/io5";
import { SiDinersclub } from "react-icons/si";
import { GoCreditCard } from "react-icons/go";
import SwiggyPage from "./SwiggyPage";
 

export default function SwiggyApp(){
    const [imagePressed, setImagePressed] = useState([true, false, false, false, false]);

    const handleImagePress = (index) => {
        const newImagePressed = Array(5).fill(false);  
        newImagePressed[index] = true;
        setImagePressed(newImagePressed);
    };

    return(
        <View style={{flex:1,justifyContent:"flex-end"}}>

            {imagePressed[0] && (
             <SwiggyPage/>
            )}
            {imagePressed[1] && (
             <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
             <Text>FOOD PAGE</Text>
          </View>
            )}
            {imagePressed[2] && (
             <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text>INSTAMART PAGE</Text>
             </View>
            )}
            {imagePressed[3] && (
             <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text>DINEOUT PAGE</Text>
             </View>
            )}
            {imagePressed[4] && (
             <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text>CREDIT PAGE</Text>
             </View>
            )}
            <View style={{ backgroundColor: "#2D5795", flexDirection: "row", justifyContent: "space-around", padding: 20, borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
                <TouchableOpacity onPress={() => handleImagePress(0)} style={{ alignItems: "center" }}>
                <SiSwiggy style={{ fontSize:25,color: imagePressed[0] ? "white" : "#7AA0D8" }}/>
                    <Text style={{ color: imagePressed[0] ? "white" : "#7AA0D8"  }}>Swiggy</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleImagePress(1)} style={{ alignItems: "center" }}>
                <IoFastFood  style={{ fontSize:25,color: imagePressed[1] ? "white" : "#7AA0D8" }}/>
                    <Text style={{ color: imagePressed[1] ? "white" : "#7AA0D8" }}>Food</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleImagePress(2)} style={{ alignItems: "center" }}>
                <PiBowlFood style={{ fontSize:25,color: imagePressed[2] ? "white" : "#7AA0D8" }}/>
                    <Text style={{ color: imagePressed[2] ? "white" : "#7AA0D8"  }}>Instamart</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleImagePress(3)} style={{ alignItems: "center" }}>
                <SiDinersclub style={{ fontSize:25,color: imagePressed[3] ? "white" : "#7AA0D8" }}/>
                    <Text style={{ color: imagePressed[3] ? "white" : "#7AA0D8" }}>Dineout</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleImagePress(4)} style={{ alignItems: "center" }}>
                <GoCreditCard style={{ fontSize:25,color: imagePressed[2] ? "white" : "#7AA0D8" }}/>
                    <Text style={{ color: imagePressed[4] ? "white" : "#7AA0D8"  }}>Credit Card</Text>
                </TouchableOpacity>

            </View>      
        </View>
    )
}   

 

  

 