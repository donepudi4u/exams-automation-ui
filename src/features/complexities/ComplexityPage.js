import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import ComplexityList from './ComplexityList';
import ComplexityForm from './ComplexityForm';
import ModalForm from '../../components/ModalForm';

const ComplexityPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [editComplexity, setEditComplexity] = useState(null);

  const handleEdit = (complexity) => {
    setEditComplexity(complexity);
    setShowModal(true);
  };

  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Complexities</h2>
        <Button onClick={() => { setEditComplexity(null); setShowModal(true); }}>Add Complexity</Button>
      </div>
      <ComplexityList onEdit={handleEdit} />
      <ModalForm show={showModal} onHide={() => setShowModal(false)} title={editComplexity ? 'Edit Complexity' : 'Add Complexity'}>
        <ComplexityForm complexity={editComplexity} onClose={() => setShowModal(false)} />
      </ModalForm>
    </Container>
  );
};

export default ComplexityPage;
