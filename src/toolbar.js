// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="px-2.5 py-2.5">
            <div className="mt-5 flex flex-wrap gap-2.5">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' color='#3a86ff' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='filter' label='Filter' color='#ef4444' />
                <DraggableNode type='api' label='API Call' color='#06b6d4' />
                <DraggableNode type='merge' label='Merge' color='#eab308' />
                <DraggableNode type='note' label='Note' color='#64748b' />
                <DraggableNode type='timer' label='Timer' color='#ec4899' />
            </div>
        </div>
    );
};
