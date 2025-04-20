import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { saveComplexity } from '../../api/complexityApi';

const ComplexityForm = ({ complexity, onClose }) => {
  const [formData, setFormData] = useState(complexity || { level: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name] : e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveComplexity(formData);
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Complexity Level</Form.Label>
        <Form.Control type='text' name='level' value={formData.level} onChange={handleChange} required />
      </Form.Group>
      <Button className="mt-3" type="submit">Save</Button>
    </Form>
  );
};

export default ComplexityForm;
