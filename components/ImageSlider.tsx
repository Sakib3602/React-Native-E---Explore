import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

// ডামি ডাটা (এখানে আপনার প্রোজেক্টের ইমেজ বসিয়ে নিবেন)
const SLIDER_DATA = [
  { id: '1', title: 'Premium Experience', image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1215&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '2', title: 'Next-Gen Interface', image: 'https://images.unsplash.com/photo-1746969977388-a43505f290c8?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '3', title: 'Seamless Integration', image: 'https://images.unsplash.com/photo-1689782918149-cd817193801a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<Animated.FlatList | null>(null);
  const currentIndexRef = useRef(0);

  // বর্তমান স্ক্রিন ইনডেক্স ট্র্যাক করার জন্য
  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const idx = viewableItems[0].index || 0;
      setActiveIndex(idx);
      currentIndexRef.current = idx;
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  // autoplay effect: advance every 3s
  // we keep a ref for current index so interval doesn't depend on state
  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentIndexRef.current + 1) % SLIDER_DATA.length;
      currentIndexRef.current = next;
      setActiveIndex(next);
      if (flatListRef.current && typeof flatListRef.current.scrollToOffset === 'function') {
        flatListRef.current.scrollToOffset({ offset: next * width, animated: true });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const renderItem = ({ item }) => (
    
    <View style={[styles.slide, { width }]}> 
      <View style={styles.slideInner}>
        <Image 
          source={{ uri: item.image }} 
          style={styles.image}
          resizeMode="cover"
        />
        {/* গ্লাসGraphics স্টাইল ওভারলে টেক্সট বক্স */}
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>{item.title}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={SLIDER_DATA}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        ref={flatListRef}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />

      {/* Pagination Dots */}
      <View style={styles.dotsContainer}>
        {SLIDER_DATA.map((_, index) => {
          const isActive = index === activeIndex;
          return (
            <View
              key={index}
              style={[
                styles.dot,
                isActive ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingVertical: 0 },
  slide: { alignItems: 'center', justifyContent: 'center' },
  slideInner: { width: '100%', height: 224, borderRadius: 0, overflow: 'hidden' },
  image: { width: '100%', height: '100%' },
  overlay: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.4)', paddingVertical: 10, paddingHorizontal: 12, borderRadius: 0 },
  overlayText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  dotsContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 12 },
  dot: { height: 6, borderRadius: 999, marginHorizontal: 4 },
  activeDot: { width: 20, backgroundColor: '#F7941D' },
  inactiveDot: { width: 6, backgroundColor: 'rgba(255,255,255,0.3)' },
});
 