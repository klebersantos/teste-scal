import styled from "styled-components";

import LogoImage from "../../assets/logo.png";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  border: 2px solid #eee;
  .navbar {
    margin: 0;
    padding: 10px 0;
  }
  .navbar-collapse {
    flex-grow: 0;
  }
  .navbar-light .navbar-nav .nav-link {
    color: #000;
    margin: 0 10px;
    font-weight: 600;
    &:hover {
      text-decoration: none;
      color: #1973da;
    }
  }
  .loginLink {
    color: #1973da !important;
  }
  @media (max-width: 992px) {
    .navbar-toggler {
      position: absolute;
      left: 0;
      top: 20px;
    }
    .navbar-brand {
      margin: 0 auto;
    }
  }
`;

export const Logo = styled.img.attrs({
  src: LogoImage,
})`
  width: 48px;
  height: 47px;
`;
