import React, { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:3000/api/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;