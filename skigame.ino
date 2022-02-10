#define USE_ARDUINO_INTERRUPTS true                   // Set-up low-level interrupts for most acurate BPM math.
#include <PulseSensorPlayground.h>                    // Includes the PulseSensorPlayground Library.   

const int PulseWire = 0;                              // PulseSensor PURPLE WIRE connected to ANALOG PIN 0
const int BUTTON_PIN = 7;                             // the number of the pushbutton pin

int lastState = LOW;                                  // the previous state from the input pin
int currentState;                                     // the current reading from the input pin
int Threshold = 550;
int Signal;

                               
PulseSensorPlayground pulseSensor;        // Creates an instance of the PulseSensorPlayground object called "pulseSensor"

void setup() {   
  Serial.begin(9600);                     // For Serial Monitor

  pulseSensor.analogInput(PulseWire);     // Configure the PulseSensor object, by assigning our variables to it. 
  pulseSensor.setThreshold(Threshold);   
  pinMode(BUTTON_PIN, INPUT_PULLUP);

   if (pulseSensor.begin()) {             // Double-check the "pulseSensor" object was created and "began" seeing a signal. 
    Serial.println("SUCCESS");            //This prints one time at Arduino power-up,  or on Arduino reset.  
  }
}



void loop() {
  currentState = digitalRead(BUTTON_PIN);// read the state of the switch/button:



 int myBPM = pulseSensor.getBeatsPerMinute();  // Calls function on our pulseSensor object that returns BPM as an "int".
                                               // "myBPM" hold this BPM value now. 

if (pulseSensor.sawStartOfBeat()) {            // Constantly test to see if "a beat happened". 
 Serial.write(myBPM);                        // Print the value inside of myBPM. 
   if(lastState == HIGH && currentState == LOW)
    Serial.write(1);
  else
    Serial.write(0);
  // save the the last state
  lastState = currentState;
}

  delay(20);                    // considered best practice in a simple sketch.

}
