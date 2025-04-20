import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { getAllUsers, deleteUser } from '../../api/userApi';

const UserList = ({ onEdit }) => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const data = await getAllUsers();
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      await deleteUser(id);
      loadUsers();
    }
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Roles</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>{u.role}</td>            
            <td>
              <Button size="sm" onClick={() => onEdit(u)}>Edit</Button>{' '}
              <Button size="sm" variant="danger" onClick={() => handleDelete(u.id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserList;
