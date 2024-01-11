import React, { useEffect } from 'react';
import axios from './utils/axios.js';

function App() {
  useEffect(() => {
    axios.get('/')
      .then((res) => {
     
        console.log(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <p>Welcome</p>
    </div>
  );
}

export default App;
