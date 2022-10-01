import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'

function BasicExample() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img src={require('../../assets/choc-removebg-preview.png')} alt="s"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/menu">Menu</Nav.Link>
                        <Nav.Link href="/aboutUs">About us</Nav.Link>
                        <Nav.Link href="/our-story">Our Story</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;