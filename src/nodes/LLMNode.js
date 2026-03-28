import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {

  return (
    <BaseNode
      id={id}
      title="LLM"
      color="#4f772d"
      inputs={[
        // { id: 'system', top: '33%' },
        { id: 'prompt', top: '66%' },
      ]}
      outputs={[
        { id: 'response', top: '50%' }
      ]}
    >
      <div className="text-[12px] text-gray-500">

        <div className="mb-2.5 flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#1C2536]" />
          <span>System Prompt</span>
        </div>

        <div className="mb-2.5 flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#1C2536]" />
          <span>User Prompt</span>
        </div>


        <div className="flex items-center gap-1.5 justify-end">
          <span>Response</span>
          <div className="w-2 h-2 rounded-full bg-[#1C2536]" />
        </div>

      </div>
    </BaseNode>
  );
};