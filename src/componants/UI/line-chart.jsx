// data for the line chart
const data = [10, 40, 30, 60, 40, 60, 80];

// This component renders a simple line chart using SVG
const LineChart = () => {
  if (!data || data.length === 0) return null;

  const maxValue = Math.max(...data);
  const width = 420;
  const height = 200;
  const padding = 20;

  const points = data
    .map((value, index) => {
      const x = padding + (index / (data.length - 1)) * (width - 2 * padding);
      const y = height - padding - (value / maxValue) * (height - 2 * padding);
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      style={{ border: '1px solid #ccc', margin: '30px 0' }}
    >
      {/* Background */}
      <rect width="100%" height="100%" fill="#fff" />

      {/* Line */}
      <polyline fill="none" stroke="#4f46e5" strokeWidth="2" points={points} />

      {/* Points */}
      {data.map((value, index) => {
        const x = padding + (index / (data.length - 1)) * (width - 2 * padding);
        const y =
          height - padding - (value / maxValue) * (height - 2 * padding);
        return (
          <circle
            key={index}
            cx={x}
            cy={y}
            r="4"
            fill="#4f46e5"
            stroke="#fff"
            strokeWidth="1.5"
          />
        );
      })}
    </svg>
  );
};

export default LineChart;
