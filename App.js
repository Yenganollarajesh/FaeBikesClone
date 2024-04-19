import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import SwiggyApp from "./components/SwiggyApp/index"
import LoginPage from "./components/SwiggyApp/LoginPage"

export default function App() {
  return (
    <View style={styles.container}>
       
      {/* <SwiggyApp/> */}
      <LoginPage/>
       
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding:5
  },
});
