import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Login = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.topView}>
        <Text style={styles.titleText}>F Ո N D O{'\n'}N O T E S</Text>
      </View>

      <View style={styles.bottomView}>
        <Text style={styles.welcomeText}>Welcome,{'\n'}Login now</Text>
        <Text style={styles.Text}>If you are new/ Create new</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor={'black'}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={'black'}
          style={styles.textInput}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TextButton}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.SignUpText}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
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
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  titleText: {
    fontSize: 35,
    color: 'white',
  },
  welcomeText: {
    fontSize: 25,
    // fontStyle:"italic",
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

export default Login;
