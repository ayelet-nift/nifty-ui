import React from "react";
import buttonTokens from "../../../../tokens/button.json";

type Variant = keyof typeof buttonTokens.variants;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export const Button: React.FC<ButtonProps> = ({ variant = "primary", children, ...props }) => {
  const token = buttonTokens.variants[variant];

  const style: React.CSSProperties = {
    backgroundColor: token.background,
    color: token.textColor,
    borderRadius: token.radius,
    padding: `${token.padding[0]}px ${token.padding[1]}px`,
    border: 'border' in token ? `1px solid ${token.border}` : "none",
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
  };

  return (
    <button style={style} {...props}>
      {children ?? token.label}
    </button>
  );
};
