import { Navbar, Container, Nav, NavDropdown, Link } from "react-bootstrap"

export default function Bootstrap() {

  return (<>
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/new">Add Product</Nav.Link>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="/wefts">All Wefts</NavDropdown.Item>
                <NavDropdown.Item href="/">All Wigs (Post MVP)</NavDropdown.Item>
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
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