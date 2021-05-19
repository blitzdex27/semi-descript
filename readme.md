# Readme

# Project Outline
Project title: semi-Descript
Project description: An application that modifies media (at least with voice) through the transcription

# Features:
Media such as audio and video can be uploaded.
Transcribes the media and displays the transcription.
Words are being highlighted as they are being said in the media.
The transcription can be edited, and it should also reflect to the media

# Application setup:
Front-end
A client that sends user requests based on user actions
Sections:
Upload
Media playback
Transcription
Edit transcription

Back-end
A server with a set of APIs that handles requests
Upload
Transcribe (GET transcription; POST reverse transcription)
Controllers that handles data validation and data storage

Database
Stores the user’s info, and transcription(does not store the media file because it will be too large)

# Development process:
Setup the APIs on the back-end
Upload API
Transcription API
Reverse transcription API
Setup controllers and database
Setup the client front-end
Test for deployment
Debugging
Refactoring
Deployment
