const express = require('express');

const app = express();
const { Expo } = require('expo-server-sdk');

const PORT = 4000;

app.use(express.json());

const expo = new Expo({ accessToken: process.env.EXPO_ACCESS_TOKEN });

let pushToken;

app.post('/pushToken', (req, res) => {
  pushToken = req.body.expoPushToken;
  console.log(pushToken);
  if (pushToken) {
    res.json('Success');
  } else {
    res.status(400).json('Error');
  }
});

app.post('/push', (req, res) => {
  const messages = [{
    to: pushToken,
    title: 'Backend',
    sound: 'default',
    body: 'This is a test notification sent from the backend',
    data: { withSome: 'data' },
  }];

  expo.sendPushNotificationsAsync(messages)
    .then((ticket) => {
      console.log(ticket);
      res.json(ticket);
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
