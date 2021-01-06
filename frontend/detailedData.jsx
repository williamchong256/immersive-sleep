import * as React from 'react';
import {
  View, TextInput, Keyboard, TouchableWithoutFeedback,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';
import { PageTitle, BodyText, Subheading } from './Themes';
// import { TextInput } from 'react-native-gesture-handler';

function CommentsBox() {
  const [value, setValue] = React.useState('');
  return (
    <View style={styles.commentsBox}>
      <TextInput
        editable
        multiline
        value={value}
        numberOfLines={5}
        placeholder="Type here..."
        onChangeText={(val) => setValue(val)}
      />
    </View>

  );
}

function DetailedData({ route }) {
  // Retrieve our item in route.params
  const { item } = route.params;

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
          <CommentsBox />

        </View>

      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

export default DetailedData;
