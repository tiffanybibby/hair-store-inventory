import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import { baseURL, config } from "./services";
import './App.css';
import Wefts from "./components/Wefts";
import Form from "./components/Form.jsx";

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
      <nav>
        <Link to="/">Home</Link> <br/>
        <Link to="/new">Add Product</Link>
      </nav>
      <Route path="/" exact>
      <button type='submit'onClick={() => window.location.href = "/wefts"}>All Wefts</button>
      </Route>
      <br/>
      <Route path="/wefts" exact>
        {wefts.map((weft, index) => (
          <React.Fragment key={index}>
            <Link to={`/wefts/${weft.id}`}>{weft.fields.name}</Link> <br/>
            </React.Fragment>
          ))}
      </Route>
      <Route path="/wefts/:id">
      <Wefts wefts={wefts} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/new">
        <Form setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/edit/:id">
        <>
        <Form wefts={wefts} setToggleFetch={setToggleFetch} />
          </>
      </Route>
    </>
  );
}

export default App;
