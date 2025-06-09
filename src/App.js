import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? <Login /> : <Register />}
      <button
        onClick={() => setShowLogin(!showLogin)}
        style={{ marginTop: '20px', cursor: 'pointer' }}
      >
        {showLogin ? 'Нямаш акаунт? Регистрирай се' : 'Вече имаш акаунт? Влез'}
      </button>
    </div>
  );
}

export default App;
