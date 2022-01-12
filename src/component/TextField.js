import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const FormInput = ({ value, onChangeText, placeholderText, errorText = undefined }) => {
  return (
    <View style={{ margin: 20 }}>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholderText}
      />
      {errorText && (
        <Text style={{ color: 'red' }}>{errorText}</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    fontSize: 18,
  },
})
export default FormInput;
