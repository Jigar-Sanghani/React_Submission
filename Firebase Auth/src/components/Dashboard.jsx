import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/Config';

const Dashboard = ({ user }) => {
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div>
      <h2>Welcome, {user.email}</h2>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Dashboard;
