import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import { getAllUsers } from '../api/userApi'; // you already have this

const UserSelector = () => {
  const { user, setUser } = useUser();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((res) => setUsers(res.data));
  }, []);

  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">Logged-in Faculty</label>
      <select
        className="border p-2 rounded"
        value={user?.id || ''}
        onChange={(e) => {
          const selected = users.find((u) => u.id === parseInt(e.target.value));
          setUser(selected);
        }}
      >
        <option value="">-- Select Faculty --</option>
        {users.map((u) => (
          <option key={u.id} value={u.id}>{u.name}</option>
        ))}
      </select>
    </div>
  );
};

export default UserSelector;
