import styled from "styled-components";

export const H1 = styled.h1`
  text-transform: uppercase;
  font-size: 25px;
  span {
    color: #1973da;
  }
`;

export const H2 = styled.h2`
  text-transform: uppercase;
  font-size: 17px;
  margin-bottom: 30px;
  span {
    color: #1973da;
  }
`;

export const CenterBox = styled.div`
  max-width: 580px;
  margin: 50px auto;
  span {
    color: #1973da;
  }
  .d-flex {
    justify-content: space-between;
    @media (max-width: 992px) {
      display: block !important;
    }
  }
  .buttonDefault {
    font-size: 16px;
    text-transform: uppercase;
    padding: 3px 20px;
    border: 1px solid #000;
    border-radius: 25px;
    color: #000;
    font-weight: 500;
    text-align: center;
    transition: 0.3s;
    display: inline-block;
    @media (max-width: 992px) {
      margin: 20px auto;
      width: 120px;
      display: block;
    }
    &.red {
      color: #d0021b;
      border-color: #d0021b;
    }
    &.blue {
      color: #1973da;
      border-color: #1973da;
    }
    &.purple {
      color: #bd10e0;
      border-color: #bd10e0;
    }
    &.green {
      color: #7cbb37;
      border-color: #7cbb37;
    }
    &.yellow {
      color: #f5a623;
      border-color: #f5a623;
    }
    &:hover {
      border-color: #1973da;
      color: #1973da;
      text-decoration: none;
    }
  }
  .bth {
    text-align: center;
    margin: 0 auto;
    display: block;
    text-transform: uppercase;
    font-size: 20px;
    width: 150px;
  }
`;

export const Save = styled.button`
  text-transform: uppercase;
  font-size: 20px;
  background: #1973da;
  color: #fff;
  padding: 10px 40px;
  margin: 50px auto 40px;
  display: block;
  border: none;
  width: 251px;
  transition: 0.3s;
  &:hover {
    color: #fff;
    background: #0d3057;
  }
`;
