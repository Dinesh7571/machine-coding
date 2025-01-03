import React, { useRef, useState } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const SimpleCarousel = () => {
  const images = ['Image 1', 'Image 2', 'Image 3', 'Image 4'];
  const colors = ['red', 'green', 'blue', 'yellow'];

  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index) => {
    scrollViewRef.current.scrollTo({ x: index * screenWidth, animated: true });
    setCurrentIndex(index);
  };

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / screenWidth);
    setCurrentIndex(newIndex);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView
        horizontal
        pagingEnabled
        ref={scrollViewRef}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {images.map((title, index) => (
          <View
            key={index}
            style={{
              width: screenWidth,
              height: 200,
              backgroundColor: colors[index],
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', fontSize: 18 }}>{title}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <TouchableOpacity
          onPress={() => scrollToIndex(Math.max(currentIndex - 1, 0))}
        >
          <Text style={styles.navText}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            scrollToIndex(Math.min(currentIndex + 1, images.length - 1))
          }
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
