import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {handleSignin} from '../service/AuthService';
import {styles} from '../utility/GlobalStyle';
import {Color} from '../utility/Theme';
import {HelperText, TextInput} from 'react-native-paper';
import PushNotification from 'react-native-push-notification';

const Login = ({navigation}) => {
  // const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = () => {
    return !email.includes('@');
  };

  const validatePassword = () => {
    return !password.includes('^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$')
  }
  const navigateToDashBoardPage = () => {
    navigation.navigate('DrawerNav');
  };

  const onSubmit = () => {
    if (validateEmail()) {
      handleSignin(email, password, navigateToDashBoardPage);
    }
  };

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'test-channel',
      channelName: 'Test Channel',
    });
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
            label="Email"
            value={email}
            onChangeText={setEmail}
            errorText={errors.mail}
            style={styles.textInput}
            selectionColor={Color.HEADING}
            activeUnderlineColor={Color.PLACEHOLDER}
          />
          <HelperText type="error" visible={validateEmail()}>
            Email address is invalid!
          </HelperText>
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
          {/* <HelperText type="error" visible={validatePassword()}>
            Password is invalid!
          </HelperText> */}
          <TouchableOpacity style={styles.button} onPress={onSubmit}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TextButton}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.SignUpText}>
              Don't have an account? Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
