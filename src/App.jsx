import { useEffect, useState } from 'react';

import TopBar from './components/TopBar';
import HomePage from './pages/HomePage';
import MyCampusPage from './pages/MyCampusPage';
import CampusFinderPage from './pages/CampusFinderPage';
import HelpPage from './pages/HelpPage';
import LostFoundPage from './pages/LostFoundPage';
import CanteenPage from './pages/CanteenPage';
import ExchangePage from './pages/ExchangePage';
import ProfilePage from './pages/ProfilePage';
import FeedbackPage from './pages/FeedbackPage';
import ClassmatesPage from './pages/ClassmatesPage';
import AlumniPage from './pages/AlumniPage';
import './styles.css';

const navItems = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'campus', label: 'Campus', icon: '🎓' },
  { id: 'finder', label: 'Finder', icon: '🔎' },
  { id: 'help', label: 'Help', icon: '🤝' },
  { id: 'lost', label: 'Lost', icon: '🧭' },
  { id: 'canteen', label: 'Canteen', icon: '🍽️' },
  { id: 'exchange', label: 'Exchange', icon: '🔄' },
  { id: 'insights', label: 'Insights', icon: '⌁' },
  { id: 'profile', label: 'Profile', icon: '👤' },
];

const secondaryNavItems = [
  { id: 'feedback', label: 'Feedback', icon: '💬' },
  { id: 'classmates', label: 'Classmates', icon: '👥' },
  { id: 'alumni', label: 'Alumni', icon: '🎓' },
];

const defaultStudent = {
  name: 'Anna Nair',
  rollNo: 'IN-2047',
  department: 'Instrumentation',
  year: '3rd Year',
  role: 'Student',
};

const roles = ['Student', 'Faculty', 'Hostel / Canteen', 'Admin', 'Volunteer'];

function App() {
  const [activePage, setActivePage] = useState('home');
  const [student, setStudent] = useState(() => JSON.parse(localStorage.getItem('campus-user') || 'null') || defaultStudent);
  const [signedIn, setSignedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('campus-theme') === 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
    localStorage.setItem('campus-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudent((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!student.name || !student.rollNo || !student.department || !student.year || !student.role) {
      return;
    }

    localStorage.setItem('campus-user', JSON.stringify(student));
    setSignedIn(true);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'campus':
        return <MyCampusPage />;
      case 'finder':
        return <CampusFinderPage />;
      case 'help':
        return <HelpPage />;
      case 'lost':
        return <LostFoundPage />;
      case 'canteen':
        return <CanteenPage />;
      case 'exchange':
        return <ExchangePage />;
      case 'profile':
        return <ProfilePage />;
      case 'feedback':
        return <FeedbackPage />;
      case 'classmates':
        return <ClassmatesPage />;
      case 'alumni':
        return <AlumniPage />;
      case 'insights':
        return <HomePage studentName={student.name || 'Anna'} onSelectAction={(actionId) => setActivePage(actionId)} insightsOnly />;
      case 'home':
      default:
        return <HomePage studentName={student.name || 'Anna'} onSelectAction={(actionId) => setActivePage(actionId)} />;
    }
  };

  if (!signedIn) {
    return (
      <div className="auth-screen">
        <div className="auth-card">
          <div className="brand-block auth-brand">
            <div className="brand-mark">C</div>
            <div>
              <p className="eyebrow">Intelligent campus ecosystem</p>
              <h1>Campus Copilot</h1>
            </div>
          </div>

          <h2>Welcome back</h2>
          <p className="auth-subtitle">Your smart companion for campus life.</p>

          <div className="role-picker" aria-label="Choose your role">
            {roles.map((role) => (
              <button key={role} type="button" className={student.role === role ? 'active' : ''} aria-pressed={student.role === role} onClick={() => setStudent((previous) => ({ ...previous, role }))}>
                {role}
              </button>
            ))}
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={student.name}
                onChange={handleInputChange}
              />
            </label>

            <label>
              <span>Roll Number</span>
              <input
                type="text"
                name="rollNo"
                placeholder="Enter roll number"
                value={student.rollNo}
                onChange={handleInputChange}
              />
            </label>

            <label>
              <span>Department</span>
              <input
                type="text"
                name="department"
                placeholder="Enter department"
                value={student.department}
                onChange={handleInputChange}
              />
            </label>

            <label>
              <span>Year</span>
              <select name="year" value={student.year} onChange={handleInputChange}>
                <option value="">Select year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>
            </label>

            <button type="submit" className="primary-button auth-button">
              Continue
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">C</div>
          <div>
            <p className="eyebrow">Student helper</p>
            <h1>Campus Copilot</h1>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Sidebar navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-item ${activePage === item.id ? 'active' : ''}`}
              onClick={() => setActivePage(item.id)}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>

        <div className="sidebar-divider" />

        <div className="section-heading compact sidebar-section">
          <h3>Community</h3>
        </div>

        <nav className="sidebar-nav secondary-nav" aria-label="Community navigation">
          {secondaryNavItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-item ${activePage === item.id ? 'active' : ''}`}
              onClick={() => setActivePage(item.id)}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="main-panel">
        <TopBar studentName={student.name || 'Anna'} darkMode={darkMode} onToggleTheme={() => setDarkMode((value) => !value)} />
        <div className="page-transition">
          {renderPage()}
        </div>
      </main>

      <nav className="bottom-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <button
            key={`mobile-${item.id}`}
            type="button"
            className={`bottom-item ${activePage === item.id ? 'active' : ''}`}
            onClick={() => setActivePage(item.id)}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

export default App;
