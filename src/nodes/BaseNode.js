import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const BaseNode = ({
    id,
    title,
    inputs = [],
    outputs = [],
    children,
    color = '#1C2536'
}) => {

    const [isCollapsed, setIsCollapsed] = useState(false);

    return (

        <div className="  min-w-[200px]  border border-slate-200 rounded-lg bg-white shadow-md relative transition-all duration-300 ">


            <div onClick={() => setIsCollapsed(!isCollapsed)} className={` text-white px-3 py-1.5 font-bold text-[13px] flex items-center gap-1.5 cursor-pointer select-none transition-all duration-300 ${isCollapsed ? 'rounded-lg' : 'rounded-t-lg'} `} style={{ backgroundColor: color }} >

                <i className={` fa-solid ${isCollapsed ? 'fa-chevron-down' : 'fa-chevron-up'} text-[10px] opacity-80`} />


                <span>{title}</span>
            </div>


            {!isCollapsed && (
                <div className="
                    p-2.5
                    text-[12px]
                    text-gray-500
                ">
                    {children}
                </div>
            )}


            {inputs.map((input) => (
                <Handle
                    key={input.id}
                    type="target"
                    position={Position.Left}
                    id={`${id}-${input.id}`}
                    style={{
                        top: input.top || '50%',
                        backgroundColor: color,
                        width: '10px',
                        height: '10px',
                        border: '2px solid #fff',
                    }}
                />
            ))}

            {outputs.map((output) => (
                <Handle
                    key={output.id}
                    type="source"
                    position={Position.Right}
                    id={`${id}-${output.id}`}
                    style={{
                        top: output.top || '50%',
                        backgroundColor: color,
                        width: '10px',
                        height: '10px',
                        border: '2px solid #fff',
                    }}
                />
            ))}

        </div>
    );
};
