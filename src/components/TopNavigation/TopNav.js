import React,{Fragment} from 'react'
import {Nav, Navbar,NavDropdown} from 'react-bootstrap'
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/custom.css'

function TopNav(){
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return(
        <Fragment>
        
        <Navbar className="navBar" expand="sm">
             
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" >
                <NavDropdown title="Basic"  className="navBar ">
                <Nav.Item >
                     <NavDropdown.Item   onSelect={handleSelect} className="hoverNavbar">Action</NavDropdown.Item>
                </Nav.Item>    
                <Nav.Item>
                     <NavDropdown.Item onSelect={handleSelect} className="hoverNavbar">Action</NavDropdown.Item>
                </Nav.Item>
                <Nav.Item>
                     <NavDropdown.Item  onSelect={handleSelect} className="hoverNavbar">Action</NavDropdown.Item>
                </Nav.Item> 
                          
                    </NavDropdown>
                    
                    <Nav.Item><Nav.Link   onSelect={handleSelect} className="hoverNavbar">Employee</Nav.Link></Nav.Item>     
                    <Nav.Item><Nav.Link  className="hoverNavbar">Customer and Supplier</Nav.Link></Nav.Item>     
                    <Nav.Item><Nav.Link   className="hoverNavbar">Inventory Management</Nav.Link></Nav.Item>     
                    <Nav.Item><Nav.Link  className="hoverNavbar">Account Management</Nav.Link></Nav.Item>     
                    <Nav.Item><Nav.Link   className="hoverNavbar">MIS Report</Nav.Link></Nav.Item>     
                    <Nav.Item><Nav.Link  className="hoverNavbar">Help</Nav.Link></Nav.Item>     
             
                </Nav>
   
          </Navbar.Collapse>
      </Navbar>
            </Fragment>
            );

   
}
export default TopNav