import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { getAllQuestions, getQuestionsByUser , deleteQuestion } from '../../api/questionApi';


const QuestionList = ({ onEdit }) => {
  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {
    loadQuestions();
  },[]);

  const loadQuestions = async () => {
    const data = await getQuestionsByUser(1).then((res) => setQuestions(res.data));    
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure to delete this question?')) {
      await deleteQuestion(id);
      loadQuestions();
    }
  };

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Subject</th>
          <th>Type</th>
          <th>Complexity</th>
          <th>Question</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {questions.map(q => (
          <tr key={q.id}>
            <td>{q.subject}</td>
            <td>{q.questionType}</td>
            <td>{q.complexityLevel}</td>
            <td>{q.questionText}</td>
            <td>
              <Button size="sm" onClick={() => { onEdit(q)}}>Edit</Button>{' '}
              <Button size="sm" variant="danger" onClick={() => handleDelete(q.id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default QuestionList;
