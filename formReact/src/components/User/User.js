import React, { useState } from 'react';

const User = () => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [users, setUsers] = useState([]);
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!username.trim() || !age.trim()) {
      alert('Please enter valid username and age');
      return;
    }
     
    if (parseInt(age) <= 0 || isNaN(parseInt(age))) {
        alert('Please enter a positive number for age');
        return;
      }
      
    
    // Add user to the list
    setUsers([...users, { username, age }]);
    
    // Clear input fields
    setUsername('');
    setAge('');
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor ="username">UserName</label>
        <input id = "usernme"
          type="text" 
          placeholder="Enter username" 
          value={username} 
          onChange={handleUsernameChange} 
        />
        <label htmlFor ="age"> Age (Years)</label>
        <input id ="age"
          type="number" 
          placeholder="Enter age" 
          value={age} 
          onChange={handleAgeChange} 
        />
        <button type="submit">Add User</button>
      </form>
      
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.username}, {user.age}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
