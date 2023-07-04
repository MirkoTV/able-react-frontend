import { useState } from 'react';

export default function SuggestionsList({ suggestions, onItemClick }) {
  const [hoveredItemId, setHoveredItemId] = useState(null);

  return (
    <ul
      data-testid="results-list"
      className="border border-primary rounded-md w-96 text-lg bg-white"
    >
      {suggestions.map((item, i) => (
        <li key={item.id}
          className={`p-1 ${hoveredItemId === item.id ? 'highlighted-item' : ''}`}
          onClick={() => onItemClick(item)}
          onMouseOver={() => setHoveredItemId(item.id)}>
          <span className="">{item.title || item.name}</span>
        </li>
      ))}
    </ul>
  );
}
