import React, { useState } from 'react';

const App = () => {
  const [inputData, setInputData] = useState('');
  const [responseData, setResponseData] = useState(null);

  const sendDataToPHP = () => {
    const phpURL = 'http://localhost:8000/login.php';
    
    const dataToSend = { input: inputData };

    fetch(phpURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then(response => response.json())
      .then(data => {
        setResponseData(data.processedData);
      })
      .catch(error => {
        console.error('Błąd:', error);
      });
  };

  return (
    <div>
      <h1>Przykładowa aplikacja React z komunikacją z PHP</h1>

      <label>
        Wprowadź dane:
        <input
          type="text"
          value={inputData}
          onChange={e => setInputData(e.target.value)}
        />
      </label>

      <button onClick={sendDataToPHP}>Wyślij dane do PHP</button>

      {responseData && (
        <div>
          <h2>Odpowiedź z PHP:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;