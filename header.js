import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>My App Header</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    header: {
      backgroundColor: '#fff',
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  });

  export default Header;
