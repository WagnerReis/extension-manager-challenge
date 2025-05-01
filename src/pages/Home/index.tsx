import { Header } from "../../components/Header";
import { Container, NavBar } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />

      <NavBar>
        <h1>Extensions List</h1>

        <nav>
          <button>All</button>
          <button>Active</button>
          <button>Inactive</button>
        </nav>
      </NavBar>
    </Container>
  );
}
