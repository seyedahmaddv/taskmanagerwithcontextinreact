import React from 'react';

type Props = {
  value: 'low' | 'medium' | 'high';
  onChange: (value: 'low' | 'medium' | 'high') => void;
};

export default function TaskPrioritySelect({ value, onChange }: Props) {
  return (
    <select
      className="border p-2 rounded dark:bg-gray-700 dark:text-white"
      value={value}
      onChange={e => onChange(e.target.value as 'low' | 'medium' | 'high')}
    >
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  );
}
