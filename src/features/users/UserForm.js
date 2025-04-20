import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { saveUser } from '../../api/userApi';

const UserForm = ({ user, onClose }) => {
  const [formData, setFormData] = useState(user || { name: '', email: '', role: [], password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveUser(formData);
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" value={formData.name} onChange={handleChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" value={formData.email} onChange={handleChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Roles (comma separated)</Form.Label>
        <Form.Control
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="e.g. admin, user"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" value={formData.password} onChange={handleChange} required />
      </Form.Group>
      <Button className="mt-3" type="submit">Save</Button>
    </Form>
  );
};

export default UserForm;
