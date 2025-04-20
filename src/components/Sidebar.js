import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="w-64 bg-gray-100 p-4 min-h-screen">
    <h2 className="text-xl font-bold mb-4">Exam Portal</h2>
    <ul className="space-y-2">
      <li><Link to="/users">Users</Link></li>
      <li><Link to="/subjects">Subjects</Link></li>
      <li><Link to="/complexities">Complexities</Link></li>
      <li><Link to="/questions">Questions</Link></li>
    </ul>
  </div>
);

export default Sidebar;