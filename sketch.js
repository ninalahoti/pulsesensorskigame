let serial;
let counter = 0;
let introaudio;

let buttonpressbool;

let heartrates = [];
let hrstoanalyze = [];
let hrrange;
let averagehr = 0;
let hrthreshold = "???";

let gameaudio;
let gametimer = 0;
let starttime = 0;
let statetimer = 0;
let newstatetime = 0;
let newstatebool = false;
let statename = "NONE";
let winbool = false;

let myanimations = [];
let asleep = [];
let sleepy = [];
let neutral = [];
let anxious = [];
let freakingout = [];
let animationindex = 2;
let mytimelog = 0;
let imageindex = 0;
let stateindex;

let mysounds = [];
let randsoundindex;

let replaybool = false;

function preload() {
  soundFormats('mp3');
  gameaudio = loadSound('gameaudio.mp3');
  gameaudio.playMode("restart");
  introaudio = loadSound('introaudio.mp3');
  introaudio.playMode("restart");
  introaudio.setVolume(0.7);
  myanimations[0] = loadImage('animations/asleep.gif');
  myanimations[1] = loadImage('animations/sleepy.gif');
  myanimations[2] = loadImage('animations/neutral.gif');
  myanimations[3] = loadImage('animations/anxious.gif');
  myanimations[4] = loadImage('animations/freakingout.gif');
  myanimations[5] = loadImage('animations/snow.gif');
  asleep[0] = loadImage('frames/agsleepy3.png');
  asleep[1] = loadImage('frames/agasleep1.png');
  asleep[2] = loadImage('frames/agasleep2.png');
  asleep[3] = loadImage('frames/agasleep3.png');
  asleep[4] = loadImage('frames/agasleep3.png');
  asleep[5] = loadImage('frames/agasleep3.png');
  asleep[6] = loadImage('frames/agasleep3.png');
  sleepy[0] = loadImage('frames/agsleepy1.png');
  sleepy[1] = loadImage('frames/agsleepy1.png');
  sleepy[2] = loadImage('frames/agsleepy2.png');
  sleepy[3] = loadImage('frames/agsleepy3.png');
  sleepy[4] = loadImage('frames/agsleepy3.png');
  sleepy[5] = loadImage('frames/agsleepy2.png');
  neutral[0] = loadImage('frames/agneutral1.png');
  neutral[1] = loadImage('frames/agneutral2.png');
  neutral[2] = loadImage('frames/agneutral3.png');
  neutral[3] = loadImage('frames/agneutral2.png');
  anxious[0] = loadImage('frames/aganxious1.png');
  anxious[1] = loadImage('frames/aganxious2.png');
  anxious[2] = loadImage('frames/aganxious3.png');
  anxious[3] = loadImage('frames/aganxious4.png');
  freakingout[0] = loadImage('frames/agfreakingout1.png');
  freakingout[1] = loadImage('frames/agfreakingout2.png');
  freakingout[2] = loadImage('frames/agfreakingout3.png');
  freakingout[3] = loadImage('frames/agfreakingout3.png');
  freakingout[4] = loadImage('frames/agfreakingout3.png');
  freakingout[5] = loadImage('frames/agfreakingout3.png');
}

function setup() {
  createCanvas(600, 600);
  // Instantiate our SerialPort object
  serial = new p5.SerialPort();

  // Let's list the ports available
  let portlist = serial.list();

  // Assuming our Arduino is connected, let's open the connection to it
  // Change this to the name of your arduino's serial port
  serial.open("/dev/tty.usbmodem142101");

  // Register some callbacks

  // When we connect to the underlying server
  serial.on('connected', serverConnected);

  // When we get a list of serial ports that are available
  serial.on('list', gotList);

  // When we some data from the serial port
  serial.on('data', gotData);

  // When or if we get an error
  serial.on('error', gotError);

  // When our serial port is opened and ready for read/write
  serial.on('open', gotOpen);
}

// We are connected and ready to go
function serverConnected() {
    print("We are connected!");
}

// Got the list of ports
function gotList(thelist) {
  // theList is an array of their names
  for (let i = 0; i < thelist.length; i++) {
    // Display in the console
    print(i + " " + thelist[i]);
  }
}

// Connected to our serial device
function gotOpen() {
  print("Serial Port is open!");
}

// Ut oh, here is an error, let's log it
function gotError(theerror) {
  print(theerror);
}

// There is data available to work with from the serial port
function gotData() {
  let currentString = serial.readStringUntil("\r\n");
}

function sortarduinodata() {
  if (serial.available() > 0) {
    let data = serial.read();
    if (data == 1) {
      buttonpressbool = true;
    } else if (data > 1) {
      heartrates.unshift(data);
    }
  }
  if (heartrates.length > 50) {
    heartrates.length = 40;
  }
}

function mybutton() {
  if (buttonpressbool == true) {
    if (counter == 1) {
      hrthreshold = averagehr;
    }
    if (counter == 4) {
      counter = 1;
    } else if ((counter == 1) && (replaybool == true)) {
      counter = 3;
    } else {
      counter += 1;
    }
    buttonpressbool = false;
  }
}

function mydelay(myfunction, seconds) {
  if ((millis() - mytimelog) / 1000 >= seconds) {
    myfunction();
  }
}

function animate(images, speed) {
  var currentframe;
  currentframe = images[imageindex];
  mydelay(function() {
    mytimelog = millis();
    if ((counter != 4) && (gametimer < 0.5)) {
        imageindex = 0;
    } else if (imageindex + 1 == images.length) {
      imageindex = 0;
    } else {
      imageindex += 1;
    }
  }, speed);
  image(currentframe, 50, 100);
}

function startscreen() {
  text("WELCOME", 0, 230, width);
  text("PRESS AND HOLD BUTTON TO START", 0, 400, width);
  mybutton();
}

function calibratethreshold() {
  hrsum = 0;
  hrrange = max(hrstoanalyze) - min(hrstoanalyze)
  if ((hrrange <= 10) || (heartrates.length <= 10)) {
    if (heartrates.length > 10) {
      var statedhr = round(averagehr);
      text("THE SENSOR READS YOUR HEART RATE AS ABOUT " + str(statedhr), 0, 250, width);
      text("IF THIS SEEMS CORRECT, PRESS AND HOLD BUTTON TO PROCEED", 50, 350, 500);
      mybutton();
    }
    } else {
    text("PLEASE WAIT WHILE THE SENSOR CALIBRATES...", 0, 300, width);
  }
}

function instructions() {
  text("UH OH! YOU JUST GOT ON A SKI LIFT, BUT YOU CAN’T REACH THE SAFETY BAR! IF YOU GET TOO NERVOUS, YOU’LL FREAK OUT, BUT IF YOU STAY TOO CALM, YOU’LL FALL ASLEEP—EITHER WAY, YOU’LL FALL OFF. MAKE IT TO THE TOP OF THE MOUNTAIN SAFELY!", 100, 200, 400);
  text("PRESS AND HOLD BUTTON TO START", 0, 400, width);
  mybutton();
}

function runanimations() {
  if (averagehr > hrthreshold + 5) {
    animationindex = 3;
    animate(anxious, 0.33);
    if (stateindex != animationindex) {
      newstatebool = true;
    }
    statename = "ANXIOUS";
  } else if (averagehr < hrthreshold - 5) {
    animationindex = 1;
    animate(sleepy, 0.33);
    if (stateindex != animationindex) {
      newstatebool = true;
    }
    statename = "SLEEPY";
  } else {
    animationindex = 2;
    animate(neutral, 0.33);
    statename = "NEUTRAL";
  }
  var mygif = myanimations[animationindex]
}

function runsounds() {
  
}

function gametime() {
  if (gametimer >= 60) {
    winbool = true;
    counter = 4;
  }
}

function statetime() {
  if ((statetimer >= 10) && (animationindex != 2) && (newstatebool == false)) {
    counter = 4;
  }
}

function resetstatetime() {
  if (newstatebool == true) {
    newstatetime = round(millis()/1000, 2);
    stateindex = animationindex;
    newstatebool = false;
  }
}

function runskigame() {
  runanimations();
  runsounds();
  gametime();
  resetstatetime();
  statetime();
}

function gameend() {
  replaybool = true;
  if (winbool == true) {
    statename = "NEUTRAL";
    animationindex = 2;
    animate(neutral, 0.33);
    text("YOU MADE IT TO THE TOP!", 0, 100, width);
    text("PRESS AND HOLD BUTTON TO PLAY AGAIN", 0, 500, width);
  } else if (averagehr > hrthreshold) {
    statename = "FREAKING OUT";
    animationindex = 4;
    animate(freakingout, 0.33);
    text("YOU FREAKED OUT AND FELL", 0, 100, width);
    text("PRESS AND HOLD BUTTON TO PLAY AGAIN", 0, 500, width);
  } else if (averagehr < hrthreshold) {
    statename = "ASLEEP";
    animationindex = 0;
    animate(asleep, 0.33);
    text("YOU FELL ASLEEP AND FELL", 0, 100, width);
    text("PRESS AND HOLD BUTTON TO PLAY AGAIN", 0, 500, width);
  }
  mybutton();
}


function myaudio() {
  if (counter == 3) {
    if (gameaudio.isPlaying() == false) {
      gameaudio.loop();
    }
    if (introaudio.isPlaying() == true) {
      introaudio.stop();
    } 
  } else {
    if (gameaudio.isPlaying() == true) {
      gameaudio.pause();
    }
    if (introaudio.isPlaying() == false) {
      introaudio.loop();
    }
  }
}

function draw() {
  myaudio();
  var backgroundimage = myanimations[5];
  image(backgroundimage, 0, 0);
  sortarduinodata();
  hrstoanalyze = heartrates.slice(0, 20);
  let sum = 0;
  for (let i = 0; i < hrstoanalyze.length; i++) {
    sum += hrstoanalyze[i];
  }
  averagehr = sum / hrstoanalyze.length;
  gametimer = round((millis())/1000 - starttime, 2);
  statetimer = round((millis())/1000 - newstatetime, 2);
  textSize(12);
  textAlign(LEFT);
  textFont('PressStart2P')
  text("THRESHOLD HR = " + str(hrthreshold), 10, 10);
  // text("ANIMATION # = " + str(animationindex), 275, 10);
  text("AVERAGE HR = " + str(averagehr), 10, 30);
//   text("CURRENT STATE = " + statename, 275, 30);
//   text("GAME TIMER = " + str(gametimer), 10, 50);
//   var myms = round(millis()/1000, 2);
//   text("NEW GAME VS MILLIS = " + str(starttime) + " vs. " + str(myms), 275, 50);
//   text("STATE TIMER = " + str(statetimer), 10, 70);
//   text("NEW STATE VS MILLIS = " + str(newstatetime) + " vs. " + str(myms), 275, 70);
//   text("NEW STATE BOOL = " + str(newstatebool), 10, 90);
//   text("COUNTER = " + str(counter), 10, 110);
  
//   var hrdiff;
//   var reportdiff;
//   var hrstat;
//   if (averagehr > hrthreshold) {
//     hrdiff = averagehr - hrthreshold;
//     hrstat = " ABOVE THE THRESHOLD";
//   } else {
//     hrdiff = hrthreshold - averagehr;
//     hrstat = " BELOW THE THRESHOLD";
//   } 
//   reportdiff = round(hrdiff);
//   text("YOUR HR IS " + str(reportdiff) + hrstat, 275, 90);
  
  textAlign(CENTER, CENTER);
  
  switch (counter) {
    case 0:
      startscreen();
      break;

    case 1:
      calibratethreshold();
      starttime = round(millis()/1000, 2);
      newstatetime = round(millis()/1000, 2);
      break;

    case 2:
      imageindex = 0;
      instructions();
      starttime = round(millis()/1000, 2);
      newstatetime = round(millis()/1000, 2);
      break;

    case 3:
      buttonpressbool = false;
      gameaudio.play();
      runskigame();
      break;

    case 4:
      gameaudio.pause();
      gameend();
      starttime = round(millis()/1000, 2);
      newstatetime = round(millis()/1000, 2);
      break;
  }
}