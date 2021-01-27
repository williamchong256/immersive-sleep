import * as React from 'react';
import { Auth } from 'aws-amplify';
import { UserData, SignIn } from './AmplifyAuth';

function Profile({ navigation }) {
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(() => setLoggedIn(true))
      .catch((err) => console.log(err));
  }, []);

  return (
    loggedIn ? <UserData navigation={navigation} /> : <SignIn navigation={navigation} />
  );
}

export default Profile;
