// src/nodes/mergeNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const MergeNode = ({ id, data }) => {
    const [mergeType, setMergeType] = useState(data?.mergeType || 'concat');

    return (
        <BaseNode
            id={id}
            title="Merge"
            color="#eab308"
            inputs={[
                { id: 'input1', top: '25%' },
                { id: 'input2', top: '50%' },
                { id: 'input3', top: '75%' },
            ]}
            outputs={[
                { id: 'merged', top: '50%' }
            ]}
        >
            {/* Merge Type */}
            <div className="mb-2">
                <label className="text-[11px] text-gray-500">
                    Merge Type:
                </label>
                <select
                    value={mergeType}
                    onChange={(e) => setMergeType(e.target.value)}
                    className="block w-full mt-0.5 px-1 py-1 rounded border border-gray-300 text-[12px] bg-white focus:outline-none focus:border-yellow-400"
                >
                    <option value="concat">Concatenate</option>
                    <option value="join">Join</option>
                    <option value="merge">Deep Merge</option>
                    <option value="zip">Zip</option>
                </select>
            </div>

            {/* Input Labels */}
            <div className="flex flex-col gap-1">
                {['Input 1', 'Input 2', 'Input 3'].map((label, i) => (
                    <span
                        key={i}
                        className="text-[10px] text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-200"
                    >
                        {label}
                    </span>
                ))}
            </div>
        </BaseNode>
    );
};