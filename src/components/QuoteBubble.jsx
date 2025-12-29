import './QuoteBubble.css';

const QuoteBubble = ({ quote, author, rotation = 0, delay = 0 }) => {
  return (
    <div
      className="neuromorphic-sm p-4 max-w-xs relative animate-fade-in"
      style={{
        transform: `rotate(${rotation}deg)`,
        animationDelay: `${delay}ms`,
      }}
    >
      <div className="absolute -top-2 -left-2 w-4 h-4 bg-pastel-pink rounded-full"></div>
      <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-pastel-blue rounded-full"></div>
      <p className="text-sm italic text-gray-700 mb-2">"{quote}"</p>
      {author && <p className="text-xs text-gray-500 text-right">— {author}</p>}
    </div>
  );
};

export default QuoteBubble;

