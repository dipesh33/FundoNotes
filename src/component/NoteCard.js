import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getNewHeight, getNewWidth} from '../utility/Dimension';

const newHeight = getNewHeight(10);
const newWidth = getNewWidth(12);

const NoteCard = props => {
  return (
    <View style={styles.noteCard}>
      <Text style={styles.cardContent}>{props.title || ''}</Text>
      <Text style={styles.cardContent}>{props.note || ''}</Text>
    </View>
  );
};

export default NoteCard;

const styles = StyleSheet.create({
  noteCard: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    marginHorizontal: newWidth,
    marginVertical: newHeight,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
