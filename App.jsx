import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SimpleCarousel from './__tests__/scr/SimpleCarousel'
import Countdowntimer from './__tests__/scr/Countdowntimer'
import DigitalWatch from './__tests__/scr/DigitalWatch'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();
const App = () => {
  return (
  <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="Carousel" component={SimpleCarousel} />
      <Stack.Screen name="Counterdowntimer" component={Countdowntimer} />
      <Stack.Screen name="DigitalWatch" component={DigitalWatch} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})