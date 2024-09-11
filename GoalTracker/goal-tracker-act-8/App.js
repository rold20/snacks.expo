import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

// Sample program by Dr. Fuentes; May 22, 2023
export default function App() {
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [goal, setGoal] = useState("");

  const calculateGoal = () => {
    let calculatedGoal = "";
    if (weight > 200 &&age > 53) {
      calculatedGoal = "Your daily calorie goal is X. It's recommended to do low-impact exercises like swimming and walking.";
    } else {
      calculatedGoal = "Your daily calorie goal is X";
    }
    setGoal(calculatedGoal);
  }

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://th.bing.com/th/id/OIP.cR3e4Znf9Ct7nc1rYWvt5QAAAA?rs=1&pid=ImgDetMain' }} 
        style={{ width: 200, height: 200 }} 
      />
      <Text style={{ fontSize: 40, color: '#E4080A' }}>Goal Tracker</Text>

      <Text>Weight</Text>
      <TextInput 
        style={styles.input}
        onChangeText={text => setWeight(text)}
        value={weight}
        keyboardType="numeric"
      />
      <Text>Age</Text>
      <TextInput 
        style={styles.input}
        onChangeText={text => setAge(text)}
        value={age}
        keyboardType="numeric"
      />
      <Button
        title="Calculate Goal"
        onPress={calculateGoal}
      />
      <Text>{goal}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E4080A',
    padding: 8,
    margin: 10,
    width: 200,
  },
});