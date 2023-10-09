import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './FacultyListStyle.css'

function FacultyList() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    department: '', // New field for department
    position: '',   // New field for position
    role: 'faculty', // Initial role (you can change it to 'admin' as needed)
  });

  const [users, setUsers] = useState(() => {
    // Initialize users from local storage or an empty array
    return JSON.parse(localStorage.getItem('facultyCredentials')) || [];
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generateEmail = () => {
    const { firstName } = formData;

    // Check if the firstName field is empty
    if (!firstName.trim()) {
      toast.error('First Name cannot be empty', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return; // Exit the function if the firstName is empty
    }

    const firstNameWithoutSpaces = firstName.replace(/\s/g, '');
    const email = `${firstNameWithoutSpaces.toLowerCase()}@faculty.com`;
    setFormData({
      ...formData,
      email,
    });
  };

  const generateRandomPassword = () => {
    const { firstName } = formData;

    // Check if the firstName field is empty
    if (!firstName.trim()) {
      toast.error('First Name cannot be empty', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return; // Exit the function if the firstName is empty
    }

    const password = Math.random().toString(36).slice(-8);
    setFormData({
      ...formData,
      password,
    });
  };
  const handleAddUser = () => {
    const { firstName, lastName, email, password, department, position, role } = formData;

    // Check if the firstName field is empty (same as before)
    if (!firstName.trim()) {
      toast.error('First Name cannot be empty', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    // Check if other required fields (department, position, and ) are empty
    if (!department || !position  || !role) {
      toast.error('Department, and Position are required fields', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    const newUser = {
      firstName,
      lastName,
      email,
      password,
      department,
      position,
      role, // Include the role in the user object
    };

    const updatedUsers = [...users, newUser];
    localStorage.setItem('facultyCredentials', JSON.stringify(updatedUsers));

    toast.success('User has been added', {
      position: toast.POSITION.TOP_RIGHT,
    });

    setUsers(updatedUsers);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      department: '',
      position: '',
      role: 'faculty', // Include the role in the user object
    });
  };

  const handleDeleteUser = (email) => {
    const updatedUsers = users.filter((user) => user.email !== email);
    localStorage.setItem('facultyCredentials', JSON.stringify(updatedUsers));
    toast.error('User has been deleted', {
      position: toast.POSITION.TOP_RIGHT,
    });
    setUsers(updatedUsers);
  };
  const handleDepartmentChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePositionChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <div className='page-container'>
      <div className='form-container'>
        <div className="container">
          <h2>Admin Form</h2>
          <div className="horizontal-row">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
            />
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleDepartmentChange}
            >
              <option value="">Select Department</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="DBMS">DBMS</option>
              <option value="C++">C++</option>
            </select>
            <select
              id="position"
              name="position"
              value={formData.position}
              onChange={handlePositionChange}
            >
              <option value="">Select Position</option>
              <option value="Dean">Dean</option>
              <option value="Mentor">Mentor</option>
              <option value="Professor">Professor</option>
              <option value="Associate Professor">Associate Professor</option>
              <option value="Assistant Professor">Assistant Professor</option>
            </select>
          </div>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
          >
            <option value="faculty">Faculty</option>
            <option value="admin">Admin</option>
          </select>
          <div className="horizontal-row">
            <button onClick={generateEmail} className="button">
              Generate Email
            </button>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
          </div>
          <div className="horizontal-row">
            <button onClick={generateRandomPassword} className="button">
              Generate Random Password
            </button>
            <input
              type="text"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
          </div>
          <div className="horizontal-row">
            <button onClick={handleAddUser} className="button red">
              Add User
            </button>
          </div>
        </div>
        <h2>Users</h2>
        <ul className='facultyList'>
          {users.map((user, index) => (
            <li key={index}>
              {user.firstName} {user.lastName} - {user.email} ({user.role}) {/* Display the role */}
              <button onClick={() => handleDeleteUser(user.email)} className="button delete">
                Delete
              </button>
            </li>
          ))}
        </ul>
        <ToastContainer />
      </div>
    </div>

  );
}
export default FacultyList;
