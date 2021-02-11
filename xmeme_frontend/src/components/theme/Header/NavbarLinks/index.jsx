import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "providers/ThemeProvider";
import ToggleTheme from "components/theme/Header/ToggleTheme";
import { Wrapper } from "./styles";
import config from "data/config"
const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <div className="menu">
        <AnchorLink href={config.githubUrl}>My Github</AnchorLink>
        <AnchorLink href={config.linkedinUrl}>My LinkedIn</AnchorLink>
        <ToggleTheme />
      </div>
    </Wrapper>
  );
};

export default NavbarLinks;
