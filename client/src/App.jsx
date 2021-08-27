import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import GlobalNavbar from "./components/GlobalNavbar";
import Home from "./components/Home";
import Wefts from "./components/Wefts";
import ShowWefts from "./components/ShowWefts";
import Forms from "./components/Forms.jsx";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";




export default function App() {
  const [wefts, setWefts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchWefts = async () => {
      const resp = await axios.get(baseURL, config);
      setWefts(resp.data.records);
    };
    fetchWefts();
  }, [toggleFetch]);

  return (
    <>
      <nav><GlobalNavbar/></nav>
      <Route path="/" exact>
      <Home wefts={wefts} setToggleFetch={setToggleFetch} />
      </Route>
      <br />
      <Route path="/wefts" exact>
      <ShowWefts wefts={wefts} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/wefts/:id">
        <Wefts wefts={wefts} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/new">
        <Forms setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/edit/:id">
          <Forms wefts={wefts} setToggleFetch={setToggleFetch} />
      </Route>
      <footer><Footer/></footer>
    </>
  );
}