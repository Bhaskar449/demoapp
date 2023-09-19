import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const LoginPage = ({navigation}) => {
  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text>Login Page</Text>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" secureTextEntry={true} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginPage;
