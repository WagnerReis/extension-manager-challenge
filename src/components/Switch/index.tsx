import { Label, SwitchRoot, Thumb } from "./styles";

interface SwitchProps {
  checked: boolean;
  onCheckedChange: () => void;
}

export function Switch({ checked, onCheckedChange }: SwitchProps) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Label htmlFor="is-active" />
      <SwitchRoot
        id="is-active"
        checked={checked}
        onCheckedChange={onCheckedChange}
      >
        <Thumb />
      </SwitchRoot>
    </div>
  );
}
