import { Switch } from "radix-ui";
import styled from "styled-components";

export const SwitchRoot = styled(Switch.Root)`
  all: unset;
  width: 39px;
  height: 20px;
  background-color: var(--black-a9);
  border-radius: 9999px;
  position: relative;
  box-shadow: 0 2px 10px var(--black-a7);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.border};
  }
  &[data-state="checked"] {
    background-color: ${(props) => props.theme.colors.red400};
  }

  &[data-state="unchecked"] {
    background-color: ${(props) => props.theme.colors.backgroundToogle};
  }
`;

export const Thumb = styled(Switch.Thumb)`
  display: block;
  width: 18px;
  height: 18px;
  background-color: white;
  border-radius: 9999px;
  box-shadow: 0 2px 2px var(--black-a7);
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;
  &[data-state="checked"] {
    transform: translateX(19px);
  }
`;

export const Label = styled.label`
  color: white;
  font-size: 15px;
  line-height: 1;
  user-select: none;
`;
