import styled from "styled-components";

import ButtonBase from "./buttonBase";

const Button = styled(ButtonBase)`
  background-color: ${(props) =>
    props.theme.colors[props.themeType || "primary"]};
  font-size: ${(props) => props.theme.sizes.text};
`;

export default Button;
