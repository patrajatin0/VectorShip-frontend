import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  return (
    <BaseNode
      id={id}
      title="Output"
      color="#941b0c"
      inputs={[
        { id: 'value', top: '50%' }
      ]}
      outputs={[]}
    >
      {/* Name Field */}
      <div className="mb-2">
        <label className="text-[11px] text-gray-500">Name:</label>
        <input
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          className="block w-full mt-0.5 px-1 py-1 rounded border border-gray-300 text-[12px] focus:outline-none focus:border-red-400"
        />
      </div>

      {/* Type Field */}
      <div>
        <label className="text-[11px] text-gray-500">Type:</label>
        <select
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
          className="block w-full mt-0.5 px-1 py-1 rounded border border-gray-300 text-[12px] bg-white focus:outline-none focus:border-red-400"
        >
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </select>
      </div>
    </BaseNode>
  );
};