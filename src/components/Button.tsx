import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "dark" | "warning";
  onClick: () => void;
}
const Button = ({ children, color = "dark", onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
