const Card = ({ title, value, desc, percent, icon }) => {
  return (
    <div className="bg-white border-[1px] border-sec rounded-2xl p-3">
      <div className="flex items-center justify-between p-2">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h1 className="text-2xl font-bold mt-2">{value}</h1>
        </div>
        <div className="bg-main p-2 text-2xl text-white rounded-lg">{icon}</div>
      </div>
      {percent && (
        <div className="border-t-[1px] pt-2 border-sec text-gray-500">
          <span
            className={`${percent > 0 ? 'text-green-500' : 'text-red-500'} font-bold`}
          >
            {percent}%
          </span>
          {desc}
        </div>
      )}
    </div>
  );
};

export default Card;
