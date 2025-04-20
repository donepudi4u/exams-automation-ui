import React, { useEffect, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { saveQuestion, getSimilarQuestions } from '../../api/questionApi';
import { getAllSubjects } from '../../api/subjectApi';
import { getAllComplexities } from '../../api/complexityApi';

const QuestionForm = ({ question, onClose }) => {
  const [formData, setFormData] = useState(question || {
    subjectId: '', complexityId: '', questionType: '', questionText: '', createdById: 1, options: []
  });
  const [similar, setSimilar] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [complexities, setComplexities] = useState([]);

  useEffect(() => {
    loadSubjects();
    loadComplexities();
  }, []);

  const loadSubjects = async () => setSubjects(await getAllSubjects());
  const loadComplexities = async () => setComplexities(await getAllComplexities());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'text' && value.length > 5) {
      getSimilarQuestions(value).then(setSimilar);
    }
  };

  const handleOptionChange = (index, field, value) => {
    const updatedOptions = [...formData.options];
    updatedOptions[index][field] = value;
    setFormData({ ...formData, options: updatedOptions });
  };

  const addOption = () => {
    setFormData({ ...formData, options: [...formData.options, { optionText: '', correct: false }] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveQuestion(formData);
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col><Form.Group>
          <Form.Label>Subject</Form.Label>
          <Form.Select name="subjectId" value={formData.subjectId} onChange={handleChange}>
            <option>Select</option>
            {subjects.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </Form.Select>
        </Form.Group></Col>
        <Col><Form.Group>
          <Form.Label>Complexity</Form.Label>
          <Form.Select name="complexityId" value={formData.complexityId} onChange={handleChange}>
            <option>Select</option>
            {complexities.map(c => <option key={c.id} value={c.id}>{c.level}</option>)}
          </Form.Select>
        </Form.Group></Col>
      </Row>

      <Form.Group>
        <Form.Label>Question Type</Form.Label>
        <Form.Select name="questionType" value={formData.type} onChange={handleChange}>
          <option value="">Select</option>
          <option value="MULTIPLE_CHOICE">Multiple Choice</option>
          <option value="SHORT_ANSWER">Short Answer</option>
          <option value="LONG_ANSWER">Long Answer</option>
          <option value="YES_NO">Yes / No</option>
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Label>Question Text</Form.Label>
        <Form.Control name="questionText" value={formData.questionText} onChange={handleChange} required />
        {similar.length > 0 && (
          <ul className="text-danger mt-2">
            {similar.map((q, i) => <li key={i}>{q.questionText}</li>)}
          </ul>
        )}
      </Form.Group>

      {formData.questionType === 'MULTIPLE_CHOICE' && (
        <div className="mt-3">
          <h5>Options</h5>
          {formData.options.map((opt, idx) => (
            <Row key={idx} className="mb-2">
              <Col>
                <Form.Control
                  placeholder={`Option ${idx + 1}`}
                  value={opt.optionText}
                  onChange={(e) => handleOptionChange(idx, 'optionText', e.target.value)}
                />
              </Col>
              <Col xs="auto">
                <Form.Check
                  type="checkbox"
                  label="Correct"
                  checked={opt.correct}
                  onChange={(e) => handleOptionChange(idx, 'correct', e.target.checked)}
                />
              </Col>
            </Row>
          ))}
          <Button variant="secondary" onClick={addOption}>Add Option</Button>
        </div>
      )}

      <Button className="mt-4" type="submit">Save</Button>
    </Form>
  );
};

export default QuestionForm;
