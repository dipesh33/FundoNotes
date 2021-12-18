import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoteCard = (props) => {
    console.log('Prop:', props);
    return (
        <View style={styles.screen}>
            <Text style={styles.cardContent}>
                {props.title || ''}
            </Text>
            <Text>
                {props.note || ''}
            </Text>
        </View>
    );
};

export default NoteCard;

const styles = StyleSheet.create({
    screen:{
        borderRadius:6,
        elevation:3,
        backgroundColor:'#fff',
        // shadowOffset:{width:1, height:1},
        // shadowColor: "#333",
        // shadowOpacity:0.3,
        marginHorizontal:4,
        marginVertical:6,
    },
    cardContent:{
        marginHorizontal:18,
        marginVertical:10,
    },
});
