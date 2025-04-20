import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import QuestionList from './QuestionList';
import QuestionForm from './QuestionForm';
import ModalForm from '../../components/ModalForm';

const QuestionPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [editQuestion, setEditQuestion] = useState(null);

  const handleEdit = (questions) => {
    setEditQuestion(questions);
    setShowModal(true);
  };

  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h2>Questions</h2>
        <Button onClick={() => { setEditQuestion(null); setShowModal(true); }}>Add Question</Button>
      </div>
      <QuestionList onEdit={handleEdit}/>
      <ModalForm show={showModal} onHide={() => setShowModal(false)} title={editQuestion ? 'Edit Question' : 'Add Question'}>
        <QuestionForm questions={editQuestion} onClose={() => setShowModal(false)} />
      </ModalForm>
    </Container>
  );
};

export default QuestionPage;
