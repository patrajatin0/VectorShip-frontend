// src/submit.js

import { useStore } from './store';

export const SubmitButton = () => {

    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            const data = await response.json();

            alert(
                `Pipeline Results:\n\n` +
                `📊 Number of Nodes: ${data.num_nodes}\n` +
                `🔗 Number of Edges: ${data.num_edges}\n` +
                `✅ Is DAG: ${data.is_dag ? 'Yes' : 'No'}`
            );

        } catch (error) {
            alert('Error connecting to backend. Make sure backend is running!');
        }
    };

    return (
        <div className="flex items-center justify-center">
            <button
                onClick={handleSubmit}
                className="
          bg-blue-600
          hover:bg-blue-700
          active:bg-blue-800
          text-white
          font-semibold
          text-sm
          px-8
          py-2.5
          rounded-lg
          shadow-md
          hover:shadow-lg
          transition-all
          duration-150
          tracking-wide
        "
            >
                Submit
            </button>
        </div>
    );
};