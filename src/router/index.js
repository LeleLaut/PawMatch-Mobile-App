import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={homePage} />
      </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})