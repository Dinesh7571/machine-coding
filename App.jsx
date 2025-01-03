import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SimpleCarousel from './src/screens/SimpleCarousel'
import Countdowntimer from './src/screens/Countdowntimer'
import DigitalWatch from './src/screens/DigitalWatch'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/Home'
const Stack = createNativeStackNavigator();
const App = () => {
  return (
  <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="Carousel" component={SimpleCarousel} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Counterdowntimer" component={Countdowntimer} />
      <Stack.Screen name="DigitalWatch" component={DigitalWatch} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})