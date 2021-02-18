import * as React from 'react';
import {
  View, Text, TextInput, Button,
} from 'react-native';
import { Auth, DataStore } from 'aws-amplify';
import styles from '../style';

export function UserData({ navigation }) {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(({ attributes }) => setUser(attributes))
      .catch((err) => console.log(err));
  }, []);

  async function logout() {
    try {
      await DataStore.clear();
      await Auth.signOut();
      navigation.goBack();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <Text>
        Phone number:
        {` ${user.phone_number}`}
      </Text>
      <Text>
        Name:
        {` ${user.name}`}
      </Text>
      <Button title="Sign out" onPress={logout} />
    </View>
  );
}

export function SignIn({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [confirm, setConfirm] = React.useState('');

  async function login() {
    try {
      await Auth.signIn(username, password);
      navigation.goBack();
    } catch (e) {
      console.log(e);
    }
  }

  async function signUp() {
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          name,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, confirm);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(val) => setUsername(val)}
        value={username}
        placeholder="Username"
      />
      <TextInput
        onChangeText={(val) => setPassword(val)}
        value={password}
        secureTextEntry
        placeholder="Password"
      />
      <Button title="Login" onPress={login} />
      <TextInput
        onChangeText={(val) => setName(val)}
        value={name}
        placeholder="Name"
      />
      <Button title="Sign Up" onPress={signUp} />
      <TextInput
        onChangeText={(val) => setConfirm(val)}
        value={confirm}
        placeholder="Confirmation Code"
      />
      <Button title="Confirm" onPress={confirmSignUp} />
    </View>
  );
}