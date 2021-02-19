#define USE_ARDUINO_INTERRUPTS true
#include <PulseSensorPlayground.h>

// SERIAL_PLOTTER would just output the signal from COM to serial plotter
const int OUTPUT_TYPE = SERIAL_PLOTTER;
const int PULSE_INPUT = A0;
const int THRESHOLD = 550;   // Adjust this number to avoid noise when idle

PulseSensorPlayground pulseSensor;

void setup() {
  
  // 115200 is the suggested baud rate
  Serial.begin(115200);

  // Set the pulseSensor object
  pulseSensor.analogInput(PULSE_INPUT);
  pulseSensor.setSerial(Serial);
  pulseSensor.setOutputType(OUTPUT_TYPE);
  pulseSensor.setThreshold(THRESHOLD); //If we set the threshold high, this means greater voltage pulse are account for a beat

  // Now that everything is ready, start reading the PulseSensor signal.
  if (!pulseSensor.begin()) {
      Serial.println("Initializatio Failed"); //This can attributed to Incorrect pins or not supported boards
      for(;;);
    }
}

void loop() {
  
  delay(20);

  // write the latest sample to Serial monitor.
 pulseSensor.outputSample();

}
