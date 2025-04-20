import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserPage from './features/users/UserPage';
import SubjectPage from './features/subjects/SubjectPage';
import ComplexityPage from './features/complexities/ComplexityPage';
import QuestionPage from './features/questions/QuestionPage';
import Sidebar from './components/Sidebar'; 

const App = () => {
  return (
    <BrowserRouter>
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-4">
        <Routes>
          <Route path="/users" element={<UserPage />} />
          <Route path="/subjects" element={<SubjectPage />} />
          <Route path="/complexities" element={<ComplexityPage />} />
          <Route path="/questions" element={<QuestionPage />} />
          {/* Add home or default route */}
          <Route path="/" element={<div>Welcome to Exam Automation</div>} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;
