import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';



function Contact() {
    const mystyle = {
        width :"30%",
        height:"auto",        
        
    }
    return (
        <div>
        
        
          <h2  style={{   textalign: 'center', color: "red", fontSize: 30 }} >Contact Me</h2>
          <h3 style={{   textalign: 'center', fontSize: 20 }}>
          We welcome you to contact us for more information! 
          </h3 >
      
      <Container>
      <Row>
        <Col>           <Card.Link href="https://mail.google.com/mail/">Email</Card.Link>
 </Col>
        <Col>          <Card.Link href="https://www.researchgate.net/profile/Anwar-Gamra">researchgate</Card.Link>
</Col>
      </Row>
      <Row>
        <Col>          <Card.Link href="https://tn.linkedin.com/in/anwar-gamra-a34365183?trk=people_directory">Linkeden</Card.Link>
</Col>
        <Col> +216 100 200</Col>
      </Row>
    </Container>
    </div>
    )
}

export default Contact

