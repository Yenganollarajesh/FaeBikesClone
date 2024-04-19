import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Instamart() {
    return (
        <View style={styles.maincontainer}>
            <View style={styles.Navbar}>
                <View style={styles.NineMin}>
                    <Text style={styles.Nine}>9</Text>
                    <Text style={styles.MINS}>MINS</Text>
                </View>
                <View style={styles.Address}>
                    <View style={styles.Delivery}>
                        <Text style={styles.DeliveryText} >Delivery to Salapuria sattva c...</Text>
                        <Icon name="down-arrow" size={20} color="black" />
                    </View>
                    <View >
                        <Text style={styles.Location}>Kudlu Main Rd, Muneshwara Nagar, Hosapala... </Text>
                    </View>
                </View>
                <View style={styles.Profile}>
                    <View>
                        <Icon name="person" size={40} color="white" />
                    </View>
                </View>
            </View>
            <View style={styles.TextInput}>
                <TextInput
                    style={styles.TextField}
                    placeholder="Search for panner"
                />
            </View>
            <View style={styles.ItemsList}>
                <View>
                    <View style={styles.ItemsContainer}>
                        <Image style={styles.Image} source={require('../assets/images/instamartimg.png')} />
                    </View>
                    <Text style={styles.Item_text}>Cooking<br />essential</Text>
                </View>

                <View>
                    <View style={styles.ItemsContainer}>
                        <Image style={styles.Image} source={require('../assets/images/instamartimg.png')} />
                    </View>
                    <Text style={styles.Item_text}>Home<br />Care</Text>
                </View>

                <View>
                    <View style={styles.ItemsContainer}>
                        <Image style={styles.Image} source={require('../assets/images/instamartimg.png')} />
                    </View>
                    <Text style={styles.Item_text}>Personal<br />Care</Text>
                </View>

                <View>
                    <View style={styles.ItemsContainer}>
                        <Image style={styles.Image} source={require('../assets/images/instamartimg.png')} />
                    </View>
                    <Text style={styles.Item_text}>Food<br />Court</Text>
                </View>
            </View>

            <View style={styles.Free1KG}>
                <View>
                    <Image style={styles.Free1kgSugarImage} source={require('../assets/images/instamartimg.png')} />
                </View>
                <Text style={styles.Kgsugartext}>FREE 1KG SUGAR</Text>
                <Text>on all orders above rs.999</Text>
            </View>

            <View style={styles.Bestprice}>
                <Icon name="arrow-right" size={30} color="black" />
                <Text style={styles.BestpriceText}>BEST PRICES, ALWAYS!</Text>
                <Icon name="arrow-left" size={30} color="black" />
            </View>

            <View style={styles.SavingAllContainers}>
                <View style={styles.SavingContainers}>
                    <Text style={styles.OffText}>25%OFF</Text>
                    <Text style={styles.SaveText}>SAVE RS.123</Text>
                    <Image style={styles.Savingimage} source={require('../assets/images/instamartimg.png')} />

                </View>

                <View style={styles.SavingContainers}>
                    <Text style={styles.OffText}>25%OFF</Text>
                    <Text style={styles.SaveText}>SAVE RS.123</Text>
                    <Image style={styles.Savingimage} source={require('../assets/images/instamartimg.png')} />

                </View>
            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1

    },

    Navbar: {
        flex: 1,
        padding: 10,
        flexDirection: "row",

    },

    NineMin: {
        backgroundColor: "plum",
        width: 60,
        height: 60,
        borderRadius: 15,
        textAlign: "center",


    },

    Nine: {
        color: "white",
        fontSize: 25,
        fontWeight: "normal",
        textAlign: "center",
        alignItems: "center"
    },

    MINS: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        alignItems: "center"
    },

    Address: {
        textAlign: "center",
        paddingTop: 10,
        paddingLeft: 5,
        paddingRight: 5,




    },
    Delivery: {
        flexDirection: "row"


    },

    DeliveryText: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        alignItems: "center"
    },

    Location: {
        color: "black",
        fontSize: 12,
        textAlign: "center",
        alignItems: "center"
    },

    Profile: {
        backgroundColor: "gray",
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },

    TextInput: {
        padding: 10
    },

    TextField: {
        height: 40,
        borderColor: "black",
        borderWidth: 1,
        padding: 20,
        borderRadius: 15
    },

    ItemsList: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },

    category: {
        textAlign: "center",
    },

    ItemsContainer: {
        backgroundColor: "lightpink",
        width: 80,
        height: 80,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    Image: {
        width: 60,
        height: 60
    },

    Item_text: {
        fontSize: 18,
        alignContent: "center",
        textAlign: "center",
        color: "black",
        padding: 10
    },

    Free1KG: {
        borderWidth: 1,
        borderStyle: "dashed",
        height: 50,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },

    Free1kgSugarImage: {
        width: 35,
        height: 35
    },

    Kgsugartext: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        alignItems: "center"
    },

    Bestprice: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },

    BestpriceText: {
        color: "black",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        alignItems: "center"
    },

    SavingAllContainers: {
        padding: 10,
        flexDirection: "row",
       gap:10,
        alignItems: "center"
    },

    SavingContainers: {
        width: 190,
        height: 190,
        backgroundColor: "pink",
        borderRadius: 10,
        alignItems: "center",
    },

    OffText: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        alignItems: "center",
        padding: 10
    },

    SaveText: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        alignItems: "center"
    },

    Savingimage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    }



})