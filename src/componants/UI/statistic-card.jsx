import { IoMdTime } from "react-icons/io"

const StatisticCard = ({children, title, desc, time}) => {
  return (
    <div className="bg-white px-9 py-5 my-5 w-full border-[1px] border-sec rounded-xl">
    <div>
        <h2 className="text-2xl">{title}</h2>
        <p className="text-sm text-gray-500">{desc}</p>
    </div>
    <div>
        {children}
    </div>
    <div className="flex items-center gap-2 mt-10 pt-5 text-gray-500 border-sec border-t-[1px]">
        <p><IoMdTime /></p>
        <p>{time}</p>
    </div>
    </div>
  )
}

export default StatisticCard