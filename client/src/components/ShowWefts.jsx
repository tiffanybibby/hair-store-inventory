import { Card, Button, Row, Col } from "react-bootstrap";

export default function ShowWefts(props) {

  
    return(
  <>
    <div style={{ margin: "auto", textAlign: "center" }}>
      <h2>All Wefts</h2>
    </div>
    <div style={{ margin: "auto", width: "60%" }}>
      <Row xs={1} md={3} className="g-4" style={{ margin: "0px" }}>
        {Array.from({ length: 1 }).map((_, idx) => (
          <>
            {props.wefts.map((weft, index) => (
              <>
                <Col>
                  <Card key={index} style={{ height: "100%", width: "100%" }}>
                    <Card.Img
                      variant="top"
                      src={weft.fields.image}
                      style={{ marginBottom: "10px", height: "160px", width: "100%" }}
                    />
                    <Card.Body>
                      <Card.Title style={{ margin: "20px 0px", width: "100%", height: "40px", textAlign: "center" }} >{weft.fields.name}</Card.Title>
                      <Button
                        variant="primary"
                        type="submit"
                        style={{ margin: "5px 0px", width: "100%" }}
                        onClick={() => (window.location.href = `/wefts/${weft.id}`)}
                      >
                        View Details
                      </Button>
                      {/* <Button style={{ marginTop: "5px", width: "100%" }} onClick={handleDelete}>Delete</Button> */}
                    </Card.Body>
                  </Card>
                </Col>
              </>
            ))}

          </>
        ))}
      </Row>
    </div>
  </>
    )}