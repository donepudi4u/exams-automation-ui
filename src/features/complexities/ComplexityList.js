import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { getAllComplexities, deleteComplexity } from '../../api/complexityApi';

const ComplexityList = ({ onEdit }) => {
  const [complexities, setComplexities] = useState([]);

  useEffect(() => {
    loadComplexities();
  }, []);

  const loadComplexities = async () => {
    const data = await getAllComplexities();
    setComplexities(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure to delete this subject?')) {
      await deleteComplexity(id);
      loadComplexities();
    }
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Complexity Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {complexities.map(complexity => (
          <tr key={complexity.id}>
            <td>{complexity.level}</td>
            <td>
              <Button size="sm" onClick={() => onEdit(complexity)}>Edit</Button>{' '}
              <Button size="sm" variant="danger" onClick={() => handleDelete(complexity.id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ComplexityList;
