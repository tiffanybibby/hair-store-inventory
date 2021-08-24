// import { Button, Modal } from "react-bootstrap"
import { Navbar, Container } from "react-bootstrap"

export default function Bootstrap() {

  // const buttonSize = {
  //   fontSize: "30px"
  // }
  return (<>
    <>
  <Navbar bg="dark">
    <Container>
      <Navbar.Brand href="#home">Brand link</Navbar.Brand>
    </Container>
  </Navbar>
  <br />
  <Navbar bg="dark">
  <Container>
    <Navbar.Brand href="#home">
      <img
        src="https://github.com/tiffanybibby/hair-store-inventory/blob/main/assets/tdlogo.png?raw=true" 
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Container>
  </Navbar>
  <br />
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      React Bootstrap
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