import React from 'react';
import { Button } from '../ui/Button/Button';

interface ComponentViewerProps {
  component: string;
}

const componentMap = {
  Button: Button,
};

export const ComponentViewer: React.FC<ComponentViewerProps> = ({ component }) => {
  const Component = componentMap[component as keyof typeof componentMap];

  if (!Component) {
    return <div>Component not found</div>;
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{component}</h2>
        <div className="p-4 border rounded-lg bg-gray-50">
          <Component />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Code</h3>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`<${component} />`}</code>
        </pre>
      </div>
    </div>
  );
}; 