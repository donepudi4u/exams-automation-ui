import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import UserList from './UserList';
import UserForm from './UserForm';
import ModalForm from '../../components/ModalForm';

const UserPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const handleEdit = (user) => {
    setEditUser(user);
    setShowModal(true);
  };

  const handleAdd = () => {
    setEditUser(null);
    setShowModal(true);
  };

  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Manage Users</h2>
        <Button onClick={handleAdd}>Add User</Button>
      </div>
      <UserList onEdit={handleEdit} />
      <ModalForm show={showModal} onHide={() => setShowModal(false)} title={editUser ? 'Edit User' : 'Add User'}>
        <UserForm user={editUser} onClose={() => setShowModal(false)} />
      </ModalForm>
    </Container>
  );
};

export default UserPage;
