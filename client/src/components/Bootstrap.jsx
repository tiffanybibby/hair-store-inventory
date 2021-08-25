import { Button, Modal } from "react-bootstrap"
import { Navbar, Container, Nav, NavDropdown, Link } from "react-bootstrap"

export default function Bootstrap() {

  const buttonSize = {
    fontSize: "30px"
  }
  return (<>
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/new">Add Product</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
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














    {/* <Button style={buttonSize} variant="primary">Primary</Button>{' '}
    <Button variant="secondary">Secondary</Button>{' '}
    <Button variant="success">Success</Button>{' '}
    <Button variant="warning">Warning</Button>{' '}
    <Button variant="danger">Danger</Button>
    <Button variant="info">Info</Button>{' '}
    <Button variant="light">Light</Button>
    <Button variant="dark">Dark</Button>{' '}
    <Button variant="link">Link</Button>

  <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog> */}
  </>)
}