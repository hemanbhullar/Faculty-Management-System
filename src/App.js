import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import FacultyDashBoard from './pages/FacultyDashBoard';
import NavBar1 from './component/NavBar1';
import AdminDashBoard from './pages/AdminDashBoard';



function App() {
  const location = useLocation();
  const hideNavBarRoutes = ['/'];

  return (
    <div className="App">
      {hideNavBarRoutes.includes(location.pathname) ? null : <NavBar1 />}
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/faculty' element={<FacultyDashBoard />}></Route>
        <Route path='/admin' element={<AdminDashBoard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
