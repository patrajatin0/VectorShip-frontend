import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const [nodeSize, setNodeSize] = useState({ width: 200, height: 80 });
  const textareaRef = useRef(null);


  useEffect(() => {
    if (textareaRef.current) {
      const textLength = currText.length;
      const lines = currText.split('\n').length;

      const newWidth = Math.max(200, Math.min(500, 200 + textLength * 1.5));
      const newHeight = Math.max(80, Math.min(400, 80 + lines * 20));

      setNodeSize({ width: newWidth, height: newHeight });
    }
  }, [currText]);


  useEffect(() => {
    const regex = /\{\{\s*(\w+)\s*\}\}/g;
    const found = [];
    let match;

    while ((match = regex.exec(currText)) !== null) {
      const varName = match[1].trim();
      if (!found.includes(varName)) {
        found.push(varName);
      }
    }

    setVariables(found);
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div
      className="bg-white rounded-lg border border-gray-300 shadow-md relative"
      style={{
        width: nodeSize.width,
        minHeight: nodeSize.height,
      }}
    >

      <div className="bg-[#1C2536] text-white px-2.5 py-1.5 rounded-t-lg font-bold text-[13px]">
        Text
      </div>


      <div className="p-2.5">
        <label className="text-[11px] text-gray-500">Text:</label>
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          className="
            block
            w-full
            mt-1
            px-1.5 py-1.5
            rounded
            border border-gray-300
            text-[12px]
            resize-none
            overflow-hidden
            min-h-[60px]
            box-border
            focus:outline-none
            focus:border-blue-400
          "
          rows={currText.split('\n').length || 1}
        />

        {variables.length > 0 && (
          <div className="mt-2">
            <span className="text-[10px] text-gray-400">
              Variables:
            </span>
            <div className="flex flex-wrap gap-1 mt-1">
              {variables.map((v) => (
                <span
                  key={v}
                  className="bg-blue-50 text-blue-600 text-[10px] px-1.5 py-0.5 rounded-full border border-blue-500"
                >
                  {`{{${v}}}`}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>


      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{
            top: `${((index + 1) / (variables.length + 1)) * 100}%`,
            background: '#1a73e8',
          }}
        />
      ))}


      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{ top: '50%', background: '#1C2536' }}
      />
    </div>
  );
};