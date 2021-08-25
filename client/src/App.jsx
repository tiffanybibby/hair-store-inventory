import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import { baseURL, config } from "./services";
import "./App.css";
import Wefts from "./components/Wefts";
import Forms from "./components/Forms.jsx";
import Bootstrap from "./components/Bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import StyledComponents from "./components/StyledComponents";
import { CardGroup, Card, Button } from "react-bootstrap";

function App() {
  const [wefts, setWefts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchWefts = async () => {
      const resp = await axios.get(baseURL, config);

      console.log(resp.data.records);
      setWefts(resp.data.records);
    };
    fetchWefts();
  }, [toggleFetch]);

  return (
    <>
        <nav><Bootstrap /></nav>
      {/* <StyledComponents /> */}
      <Route path="/" exact>
        <br/>
        <br />
        <br/>
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src="https://cdn.accentuate.io/74441857/1611603969512/collection-human-hair-wefts.jpg?v=0"
            />
            <Card.Body>
              <Card.Title>Wefts</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              <Button
                variant="primary"
                type="submit"
                onClick={() => (window.location.href = "/wefts")}
              >
                All Wefts
              </Button>
            </Card.Body>
          </Card>

          {/* post mvp */}

          <Card>
            <Card.Img
              variant="top"
              src="https://cdn.shopify.com/s/files/1/2465/8681/products/4x4-wig-bw-n2_820x.jpg?v=1629353593"
            />
            <Card.Body>
              <Card.Title>All Wigs (Post MVP)</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              <Button
                variant="primary"
                type="submit"
                onClick={() => (window.location.href = "/")}
              >
                All Wigs
              </Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </Route>
      <br />
      <Route path="/wefts" exact>
        {wefts.map((weft, index) => (
          <React.Fragment key={index}>
            <Link to={`/wefts/${weft.id}`}>{weft.fields.name}</Link> <br />
          </React.Fragment>
        ))}
      </Route>
      <Route path="/wefts/:id">
        <Wefts wefts={wefts} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/new">
        <Forms setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/edit/:id">
        <>
          <Forms wefts={wefts} setToggleFetch={setToggleFetch} />
        </>
      </Route>
    </>
  );
}

export default App;
