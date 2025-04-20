import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { getAllSubjects, deleteSubject } from '../../api/subjectApi';

const SubjectList = ({ onEdit }) => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    loadSubjects();
  }, []);

  const loadSubjects = async () => {
    const data = await getAllSubjects();
    setSubjects(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure to delete this subject?')) {
      await deleteSubject(id);
      loadSubjects();
    }
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Subject Name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {subjects.map(subject => (
          <tr key={subject.id}>
            <td>{subject.name}</td>
            <td>{subject.description}</td>
            <td>
              <Button size="sm" onClick={() => onEdit(subject)}>Edit</Button>{' '}
              <Button size="sm" variant="danger" onClick={() => handleDelete(subject.id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SubjectList;
