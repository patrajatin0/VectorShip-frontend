// src/nodes/filterNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const FilterNode = ({ id, data }) => {
    const [condition, setCondition] = useState(data?.condition || 'contains');
    const [filterValue, setFilterValue] = useState(data?.filterValue || '');

    return (
        <BaseNode
            id={id}
            title="Filter"
            color="#ef4444"
            inputs={[
                { id: 'input', top: '50%' }
            ]}
            outputs={[
                { id: 'true', top: '33%' },
                { id: 'false', top: '66%' },
            ]}
        >
            {/* Condition */}
            <div className="mb-2">
                <label className="text-[11px] text-gray-500">
                    Condition:
                </label>
                <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="block w-full mt-0.5 px-1 py-1 rounded border border-gray-300 text-[12px] bg-white focus:outline-none focus:border-red-400"
                >
                    <option value="contains">Contains</option>
                    <option value="equals">Equals</option>
                    <option value="startsWith">Starts With</option>
                    <option value="endsWith">Ends With</option>
                    <option value="greaterThan">Greater Than</option>
                    <option value="lessThan">Less Than</option>
                </select>
            </div>

            {/* Filter Value */}
            <div>
                <label className="text-[11px] text-gray-500">
                    Value:
                </label>
                <input
                    type="text"
                    value={filterValue}
                    onChange={(e) => setFilterValue(e.target.value)}
                    placeholder="Enter value..."
                    className="block w-full mt-0.5 px-1 py-1 rounded border border-gray-300 text-[12px] box-border focus:outline-none focus:border-red-400 placeholder-gray-300"
                />
            </div>

            {/* Output Labels */}
            <div className="mt-2 flex flex-col gap-1 items-end">
                <span className="text-[10px] text-green-500 font-bold">
                    ✓ True
                </span>
                <span className="text-[10px] text-red-500 font-bold">
                    ✗ False
                </span>
            </div>
        </BaseNode>
    );
};
