import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { saveSubject } from '../../api/subjectApi';


const SubjectForm = ({ subject, onClose }) => {
  const [formData, setFormData] = useState(subject || { name: '', description: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name] : e.target.value });    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveSubject(formData);
    
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Subject Name</Form.Label>
        <Form.Control type='text' name='name' value={formData.name} onChange={handleChange} required />
        <Form.Label>Description</Form.Label>
        <Form.Control type='text' name='description' value={formData.description} onChange={handleChange}  />
      </Form.Group>
      <Button className="mt-3" type="submit">Save</Button>
    </Form>
  );
};

export default SubjectForm;
