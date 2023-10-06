import {useState, useEffect} from 'react';

export function useAuth() {
    const[authentication, SetAuthenticated] = useState(false);

    useEffect(() => {
        //Check if the user is authenticated based on your criteria
        const storedFacultyCredentials = JSON.parse(localStorage.getItem('facultyCredentials'));
        const isAuthenticated = storedFacultyCredentials && storedFacultyCredentials.length > 0;

        SetAuthenticated(isAuthenticated);
    },[])
  return authentication
}