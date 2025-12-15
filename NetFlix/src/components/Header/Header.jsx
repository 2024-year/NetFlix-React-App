import React from 'react'
import './header.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NetflixLogo from '../../assets/images/BrandAssets_Logos_01-Wordmark-removebg-preview.png'
import MenuIcon from '@mui/icons-material/Menu';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export function DropdownItemTagsExample() {
  return (
    <Row className='dropdown_container'>
  <Col >
        <Nav.Link className='' href="#"> 
     <img
              alt=""
              src={NetflixLogo}
              width="130"
              // height="300"
              className="d-inline-block align-top"
            />
  </Nav.Link>
  </Col>
   <Col>
    <DropdownButton id=""  >

  <Row className='nav_container' >
      
      <Nav className="me-auto nav_left">

         

     
  <Nav.Link className='link' href="#">Home</Nav.Link>
  <Nav.Link className='link' href="#">Link</Nav.Link>
  <Nav.Link className='link' href="#">TVShows</Nav.Link>
  <Nav.Link className='link' href="#">Movies</Nav.Link>
  <Nav.Link className='link' href="#">Latest</Nav.Link>
  <Nav.Link className='link' href="#">MyList</Nav.Link>
  <Nav.Link className='link' href="#">Browser by Languages</Nav.Link>
 </Nav>

        
        <Col  lg="3" className='nav_right'>
        <Nav>
        <Nav.Link  className='link' href="#"><SearchIcon/></Nav.Link>
        <Nav.Link  className='link' href="#"><NotificationsNoneIcon/></Nav.Link>
        <Nav.Link  className='link' href="#"><PermIdentityIcon/></Nav.Link>
        <Nav.Link  className='link' href="#"><ArrowDropDownIcon/></Nav.Link>
      
  
      </Nav>
        </Col>
      </Row>
    </DropdownButton>
   </Col>
    </Row>
  );
}

  


const Header = () => {
  return ( 
    
    <Container fluid className="nav_outer_container" >
      <Row className='nav_container' >
        <Col >
      <Nav className="me-auto nav_left">

         
  <Nav.Link className='' href="#"> 
     <img
              alt=""
              src={NetflixLogo}
              width="130"
              // height="300"
              className="d-inline-block align-top"
            />
  </Nav.Link>
     
  <Nav.Link className='link' href="#">Home</Nav.Link>
  <Nav.Link className='link' href="#">Link</Nav.Link>
  <Nav.Link className='link' href="#">TVShows</Nav.Link>
  <Nav.Link className='link' href="#">Movies</Nav.Link>
  <Nav.Link className='link' href="#">Latest</Nav.Link>
  <Nav.Link className='link' href="#">MyList</Nav.Link>
  <Nav.Link className='link' href="#">Browser by Languages</Nav.Link>
 </Nav>
</Col>
        
        <Col  lg="3" className='nav_right'>
        <Nav>
        <Nav.Link  className='link' href="#"><SearchIcon/></Nav.Link>
        <Nav.Link  className='link' href="#"><NotificationsNoneIcon/></Nav.Link>
        <Nav.Link  className='link' href="#"><PermIdentityIcon/></Nav.Link>
        <Nav.Link  className='link' href="#"><ArrowDropDownIcon/></Nav.Link>
      
  
      </Nav>
        </Col>
      </Row>
    </Container>

  
  )
}

export default Header
