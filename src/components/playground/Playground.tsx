import React, { useState } from 'react';
import { ComponentViewer } from './ComponentViewer';

const components = [
  { id: 'Button', name: 'Button' },
];

export const Playground: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState(components[0].id);

  return (
    <div className="flex w-full h-screen bg-white">
      {/* Sidebar */}
      <div className="w-[30%] border-r bg-gray-50 min-w-[250px]">
        <div className="p-4">
          <h1 className="text-xl font-bold mb-4">Nifty UI</h1>
          <nav className="h-full">
            <ul className="space-y-2">
              {components.map((component) => (
                <li key={component.id}>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                      selectedComponent === component.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedComponent(component.id)}
                  >
                    {component.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <ComponentViewer component={selectedComponent} />
      </div>
    </div>
  );
}; 