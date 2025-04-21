import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '../ui/Button';
const componentMap = {
    Button: Button,
};
export const ComponentViewer = ({ component }) => {
    const Component = componentMap[component];
    if (!Component) {
        return _jsx("div", { children: "Component not found" });
    }
    return (_jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "mb-8", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: component }), _jsx("div", { className: "p-4 border rounded-lg bg-gray-50", children: _jsx(Component, {}) })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold mb-2", children: "Code" }), _jsx("pre", { className: "bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto", children: _jsx("code", { children: `<${component} />` }) })] })] }));
};
