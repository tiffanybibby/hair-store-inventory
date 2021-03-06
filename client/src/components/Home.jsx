import { Card, Button, Row, Col } from "react-bootstrap";


export default function Home(props) {


  return (
    <>
    <div style={{ margin: "auto", width: "60%" }}>
      <Row xs={1} md={2} className="g-4" style={{ margin: "10px" }}>
        {Array.from({ length: 1 }).map((_, idx, index) => (
          <>
            <Col>
              <Card key={index} style={{ height: "100%" }}>
                <Card.Img
                  variant="top"
                  src="https://cdn.accentuate.io/74441857/1611603969512/collection-human-hair-wefts.jpg?v=0"
                />
                <Card.Body>
                  <Card.Title style={{ marginBottom: "20px", width: "100%", height: "40px" }}>Wefts</Card.Title>
                  <Card.Text >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={() => (window.location.href = "/wefts")}
                    style={{ marginTop: "5px", width: "100%" }}
                  >
                    All Wefts
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://cdn.shopify.com/s/files/1/2465/8681/products/4x4-wig-bw-n2_820x.jpg?v=1629353593"
                />
                <Card.Body>
                  <Card.Title style={{ marginBottom: "20px", width: "100%", height: "40px" }}>Wigs (Post MVP)</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={() => (window.location.href = "/")}
                    style={{ marginTop: "5px", width: "100%" }}
                  >
                    All Wigs
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </>
        ))}
      </Row>
      </div>
    </>
  )
}