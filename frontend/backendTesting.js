import React, { useEffect, useState } from 'react';
import { Text, Button } from 'react-native';
import Constants from 'expo-constants';

const { manifest } = Constants;

export const Testing = () => {
    const [response, setResponse] = useState({});

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

export const TestingButton = () => {
    const [isClicked, setClicked] = useState(false);

    return (
        <Button onPress={() => setClicked(!isClicked)} title={isClicked ? 'True' : 'False'} />
    )
}