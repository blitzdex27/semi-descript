# Readme

# Project Outline
Project title: semi-Descript
Project description: An application that modifies media (at least with voice) through the transcription

# Features:
* Media such as audio and video can be uploaded.
* Transcribes the media and displays the transcription.
* Words are being highlighted as they are being said in the media.
* The transcription can be edited, and it should also reflect to the media

# Application setup:
Front-end
* A client that sends user requests based on user actions
* Sections:
** Upload
** Media playback
* Transcription
* Edit transcription

Back-end
* A server with a set of APIs that handles requests
* Upload
* Transcribe (GET transcription; POST reverse transcription)
* Controllers that handles data validation and data storage

Database
Stores the user’s info, and transcription(does not store the media file because it will be too large)

# Development process:
1. Setup the APIs on the back-end
  a. Upload API
  b. Transcription API
  c. Reverse transcription API
  d. Setup controllers and database
2. Setup the client front-end
3. Test for deployment
4. Debugging
5. Refactoring
6. Deployment
