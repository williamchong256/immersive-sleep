import * as React from 'react';
import {
  View, TextInput, Keyboard, TouchableWithoutFeedback,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect } from '@react-navigation/native';
import gql from 'graphql-tag';
import styles from './style';
import {
  BodyText, DataView, DataPointView, PageTitle, Subheading,
} from './Themes';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';
import Context from './Context';

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

function DetailedData({ navigation, route }) {
  const { id } = route.params;
  const [item, setItem] = React.useState({
    duration: null,
    heartRate: null,
    breathing: null,
    efficiency: null,
    comment: null,
  });
  // Set a default state of null and raise state
  const [value, setValue] = React.useState(null);

  React.useLayoutEffect(() => {
    // Set header of detailed data page to its date
    navigation.setOptions({
      title: item.date,
    });
  }, [item]);

  const componentWillUnmount = React.useRef(false);
  const client = React.useContext(Context);

  useFocusEffect(React.useCallback(() => {
    (async () => {
      try {
        const data = (await client.query({
          query: gql(queries.getDay),
          variables: {
            id,
          },
        })).data.getDay;
        setItem(data);
        setValue(data.comment);
      } catch (e) {
        console.log(e);
      }
    })();
    return () => {
      componentWillUnmount.current = true;
    };
  }, []));

  useFocusEffect(React.useCallback(() => () => {
    if (componentWillUnmount.current) {
      (async () => {
        try {
          const updated = {
            id,
            comment: value,
          };
          await client.mutate({
            mutation: gql(mutations.updateDay),
            variables: {
              input: updated,
            },
          });
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, [item, value]));

  return (
  // Simple example of displaying data based in route
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <DataView>
        <LinearGradient colors={['#F9F6FF', '#CFDFF7']} style={{ flex: 1, padding: 20 }}>
          <PageTitle detaileddata>{item.date}</PageTitle>

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
