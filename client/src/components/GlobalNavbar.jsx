import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

export default function GlobalNavbar() {

  return (<>
    <>
      <Navbar bg="light" variant="light" expand="sm">
        <Container style={{width:"70%"}}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/new">Add Product</Nav.Link>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item key="option-1" href="/wefts">All Wefts</NavDropdown.Item>
                <NavDropdown.Item key="option-2" href="/">All Wigs (Post MVP)</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        <Container style={{width:"30%"}} className="justify-content-end">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://github.com/tiffanybibby/hair-store-inventory/blob/main/assets/tdlogo1.png?raw=true"
              width="120"
              height="80"
              className="d-inline-block align-top"
              />{' '}
          </Navbar.Brand>
          </Container>
      </Navbar>
    </>
  </>)
}