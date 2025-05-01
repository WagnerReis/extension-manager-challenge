import { useState } from "react";
import { Header } from "../../components/Header";
import { Container, NavBar, Content } from "./styles";

import data from "../../../data.json";
import { Card } from "../../components/Card";

export function Home() {
  const [extension, setExtension] = useState(data);

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

      <Content>
        {extension.map((item) => (
          <Card
            key={item.name}
            logo={item.logo}
            title={item.name}
            description={item.description}
            isActive={item.isActive}
          />
        ))}
      </Content>
    </Container>
  );
}
