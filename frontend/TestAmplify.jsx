import * as React from 'react';
import {
  View, Text, TextInput, Button,
} from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { createUser } from './graphql/mutations';
import { listUsers } from './graphql/queries';
import styles from './style';

function TestAmplify() {
  const [value, setValue] = React.useState('');
  const [users, setUsers] = React.useState([]);

  async function fetchUsers() {
    try {
      const userData = await API.graphql(graphqlOperation(listUsers));
      setUsers(userData.data.listUsers.items);
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
      await API.graphql(graphqlOperation(createUser, { input: user }));
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
    </View>
  );
}

export default TestAmplify;
