import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'

const RandomBackground = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const changeBackgroundColor = () => {
    setBackgroundColor(getRandomColor());
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>Random Background</Text>
      <Button title="Change Background Color" onPress={changeBackgroundColor} />
    </View>
  )
}

export default RandomBackground

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});