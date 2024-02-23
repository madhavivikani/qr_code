import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import QRCode from 'react-qr-code';
function App() {

  let [name, setname] = useState("");

  const handler = (e) => {
    setname(e.target.value);
  };


  return (
    <div className="App">
      <h2>QR-CODE Generated</h2>
      <input type='text' value={name} onChange={handler} placeholder='Enter your name'></input><br></br>
      {name && <QRCode value={name} />}
    </div>
  );
}

export default App;
