import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import Update from './components/Update';

const App = () => {
  return (
    <div>
      <h1>User Authentication</h1>
      <Signup />
      <Login />
      <Update />
    </div>
  );
};

export default App;
