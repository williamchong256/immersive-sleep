/* eslint-disable camelcase */
import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import * as SecureStore from 'expo-secure-store';
import { Text, Button, Platform } from 'react-native';
import Constants from 'expo-constants';
import SpotifyWebApi from 'spotify-web-api-js';
import styles from './style';
import { DataScrollView } from './Themes';

const { manifest } = Constants;
WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export default function Spotify() {
  const [spotify, setSpotify] = React.useState({});
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '5e45224223b649f1b1b0a1644a47e5c2',
      scopes: ['user-read-email', 'playlist-modify-public'],
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      // For usage in managed apps using the proxy
      redirectUri: makeRedirectUri({
        // For usage in bare and standalone
        native: 'immersive-sleep://redirect',
      }),
    },
    discovery,
  );

  React.useEffect(() => {
    // eslint-disable-next-line no-undef
    const controller = new AbortController();

    SecureStore.getItemAsync('SPOTIFY_REFRESH_TOKEN')
      .then((refresh_token) => {
        if (refresh_token) {
          const apiURL = `http://${manifest.debuggerHost.split(':').shift()}:4000/spotify/refresh_token`;
          fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            signal: controller.signal,
            body: JSON.stringify({
              refresh_token,
            }),
          }).then((res) => res.json())
            .then((json) => {
              const { access_token } = json;
              setSpotify({
                access_token,
              });
            })
            .catch((err) => {
              if (!controller.signal.aborted) {
                console.log(err);
              }
            });
        }
      })
      .catch((err) => console.log(err));

    return () => {
      controller.abort();
    };
  }, []);

  React.useEffect(() => {
    // eslint-disable-next-line no-undef
    const controller = new AbortController();

    if (response?.type === 'success' && response.params.code) {
      const { code } = response.params;
      const apiURL = `http://${manifest.debuggerHost.split(':').shift()}:4000/spotify/token`;
      fetch(apiURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          code,
        }),
      }).then((res) => res.json())
        .then((json) => {
          const { access_token, refresh_token } = json;
          if (Platform.OS !== 'web') {
            SecureStore.setItemAsync('SPOTIFY_REFRESH_TOKEN', refresh_token)
              .catch((err) => console.log(err));
            setSpotify({
              access_token,
            });
          }
        })
        .catch((err) => {
          if (!controller.signal.aborted) {
            console.log(err);
          }
        });
    }

    return () => {
      controller.abort();
    };
  }, [response]);

  const test = async () => {
    const { access_token } = spotify;
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(access_token);
    try {
      const data = await spotifyApi.getMe();
      const { display_name } = data;
      setSpotify({
        access_token,
        display_name,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <DataScrollView>
      {!spotify.access_token ? (
        <Button
          style={styles.container}
          disabled={!request}
          title="Login"
          onPress={() => {
            promptAsync();
          }}
        />
      ) : (
        <Button
          style={styles.container}
          title="Test"
          onPress={() => {
            test();
          }}
        />
      )}
      {spotify.display_name && <Text>{`Welcome ${spotify.display_name}!`}</Text>}
    </DataScrollView>
  );
}
