import React, {useRef, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import LottieView from 'lottie-react-native';
const LikeUnlike = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'Dark' : 'Light',
  };
  const [isLike, setIsLike] = useState(false);
  const animation = useRef(null);
  const onPressBtn = () => {
    if (isLike) {
      animation.current.play(0, 0);
      setIsLike(false);
    } else if (!isLike) {
      animation.current.play(40, 116);
      setIsLike(true);
    }
  };
  return (
    <View style={{justifyContent: 'space-between', flexDirection: 'column'}}>
      {/* lottie */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <LottieView
          source={require('../assets/lottie/lottie-heart-red.json')}
          ref={animation}
          loop={false}
          autoPlay={isLike}
          resizeMode="cover"
          style={{height: 350, width: 350}}
        />
      </View>
      {/* button */}
      <TouchableOpacity
        onPress={onPressBtn}
        style={{
          bottom: 0,
          //   top: 0,
          backgroundColor: 'grey',
          paddingVertical: 15,
          paddingHorizontal: 20,
          borderRadius: 20,
          //   justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
          {isLike ? 'unlike' : 'like'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LikeUnlike;

const styles = StyleSheet.create({});
