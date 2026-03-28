// src/nodes/timerNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TimerNode = ({ id, data }) => {
    const [delay, setDelay] = useState(data?.delay || 1000);
    const [unit, setUnit] = useState(data?.unit || 'ms');

    return (
        <BaseNode
            id={id}
            title="⏱ Timer"
            color="#ec4899"
            inputs={[
                { id: 'trigger', top: '50%' }
            ]}
            outputs={[
                { id: 'output', top: '50%' }
            ]}
        >
            {/* Delay */}
            <div className="mb-2">
                <label className="text-[11px] text-gray-500">
                    Delay:
                </label>
                <input
                    type="number"
                    value={delay}
                    onChange={(e) => setDelay(e.target.value)}
                    min="0"
                    className="block w-full mt-0.5 px-1 py-1 rounded border border-gray-300 text-[12px] box-border focus:outline-none focus:border-pink-400"
                />
            </div>

            {/* Unit */}
            <div>
                <label className="text-[11px] text-gray-500">
                    Unit:
                </label>
                <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="block w-full mt-0.5 px-1 py-1 rounded border border-gray-300 text-[12px] bg-white focus:outline-none focus:border-pink-400"
                >
                    <option value="ms">Milliseconds (ms)</option>
                    <option value="s">Seconds (s)</option>
                    <option value="m">Minutes (m)</option>
                </select>
            </div>

            {/* Timer Badge */}
            <div className="mt-2 text-center">
                <span className="bg-pink-50 text-pink-500 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-pink-400">
                    ⏱ {delay} {unit}
                </span>
            </div>
        </BaseNode>
    );
};