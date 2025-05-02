import {
  CardContainer,
  CardFooter,
  CardHeader,
  CardTitle,
  RemoveButton,
} from "./styles";

import { Switch } from "../../components/Switch";

interface CardProps {
  logo: string;
  title: string;
  description: string;
  isActive: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export function Card({
  logo,
  title,
  description,
  isActive,
  onCheckedChange,
}: CardProps) {
  return (
    <CardContainer>
      <CardHeader>
        <img src={logo} alt="" />
        <CardTitle>
          <h2>{title}</h2>
          <p>{description}</p>
        </CardTitle>
      </CardHeader>

      <CardFooter>
        <RemoveButton>Remove</RemoveButton>
        <Switch checked={isActive} onCheckedChange={onCheckedChange} />
      </CardFooter>
    </CardContainer>
  );
}
