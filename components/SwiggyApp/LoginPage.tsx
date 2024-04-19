import { Text, View, StyleSheet, Image, TouchableOpacity,appVersion } from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons';
import DeviceInfo from 'react-native-device-info';


 



export default function Login() {
    return (
        <View style={styles.mainContainer}>
            <Image source={require("../../assets/Foodapp.png")} style={{height:180,width:370}}/>
            <View style={styles.textContainer}>
                <Text style={{ fontWeight: "bold" }}>ACCOUNT</Text>
                <Text style={{ color: "gray", fontSize: 12 }}>Login/Create account to manage orders</Text>
            </View>
            <View style={styles.loginButton}>
                <TouchableOpacity>
                    <Text style={{ color: "white", textAlign: "center", justifyContent: "center", alignItems: "center" }}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.termsContainer}>
                <Text style={{color:"gray",fontSize:12}}>By clicking,I accept the</Text>
                 <TouchableOpacity style={styles.Terms}>Terms&Conditions </TouchableOpacity> 
                 <Text style={{color:"gray",fontSize:12}}>&</Text>
                 <TouchableOpacity style={styles.privacy}>Privacy Policy</TouchableOpacity>
               
            </View>
            <View style={{borderBottomWidth:2,top:90,borderColor:"black"}}></View>
            <View style={styles.Icons}>
                
                <Text>Offers</Text>
                <Icon  name="chevron-right" size={20} color="gray" />
                </View>
                <View style={{borderBottomWidth:1, borderStyle:"dotted",top:130}}></View>
                <View style={styles.Feedback}>
                <Text> Send Feedback</Text>
                <Icon  name="chevron-right" size={20} color="gray" />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',top:30 }}>
      
          <Text>App Version(5.0.4(7)).</Text>

      
         <Text style={{ position: 'absolute', bottom: 10 }}>appVersion: {appVersion}</Text>
    </View>
        </View>
    );
}


const styles = StyleSheet.create({
    mainContainer: {
         
        flex:1,
        padding:10,
    },
    textContainer: {
        display: "flex",
        top: 30,
        gap: 5,
        left: 15,

    },
    loginButton: {
        top: 50,
        backgroundColor: "orange",
        height: 50,
         
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
         
    },
    termsContainer:{
        top:60,
        display:"flex",
        flexDirection:"row",
        gap:5,
    },
    Terms:{
        fontWeight:"bold",
        fontSize:12,
    },
    privacy:{
        fontWeight:"bold",
        fontSize:12,
    },
    Icons:{
        top:120,
        display:"flex",
        flexDirection:"row",
        gap:270
    },
    Feedback:{
        display:"flex",
        flexDirection:"row",
        top:150,
        gap:210
    }
   

    
});