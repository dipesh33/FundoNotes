import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {registration} from '../service/AuthService';
import {styles} from '../utility/GlobalStyle';

const Signup = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let emailRegex =
      // eslint-disable-next-line no-control-regex
      /(?!.*\.{2})^([a-z\d!#$%&'*+\-/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    // let fnRegex = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
    let valid = true;
    const temp = {};
    // if (!fnRegex.test(fullName)) {
    //   valid = false;
    //   temp['fname'] = 'Enter a Valid Fullname';
    // }
    if (!emailRegex.test(email)) {
      valid = false;
      temp.mail = 'Enter a Valid Email';
    }
    if (!password || password < 8) {
      valid = false;
      temp.pass = 'Enter the password';
    }
    setErrors(temp);
    return valid;
  };

  const navigationToDashboardPage = () => {
    navigation.navigate('Dashboard');
  };

  const onSubmit = () => {
    if (validate()) {
      registration(email, password, fullName, navigationToDashboardPage);
      console.log('Hello');
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.topView}>
        <View style={styles.heading}>
          <Text style={styles.titleText}>F Ո N D O{'\n'}N O T E S</Text>
        </View>
        <View style={[styles.bottomView, styles.bottomTab]}>
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
          {errors.pass && <Text style={{color: 'red'}}>{errors.pass}</Text>}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onSubmit();
            }}>
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


export default Signup;
