import React, {useEffect, useRef} from 'react';
import {View, Text, Dimensions, Animated} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
const {width, height} = Dimensions.get('window');

const App = () => {
  const rem = width / 380;
  const remSm = width / 400;
  // const remTab = width / 500;

  // const width80 = width * 0.88;
  const scrollx = useRef(new Animated.Value(0)).current;
  console.log(scrollx);
  EStyleSheet.build({
    $rem: width > 400 ? rem : remSm,
  });

  const scrollX = useRef(new Animated.Value(0)).current;

  const output = scrollX.interpolate({
    inputRange:[],
    outputRange:[]
  })

  return (
    <View style={styles.main}>
      <View style={}>

      </View>
      <Animated.FlatList
        keyExtractor={(_, index) => index.toString()}
        data={[0, 1, 2]}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        renderItem={({item, index}) => {
          return (
            <View
              style={[
                styles.screen,
                {backgroundColor: `rgba(22,232,42,0.${index + 2})`},
              ]}>
              <Text style={styles.screenText}>{item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default App;

const styles = EStyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(222,242,23,0.5)',
  },
  screen: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: '24rem',
    fontWeight: '600',
  },
});
