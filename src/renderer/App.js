import { MemoryRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/panel" element={<Panel />} />
      </Routes>
    </Router>
  );
}
