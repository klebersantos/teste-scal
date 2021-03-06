import styled from "styled-components";

import ButtonBase from "./buttonBase";

const LinkButton = styled.button`
  color: ${(props) => props.theme.colors[props.themeType || "primary"]};
  font-size: ${(props) => props.theme.sizes.text};
`;

export default LinkButton;
