import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SimpleCarousel from './__tests__/scr/SimpleCarousel'
import Countdowntimer from './__tests__/scr/Countdowntimer'
import DigitalWatch from './__tests__/scr/DigitalWatch'

const App = () => {
  return (
    <View>
      <SimpleCarousel/>
      <Countdowntimer/>
      <DigitalWatch/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})