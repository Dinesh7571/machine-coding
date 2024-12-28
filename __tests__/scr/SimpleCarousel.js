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
    'https://via.placeholder.com/600x300',
    'https://via.placeholder.com/600x300/FF0000',
    'https://via.placeholder.com/600x300/00FF00',
    'https://via.placeholder.com/600x300/0000FF',
  ];

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
        {images.map((uri, index) => (
          <Image key={index} source={{ uri }} style={{ width: screenWidth, height: 200 }} />
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
