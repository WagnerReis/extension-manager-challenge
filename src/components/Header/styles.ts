import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 5rem;
  background: red;
  border-radius: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin-top: 2.5rem;

  background: ${(props) => props.theme.colors.cardBackground};
`;

export const ToogleTheme = styled.button`
  width: 3rem;
  height: 3rem;
  background: ${(props) => props.theme.colors.backgroundToogle};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.neutral600};
    opacity: 0.7;
    transition: opacity 0.1s;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
