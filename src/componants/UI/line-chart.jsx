import React from 'react';

const data = [10, 40, 30, 60, 40, 60, 80];

const LineChart = () => {
  const maxValue = Math.max(...data);
  const width = 420;
  const height = 200;
  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - (value / maxValue) * height;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <svg width={width} height={height} style={{ border: '1px solid #ccc', margin: '30px 0' }}>
      <polyline fill="none" stroke="#4f46e5" strokeWidth="2" points={points} />
    </svg>
  );
};

export default LineChart;
