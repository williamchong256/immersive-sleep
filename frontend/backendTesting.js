import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import Constants from 'expo-constants';

const Testing = () => {
    const [response, setResponse] = useState('');
    const { manifest } = Constants;


    useEffect(() => {
        const apiURL = `http://${manifest.debuggerHost.split(':').shift()}:4000`;
        fetch(apiURL, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => setResponse(json))
        .catch(err => setResponse(err));
    });

    return (
        <Text>{response.text}</Text>
    );
}

export default Testing;