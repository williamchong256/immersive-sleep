/* code skeleton is from: 
 * https://github.com/HarringayMakerSpace/awsiot/blob/master/Esp8266AWSIoTExample/Esp8266AWSIoTExample.ino
 */
/* Fill in ssid, password, and certificates/keys accordingly */
#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <Adafruit_NeoPixel.h>
 
#define PIN 5
#define NUMPIXELS 12
Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

#include <TimeLib.h>

int brightness = 0;
extern "C" {
#include "libb64/cdecode.h"
}
const char* ssid = "";
const char* password = "";
// Find this awsEndpoint in the AWS Console: Manage - Things, choose your thing
// choose Interact, its the HTTPS Rest endpoint 
const char* awsEndpoint = "";
// For the two certificate strings below paste in the text of your AWS 
// device certificate and private key, comment out the BEGIN and END 
// lines, add a quote character at the start of each line and a quote 
// and backslash at the end of each line:
// xxxxxxxxxx-certificate.pem.crt
const String certificatePemCrt = \
//-----BEGIN CERTIFICATE-----
"";
//-----END CERTIFICATE-----
// xxxxxxxxxx-private.pem.key
const String privatePemKey = \
//-----BEGIN RSA PRIVATE KEY-----
"";
//-----END RSA PRIVATE KEY-----
// This is the AWS IoT CA Certificate from: 
// https://docs.aws.amazon.com/iot/latest/developerguide/managing-device-certs.html#server-authentication
const String caPemCrt = \
//-----BEGIN CERTIFICATE-----
"";
//-----END CERTIFICATE-----
WiFiClientSecure wiFiClient;
void msgReceived(char* topic, byte* payload, unsigned int len);
PubSubClient pubSubClient(awsEndpoint, 8883, msgReceived, wiFiClient); 
void setup() {
  Serial.begin(115200); Serial.println();
  Serial.println("ESP8266 AWS IoT Example");
  Serial.print("Connecting to "); Serial.print(ssid);
  WiFi.begin(ssid, password);
  WiFi.waitForConnectResult();
  Serial.print(", WiFi connected, IP address: "); Serial.println(WiFi.localIP());
  // get current time, otherwise certificates are flagged as expired
  setCurrentTime();
  uint8_t binaryCert[certificatePemCrt.length() * 3 / 4];
  int len = b64decode(certificatePemCrt, binaryCert);
  wiFiClient.setCertificate(binaryCert, len);
  
  uint8_t binaryPrivate[privatePemKey.length() * 3 / 4];
  len = b64decode(privatePemKey, binaryPrivate);
  wiFiClient.setPrivateKey(binaryPrivate, len);
  uint8_t binaryCA[caPemCrt.length() * 3 / 4];
  len = b64decode(caPemCrt, binaryCA);
  wiFiClient.setCACert(binaryCA, len);

  pixels.begin();
  pixels.setBrightness(30); //adjust brightness here
  pixels.show(); // Initialize all pixels to 'off'
}
unsigned long lastPublish;
int msgCount;
void loop() {
  pubSubCheckConnect();
  if (millis() - lastPublish > 10000) {
    String msg = String("Hello from ESP8266: ") + ++msgCount;
    pubSubClient.publish("outTopic", msg.c_str());
    Serial.print("Published: "); Serial.println(msg);
    lastPublish = millis();
  }

  //Convert other way around to avoid using strings, "iso format"?
  String alarmTime = awsEndpoint;
  String currentTime = "";
  currentTime.concat(hour());
  currentTime = currentTime + ":";
  currentTime.concat(minute());
  
  //Convert current time to string
  //Assuming format as 24 hour time
  
  if(currentTime >= alarmTime)//start if time == actual real world time
  {
    if(brightness < 100)
    {
      brightness++;
    }
    for(int i=0; i<NUMPIXELS; i++)
    {
      pixels.setPixelColor(i, pixels.Color(brightness, 0, 0));
      pixels.show();
    }  
    delay(250);
  }
}

void msgReceived(char* topic, byte* payload, unsigned int length) { //Get message with this function
  Serial.print("Message received on "); Serial.print(topic); Serial.print(": ");
  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
  }
  Serial.println();

  //Put implementation here to get access to payload
}
void pubSubCheckConnect() {
  if ( ! pubSubClient.connected()) {
    Serial.print("PubSubClient connecting to: "); 
    Serial.print(awsEndpoint);
    while ( ! pubSubClient.connected()) {
      Serial.print(".");
      pubSubClient.connect("ESPthing");
    }
    Serial.println(" connected");
    pubSubClient.subscribe("inTopic");
  }
  pubSubClient.loop();
}
int b64decode(String b64Text, uint8_t* output) {
  base64_decodestate s;
  base64_init_decodestate(&s);
  int cnt = base64_decode_block(b64Text.c_str(), b64Text.length(), (char*)output, &s);
  return cnt;
}
void setCurrentTime() {
  configTime(3 * 3600, 0, "pool.ntp.org", "time.nist.gov");
  Serial.print("Waiting for NTP time sync: ");
  time_t now = time(nullptr);
  while (now < 8 * 3600 * 2) {
    delay(500);
    Serial.print(".");
    now = time(nullptr);
  }
  Serial.println("");
  struct tm timeinfo;
  gmtime_r(&now, &timeinfo);
  Serial.print("Current time: "); Serial.print(asctime(&timeinfo));
}

/*
#include <Adafruit_NeoPixel.h>
 
#define PIN 5
#define NUMPIXELS 12
Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

  int brightness = 0;
 
void setup() {
  pixels.begin();
  pixels.setBrightness(30); //adjust brightness here
  pixels.show(); // Initialize all pixels to 'off'
}
 
void loop() 
{    
  if(1 == 1)//start if time == actual real world time
  {
    if(brightness < 100)
    {
      brightness++;
    }
    for(int i=0; i<NUMPIXELS; i++)
    {
      pixels.setPixelColor(i, pixels.Color(brightness, 0, 0));
      pixels.show();
    }  
    delay(250);
  }
}
*/
