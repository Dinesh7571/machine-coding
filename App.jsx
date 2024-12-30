import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SimpleCarousel from './__tests__/scr/SimpleCarousel'
import Countdowntimer from './__tests__/scr/Countdowntimer'

const App = () => {
  return (
    <View>
      <SimpleCarousel/>
      <Countdowntimer/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})