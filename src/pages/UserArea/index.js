import React from "react";
import { H1, CenterBox, Form, Login } from "./styles";

function Welcome() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center">
          <H1>User Area</H1>
        </div>
        <div className="col-12">
          <CenterBox className="centerBox">
            <Form action="/welcome">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" />
              <label htmlFor="password">Password</label>
              <input type="text" name="Password" />
              <Login type="submit">Login</Login>
            </Form>
          </CenterBox>
        </div>
      </div>
    </div>
  );
}
export default Welcome;
