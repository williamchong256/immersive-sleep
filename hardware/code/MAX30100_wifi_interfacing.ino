/*
 * Modified from https://tttapa.github.io/ESP8266/Chap10%20-%20Simple%20Web%20Server.html
 * Create a ESP8266 Web server that could send the data of MAX30100 to the client
 * The client can be a computer, rasberry pi, or another ESP8266 that connect to your LAN
 * Clients can communicate with the ESP8266 board with http GET request
 */
#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WiFiMulti.h> 
#include <ESP8266mDNS.h>
#include <ESP8266WebServer.h> 

ESP8266WiFiMulti wifiMulti;
ESP8266WebServer server(80);
MDNSResponder mdns;

//The webserver locate under your LAN, insert your wifi name and passwd
char* wifi_1 = "your_wifi_ssid";
char* password_1 = "your_wifi_passwd";

#include <Wire.h>
#include "MAX30100_PulseOximeter.h"
#define REPORTING_PERIOD_MS 1000

PulseOximeter pox;
uint32_t tsLastReport = 0;

void handleRoot();
void handleNotFound();

void setup() {
  //Setup COM
  Serial.begin(115200);
  delay(10);
  Serial.println('\n');
  
  //Connecting to your wifi
  WiFi.begin(wifi_1, password_1);
  Serial.println("Connecting...");
  while(WiFi.status() != WL_CONNECTED)
  {
    delay(250);
    Serial.print('.');
  }

  //Connnected
  Serial.println('\n');
  Serial.print("Connected to ");
  Serial.println(WiFi.SSID());
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());

  //Setup mDNS so that you can use http://immersivesleep.local/ to access the device's IP
  if(mdns.begin("immersivesleep", WiFi.localIP()))
  {
    MDNS.addService("http", "tcp", 80);
    Serial.println("mDNS started!");   
  }
  else{
   Serial.println("Error setting up mDNS");
  }
   
  //Handle GET requests
  server.on("/", HTTP_GET, handleRoot);
  server.onNotFound(handleNotFound);

  //Server begin
  server.begin();
  Serial.println("HTTP server started!");

  //Initialize PulseOx
  Wire.begin(D1, D2); //D1--SDA, D2--SCL
  Serial.print("Initializing PulseOx");

  if(!pox.begin()){
    Serial.println("FAILED");
    while(true);
  }
  else{
    Serial.println("SUCCESS");
    pox.setIRLedCurrent(MAX30100_LED_CURR_7_6MA);
  }
}

void loop() {
  // put your main code here, to run repeatedly:
  pox.update();
  if(millis() - tsLastReport > REPORTING_PERIOD_MS){
    Serial.print("Heart rate: ");
    Serial.print(pox.getHeartRate());
    Serial.print("bpm / SpO2: ");
    Serial.print(pox.getSpO2());
    Serial.println("%");

    tsLastReport = millis();
  }
  server.handleClient();
}

void handleRoot() {
  String data = "Heart rate: " + String(pox.getHeartRate()); 
  data += "bpm / SpO2: " + String(pox.getSpO2());
  server.send(200, "text/plain", data);
}

void handleNotFound(){
  server.send(404, "text/plain", "404: Not found");
}
