import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {registration} from '../service/AuthService';

const Signup = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let emailRegex =
      /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    let fnRegex = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
    let valid = true;
    const temp = {};
    if (!fnRegex.test(fullName)) {
      valid = false;
      temp['fname'] = 'Enter a Valid Fullname';
    }
    if (!emailRegex.test(email)) {
      valid = false;
      temp['mail'] = 'Enter a Valid Email';
    }
    if (!password || password < 8) {
      valid = false;
      temp['pass'] = 'Enter the password';
    }
    setErrors(temp);
    return valid;
  };

  const navigationToDashboardPage = () => {
    navigation.navigate('Dashboard');
  };

  const onSubmit = () => {
    if (validate()) {
      registration(email, password, fullName, navigationToDashboardPage());
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.topView}>
        <Text style={styles.titleText}>F Ո N D O{'\n'}N O T E S</Text>
        <View style={styles.bottomView}>
          <Text style={styles.welcomeText}>
            Create Account{'\n'}Signup to get started!
          </Text>
          <TextInput
            placeholder="Full Name"
            style={styles.textInput}
            value={fullName}
            onChangeText={text => {
              setFullName(text);
            }}
            errorText={errors.fname}
          />
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            value={email}
            onChangeText={text => {
              setEmail(text);
            }}
            errorText={errors.mail}
          />
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            value={password}
            onChangeText={text => {
              setPassword(text);
            }}
            errorText={errors.pass}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={() => {onSubmit()}}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TextButton}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>If already a user, Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#009387',
  },
  topView: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  bottomView: {
    flex: 3,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  titleText: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'black',
  },
  Text: {
    fontSize: 20,
    fontStyle: 'italic',
  },
  textInput: {
    width: '90%',
    borderWidth: 1,
    backgroundColor: '#f2f2f2',
    borderColor: 'white',
    height: 52,
    borderRadius: 10,
    paddingLeft: 15,
    marginTop: 20,
    marginLeft: 15,
  },
  button: {
    width: '90%',
    color: 'white',
    height: 52,
    backgroundColor: 'mediumaquamarine',
    borderRadius: 10,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 19,
  },
  TextButton: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Signup;
