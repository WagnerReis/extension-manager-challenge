import styled from "styled-components";

export const CardContainer = styled.div`
  width: 375px;
  height: 220px;
  background: ${(props) => props.theme.colors.red400};
  border-radius: 20px;

  background: ${(props) => props.theme.colors.cardBackground};
  border: 2px solid ${(props) => props.theme.colors.border};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

export const CardHeader = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CardTitle = styled.div`
  h2 {
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: 700;
  }

  p {
    color: ${(props) => props.theme.colors.neutral600};
    font-size: 16px;
    font-weight: 400;

    margin-top: 1.25rem;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: 2px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.text};
  font-weight: 400;
  cursor: pointer;

  padding: 0.5rem;
  border-radius: 40px;

  &:hover {
    opacity: 0.7;
    transition: opacity 0.2s;
  }
`;
