import logo from "../../assets/favicon-32x32.png";
import sun from "../../assets/icon-sun.svg";
import { HeaderContainer, ToogleTheme, Logo } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="" />
        <h2>Extensions</h2>
      </Logo>

      <ToogleTheme>
        <img src={sun} alt="" />
      </ToogleTheme>
    </HeaderContainer>
  );
}
