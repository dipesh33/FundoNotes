import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {handleSignin} from '../service/AuthService';
import {styles} from '../utility/GlobalStyle';
import { Color } from '../utility/Theme';
import { FloatingTitleTextInputField } from '../component/TextBox';

const Login = ({navigation}) => {
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
      temp.mail = 'Enter the Email';
    }
    if (!password) {
      valid = false;
      temp.pass = 'Enter the Password';
    }
    setErrors(temp);

    return valid;
  };
  const navigateToDashBoardPage = () => {
    navigation.navigate('DrawerNav');
  };

  const onSubmit = () => {
    if (validate()) {
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
        <TextInput
          placeholder="Email"
          placeholderTextColor={Color.HEADING}
          style={styles.textInput}
          value={email}
          selectionColor={Color.HEADING}
          onChangeText={setEmail}
          errorText={errors.mail}
        />
        {/* <TextField
          label="Email"
          value={email}
          onChangeText={setEmail}
          errorText={errors.mail}
        /> */}
        <TextInput
          placeholder ="Password"
          placeholderTextColor={Color.HEADING}
          style={styles.textInput}
          value={password}
          onChangeText={setPassword}
          errorText={errors.pass}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TextButton}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.SignUpText}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
