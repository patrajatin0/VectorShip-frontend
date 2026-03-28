// src/nodes/apiNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const ApiNode = ({ id, data }) => {
    const [method, setMethod] = useState(data?.method || 'GET');
    const [url, setUrl] = useState(data?.url || '');

    return (
        <BaseNode
            id={id}
            title="API Call"
            color="#06b6d4"
            inputs={[
                { id: 'body', top: '33%' },
                { id: 'headers', top: '66%' },
            ]}
            outputs={[
                { id: 'response', top: '33%' },
                { id: 'error', top: '66%' },
            ]}
        >
            {/* Method */}
            <div className="mb-2">
                <label className="text-[11px] text-gray-500">
                    Method:
                </label>
                <select
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                    className="block w-full mt-0.5 px-2 py-1 rounded border border-gray-300 text-[12px] bg-white focus:outline-none focus:border-cyan-400"
                >
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                    <option value="DELETE">DELETE</option>
                    <option value="PATCH">PATCH</option>
                </select>
            </div>

            {/* URL */}
            <div>
                <label className="text-[11px] text-gray-500">
                    URL:
                </label>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://api.example.com"
                    className="block w-full mt-0.5 px-2 py-1 rounded border border-gray-300 text-[12px] box-border focus:outline-none focus:border-cyan-400 placeholder-gray-300"
                />
            </div>

            {/* Method Badge */}
            <div className="mt-2">
                <span className={`
                    text-[10px] px-2 py-0.5 rounded-full font-bold
                    ${method === 'GET' ? 'bg-green-100 text-green-600' : ''}
                    ${method === 'POST' ? 'bg-blue-100 text-blue-700' : ''}
                    ${method === 'DELETE' ? 'bg-red-100 text-red-600' : ''}
                    ${method === 'PUT' ? 'bg-yellow-100 text-yellow-600' : ''}
                    ${method === 'PATCH' ? 'bg-purple-100 text-purple-600' : ''}
                `}>
                    {method}
                </span>
            </div>
        </BaseNode>
    );
};