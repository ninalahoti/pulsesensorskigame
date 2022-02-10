
# PULSE SENSOR SKI GAME
A game exploring the duality of sound and heart rate as input

Made as part of the course Currents: Playful Prototyping taught by Jason Li in the Art, Media & Technology department at Parsons School of Design

A playable demo is available <a href="https://ninalahoti.com/skigame/">here</a>.

## **CONTEXT**

### THEME

Week 1’s theme is **Duality**. 

On my daily commute, I typically wear noise-cancelling ear buds. However, the other day, I went on a walk with a friend and was forced to recognize how loud the streets are. As someone sensitive to sound, the contrast between my usual sonic background (nearly white noise) and the unfiltered sounds of the city was particularly jarring. In this week’s prototype, I wanted to play with sound as central part of a game and use calming tones and harsh noises as opposing forces in my gameplay to emphasize the duality of sound.

### NOVEL INPUT

This week, I chose to explore using heart rate as an input in gameplay. 

## PRECEDENTS

### N64 TETRIS WITH BIO SENSOR (1998)

In 1998, Nintendo released a version of Tetris that takes input from the user’s N64 Bio Sensor, an ear clip accessory that monitors heart rate. The game of Tetris is then altered based on heart rate, but the degree to which the game changes is relatively negligible unless the user increases their heart rate dramatically.[^1]

### STANFORD BOREDOM XBOX CONTROLLER (2014)

A Stanford electrical engineering lab modified an Xbox 360 controller such that it could measure “pulse or breathing rate”—Gregory Kovacs, a professor, and Corey McCall, a PhD candidate, attached a pulse oximeter to the controller. Extrapolating this data to make assumptions about blood pressure, Kovacs and McCall assert that the controller can detect boredom and that this detection could be useful in game design.[^2]

### PULSE SENSOR EMBEDDED GAME CONTROLLER (2015)

In the journal article “Heart Rate Monitoring by a Pulse Sensor Embedded Game Controller,” authors Erika Abe, Hiroshi Chigira, Koichi Fujiwarai, Toshitaka Yamakawa, and Manabu Kano discuss measuring users’ heart rates during gameplay through a controller and using this data in interaction; they describe an experiment that showed that “correlation... between [heart rate] and the game score varied according to player condition,” which “indicates that player condition during video game could be estimated by monitoring [heart rate] and the game score simultaneously.[^3]

### PLAYPULSE GAMING BIKE (2021)

PlayPulse ONE is a “gaming bike” with “handlebars with game controllers as well as heart-rate sensors combine immersive gaming with measurable exercise results.” Heart rate is then used to track a user’s progress.[^4]

## **CONCEPT AND METHOD**

While precedents have incorporated heart rate into their projects, these precedents seemed rare, and I could not find any that used heart rate as a main input. To push experimentation past just mere inclusion, I decided to create a game that used heart rate as the only control.

When I was 5, I went skiing with my family. As my parents and I were getting on a ski lift, I fell off as it began to rise. The people working the ski lift put me on the chairlift behind my parents’, but they neglected to lower the safety bar. Because I was a small child, I couldn’t reach the bar on my own and had to ride unsecured. My mom tells this story often, emphasizing how she didn’t want to appear nervous (because she thought I would freak out and fall off) and how she also didn’t want to seem calm (because she thought I would fall asleep... and fall off). 

In my game, I will recreate this situation with the user playing as young me. The game will be played by wearing a heart rate monitor and headphones. As the user plays, sounds proven to have calming effects will play through the user’s headphones. Randomly, the headphones will play harsh and intentionally jarring sounds. Assuming that these sounds will be surprising, I expect the user’s heart rate to increase. If the user’s heart rate increases too much, the character will begin to freak out and eventually fall off the ski lift. If the user’s heart rate decreases too much, the character will fall asleep and also fall off the ski lift. 

The game strategy would revolve around bodily awareness and improving one’s ability to be unfazed by these disturbances. To make the game more difficult as one plays, this range the player’s heart rate must remain in will shrink over time.

To build this game, I will use a microcontroller board, a pulse sensor, and headphones. I will code the game using the Arduino programming language.

## **GOALS**

1. Test the extent to which heart rate can be used as an input in gameplay
2. Gain insight into if bodily awareness techniques could serve as a safeguard to prevent elevated anxiety in noisy environments

# ANIMATION

Because the game is tied to a personal story, I wanted the game’s visual to have a comfy feel. Pixel art feels familiar to me and is common and “retro” to the point that it evokes nostalgia for many people, so it seemed perfect for this game.

I made my pixel art assets in Illustrator. I then turned these into mini-animations of three to four frames. 

## CHARACTER DESIGN
<img src="https://user-images.githubusercontent.com/71244080/153318253-8c7065ad-50fc-4d41-b82c-312296351381.png" alt="conceptimage" height="200"/> <img src="https://user-images.githubusercontent.com/71244080/153318272-7935077b-22d6-4b78-a282-816750089022.png" alt="conceptimage" height="200"/> <img src="https://user-images.githubusercontent.com/71244080/153318278-12f991dd-1f7c-436a-b2b5-9d72da98b3b3.png" alt="conceptimage" height="200"/> <img src="https://user-images.githubusercontent.com/71244080/153318290-e272d1ac-0aaa-4c8f-a379-eb4f7fd1ee79.png" alt="conceptimage" height="200"/>

## CHAIR LIFT DESIGN

<img src="https://user-images.githubusercontent.com/71244080/153318335-b464a2f3-0a4f-443a-a4b0-844f277380e2.png" alt="conceptimage" height="150"/> <img src="https://user-images.githubusercontent.com/71244080/153318345-19e621de-4706-49a4-90c7-0013bc83d1fc.png" alt="conceptimage" height="150"/> <img src="https://user-images.githubusercontent.com/71244080/153318361-1b168f97-29e5-45bb-9dfc-0e10c2a4c3ed.png" alt="conceptimage" height="150"/> <img src="https://user-images.githubusercontent.com/71244080/153318369-dfd55c44-fbdc-48a8-b71c-346c844e93f2.png" alt="conceptimage" height="150"/>


## ANIMATION

### FINALIZED ANIMATIONS

<img src="https://user-images.githubusercontent.com/71244080/153319893-4a56d25f-ccdd-4dab-b8c2-bbf680642c60.gif" alt="conceptanimation" width="300"/> <img src="https://user-images.githubusercontent.com/71244080/153319984-eed0c3f4-68a6-406d-9d1e-337567956c16.gif" alt="conceptanimation" width="300"/> <img src="https://user-images.githubusercontent.com/71244080/153320049-25e11421-1a57-4b93-bfb8-ff417ec0ac14.gif" alt="conceptanimation" width="300"/>
<img src="https://user-images.githubusercontent.com/71244080/153320050-b8b5cabf-5ef8-4bc0-a375-f4f49579e4e8.gif" alt="conceptanimation" width="300"/> <img src="https://user-images.githubusercontent.com/71244080/153320047-816c6018-5f9c-448c-985d-08268e95f029.gif" alt="conceptanimation" width="300"/>

### FINALIZED FRAMES
<img src="https://user-images.githubusercontent.com/71244080/153318499-a8a9c98b-efde-4fae-a5d9-1bbfa00a693a.png" alt="frameimage" width="200"/> <img src="https://user-images.githubusercontent.com/71244080/153318506-6ea26d14-68ef-4f5d-b8bd-5caaffa348a6.png" alt="frameimage" width="200"/> <img src="https://user-images.githubusercontent.com/71244080/153318512-5d9e72ad-04ea-45d3-bd6e-5a775a1ee9f4.png" alt="frameimage" width="200"/>

<img src="https://user-images.githubusercontent.com/71244080/153318513-c63a86a7-3701-42e9-bb29-066531e76752.png" alt="frameimage" width="200"/> <img src="https://user-images.githubusercontent.com/71244080/153318515-545cde7a-9492-465c-815b-7ef9084a31cd.png" alt="frameimage" width="200"/> <img src="https://user-images.githubusercontent.com/71244080/153318519-560feaba-a4c3-426a-bb1b-056eaab83305.png" alt="frameimage" width="200"/> <img src="https://user-images.githubusercontent.com/71244080/153318528-05f9b6d0-6be3-410f-b4b8-b5282365001c.png" alt="frameimage" width="200"/>

<img src="https://user-images.githubusercontent.com/71244080/153318533-184831a9-5782-4965-94c8-80b4d9500fb4.png" alt="frameimage" width="200"/> <img src="https://user-images.githubusercontent.com/71244080/153318536-6ec4fc8b-f66c-407f-b12b-eebbc4757015.png" alt="frameimage" width="200"/> <img src="https://user-images.githubusercontent.com/71244080/153318540-06d062c6-24de-4648-80b4-8bc66bbd2c59.png" alt="frameimage" width="200"/>

<img src="https://user-images.githubusercontent.com/71244080/153318549-53dfd54a-1460-4e7f-9d6b-864c8ebcd275.png" alt="frameimage" width="200"/> <img src="https://user-images.githubusercontent.com/71244080/153318552-da6c7f97-c908-46b9-b2a6-2cbf5fe41536.png" alt="frameimage" width="200"/> <img src="https://user-images.githubusercontent.com/71244080/153318558-a9dc1be8-d454-428d-a84c-736c108e393f.png" alt="frameimage" width="200"/>

<img src="https://user-images.githubusercontent.com/71244080/153318563-738c3c4a-1d3b-42b8-84c5-799c67af71ba.png" alt="frameimage" width="200"/> <img src="https://user-images.githubusercontent.com/71244080/153318575-be76e050-18b0-47be-9564-11514691f1f2.png" alt="frameimage" width="200"/> <img src="https://user-images.githubusercontent.com/71244080/153318577-d8e0792f-6fe9-4bbd-8bab-75faec90326f.png" alt="frameimage" width="200"/>


### FINALIZED ANIMATIONS
<img src="https://user-images.githubusercontent.com/71244080/153320118-874ee323-d5d1-43f9-830a-c0c3ac1eed11.gif" alt="animation" width="200"/>


### BACKGROUND ANIMATION
<img src="https://user-images.githubusercontent.com/71244080/153320119-952d8e0d-f8f1-4e15-9a9a-d20308eb3f7f.gif" alt="animation" width="200"/>

# SOUND

## RESEARCH

### SOURCES

**THE EFFECT OF SOUNDS ON NEWBORN INFANTS UNDER STRESS (1996)**

In this journal article, authors Kiyobumi Kawakami, Kiyoko Takai-Kawakami, Hiroyuki Kurihara, Yukiko Shimizu, and Takumi Yanaihara analyzed how infant stress responses during minimally invasive procedures varied when exposed to white noise or heartbeat sounds, both presented at 85dB. The results showed that “presenting [these] sounds to newborn infants in this stressful situation had a calming effect.”[^5]

**THE INFLUENCE OF WHITE NOISE ON SLEEP IN SUBJECTS EXPOSED TO ICU NOISE (2005)**

In this study, authors Michael L. Stanchina, Muhanned Abu-Hijleh, Bilal K. Chaudhry, Carol C. Carlisle, and Richard P. Millman “hypothesized that white noise... reduce[s] arousals by reducing the magnitude of changing noise levels.” Their results supports this hypothesis.[^6]

**STRESS REDUCTION AND ANALGESIA IN PATIENTS EXPOSED TO CALMING MUSIC POSTOPERATIVELY: A RANDOMIZED CONTROLLED TRIAL (2005)**

Authors U. Nilsson , M. Unosson and N. Rawal postulate that ”listening to natural sounds[, such as] sounds of a ripple, a small stream, a soft wind or a twitter” is correlated with “reduction in BP and HR during emergence from anaesthesia” in this journal article.[^7]

**HETEROGENEITY OF DEFENSIVE RESPONSES AFTER EXPOSURE TO TRAUMA: BLUNTED AUTONOMIC REACTIVITY IN RESPONSE TO STARTLING SOUNDS (2013)**

In this study, authors Wendy D'Andrea, Nnamdi Pole, Jonathan DePierro, Steven Freed, and D. Brian Wallace used acoustic startle to analyze response times; they used the “San Diego Instruments Startle Reflex System (SR-Lab)... to administer... the acoustic stimuli [which consisted of 105 dB] blasts of white noise that lasted 40 ms each.”[^8]

**WHY DOES THE SOUND OF WATER HELP YOU SLEEP? (2016)**

In this article, Orfeu Buxton, “an associate professor of biobehavioral health at Pennsylvania State University,” discusses sounds proven to be calming or alarming. Buxton asserts that, based on analysis of a sleep disruption study’s results, nature sounds, like “the crash of ocean waves, the babbling of brooks[, and].... the wind in the trees,” are calming while “no-noise-to-peak-noise” sounds, like “alarms, ringing phones, and... human conversations,” are jarring.[^9]

**STRESSFUL CITY SOUNDS: GLUCOCORTICOID RESPONSES TO EXPERIMENTAL TRAFFIC NOISE ARE ENVIRONMENTALLY DEPENDENT (2017)**

In this study, authors Scott Davies, Nicole Haddad and Jenny Q. Ouyang “exposed adult house wrens, *Troglodytes aedon*, to either traffic noise or pink noise” and “found that urban wrens had higher initial (pre-restraint) corticosterone than rural wrens before treatment, and that traffic noise elevated initial corticosterone of rural, but not urban, wrens.”[^10]

### CONCLUSIONS

Numerous studies supported the calming effect of white noise[^11][^12] and nature noises.[^13][^14] One study suggested that heartbeat sounds have the same effect.[^15] Numerous studies with cited acoustic stress protocols[^16] reported that short blasts of white noise,[^17] phone alarms, and human voices[^18] are particularly jarring. While continuous loud background noise, such as traffic noise in urban areas, is associated with long term-stress, one study argued that shorter exposure periods did not have a notable effect on urban residents.[^19]

From these conclusions, I decided to use white noise, ocean noises, and bird sounds as my calming sounds and alarms, short blasts of blaring white noise, and human voices as my alarming sounds.

## SOUND DESIGN

### SAMPLES

To find samples, I used the website Freesound, “a collaborative database of Creative Commons Licensed sounds.” [^20] I chose longer samples of calming sound because they take more time to be effective. I ended up picking out the following samples:

Alarm at Airport[^21]

Ambience, Seaside Waves, Close, A[^22]

Birds in Spring (Scotland)[^23]

Comical Screams[^24]

Few Male Hey Shout[^25]

Hello[^26]

iPhone Alarm[^27]

Screaming2[^28]

White Noise Looped[^29]

Sample files can be found and played <a href = "https://www.notion.so/nlahoti/Documentation-8e2e50011f9a4dfbafa1084e0ace3bd2#67dce8e804b94fdeb9be54de0d491771">here</a>.

### AUDIO FORMAT

I initially planned to make my code randomly play different samples, but upon further thinking, I realized that there was a high likelihood that users would get too many shocking sounds in a row. Instead, I used Ableton to combine the samples together so that the calmer sounds play for longer durations and are occasionally interrupted. The game audio file can be found and played <a href="https://www.notion.so/nlahoti/Documentation-8e2e50011f9a4dfbafa1084e0ace3bd2#4581ea7c35fb46f78968ce82a3502664">here</a>.

### INTRO MUSIC

When testing the game, it felt empty with no sound playing throughout the instructions and winning screen. I decided to make some simple intro music using Ableton Live to make the game a bit more polished. The intro music file can be found and played <a href="https://www.notion.so/nlahoti/Documentation-8e2e50011f9a4dfbafa1084e0ace3bd2#22a5870a8b20421bac296afd4125c8f8">here</a>.

# ARDUINO WORK

## PHYSICAL WORK

### ASSEMBLY

I chose to use World Famous Electronics’ Pulse Sensor as its a cheap option and easy to code using Arduino’s programming language. Instead of an Arduino, I used an ELEGOO UNO R3 Controller Board since I already had one on hand. I also chose to add a button that users would use to start and end the game.

### LAYOUT AND SCHEMATIC

<img src="https://user-images.githubusercontent.com/71244080/153318644-d838318a-33cf-4f02-afed-9dc316fe6453.png" alt="layoutandschematic" width="500"/>

Board images from ELEGOO[^30]
Pulse Sensor image from World Famous Electronics[^31]

### PHYSICAL BUILD
<img src="https://user-images.githubusercontent.com/71244080/153318669-1195e0f6-b4f6-41e1-a919-e96eddbc199c.png" alt="physicalbuild" width="500"/>
<img src="https://user-images.githubusercontent.com/71244080/153318677-fc6a29ec-5c5e-409e-9330-b3eb2861afad.png" alt="physicalbuild" width="500"/>


## CODING

### REFERENCE

To use the Pulse Sensor, I downloaded the PulseSensor Playground library.[^32] To connect the UNO and the p5.js editor, I followed the instructions on the READEME.md file in the p5.serialport Github repository.[^33]

### PLANNING ARDUINO CODE

1. Write button state
    1. Pressed = 1
    2. Not pressed = 0
2. If pulse sensor picks up heart rate
    1. Write heart rate

### PLANNING P5.JS CODE

- Use **switch** and **cases** with **counter** to control game
- Use **buttonpressbool** to increase counter
1. Sort incoming data: **sortarduinodata()**
    1. If read data is equal to 1
        1. Set **buttonpressbool** equal to **true**
    2. If read data is over 1
        1. Add to the front of array **heartrates**
2. Button function: **mybutton()**
    1. If **buttonpressbool** is equal to true
        1. If on **calibratethreshold()**
            - Set **hrthreshold** equal to **averagehr**
        - If on **instructions()**
            - Set **gametimer** equal to current milliseconds
        1. Increase **counter** by 1
        2. Set **buttonpressbool** equal to false
3. Start screen: **startscreen()**
    1. “[TITLE]”
    2. “PRESS AND HOLD BUTTON TO START”
    3. **mybutton()**
4. Calibrating: **calibratethreshold()**
    1. “PLEASE WAIT WHILE THE SENSOR CALIBRATES...”
    2. Set **hrstoanalyze** equal to a subset of the first 10 items in **heartrates**
    3. If range of **hrstocalibrate** is less than 10
        1. Set **averagehr** equal to the average of **hrstocalibrate**
        2. “THE SENSOR READS YOUR HEART RATE AS ABOUT **averagehr**”
        3. “IF THIS SEEMS CORRECT, PRESS AND HOLD BUTTON TO PROCEED”
        4. **mybutton()**
5. Instructions: **instructions()**
    1. [INSTRUCTIONS]
    2. PRESS AND HOLD BUTTON TO START
    3. **mybutton()**
6. Animations: **runanimations()**
    1. Set **hrstoanalyze** equal to a subset of the first 20 items in **heartrates**
        1. Set **averagehr** equal to the average of **hrstocalibrate**
    2. If **averagehr** is over 10 more than **hrthreshold**
        1. Set **animationindex** equal to 4
        2. If **stateindex** is not equal to **animationindex**
            - Set **newstatebool** equal to true
    3. If **averagehr** is over 10 less than **hrthreshold**
        1. Set **animationindex** equal to 2
        2. If **stateindex** is not equal to **animationindex**
            - Set **newstatebool** equal to true
    4. Else
        1. Set **animationindex** equal to 3
    5. Show item in **myanimations** with index of **animationindex**
7. Sounds: **runsounds()**
    1. If no sound is playing
        1. Set **randsoundindex** equal to a random integer between 0 and 1 less than the length of **mysounds**
        2. Play item in **mysounds** with index of **randsoundindex** once
8. Game timer: **gametime()**
    1. If **gametimer** is over 60000ms (1 minute) more than current milliseconds
        1. Set **counter** equal to value for **gameend()**
9. State timer: **statetime()**
    1. If **statetimer** is over 5000ms (5 seconds) more than current milliseconds and **animationindex** does not equal 3
        1. Set **gametimer** equal to current milliseconds
        2. If **animationindex** is equal to 4
            - Set **counter** equal to value for **freakingout()**
        3. If **animationindex** is equal to 2
            - Set **counter** equal to value for **asleep()**
10. Reset state timer: **resetstatetime()**
    1. If **newstatebool** is equal to true
        1. Set **statetimer** equal to current milliseconds
        2. Set **stateindex** equal to **animationindex**
        3. Set **newstatebool** equal to false
11. HR too high: **freakingout()**
    1. Set **animationindex** equal to 5
    2. If **gametimer** is over 5000ms (5 seconds) more than current milliseconds
        1. Set **counter** equal to value for **gameend()**
12. HR too low: **asleep()**
    1. Set **animationindex** equal to 1
    2. If **gametimer** is over 5000ms (5 seconds) more than current milliseconds
        1. Set **counter** equal to value for **gameend()**
13. Play game: **runskigame()**
    1. **runanimations()**
    2. **runsounds()**
    3. **gametime()**
    4. **statetime()**
14. Game over: **gameend()**
    1. If **animationindex** is equal to 5
        1. “YOU FREAKED OUT AND FELL”
    2. If **animationindex** is equal to 1
        1. “YOU FELL ASLEEP AND FELL”
    3. Else
        1. “YOU MADE IT TO THE TOP!”
    4. “PRESS AND HOLD BUTTON TO PLAY AGAIN”
    5. **mybutton()**

# DEBRIEF

## TAKEAWAYS

### LESSONS LEARNED

Setting up serial communication with an Arduino is much easier than I anticipated! In the future as I work further with Arduinos or Raspberry Pis, I will be less intimidated by setting up my workspace and editors.

### WHAT I’D DO DIFFERENT

While I liked using the Arduino, I found that the pulse sensor was a bit buggy. If I could go back, I would look into different kinds of pulse sensors and debate making my own, which seems easier than I initially thought it would be.

## REFLECTION

### WHAT I LIKED

I really liked how my game turned out overall! I think the animations are cute, and the contrast between the intro music and the game music is amusing to me. Additionally, I like the contrast between the comfy visuals and the strange and at times unsettling game audio.

### WHAT I DISLIKED

As noted earlier, the pulse sensor didn’t work very well, and it made the debugging process really difficult and frustrating.

# SOURCES

1489232. “hello.”  *Freesound, Freesound,* https://freesound.org/people/1489232/sounds/449500/.

Abe, Erika, et al. "Heart rate monitoring by a pulse sensor embedded game controller." *2015 Asia-Pacific Signal and Information Processing Association Annual Summit and Conference (APSIPA)*. IEEE, 2015.

BurghRecords. “Birds In Spring (Scotland).”  *Freesound, Freesound,* https://freesound.org/people/BurghRecords/sounds/463903/.

Bayaba22c. “iphone_alarm.wav.”  *Freesound, Freesound,* https://freesound.org/people/bayaba22c/sounds/575814/.”

Cdrk. “wn_looped.flac.”   *Freesound, Freesound,* https://freesound.org/people/cdrk/sounds/20009/.

Codeman38. “Press Start 2P.” *Google Fonts*, Google, https://fonts.google.com/specimen/Press+Start+2P.

d'Andrea, Wendy, et al. "Heterogeneity of defensive responses after exposure to trauma: Blunted autonomic reactivity in response to startling sounds." *International journal of psychophysiology* 90.1 (2013): 80-89.

Davies, Scott, Nicole Haddad, and Jenny Q. Ouyang. "Stressful city sounds: glucocorticoid responses to experimental traffic noise are environmentally dependent." *Biology letters* 13.10 (2017): 20170276.

“ELEGOO UNO R3 Controller Board.” *ELEGOO*. https://www.elegoo.com/products/elegoo-uno-project-super-starter-kit. 

“Freesound.” *Freesound*. freesound.org.

Gitman, Yury and Joel Murphy. “PulseSensor.” *World Famous Electronics llc*. September 2011. pulsesensor.com. 

Hadhazy, Adam. “Why Does the Sound of Water Help You Sleep?” *LiveScience*, Purch, 18 Jan. 2016, https://www.livescience.com/53403-why-sound-of-water-helps-you-sleep.html.

InspectorJ. “Ambience, Seaside Waves, Close, A.wav.”  *Freesound, Freesound,* https://freesound.org/people/InspectorJ/sounds/400632/.

Johnson, Eric. “Stanford Has a Videogame Controller That Knows If You're Bored.” *Vox*, Vox Media, 28 Apr. 2014, https://www.vox.com/2014/4/28/11626130/stanford-has-a-videogame-controller-that-knows-if-youre-bored.

Kawakami, Kiyobumi, et al. "The effect of sounds on newborn infants under stress." *Infant Behavior and Development* 19.3 (1996): 375-379.

Mafon2. “Comical Screams." *Freesound, Freesound,* https://freesound.org/people/Mafon2/sounds/343490/.

Nilsson, Ulrica, Mitra Unosson, and Narinder Rawal. "Stress reduction and analgesia in patients exposed to calming music postoperatively: a randomized controlled trial." *European journal of anaesthesiology* 22.2 (2005): 96-102.

Owly-bee. “Screaming2.wav.” *Freesound, Freesound,* https://freesound.org/people/owly-bee/sounds/415353/.

“PlayPulse.” *Playpulse*, Playpulse AS, https://playpulse.com/.

“PulseSensor Playground.” *Arduino Reference*, Arduino, https://www.arduino.cc/reference/en/libraries/pulsesensor-playground/.

Raygunvirus, “alarm at airport.wav." *Freesound, Freesound,* https://freesound.org/people/raygunvirus/sounds/218795/.

Robinhood76. “07706 few male hey shout.wav.” *Freesound, Freesound,* https://freesound.org/people/Robinhood76/sounds/467869/.

Stanchina, Michael L., et al. "The influence of white noise on sleep in subjects exposed to ICU noise." *Sleep medicine* 6.5 (2005): 423-428.

Van Every, Shawn, et al. “README.md.” *p5.Serialport*, GitHub, 10 Oct. 2019, https://github.com/p5-serial/p5.serialport.

Watts, Martin. “N64 Tetris Games.” *N64 Today*, 14 Sept. 2019, https://n64today.com/2019/09/14/n64-tetris-games/.


[^1]: Watts.
[^2]: Johnson.
[^3]: Abe.
[^4]: “PlayPulse.”
[^5]: Kawakami.
[^6]: Stanchina.
[^7]: Nilsson.
[^8]: d'Andrea.
[^9]: Hadhazy.
[^10]: Davies.
[^11]: Kawakami.
[^12]: Stanchina.
[^13]: Nilsson.
[^14]: Hadhazy.
[^15]: Kawakami.
[^16]: d'Andrea.
[^17]: Ibid.
[^18]: Hadhazy.
[^19]: Davies.
[^20]: “Freesound.”
[^21]: Raygunvirus.
[^22]: InspectorJ.
[^23]: BurghRecords.
[^24]: Mafon2.
[^25]: Robinhood76.
[^26]: 1489232.
[^27]: Bayaba22c.
[^28]: Owly-bee.
[^29]: Cdrk.
[^30]: “ELEGOO UNO R3 Controller Board.”
[^31]: Gitman.
[^32]: “PulseSensor Playground.”
[^33]: Van Every.
