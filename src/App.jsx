import React, { useState } from 'react';

function App() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showQueue, setShowQueue] = useState(false);
  const [queueNumber, setQueueNumber] = useState(null);
  const [formData, setFormData] = useState({ name: '', details: '' });
  const [barcode, setBarcode] = useState('');

  const handleRegistrationClick = () => {
    setShowRegistration(true);
    setShowQueue(false);
    setQueueNumber(null);
  };

  const handleQueueClick = () => {
    setShowQueue(true);
    setShowRegistration(false);
    setQueueNumber(null);
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log('Registration Data:', formData);
    alert('Registration submitted (Check console for data)');
    setFormData({ name: '', details: '' }); //clear form
    setShowRegistration(false);

  };

  const handleBarcodeSubmit = (e) => {
    e.preventDefault();
    // Simulate API call with barcode
    console.log('Barcode:', barcode);
    // In a real app, you'd make an API call here
    const simulatedQueueNumber = Math.floor(Math.random() * 100) + 1;
    setQueueNumber(simulatedQueueNumber);
    setBarcode(''); //clear barcode
    setShowQueue(false);
  };

  return (
    <div>
      <h1>Patient Queue System</h1>

      <button onClick={handleRegistrationClick}>Patient Registration</button>
      <button onClick={handleQueueClick}>Take Queue Number</button>

      {showRegistration && (
        <div className="container">
          <h2>Patient Registration</h2>
          <form onSubmit={handleRegistrationSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </label>
            <br />
            <label>
              Details:
              <textarea
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              />
            </label>
            <br />
            <button type="submit">Register</button>
          </form>
        </div>
      )}

      {showQueue && (
        <div className="container">
          <h2>Take Queue Number</h2>
          <form onSubmit={handleBarcodeSubmit}>
            <label>
              Scan Barcode:
              <input
                type="text"
                value={barcode}
                onChange={(e) => setBarcode(e.target.value)}
                placeholder="Enter barcode"
                required
              />
            </label>
            <br />
            <button type="submit">Get Queue Number</button>
          </form>
        </div>
      )}

      {queueNumber && (
        <div className="container">
          <h2>Your Queue Number:</h2>
          <p className='queue-number'>{queueNumber}</p>
        </div>
      )}
    </div>
  );
}

export default App;
