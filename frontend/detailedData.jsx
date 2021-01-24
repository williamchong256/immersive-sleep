import * as React from 'react';
import {
  View, TextInput, Keyboard, TouchableWithoutFeedback,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as SQLite from 'expo-sqlite';
import { useFocusEffect } from '@react-navigation/native';
import styles from './style';
import {
  BodyText, DataView, DataPointView, PageTitle, Subheading,
} from './Themes';

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
  // Set a default state of null and raise state
  const [value, setValue] = React.useState(null);

  useFocusEffect(React.useCallback(() => {
    const { key } = item;
    // Only retrieve comment from database on initial render
    if (value === null) {
      // Search table `comments` for this item
      db.transaction((tx) => tx.executeSql('SELECT * FROM comments WHERE key=?', [key],
        // Callback if table `comments` exists
        (_, { rows }) => {
          if (rows.length !== 0) {
            // If record exists, set value to its comment
            // eslint-disable-next-line no-underscore-dangle
            setValue(rows._array[0].comment);
          } else {
            // Else, create empty record for item
            tx.executeSql('INSERT INTO comments VALUES (?, ?)', [key, '']);
          }
          // Callback if table `comments` does not exist
        }, () => {
          // Create table `comments`
          tx.executeSql('CREATE TABLE IF NOT EXISTS comments (key string primary key NOT NULL, comment string)');
        }));
    }
    return () => {
      // Store comment into database on blur and on value change
      db.transaction((tx) => tx.executeSql('UPDATE comments SET comment=? WHERE key=?', [value, key]));
    };
  }, [value]));

  return (
  // Simple example of displaying data based in route
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <DataView>
        <LinearGradient colors={['#F9F6FF', '#CFDFF7']} style={{ flex: 1, padding: 20 }}>
          <PageTitle>{item.key}</PageTitle>

          <DataPointView>
            <Subheading>{item.duration}</Subheading>
          </DataPointView>

          <DataPointView>
            <BodyText>
              Heart Rate:
              {` ${item.heartRate}`}
            </BodyText>
          </DataPointView>

          <DataPointView>
            <BodyText>
              Breathing:
              {` ${item.breathing}`}
            </BodyText>
          </DataPointView>

          <DataPointView>
            <BodyText>
              Efficiency:
              {` ${item.efficiency}`}
            </BodyText>
          </DataPointView>

          <DataPointView>
            <BodyText>
              Comments:
            </BodyText>
            {/* Raise state up from CommentsBox to parent component */}
            <CommentsBox value={value} onChangeText={(val) => setValue(val)} />
          </DataPointView>
        </LinearGradient>
      </DataView>
    </TouchableWithoutFeedback>
  );
}

export default DetailedData;
