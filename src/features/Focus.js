import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
//import { colors } from '../utils/Colors.js';
import  RoundedButton  from '../components/RoundedButton.js';
import {spacing} from "../utils/Sizes.js"

const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focus on"
          onChangeText={setSubject}
        />
        <RoundedButton
          style={styles.button}
          title="+"
          size={50}
          onPress={() => {
            addSubject(subject);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  inputContainer: {
    justifyContent: 'top',
    padding: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  button: {},
});

export default Focus;
