import React from 'react';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function TaskDeadlineInput({ value, onChange }: Props) {
  return (
    <input
      type="date"
      className="border p-2 rounded dark:bg-gray-700 dark:text-white"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Deadline"
    />
  );
}
