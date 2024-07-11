import React, { useState } from 'react';
import { updateUser } from '../api';

const Update = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await updateUser({ email, name });
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <button type="submit">Update</button>
    </form>
  );
};

export default Update;
