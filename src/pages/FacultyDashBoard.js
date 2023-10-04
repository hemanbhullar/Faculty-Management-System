import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar1 from '../component/SideBar1';
import FacultyContent from '../component/FacultyContent';

const FacultyDashBoard = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={2}><SideBar1 /></Col>
          <Col xs={10}><FacultyContent /></Col>
        </Row>
      </Container>
    </div>
  )
}

export default FacultyDashBoard