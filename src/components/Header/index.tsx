import logo from "../../assets/favicon-32x32.png";
import sun from "../../assets/icon-sun.svg";
import { useTheme } from "../../hooks/useTheme";
import { HeaderContainer, ToogleTheme, Logo } from "./styles";

export function Header() {
  const { toogleTheme } = useTheme();

  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="" />
        <h2>Extensions</h2>
      </Logo>

      <ToogleTheme onClick={toogleTheme}>
        <img src={sun} alt="" />
      </ToogleTheme>
    </HeaderContainer>
  );
}
