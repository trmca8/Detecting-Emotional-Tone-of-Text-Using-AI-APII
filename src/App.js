import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // State to store the input text, detected emotion, and result visibility
  const [text, setText] = useState('');
  const [emotion, setEmotion] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // Updates text state with user input
  const handleInputChange = (e) => setText(e.target.value);

  // Function to handle API call and display emotional tone
  const handleCheckEmotion = async () => {
    setShowResult(false); // Hide current result for transition effect
    const apiKey = process.env.REACT_APP_API_KEY; // Retrieve API key from environment variables
    const url = "https://api.sapling.ai/api/v1/tone"; // API endpoint

    try {
      // Make POST request to API with the input text and API key
      const response = await axios.post(url, {
        key: apiKey,
        text
      });

      const { data } = response; // Extract response data

      // Check if emotion data is present in the response
      if (data && data.overall && data.overall.length > 0) {
        const [probability, tone, emoji] = data.overall[0];
        const probabilityPercent = (probability * 100).toFixed(2); // Convert probability to percentage

        // Update emotion state with detected emotion data
        setEmotion({
          label: tone,
          description: `The detected emotion is ${tone} ${emoji} with a probability of ${probabilityPercent}%.`,
        });

        setTimeout(() => setShowResult(true), 100); // Display result with transition
      } else {
        // Set default emotion if no specific emotion detected
        setEmotion({
          label: "Neutral",
          description: "No specific emotion detected.",
        });
        setShowResult(true);
      }
    } catch (err) {
      // Handle any errors from API call and display error message
      const errorMessage = err.response?.data?.msg || "There was an issue with the API call.";
      console.error("Error:", errorMessage);
      setEmotion({
        label: "Error",
        description: errorMessage,
        colorClass: ''
      });
      setShowResult(true);
    }
  };

  return (
    <div className="App">
      <h1>Emotional Tone Detector</h1>
      {/* Text area for user to input text */}
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Enter your text here"
      />
      {/* Button to trigger emotion detection */}
      <button onClick={handleCheckEmotion}>Check</button>

      {/* Display detected emotion if available */}
      {emotion && (
        <div className={`emotion-result ${emotion.colorClass} ${showResult ? 'show' : ''}`}>
          <h2>Detected Emotion: {emotion.label}</h2>
          <p>{emotion.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
