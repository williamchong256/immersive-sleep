import * as React from 'react';
import { Auth } from 'aws-amplify';
import { View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import RNPickerSelect from 'react-native-picker-select';
import SignIn from './AmplifyAuth';
import {
  BodyText, ProfileView, PageTitle, ProfilePointView, Subheading,
} from './Themes';
import styles from './style';

const profilePic = require('./assets/default-profile.jpg');

function Profile({ navigation }) {
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(() => setLoggedIn(true))
      .catch((err) => console.log(err));
  }, []);

  return (
    loggedIn ? <UserData /> : <SignIn navigation={navigation} />
  );
}

function Dropdown({ options, val, onValChange }) {
  return (
    <View style={{ marginTop: 10 }}>
      <RNPickerSelect
        placeholder={{ label: '--Select options--', value: null }}
        onValueChange={onValChange}
        value={val}
        items={options}
      />
    </View>
  );
}

function UserData() {
  const [user, setUser] = React.useState({});
  // these are set by dropdowns
  const [age, setAge] = React.useState('');
  const [duration, setDuration] = React.useState('');

  const use = React.useRef();

  React.useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((us) => {
        use.current = us;
        setUser(us.attributes);
        setAge(us.attributes['custom:age']);
        setDuration(us.attributes['custom:sleep_goals']);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => (() => {
    Auth.updateUserAttributes(use.current, {
      'custom:age': age,
      'custom:sleep_goals': duration,
    }).catch((err) => console.log(err));
  }), [age, duration]);

  // list of values for dropdowns
  const ages = [
    { label: '<17 yrs', value: '<17' },
    { label: '18-24 yrs', value: '18-24' },
    { label: '25-34 yrs', value: '25-34' },
    { label: '35-44 yrs', value: '35-44' },
    { label: '45-54 yrs', value: '45-54' },
    { label: '55-64 yrs', value: '55-64' },
    { label: '>64 yrs', value: '>64' },
  ];
  const durations = [
    { label: '5-6 hrs', value: '5-6' },
    { label: '6-7 hrs', value: '6-7' },
    { label: '7-8 hrs', value: '7-8' },
    { label: '8-9 hrs', value: '8-9' },
    { label: '9-10 hrs', value: '9-10' },
  ];

  return (
    <ProfileView>
      <LinearGradient colors={['#F9F6FF', '#CFDFF7']} style={styles.profile}>

        <ProfilePointView profile>
          {/* Placeholder image */}
          <Image
            style={{
              width: 85, height: 85, resizeMode: 'contain', marginRight: 20, marginBottom: 30,
            }}
            source={profilePic}
          />
          <ProfilePointView>
            <PageTitle profile>{user.name}</PageTitle>
            <Subheading profile>{user.name}</Subheading>
          </ProfilePointView>
        </ProfilePointView>

        <ProfilePointView>
          <Subheading>Personal Information</Subheading>
          <BodyText profile>
            {`Phone Number: ${user.phone_number ? user.phone_number : '0'}`}
          </BodyText>
          <BodyText profile>
            {`Email: ${user.email ? user.email : 'none'}`}
          </BodyText>
        </ProfilePointView>

        <ProfilePointView>
          <Subheading>Demographics</Subheading>
          <ProfilePointView profile>
            <BodyText profile>
              Age:
            </BodyText>
            <Dropdown
              options={ages}
              val={age}
              onValChange={(value) => setAge(value)}
            />
          </ProfilePointView>
        </ProfilePointView>

        <ProfilePointView>
          <Subheading>Sleep Goals</Subheading>
          <ProfilePointView profile>
            <BodyText profile>
              Duration:
            </BodyText>
            <Dropdown
              options={durations}
              val={duration}
              onValChange={(value) => setDuration(value)}
            />
          </ProfilePointView>
        </ProfilePointView>
      </LinearGradient>

    </ProfileView>
  );
}

export default Profile;
