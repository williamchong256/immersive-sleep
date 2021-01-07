import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import * as SecureStore from 'expo-secure-store';
import { Text, Button, Platform } from 'react-native';
import Constants from 'expo-constants';
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
    if (response?.type === 'success' && response.params.code) {
      const { code } = response.params;
      const apiURL = `http://${manifest.debuggerHost.split(':').shift()}:4000/api/token`;
      fetch(apiURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code,
        }),
      }).then((res) => res.json())
        .then((json) => {
          // eslint-disable-next-line camelcase
          const { access_token, refresh_token } = json;
          if (Platform.OS !== 'web') {
            SecureStore.setItemAsync('SPOTIFY_REFRESH_TOKEN', refresh_token)
              .catch((err) => console.log(err));
            setSpotify({
              code,
              access_token,
            });
          }
        })
        .catch((err) => console.log(err));
    }
  }, [response]);

  return (
    <DataScrollView>
      <Button
        style={styles.container}
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
      <Text>{spotify.code}</Text>
      <Text>-----------</Text>
      <Text>{spotify.access_token}</Text>
    </DataScrollView>
  );
}
