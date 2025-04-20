import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import SubjectList from './SubjectList';
import SubjectForm from './SubjectForm';
import ModalForm from '../../components/ModalForm';

const SubjectPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [editSubject, setEditSubject] = useState(null);

  const handleEdit = (subject) => {
    setEditSubject(subject);
    setShowModal(true);
  };

  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Subjects</h2>
        <Button onClick={() => { setEditSubject(null); setShowModal(true); }}>Add Subject</Button>
      </div>
      <SubjectList onEdit={handleEdit} />
      <ModalForm show={showModal} onHide={() => setShowModal(false)} title={editSubject ? 'Edit Subject' : 'Add Subject'}>
        <SubjectForm subject={editSubject} onClose={() => setShowModal(false)} />
      </ModalForm>
    </Container>
  );
};

export default SubjectPage;
