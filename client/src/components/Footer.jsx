import { Navbar, Container, Nav } from "react-bootstrap"

export default function Footer() {

  return (
    <>
      <Navbar bg="light" variant="light" expand="sm" style={{marginTop:"100px"}}>
        <Container style={{width:"25%", marginTop:"20px"}}>
            <Nav className="me-auto"> 
              <Nav.Link href="https://www.linkedin.com/in/tiffany-bibby/">©Tiffany D. Bibby 2021</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </>
)
}