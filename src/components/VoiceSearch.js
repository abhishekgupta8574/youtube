import React, { useState } from 'react';

const VoiceSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [isListening, setIsListening] = useState(false);

  // Function to handle voice recognition
  const handleVoiceRecognition = () => {
    const recognition = new window.webkitSpeechRecognition();

    recognition.onstart = () => {
      setIsListening(true);
      console.log('Voice recognition started');
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      console.log('Transcript:', transcript);
      setSearchText(transcript);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };

    recognition.onend = () => {
      setIsListening(false);
      console.log('Voice recognition ended');
    };

    recognition.start();
  };

  return (
    <div>
      <h1>Voice Search</h1>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Type your search term..."
      />
      <button onClick={handleVoiceRecognition}>
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </button>
    </div>
  );
};

export default VoiceSearch;