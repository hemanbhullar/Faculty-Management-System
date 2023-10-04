// UpcomingAssignments.js
import React, { useEffect, useState } from 'react';
import "./UpcomingAssignments.css"
const UpcomingAssignments = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    // Fetch assignments data from an API or a local data source
    // For this example, we'll use mock data
    const mockAssignments = [
      { id: 1, title: 'Assignment 1', dueDate: '2023-10-15' },
      { id: 2, title: 'Assignment 2', dueDate: '2023-10-20' },
      // Add more assignments here
    ];

    setAssignments(mockAssignments);
  }, []);

  return (
    <div className="assignments-widget">
      <h2>Upcoming Assignments</h2>
      <ul>
        {assignments.map((assignment) => (
          <li key={assignment.id}>
            <strong>{assignment.title}</strong> - Due on {assignment.dueDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingAssignments;
