import { AppBar, Toolbar, styled } from "@mui/material";

import Logo from "../images/logo.jpg";

const StyledHeader = styled(AppBar)`
  background: #000;
`;

const Header = () => {
  return (
    <StyledHeader position="static">
      <Toolbar>
        <img src={Logo} alt="logo" style={{ width: 180 }} />
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
