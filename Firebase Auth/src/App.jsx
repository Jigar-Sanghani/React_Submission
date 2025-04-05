import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/Config.jsx';
import Dashboard from './components/Dashboard.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub(); 
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🔥 Firebase Auth + React</h1>
      {!user ? (
        <>
          <Signup />
          <Login />
        </>
      ) : (
        <Dashboard user={user} />
      )}
    </div>
  );
};

export default App;
