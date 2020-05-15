import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="jumbotron">
    <h1>Fineract Web</h1>
    <p>Welcome to Apache Fineract web client</p>
    <Link to="client" className="btn btn-primary btn-lg">
      View clients
    </Link>
  </div>
);

export default Home;
