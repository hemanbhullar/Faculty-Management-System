import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import FacultyDashBoard from './pages/FacultyDashBoard';
import NavBar1 from './component/NavBar1';
import AdminDashBoard from './pages/AdminDashBoard';
import { useAuth } from './component/UseAuth'
import Profile from './pages/Profile';
import Chatbot from './component/chatbot/Chatbot';

function NavBar() {
  const location = useLocation();
  const hideNavBarRoutes = ['/'];

  // Render NavBar1 only if the current location is not in hideNavBarRoutes
  return !hideNavBarRoutes.includes(location.pathname) ? <NavBar1 /> : null;
}

function App() {
  const isAuthenticated = useAuth();
  return (
    <div className="App">
      <Router>
        {/* Include the NavBar component */}
        <NavBar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/faculty" element={isAuthenticated ? <FacultyDashBoard /> : <Navigate to="/" />} />
          <Route path="/admin" element={isAuthenticated ? <AdminDashBoard /> : <Navigate to="/" />} />
          {/* Define two paths for the Profile component */}
          <Route path="/faculty/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/" />} />
          <Route path="/admin/profile"element={isAuthenticated ? <Profile /> : <Navigate to="/" />}/>
        </Routes>
      </Router>
      <Chatbot />
    </div>
  );
}

export default App;
