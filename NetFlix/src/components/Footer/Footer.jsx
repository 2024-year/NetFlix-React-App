import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './footer.css'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const footer = () => {
  return (
    <Container className='footer_container' >
<Row>
<Col>
    <Nav>
    <Nav.Link className='link' href="#"><FacebookSharpIcon/></Nav.Link>
  <Nav.Link className='link' href="#"><InstagramIcon/></Nav.Link>
  <Nav.Link className='link' href="#"><YouTubeIcon/></Nav.Link>
    </Nav>
<ul>
  
  <li>Audio Description</li>
  <li>Investor Relation</li>
  <li>Legal Notice</li>
  <li className='service_code' >Service Code</li>
  <li>&#169; 1997-2024 Netflix inc</li>
</ul>
</Col>

<Col>
<ul>
  <li>Help Center</li>
  <li>Jops</li>
  <li>Cookie Preferences</li>
</ul>
</Col>
<Col>
<ul>
  <li>Gift Cards</li>
  <li>Terms of Use</li>
  <li>Corporate information</li>
</ul>
</Col>
<Col>
<ul>
  <li>Media Center</li>
  <li>Privacy</li>
  <li>Contact Us</li>
</ul>
</Col>
    </Row>
    </Container>
  )
}

export default footer
