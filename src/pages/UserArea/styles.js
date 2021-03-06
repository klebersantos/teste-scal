import styled from "styled-components";

export const H1 = styled.h1`
  text-transform: uppercase;
  font-size: 25px;
  span {
    color: #1973da;
  }
`;

export const CenterBox = styled.div`
  max-width: 300px;
  margin: 50px auto;
  span {
    color: #1973da;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 20px;
    padding: 10px;
    font-weight: 500;
    height: 50px;
    border: 2px solid #999;
  }
  label {
    text-transform: uppercase;
    font-size: 16px;
    margin-bottom: 5px;
    font-weight: 500;
  }
`;

export const Login = styled.button`
  text-transform: uppercase;
  font-size: 20px;
  background: #1973da;
  color: #fff;
  padding: 10px 40px;
  margin: 20px auto 20px;
  display: block;
  border: none;
  width: 100%;
  transition: 0.3s;
  &:hover {
    color: #fff;
    background: #0d3057;
  }
`;
