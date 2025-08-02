
import React from "react";

const data = [50, 80, 30, 90, 60]; // Example dataset
const allData = [
    {value: 50, day:'S'},
    {value: 30, day:'S'},
    {value: 90, day:'M'},
    {value: 60, day:'T'},
    {value: 40, day:'W'},
    {value: 20, day:'S'},
    {value: 70, day:'F'},
]

const BarChart = () => {
  return (
    <div className="relative flex items-end h-52 gap-4 px-4 py-2 mt-5 w-full border-l-2 border-b-2">
      {allData.map((data, index) => (
        <>
        <div
          key={index}
          className={`w-10 relative bg-indigo-500 rounded-md transition-all duration-300 hover:bg-indigo-600`}
          style={{ height: `${data.value}%` }}
          title={data.value}
        >
        <p className="absolute -bottom-10 left-2">{data.day}</p>
        </div>
        </>
      ))}
      <div className="absolute -left-8 h-full flex flex-col justify-between items-center text-sm">
        <p>100</p>
        <p>50</p>
        <p>0</p>
      </div>
    </div>
  );
};

export default BarChart;
