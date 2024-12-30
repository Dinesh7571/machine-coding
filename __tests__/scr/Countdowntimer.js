import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Countdowntimer = ({ initialSeconds }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && secondsRemaining > 0) {
      timer = setInterval(() => {
        setSecondsRemaining((prev) => prev - 1);
      }, 1000);
    } else if (secondsRemaining === 0) {
      setIsRunning(false); 
    }

    return () => clearInterval(timer); 
  }, [isRunning, secondsRemaining]);

  const resetTimer = () => {
    setSecondsRemaining(initialSeconds);
    setIsRunning(false);
  };

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(secondsRemaining)}</Text>
      <View style={styles.buttonContainer}>
        <Button title={isRunning ? "Pause" : "Start"} onPress={toggleTimer} />
        <Button title="Reset" onPress={resetTimer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});

export default Countdowntimer;
