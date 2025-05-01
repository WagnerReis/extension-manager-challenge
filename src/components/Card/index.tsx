import {
  CardContainer,
  CardFooter,
  CardHeader,
  CardTitle,
  RemoveButton,
} from "./styles";

interface CardProps {
  logo: string;
  title: string;
  description: string;
  isActive: boolean;
}

export function Card({ logo, title, description, isActive }: CardProps) {
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
        <input type="checkbox" checked={isActive} />
      </CardFooter>
    </CardContainer>
  );
}
