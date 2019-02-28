const int waterPin = 10; // the pin that the LED is attached to
const int buttonPin = 9;      // digital input 
int incomingByte;     // a variable to read incoming serial data into
int sensorValue;
int sensorValue1;
int sensorValue2;
int ledpin=8;
boolean pumpprepare=false;

 
void setup() {
 Serial.begin(9600);             // initialize serial communication
 pinMode(waterPin, OUTPUT);        // initialize the LED pin as an output
  pinMode(buttonPin, INPUT);
  pinMode(ledpin, OUTPUT);
   while (Serial.available() <= 0) {
    Serial.println("hello"); // send a starting message
    delay(300);              // wait 1/3 second
  }
}


void loop() {
 digitalWrite(ledpin, HIGH); 
 if (Serial.available() > 0) {   // see if there's incoming serial data
  sensorValue1 = analogRead(A0);
   //Serial.println(sensorValue1);
   Serial.print(sensorValue1);
   Serial.print(",");

  sensorValue2 = digitalRead(buttonPin);
   Serial.println(sensorValue2); 
   
   incomingByte = Serial.read(); // read it

  if(incomingByte=='H'){
    pumpprepare=true;
  }
  if(incomingByte=='T'){
    pumpprepare=false;
    }
   if(pumpprepare==true){
   if (sensorValue1 >= 20 && sensorValue2 == 0){
      digitalWrite(waterPin, HIGH);
    } else {
      digitalWrite(waterPin, LOW);
    }
   }else{
    digitalWrite(waterPin, LOW);
    }
   
//
//   if(incomingByte=='H'){
//   if (sensorValue1 < 20 || sensorValue2 == 1){
//      digitalWrite(waterPin, LOW);
//    } else {
//      digitalWrite(waterPin, HIGH);
//    }
//   }
//   
  
//    if(sensorValue2==1){
//      pump=false;
//      digitalWrite(waterPin, LOW); 
//      }else if(sensorValue1>20){
//        pump=true;
//        }
//      
//    if(sensorValue1<=20){
//       pump=false;
//      digitalWrite(waterPin, LOW);
//      }else if(pump==true){
//       digitalWrite(waterPin, HIGH);
//        }
//   }else{
////    pump=false;
//      digitalWrite(waterPin, LOW); 
//    }
    //
//   if (incomingByte == 'H' && sensorValue1>1) {    
//    if (sensorValue1<=10 || sensorValue2 == 1 ) {   
//      pump=false;
//      digitalWrite(waterPin, LOW);  
//     
//   }
//    else if (pump == true){
//      digitalWrite(waterPin, HIGH); 
//    } 
//  }
//  if(incomingByte=='T'){
//    pump=true;
//    }
   
   
 }
}
