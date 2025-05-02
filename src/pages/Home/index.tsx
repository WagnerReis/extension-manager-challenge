import { useCallback, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Container, NavBar, Content, NavButton } from "./styles";

import data from "../../../data.json";
import { Card } from "../../components/Card";

interface Extension {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

export function Home() {
  const [extensions, setExtensions] = useState<Extension[]>(data);
  const [selected, setSelected] = useState("all");
  const [allExtensions, setAllExtensions] = useState<Extension[]>(data);

  function handleFilterByActiveExtensions() {
    setSelected("active");
  }

  function handleFilterByInactiveExtensions() {
    setSelected("inactive");
  }

  function handleFilterAllExtensions() {
    setSelected("all");
  }

  function handleRemoveExtension(name: string) {
    setAllExtensions((prevExtensions) =>
      prevExtensions.filter((extension) => extension.name !== name),
    );
  }

  const handleToggleExtension = useCallback((name: string) => {
    setAllExtensions((prevExtensions) => {
      const updatedExtensions = prevExtensions.map((extension) => {
        if (extension.name === name) {
          return { ...extension, isActive: !extension.isActive };
        }
        return extension;
      });
      return updatedExtensions;
    });
  }, []);

  useEffect(() => {
    if (selected === "active") {
      setExtensions(allExtensions.filter((item) => item.isActive === true));
    } else if (selected === "inactive") {
      setExtensions(allExtensions.filter((item) => item.isActive === false));
    } else {
      setExtensions(allExtensions);
    }
  }, [allExtensions, selected]);

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
            onCheckedChange={() => handleToggleExtension(item.name)}
            onRemove={() => handleRemoveExtension(item.name)}
          />
        ))}
      </Content>
    </Container>
  );
}
