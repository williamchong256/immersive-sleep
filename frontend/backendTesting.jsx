import React from 'react';
import { Button } from 'react-native';
import Constants from 'expo-constants';

const { manifest } = Constants;

const pushBackend = () => {
  const apiURL = `http://${manifest.debuggerHost.split(':').shift()}:4000/push`;
  fetch(apiURL, {
    method: 'POST',
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
};

const registerPush = (expoPushToken) => {
  const apiURL = `http://${manifest.debuggerHost.split(':').shift()}:4000/pushToken`;
  fetch(apiURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ expoPushToken }),
  })
    .then((response) => response.json())
    .then((json) => console.log('Success:', json))
    .catch((err) => console.log(err));
};

export function RegisterPushButton(props) {
  return (
    <Button onPress={() => registerPush(props.expoPushToken)} title="Register Push" />
  );
}

export class TestingButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

    setValue = () => {
      const apiURL = `http://${manifest.debuggerHost.split(':').shift()}:4000/counter`;
      fetch(apiURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state),
      })
        .then((response) => response.json())
        .then((json) => this.setState({ value: json.value }))
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err));
    }
}

export function PushButton() {
  return (
    <Button onPress={pushBackend} title="Send Push" />
  );
}
