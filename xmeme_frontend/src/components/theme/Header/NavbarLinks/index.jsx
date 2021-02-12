import React, { useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import ToggleTheme from "components/theme/Header/ToggleTheme";
import { Wrapper } from "./styles";
import config from "data/config"
const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <div className="menu">
        <a  target="_blank" rel="noreferrer" href={config.githubUrl}>My Github</a>
        <a  target="_blank" rel="noreferrer" href={config.linkedinUrl}>My LinkedIn</a>
        <ToggleTheme />
      </div>
    </Wrapper>
  );
};

export default NavbarLinks;
