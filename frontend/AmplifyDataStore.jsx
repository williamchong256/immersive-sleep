import * as React from 'react';
import {
  View, Text, TextInput, Button,
} from 'react-native';
import { DataStore, Predicates } from 'aws-amplify';
import styles from './style';
import { User } from './models';

function AmplifyDataStore() {
  const [value, setValue] = React.useState('');
  const [users, setUsers] = React.useState([]);

  async function fetchUsers() {
    try {
      const userData = await DataStore.query(User);
      setUsers(userData);
    } catch (e) {
      console.log(e);
    }
  }

  async function pushUser() {
    try {
      const user = {
        id: (Math.random() * 1000).toString(),
        name: value,
      };
      await DataStore.save(new User(user));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(val) => setValue(val)}
        value={value}
        placeholder="Name"
      />
      <Button title="Create User" onPress={pushUser} />
      <Button title="Pull Users" onPress={fetchUsers} />
      {
        users.map((user) => <Text key={user.id}>{user.name}</Text>)
      }
      <Button title="Delete Users" onPress={() => DataStore.delete(User, Predicates.ALL).catch((err) => console.log(err))} />
    </View>
  );
}

export default AmplifyDataStore;
