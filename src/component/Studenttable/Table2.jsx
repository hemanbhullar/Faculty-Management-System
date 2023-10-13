import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import "./Table2.css";

function createData(StudentName, StudentId, DateOfRegistration, CoursesEnrolled) {
  return { StudentName, StudentId, DateOfRegistration, CoursesEnrolled };
}

export default function StudentTable() {
  const [displayStudents, setDisplayStudents] = React.useState(false);
  const students =[
    createData("Abhinav", 2110990100, "2 March 2022", "C++ with DSA and Cyber Security"),
    createData("Arnav", 2110990101, "18 March 2022", "Java with DSA and DBMS"),
    createData("Daman", 2110990102, "1 March 2022", "TOC and Cyber Security"),
    createData("Divyansh", 2110990103, "30 March 2022", "C++ with DSA and DBMS"),
    createData("Gaurav", 2110990104, "21 March 2022", "NALR and Cyber Security"),
    createData("Hamen", 2110990105, "6 March 2022", "C++ with DSA and Web Development"),
    createData("Harman", 2110990106, "16 March 2022", "Web Development and Cyber Security"),
    createData("Harshit", 2110990107, "12 March 2022", "C++ with DSA and TOC"),
    createData("Raman", 2110990108, "9 March 2022", "Java with DSA and Cyber Security"),
    createData("Suman", 2110990109, "2 March 2022", "C++ with DSA and Cyber Security"),
  ];

  const handleToggleStudents = () => {
    setDisplayStudents(!displayStudents);
  };

  return (
    <div className="Table">
      <Button
        className="statistic-box1"
        onClick={handleToggleStudents}
      >
        {displayStudents ? "Total Students" : "Total Students"}
      </Button>

      {displayStudents && (
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" ,overflowY:'scroll', height:'550px' }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Student Name</TableCell>
                <TableCell align="left">Student Id</TableCell>
                <TableCell align="left">Date Of Registration</TableCell>
                <TableCell align="left">Courses Enrolled</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white"}}>
              {students.map((row, index) => (
                <TableRow
                  key={row.StudentName} // Corrected from `name` to `StudentName`
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.StudentName} {/* Corrected from `name` to `StudentName` */}
                  </TableCell>
                  <TableCell align="left">{row.StudentId} {/* Corrected from `trackingId` to `StudentId` */}</TableCell>
                  <TableCell align="left">{row.DateOfRegistration} {/* Corrected from `date` to `DateOfRegistration` */}</TableCell>
                  <TableCell align="left">{row.CoursesEnrolled} {/* Corrected from `status` to `CoursesEnrolled` */}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
