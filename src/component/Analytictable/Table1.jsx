import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./Table1.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

export default function BasicTable() {
  const [displayCourses, setDisplayCourses] = React.useState(false);
  const [courses, setCourses] = React.useState([
    createData("C++", 18908424, "2 March 2022", "Pending"),
    createData("C++ with DSA", 18908425, "2 March 2022", "Pending"),
    createData("Web Development", 18908426, "2 March 2022", "Pending"),
    createData("CYBER SECURITY", 18908427, "2 March 2022", "Pending"),
    createData("TOC", 18908428, "2 March 2022", "Pending"),
    createData("AWS", 18908429, "2 March 2022", "Pending"),
    createData("DIGITAL MARKETTING", 18908430, "2 March 2022", "Pending"),
    createData("JAVA WITH DSA", 18908431, "2 March 2022", "Pending"),
    createData("NALR", 18908432, "2 March 2022", "Pending"),
  ]);
  const handleCourseStatusChange = (index, newStatus) => {
    const updatedCourses = [...courses];
    updatedCourses[index].status = newStatus;
    setCourses(updatedCourses);
  };

  const handleToggleCourses = () => {
    setDisplayCourses(!displayCourses);
  };

  return (
    <div className="Table">
      <Button className="statistic-box"
        onClick={handleToggleCourses}
      >
        {displayCourses ? "Total Courses" : "Total Courses"}
      </Button>

      {displayCourses && (
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Course</TableCell>
                <TableCell align="left">Course ID</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {courses.map((row, index) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="status">{row.status}</span>
                  </TableCell>
                  <TableCell align="left">
                    <Select
                      value={row.status}
                      onChange={(e) =>
                        handleCourseStatusChange(index, e.target.value)
                      }
                    >
                      <MenuItem value="Approved">Approved</MenuItem>
                      <MenuItem value="Pending">Pending</MenuItem>
                      <MenuItem value="Delivered">Delivered</MenuItem>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}