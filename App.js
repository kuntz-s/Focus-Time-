import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
} from 'react-native';
import { colors } from './src/utils/Colors.js';
import Focus from './src/features/Focus.js';
import Timer from './src/features/Timer.js';
import FocusHistory from "./src/features/FocusHistory"
//import Constants from 'expo-constants';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState('null');
  const [history, setHistory] = useState(['temp feature focuses']);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <View>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </View>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history,subject])
          }}
          clearSubject={() => {
            setCurrentSubject(null);
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
