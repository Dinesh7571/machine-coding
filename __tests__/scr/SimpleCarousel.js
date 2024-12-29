import React, { useRef, useState } from 'react';
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const SimpleCarousel = () => {
  const images = [
   "image 1",
    "image 2",
     "image 3",
      "image 4"
  ];
  const color=['red','green','blue','yellow']

  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index) => {
    scrollViewRef.current.scrollTo({ x: index * screenWidth, animated: true });
    setCurrentIndex(index);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView
        horizontal
        pagingEnabled
        ref={scrollViewRef}
        showsHorizontalScrollIndicator={false}
      >
        {images.map((title, index) => (
          <View key={index}  style={{ width: screenWidth, height: 200 ,backgroundColor:color[index]}} />
        ))}
      </ScrollView>

      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <TouchableOpacity
          onPress={() => scrollToIndex(Math.max(currentIndex - 1, 0))}
        >
          <Text style={styles.navText}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => scrollToIndex(Math.min(currentIndex + 1, images.length - 1))}
        >
          <Text style={styles.navText}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navText: {
    fontSize: 24,
    marginHorizontal: 20,
    color: 'black',
  },
});

export default SimpleCarousel;
