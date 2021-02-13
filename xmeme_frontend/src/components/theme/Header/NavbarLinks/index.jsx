import React, { useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import ToggleTheme from "components/theme/Header/ToggleTheme";
import { Wrapper } from "./styles";

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <div className="menu">
        <ToggleTheme />
      </div>
    </Wrapper>
  );
};

export default NavbarLinks;
