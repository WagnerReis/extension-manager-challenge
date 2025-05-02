import {
  CardContainer,
  CardFooter,
  CardHeader,
  CardTitle,
  RemoveButton,
} from "./styles";

import { Switch } from "../../components/Switch";
import imageMap from "../../utils/imageMap";

interface CardProps {
  logo: string;
  title: string;
  description: string;
  isActive: boolean;
  onCheckedChange: () => void;
  onRemove: () => void;
}

export function Card({
  logo,
  title,
  description,
  isActive,
  onCheckedChange,
  onRemove,
}: CardProps) {
  const logoSrc = imageMap[logo] || logo;

  return (
    <CardContainer>
      <CardHeader>
        <img src={logoSrc} alt="" />
        <CardTitle>
          <h2>{title}</h2>
          <p>{description}</p>
        </CardTitle>
      </CardHeader>

      <CardFooter>
        <RemoveButton onClick={onRemove}>Remove</RemoveButton>
        <Switch checked={isActive} onCheckedChange={onCheckedChange} />
      </CardFooter>
    </CardContainer>
  );
}
