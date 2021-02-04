import * as React from 'react';
import {
  View, Text, Button,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { PubSub } from 'aws-amplify';
import styles from './style';

function IoTPubSub() {
  const [message, setMessage] = React.useState('');

  useFocusEffect(React.useCallback(() => {
    const sub = PubSub.subscribe('topic_2').subscribe({
      next: (data) => setMessage(data.value.mode1Process),
      error: (err) => console.log(err),
      close: () => console.log('Done'),
    });

    return (() => {
      sub.unsubscribe();
    });
  }, []));

  async function publish() {
    try {
      await PubSub.publish('frontend', { msg: 'From the frontend' });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <Button onPress={publish} title="Publish" />
    </View>
  );
}

export default IoTPubSub;
