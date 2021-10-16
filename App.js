import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import LikeUnlike from './src/LikeUnlike';
import Gift from './src/Gift';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'Dark' : 'Light',
  };
  const [isClose, setClose] = useState(false);

  const onPressClose = () => {
    console.log('Cancel!');
    setClose(true);
  };
  const onPressGift = () => {
    console.log('GIFT OPEN!');
    Alert.alert('Open Gift', 'Open your git', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.container}>
          <LikeUnlike />
          <View style={styles.separator} />
          {!isClose && (
            <Gift onPressClose={onPressClose} onPressGift={onPressGift} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 20},
  separator: {height: 100},
});
