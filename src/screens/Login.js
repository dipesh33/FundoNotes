import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {handleSignin} from '../service/AuthService';
import {styles} from '../utility/GlobalStyle';
import {Color} from '../utility/Theme';
import {HelperText, TextInput} from 'react-native-paper';
import { GoogleSocialButton } from 'react-native-social-buttons';

const Login = ({navigation}) => {
  // const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let regex =
      /^[0-9a-zA-Z]+([._+-][0-9A-Za-z]+)*@[0-9A-Za-z]+[.][a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$/;

    let valid = true;
    const temp = {};
    if (!regex.test(email)) {
      valid = false;
      temp['mail'] = 'Enter the Email';
    }
    if (!password) {
      valid = false;
      temp['pass'] = 'Enter the Password';
    }
    setErrors(temp);

    return valid;
  };

  const navigateToDashBoardPage = () => {
    navigation.navigate('DrawerNav');
  };

  const onSubmit = () => {
    if (!validate()) {
      handleSignin(email, password, navigateToDashBoardPage);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.topView}>
        <Text style={styles.titleText}>F Ո N D O{'\n'}N O T E S</Text>
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.welcomeText}>Welcome,{'\n'}Login now</Text>
        <Text style={styles.Text}>If you are new/ Create new</Text>
        <View style={styles.fieldBar}>
          <ScrollView>
            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              errorText={errors.mail}
              style={styles.textInput}
              selectionColor={Color.HEADING}
              activeUnderlineColor={Color.PLACEHOLDER}
            />
            <Text style={{color: 'red'}}>{errors.mail}</Text>
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            errorText={errors.pass}
            secureTextEntry
            style={styles.textInput}
            selectionColor={Color.HEADING}
            activeUnderlineColor={Color.PLACEHOLDER}
          />
            <TouchableOpacity style={styles.button} onPress={onSubmit}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            {/* <GoogleSocialButton
            style={styles.googleButton}
            /> */}
            <TouchableOpacity
              style={styles.TextButton}
              onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.SignUpText}>
                Don't have an account? Sign up
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Login;
