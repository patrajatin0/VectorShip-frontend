import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace('customInput-', 'input_')
  );
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode
      id={id}
      title="Input"
      color="#3a86ff"
      inputs={[{ id: 'value', top: '50%' }]}
      outputs={[
        { id: 'value', top: '50%' }
      ]}
    >

      <div className="mb-2">
        <label className="text-[11px] text-gray-500">Name:</label>
        <input
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          className="block w-full mt-0.5 px-1 py-1 rounded border border-gray-300 text-[12px] focus:outline-none focus:border-blue-400"
        />
      </div>

      <div>
        <label className="text-[11px] text-gray-500">Type:</label>
        <select
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
          className="block w-full mt-0.5 px-1 py-1 rounded border border-gray-300 text-[12px] bg-white focus:outline-none focus:border-blue-400"
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </div>
    </BaseNode>
  );
};