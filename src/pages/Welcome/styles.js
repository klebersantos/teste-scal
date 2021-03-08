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
