import * as React from 'react';
import {
  View, TextInput, Keyboard, TouchableWithoutFeedback,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as SQLite from 'expo-sqlite';
import { useFocusEffect } from '@react-navigation/native';
import styles from './style';
import { PageTitle, BodyText, Subheading } from './Themes';
// import { TextInput } from 'react-native-gesture-handler';

function CommentsBox({ value, onChangeText }) {
  return (
    <View style={styles.commentsBox}>
      <TextInput
        editable
        multiline
        value={value}
        numberOfLines={5}
        placeholder="Type here..."
        onChangeText={onChangeText}
      />
    </View>

  );
}

const db = SQLite.openDatabase('data.db');

function DetailedData({ route }) {
  // Retrieve our item in route.params
  const { item } = route.params;
  const [value, setValue] = React.useState(null);

  useFocusEffect(React.useCallback(() => {
    const { key } = item;
    if (value === null) {
      db.transaction((tx) => tx.executeSql('SELECT * FROM comments WHERE key=?', [key],
        (_, { rows }) => {
          if (rows.length === 0) {
            tx.executeSql('INSERT INTO comments VALUES (?, ?)', [key, '']);
          } else {
            // eslint-disable-next-line no-underscore-dangle
            setValue(rows._array[0].comment);
          }
        }, () => {
          tx.executeSql('CREATE TABLE IF NOT EXISTS comments (key string primary key NOT NULL, comment string)');
        }));
    }
    return () => {
      db.transaction((tx) => tx.executeSql('UPDATE comments SET comment=? WHERE key=?', [value, key]));
    };
  }, [value]));

  return (
  // Simple example of displaying data based in route
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient colors={['#F9F6FF', '#CFDFF7']} style={styles.data}>
        <PageTitle>{item.key}</PageTitle>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Subheading>{item.duration}</Subheading>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <BodyText>
            Heart Rate:
            {item.heartRate}
          </BodyText>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <BodyText>
            Breathing:
            {item.breathing}
          </BodyText>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <BodyText>
            Efficiency:
            {item.efficiency}
          </BodyText>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <BodyText>
            Comments:
          </BodyText>
          <CommentsBox value={value} onChangeText={(val) => setValue(val)} />

        </View>

      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

export default DetailedData;
