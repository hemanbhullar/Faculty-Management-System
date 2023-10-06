import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '../component/Sidebar/Sidebar';
import MainDash from '../MainDash/MainDash';
import FacultyListComponent from '../MainDash/FacultyList'; // Import the component for the Faculty List route
import AssignmentsComponent from '../MainDash/Assignments'; // Import the component for the Assignments route
import RewardsComponent from '../MainDash/Rewards'; // Import the component for the Rewards route
import AnalyticsComponent from '../MainDash/Analytics'; // Import the component for the Analytics route
import './Admin.css';

const AdminDashBoard = () => {
  return (
    <div className="Admin">
      <div className="AdminGlass">
          <Sidebar />
         <MainDash />
      </div>
    </div>
  );
};

export default AdminDashBoard;
