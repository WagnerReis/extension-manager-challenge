import styled from "styled-components";

export const Container = styled.main`
  max-width: 1160px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const NavBar = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 3rem;

  h1 {
    color: ${(props) => props.theme.colors.text};
    padding: 1.5rem 0;
    font-weight: 700;
  }

  nav {
    display: flex;
    gap: 1rem;
  }
`;

export const NavButton = styled.button<{ selected: boolean }>`
  padding: 0.75rem 1rem;
  border-radius: 30px;
  font-size: 24px;
  border: 1px solid ${(props) => props.theme.colors.border};

  background: ${(props) =>
    props.selected
      ? props.theme.colors.red700
      : props.theme.colors.cardBackground};
  color: ${(props) =>
    props.selected ? props.theme.colors.background : props.theme.colors.text};

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  flex-wrap: wrap;
  padding-top: 1rem;
  padding-bottom: 3rem;
`;
