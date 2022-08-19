import React from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import {fontSizes, spacing} from "../utils/Sizes.js"
import {colors} from "../utils/Colors.js"

const Focus = ({ history }) => {
  
  if(!history || !history.length) return <Text>We haven't focused on anything yet</Text>;

  const renderItem = ({item}) => <Text style={styles.item}>-{item}</Text>

  return (
    <View style={styles.container}>
       <Text style={styles.title}>Things we'we focused on:</Text>
       <FlatList
        data = {history}
        renderItem = {renderItem}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    padding: spacing.md,
    flex:1
  },
  item: {
    fontSize:md,
    color: colors.white,
    paddingTop: spacing.sm,

  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight:'bold'
  }
});

export default Focus;
