import { ReactNode } from "react";

export type ButtonColor = "primary" | "secondary" | "success" | "danger";
interface ButtonProps {
  children: ReactNode;
  buttonType?: ButtonColor;
  onButtonClick: () => void;
}

const Button = ({
  children,
  buttonType = "primary",
  onButtonClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={"btn btn-" + buttonType}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
};

export default Button;
