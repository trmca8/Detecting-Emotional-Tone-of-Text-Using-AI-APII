# Detecting-Emotional-Tone-of-Text-Using-AI-API
Detecting Emotional Tone of Text Using AI API in React

This project is a simple React application that detects the emotional tone of a given text using the Sapling AI API. It provides users with an intuitive UI to input text, analyze its emotional tone, and display the results with probability scores.

Features
  - Detects emotional tone (positive, negative, neutral) of user-provided text.
  - Smooth transition animations for the result display.

Tech Stack
  - React for the front-end UI
  - Sapling AI API for emotional tone analysis
  - Axios for making API requests

Getting Started
  - Follow these steps to set up and run the project locally.

Installation

  1. Clone the repository:
     
    - git clone https://github.com/trmca8/Detecting-Emotional-Tone-of-Text-Using-AI-API.git
     
    - cd emotional-tone-detector

  2. Install the dependencies:
     - npm install axios

  3. Set up the environment variable:

     3.1 Get Your Sapling API Key: Sign up on Sapling AI's website and get your API key for the tone detection API.

     3.2 Create a .env file in the project root directory and add your Sapling AI API key.
     
     3.3 Open .env and add: REACT_APP_API_KEY="your_sapling_ai_api_key"
     
     - Note: Replace your_sapling_ai_api_key with your actual API key from Sapling AI.

To start the application, run:

    - npm start
    
    - This will start the application on http://localhost:3000.

Usage:

  1. Enter the text you want to analyze in the text area.
     
  2. Click the Check button.
     
  - The application will display the detected emotional tone along with a probability score.

How It Works:
  1. Text Input: Users enter text in the provided text area.
  2. API Request: When the user clicks the "Check" button, the app sends a POST request to the Sapling AI API with the text data and API key.
  3. Result Display: The response contains the emotional tone and a probability score, which the app displays to the user.
  4. Transition Effects: CSS animations provide a smooth transition effect each time a new result is displayed.

Dependencies:
  - React
  - Axios

Bash Commands Recap:
  # Clone repository
    - git clone https://github.com/trmca8/Detecting-Emotional-Tone-of-Text-Using-AI-API.git
    - cd emotional-tone-detector

  # Install dependencies
    - npm install axios

  # Create .env file
    - echo "REACT_APP_API_KEY=your_sapling_ai_api_key" > .env
    - Reminder: Make sure to replace your_sapling_ai_api_key with your actual Sapling API     key.

  # Start the app
    - npm start


  

  



     
     


