import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
//Diital Phinma DNTA (Digital Note Taking app) By Dr.Fuentes; May 22, 2023
export default function App() {
  const [noteInput, setNoteInput] = useState('');
  const [notes, setNotes] = useState([]);

  const handleNoteInput = (text) => {
    setNoteInput(text);
};

const handleAddNote = () => {
  const newNote = { date: new Date(), note: noteInput };
  setNotes([...notes, newNote]);
  setNoteInput("");

};

return (
<View style={styles.container}>
<Text style={styles.title}>Digital Note Taking App</Text>
<TextInput
style={styles.input}
onChangeText={handleNoteInput}
value={noteInput}
placeholder="Enter note here"
multiline={true}
/>

<Button title="Add Note" onPress={handleAddNote}/>
{notes.map((note) => (
<View key={note.date} style={styles.noteContainer}>
<Text>{note.date.toLocaleString()}</Text>
<Text style={styles.note}>{note.note}</Text>
</View>
))}
</View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  padding: 20,
  alignltems: 'center',
  justifyContent: 'flex-start',
},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  noteContainer: {
  width: '100%',
  borderWidth: 1,
  borderRadius: 5,
  },

  noteContainer: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10, marginTop: 10,
    },

  note: {
  marginTop: 10,
  },

});