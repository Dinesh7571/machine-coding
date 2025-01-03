import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DigitalWatch = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const currentTime = new Date();

      // Format time with AM/PM
      let hours = currentTime.getHours();
      const minutes = currentTime.getMinutes().toString().padStart(2, '0');
      const seconds = currentTime.getSeconds().toString().padStart(2, '0');
      const period = hours >= 12 ? 'PM' : 'AM';

      // Convert to 12-hour format
      hours = hours % 12 || 12; // 0 is converted to 12
      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${period}`;
      setTime(formattedTime);

      // Format date
      const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
      const formattedDate = currentTime.toLocaleDateString(undefined, options);
      setDate(formattedDate);
    };

    updateDateTime(); // Initial call
    const interval = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.gradientBackground}>
        <Text style={styles.timeText}>{time}</Text>
        <Text style={styles.dateText}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#004e92', 
  },
  timeText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#00FF00',
    textShadowColor: '#00FF00',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    fontFamily: 'monospace',
    marginBottom: 20,
  },
  dateText: {
    fontSize: 20,
    color: '#FFFFFF',
    textShadowColor: '#FFFFFF',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
    fontFamily: 'monospace',
  },
});

export default DigitalWatch;
