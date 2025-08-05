import React from 'react';

type Props = {
  title: string;
  details?: string;
  dateTime: string; // ISO format: "2025-08-04T10:00:00"
};

export default function AddToGoogleCalendarButton({ title, details = '', dateTime }: Props) {
  const start = encodeURIComponent(dateTime);
  const end = encodeURIComponent(
    new Date(new Date(dateTime).getTime() + 60 * 60 * 1000).toISOString()
  ); // 1 ساعت بعد
  const text = encodeURIComponent(title);
  const description = encodeURIComponent(details);

  const href = `https://www.google.com/calendar/render?action=TEMPLATE&text=${text}&details=${description}&dates=${start}/${end}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline text-sm"
    >
      Add to Google Calendar
    </a>
  );
}
