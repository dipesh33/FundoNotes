import React from 'react';
import { View, Text, TextInput } from 'react-native';
import {styles} from '../utility/GlobalStyle';

const FormInput = ({ value, onChangeText, placeholderText, errorText = undefined }) => {
  return (
    <View style={{ margin: 20 }}>
      <TextInput
        style={styles.formInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholderText}
      />
      {errorText && (
        <Text style={{ color: 'red' }}>{errorText}</Text>
      )}
    </View>
  );
};
export default FormInput;
