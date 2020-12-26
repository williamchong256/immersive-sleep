import React, { useEffect, useState } from 'react';
import { Text, Button } from 'react-native';
import Constants from 'expo-constants';

const { manifest } = Constants;

export const Testing = () => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    const apiURL = `http://${manifest.debuggerHost.split(':').shift()}:4000`;
    fetch(apiURL, {
      method: 'GET',
    })
      .then((backendResponse) => backendResponse.json())
      .then((json) => setResponse(json))
      .catch((err) => setResponse(err));
  });

  return (
    <Text>{response.text}</Text>
  );
};

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

    render() {
      const { value } = this.state;
      return (
        <Button onPress={this.setValue} title={value.toString()} />
      );
    }
}
