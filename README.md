# immersive-sleep

Repo for BMES Immersive Sleep Device Design Team!

## Instructions

Step 1: clone and install dependencies

```bash
git clone https://github.com/williamchong256/immersive-sleep.git
cd frontend
npm install
npm install --global expo-cli
```

Step 2: setup AWS Amplify integration

```bash
npm install --global @aws-amplify/cli
amplify pull --appId d32twf9usoa242 --envName dev
```

This should open up a browser window, where you can login to Amplify UI.
Note: This method does not work with Safari. Use another browser like Chrome to open the webpage.

Step 3: run the project

`expo start`

If the tab icons fail to load, try running expo with the Metro bundler cache cleared.

`expo start -c`

## Before Pushing Code

Step 1: ensure your code passes tests and style

`npm run test`

Step 2: if your code fails style, you can try to automatically fix it

`npx eslint '**/*.js' '**/*.jsx' --fix`

## Setup ESP8266 board

The ESP8266 allows us to communicate wirelessly with rasberry pi terminal through TCP/IP protocol

Step 1: Install Arduino IDE

Step 2: Add the following ESP8266 Board Manager Address in Preference, Additional Board URL

`http://arduino.esp8266.com/stable/package_esp8266com_index.json`

Step 3: Under board manager, search for esp8266 library by ESP8266 Community and install it

Step 4: Upload the sketch to the breakout board (NodeMCU, or Arduino + ESP8266)

Step 5: Use HTTP GET request to get SpO2 and heart rate readings from the board
  below is an example written in python

```python
import requests
print(requests.get('The ESP8266's local IP Address').text)
```

The wiring is in ./hardware/code/MAX30100_wifi_interfacing.png
