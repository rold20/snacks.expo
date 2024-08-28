import React, { Component } from 'react';

import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'; // Code example by Dr.Fuentes; May 21, 2023

export default class App extends Component {

render() {

return (

<ScrollView>

<View style={styles.container}>

<Image

source={{ uri: 'https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-1/455346513_1977013456066994_3362416330138707590_n.jpg?stp=c0.0.1393.1393a_dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEGzry-mp9T5AC5Q6zYz-Z0yFh0QoBV_ZnIWHRCgFX9mau-nNZqWZdpUXmir9v8cdIxZEmMezSRtQzGS7cF4uP1&_nc_ohc=EmNwtCUrhSoQ7kNvgEif1cd&_nc_ht=scontent.fmnl8-2.fna&oh=00_AYCamzRdo5dW0CkhXPb6TljQnD09ng2Is29unPGLwJZkTg&oe=66D44F7A' }}

style={{ width: 200, height: 200 }}

/>

<Text style={styles.text}>Harold Vega</Text>

<Text style={styles.text}>Section: BSIT-FB!</Text>

<Text style={styles.text}>3rd yr College</Text>

</View>

<View style={styles.container}>

<Image

source={{ uri: 'https://i.imgur.com/SKXxy0J.jpg' }} //look for your own image style={{ width: 200, height: 200 }}

/>

<Text style={styles.text}>Welcome to my Page!</Text>

</View>

</ScrollView> );

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

color:'blue',

fontWeight: 'bold',

textAlign: 'center',

marginVertical: 10,

},

});