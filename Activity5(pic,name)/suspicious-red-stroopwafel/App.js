import React, {Component} from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
//fadf
export default class App extends Component {
  render(){
    return(
      <ScrollView>
      <View style={styles.container}>
      <Image
      source={{uri:"https://th.bing.com/th/id/OIP.7thNFmAXS6ineXGaOVEW9gHaE4?rs=1&pid=ImgDetMain"}}
      style={{width: 200, height: 200}}
      />
      <Text></Text>
      </View>
      <View style={styles.container}>
      <Image
      source={{uri: "https://th.bing.com/th/id/OIP.NK_3ABB-yw-vl1ytpGVWGwAAAA?w=200&h=200&rs=1&pid=ImgDetMain"}}
      style = {{width: 200, height: 200}}
      />
      <Text style = {styles.text}>Diluc</Text>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});