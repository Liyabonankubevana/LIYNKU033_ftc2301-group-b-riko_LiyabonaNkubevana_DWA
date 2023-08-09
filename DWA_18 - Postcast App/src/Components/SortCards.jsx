// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

export const SortOptions = (props) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSortChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    props(selectedValue);
  };

  return (
    <div
      className="text-dark-green border-solid border-[1px] bg-mint-cream divide-x divide-[1px] divide-platinum
      flex items-center text-[0.8em] w-max"
    >
      <select value={selectedOption} onChange={handleSortChange} className="p-1">
        <option value="">Sort</option>
        <option value="A-Z">A — Z</option>
        <option value="Z-A">Z — A</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
};
