import React from 'react';
import { Button, Text, TextInput, View, ScrollView, StyleSheet, FlatList } from 'react-native';

const App = () => {
  return (
    <View style={{flex:1}}>
    <View style={{
      backgroundColor: '#fff',
    flex:1,
    }}>
        <Text style={{
          fontSize: 24,
          fontWeight: 'bold',
          color:"black",
        }}>My App Header</Text>
      </View>
      <View style = {{
        backgroundColor:'#555', flex:1
      }}>
        <Text>Jancok</Text>
      </View>
      </View>
  );
};


export default App;