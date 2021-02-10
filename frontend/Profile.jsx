import * as React from 'react';
import { View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import RNPickerSelect from 'react-native-picker-select';
import {
  BodyText, ProfileView, PageTitle, ProfilePointView, Subheading,
} from './Themes';
import styles from './style';

function Dropdown({ options, onValChange }) {
  return (
    <View style={{ marginTop: 10 }}>
      <RNPickerSelect
        placeholder={{ label: '--Select options--', value: null }}
        onValueChange={onValChange}
        items={options}
      />
    </View>
  );
}

function Profile() {
  const [name, setName] = React.useState('First Last');
  const [username, setUsername] = React.useState('username');
  const [password, setPassword] = React.useState('');
  const [phone, setPhone] = React.useState('123-456-7890');
  const [email, setEmail] = React.useState('myemail@gmail.com');
  // these are set by dropdowns
  const [age, setAge] = React.useState('');
  const [duration, setDuration] = React.useState('');
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
            source={require('./assets/default-profile.jpg')}
          />
          <ProfilePointView>
            <PageTitle profile>{name}</PageTitle>
            <Subheading profile>{username}</Subheading>
          </ProfilePointView>
        </ProfilePointView>

        <ProfilePointView>
          <Subheading>Personal Information</Subheading>
          <BodyText profile>
            Phone number:
            {' '}
            {phone}
          </BodyText>
          <BodyText profile>
            Email:
            {' '}
            {email}
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
              //val={age}
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
              //val={duration}
              onValChange={(value) => setDuration(value)}
            />
          </ProfilePointView>
        </ProfilePointView>
      </LinearGradient>

    </ProfileView>
  );
}

export default Profile;
