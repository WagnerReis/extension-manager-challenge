import styled from "styled-components";

export const Container = styled.main`
  max-width: 1160px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 575px) {
    padding: 0 1rem;
  }
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

  @media (max-width: 575px) {
    display: flex;
    flex-direction: column;

    margin-top: 1rem;

    h1 {
      font-size: 1.75rem;
    }
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

  @media (max-width: 575px) {
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  gap: 1rem;
  padding: 1rem 0 3rem;
  justify-content: flex-start;
`;
