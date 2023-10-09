import "./LoginFormStyle.css";
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SetAdminCredentialsButton from "./AdminDashboardComponents/SetAdminCredentialsButton";
import { useEffect } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
      //Check if the user is authenticated when the component mounts
      const authenticated = localStorage.getItem('authenticated') === 'true';
      if(authenticated) {
        const role = localStorage.getItem('role');
        if(role === 'faculty') {
          navigate('/faculty');
        } else if(role === 'admin') {
          navigate('/admin');
        }
      }
    }, [navigate]);
  
    const validateForm = () => {
      const newErrors = {};
      if (!email) {
        newErrors.email = 'Email is required';
      }
      if (!password) {
        newErrors.password = 'Password is required';
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    }
  
    const handleAuthentication = () => {
      const storedFacultyCredentials = JSON.parse(localStorage.getItem('facultyCredentials'));
      const matchingFaculty = storedFacultyCredentials && storedFacultyCredentials.find(
        (faculty) => email === faculty.email && password === faculty.password
      );
  
      if (matchingFaculty) {
        // Authentication successful, set local storage to indicate authentication
        localStorage.setItem('authenticated', 'true');
        localStorage.setItem('role', matchingFaculty.role);
        if (matchingFaculty.role === 'faculty') {
          navigate('/faculty');
        } else if (matchingFaculty.role === 'admin') {
          navigate('/admin');
        }
      } else {
        // Authentication failed, handle error as needed
        setErrors({ login: 'Invalid email or password' });
      }
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        handleAuthentication();
      }
    };
    return (
        <div>
            <div className="loginPageContainer">
                <div className="image">
                </div>
                <div>
                    <Form className="LoginForm" onSubmit={handleSubmit}>
                        <Form.Group controlId="email">
                            <Form.Label style={{fontWeight:'600'}}>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label style={{fontWeight:'600'}}>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                isInvalid={!!errors.password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit" style={{margin:'10px'}}>
                            Login
                        </Button>
                        <p>{errors.login}</p>
                        <SetAdminCredentialsButton/>
                    </Form>
                </div>
            </div>
        </div>
  )
}

export default LoginForm