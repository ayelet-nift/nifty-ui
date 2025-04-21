import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { ComponentViewer } from './ComponentViewer';
const components = [
    { id: 'Button', name: 'Button' },
];
export const Playground = () => {
    const [selectedComponent, setSelectedComponent] = useState(components[0].id);
    return (_jsxs("div", { className: "flex w-full h-screen bg-white", children: [_jsx("div", { className: "w-[30%] border-r bg-gray-50 min-w-[250px]", children: _jsxs("div", { className: "p-4", children: [_jsx("h1", { className: "text-xl font-bold mb-4", children: "Nifty UI" }), _jsx("nav", { className: "h-full", children: _jsx("ul", { className: "space-y-2", children: components.map((component) => (_jsx("li", { children: _jsx("button", { className: `w-full text-left px-4 py-2 rounded-md transition-colors ${selectedComponent === component.id
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'hover:bg-gray-100'}`, onClick: () => setSelectedComponent(component.id), children: component.name }) }, component.id))) }) })] }) }), _jsx("div", { className: "flex-1 overflow-auto", children: _jsx(ComponentViewer, { component: selectedComponent }) })] }));
};
