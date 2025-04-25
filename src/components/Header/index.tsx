import logoDark from "../../assets/logo-dark.svg";
import logoLight from "../../assets/logo-light.svg";
import sun from "../../assets/icon-sun.svg";
import moon from "../../assets/icon-moon.svg";
import { useTheme } from "../../hooks/useTheme";
import { HeaderContainer, ToogleTheme, Logo } from "./styles";

export function Header() {
  const { theme, toogleTheme } = useTheme();

  const logo = theme === "dark" ? logoLight : logoDark;
  const toogleIcon = theme === "dark" ? sun : moon;

  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="" />
      </Logo>

      <ToogleTheme onClick={toogleTheme}>
        <img src={toogleIcon} alt="" />
      </ToogleTheme>
    </HeaderContainer>
  );
}
