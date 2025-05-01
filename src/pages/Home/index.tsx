import { useState } from "react";
import { Header } from "../../components/Header";
import { Container, NavBar, Content, NavButton } from "./styles";

import data from "../../../data.json";
import { Card } from "../../components/Card";

export function Home() {
  const [extensions, setExtensions] = useState(data);
  const [selected, setSelected] = useState("all");

  function handleFilterByActiveExtensions() {
    setSelected("active");
    setExtensions(data.filter((item) => item.isActive === true));
  }

  function handleFilterByInactiveExtensions() {
    setSelected("inactive");
    setExtensions(data.filter((item) => item.isActive === false));
  }

  function handleFilterAllExtensions() {
    setSelected("all");
    setExtensions(data);
  }

  return (
    <Container>
      <Header />

      <NavBar>
        <h1>Extensions List</h1>

        <nav>
          <NavButton
            selected={selected === "all"}
            onClick={handleFilterAllExtensions}
          >
            All
          </NavButton>
          <NavButton
            selected={selected === "active"}
            onClick={handleFilterByActiveExtensions}
          >
            Active
          </NavButton>
          <NavButton
            selected={selected === "inactive"}
            onClick={handleFilterByInactiveExtensions}
          >
            Inactive
          </NavButton>
        </nav>
      </NavBar>

      <Content>
        {extensions.map((item) => (
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
