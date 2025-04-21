import { jsx as _jsx } from "react/jsx-runtime";
import buttonTokens from "../../../tokens/button.json";
export const Button = ({ variant = "primary", children, ...props }) => {
    const token = buttonTokens.variants[variant];
    const style = {
        backgroundColor: token.background,
        color: token.textColor,
        borderRadius: token.radius,
        padding: `${token.padding[0]}px ${token.padding[1]}px`,
        border: 'border' in token ? `1px solid ${token.border}` : "none",
        fontFamily: "Inter, sans-serif",
        fontSize: "14px",
    };
    return (_jsx("button", { style: style, ...props, children: children ?? token.label }));
};
