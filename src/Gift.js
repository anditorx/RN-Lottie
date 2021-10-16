import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import LottieView from 'lottie-react-native';
const Gift = ({onPressGift, onPressClose}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onPressGift}>
        <LottieView
          source={require('../assets/lottie/lottie-gift.json')}
          loop={true}
          autoPlay={true}
          resizeMode="cover"
          style={styles.lottieGift}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressClose}>
        <Image
          source={require('../assets/lottie/cancel.png')}
          style={styles.iconClose}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Gift;

const styles = StyleSheet.create({
  wrapper: {
    height: 120,
    width: 120,
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  lottieGift: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    top: -5,
  },
  iconClose: {height: 20, width: 20, left: -50},
});
