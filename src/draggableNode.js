// draggableNode.js

export const DraggableNode = ({ type, label, color }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={`
        ${type}
        cursor-grab
        min-w-[80px]
        h-[60px]
        flex
        items-center
        rounded-lg
        justify-center
        flex-col
        hover:opacity-90
        hover:scale-105
        transition-all
        duration-150
        select-none
      `}
      style={{ backgroundColor: color || '#0e3c92' }}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
    >
      <span className="text-white text-sm font-medium">{label}</span>
    </div>
  );
};
