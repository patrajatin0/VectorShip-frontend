// src/nodes/noteNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const NoteNode = ({ id, data }) => {
    const [noteText, setNoteText] = useState(
        data?.noteText || 'Write your note here...'
    );

    return (
        <BaseNode
            id={id}
            title="📝 Note"
            color="#64748b"
            inputs={[]}
            outputs={[]}
        >
            {/* Note Text */}
            <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Write your note here..."
                className="
                    block
                    w-full
                    px-1.5 py-1.5
                    rounded
                    border border-slate-200
                    text-[12px]
                    bg-yellow-50
                    text-gray-500
                    resize-none
                    min-h-[70px]
                    box-border
                    font-inherit
                    leading-normal
                    focus:outline-none
                    focus:border-slate-400
                "
                rows={4}
            />

            {/* Character Count */}
            <div className="mt-1 text-right text-[10px] text-gray-300">
                {noteText.length} chars
            </div>
        </BaseNode>
    );
};