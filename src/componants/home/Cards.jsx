
function Cards() {
  return (
    <div className="flex flex-col bg-white shadow-2xl shadow-gray-200 rounded-2xl p-5 gap-3 hover:shadow-gray-300 transition-all duration-300">
        <div className="flex gap-3">
            <div className="bg-[#ffeec3] text-3xl px-5 py-3 rounded-2xl text-amber-500"><i className="fa-solid fa-dollar-sign"></i></div>
            <div className="flex flex-col">
                <p className="text-[13px] text-gray-500">Amount Due</p>
                <p className="font-bold text-sm">1,642</p>
            </div>
        </div>
        <div className="relative bg-gray-200 h-2 rounded-full"> <span className="absolute h-2 w-[70%] bg-amber-400 rounded-full"></span></div>
        <div>
            <p><span>1.15%</span> since last week</p>
        </div>
    </div>
  )
}

export default Cards