import { useState } from "react";
import { Header } from "../../components/Header";
import { Container, NavBar, Content, NavButton } from "./styles";

import data from "../../../data.json";
import { Card } from "../../components/Card";

export function Home() {
  const [extension, setExtension] = useState(data);
  const [selected, setSelected] = useState("all");

  return (
    <Container>
      <Header />

      <NavBar>
        <h1>Extensions List</h1>

        <nav>
          <NavButton
            selected={selected === "all"}
            onClick={() => setSelected("all")}
          >
            All
          </NavButton>
          <NavButton
            selected={selected === "active"}
            onClick={() => setSelected("active")}
          >
            Active
          </NavButton>
          <NavButton
            selected={selected === "inactive"}
            onClick={() => setSelected("inactive")}
          >
            Inactive
          </NavButton>
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
