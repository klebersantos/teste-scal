import React from "react";
import { Link } from "react-router-dom";
import { H1, H2, CenterBox, Save } from "./styles";

function Welcome() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center">
          <H1>
            Welcome, <span>Username</span>
          </H1>
        </div>
        <div className="col-12">
          <CenterBox className="centerBox">
            <H2>My Interests</H2>
            <div className="d-flex">
              <Link to="/" className="red buttonDefault">
                Politics
              </Link>
              <Link to="/" className="purple buttonDefault">
                Business
              </Link>
              <Link to="/" className="blue buttonDefault">
                Tech
              </Link>
              <Link to="/" className="green buttonDefault">
                Science
              </Link>
              <Link to="/" className="yellow buttonDefault">
                Sports
              </Link>
            </div>
            <Save type="button">Save</Save>
            <Link to="/" className="bth">
              Back to home
            </Link>
          </CenterBox>
        </div>
      </div>
    </div>
  );
}
export default Welcome;
