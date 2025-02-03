import React from 'react'
import SideBar from './SideBar'
import Cards from './home/Cards'
import ChartBar from './home/ChartBar'
import DoughnutChart from './home/DoughnutChart'

function Home() {
  return (
    <div className='flex bg-gray-100'>
        <SideBar />
        <div className='w-full'>
            <div className='cards grid grid-cols-4 mt-10 mx-4 gap-5'>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
            <div className='flex'>
                <div className='w-[50%] bg-white my-10 mx-5 p-4 rounded-2xl'>
                    <div className=' py-5 px-2 text-2xl border-b-[1px] border-gray-200'>
                        <p>Sales Analytics</p>
                    </div>
                    <div className='flex items-center gap-3 justify-around mt-5 '>
                        <div>
                            <p className='text text-gray-500'>Total Sales</p>
                            <p className='text-3xl text-violet-500'>$1000</p>
                        </div>
                        <div>
                            <p className='text text-gray-500'>Receipts</p>
                            <p className='text-3xl text-green-500'>$1000</p>
                        </div>
                        <div>
                            <p className='text text-gray-500'>Expenses</p>
                            <p className='text-3xl text-red-500'>$300</p>
                        </div>
                        <div>
                            <p className='text text-gray-500'>Earnings</p>
                            <p className='text-3xl '>$700</p>
                        </div>
                    </div>
                    <div className='w-full'>
                        <ChartBar />
                    </div>
                </div>
                <div className='bg-white  my-10 mx-5 p-4 rounded-2xl'>
                    <DoughnutChart />
                    <div className='flex w-full items-center justify-around'>
                        <div className='flex flex-col'>
                            <div className='flex items-center gap-2'>
                                <span className='w-3 h-3 rounded-full bg-violet-500'></span>
                                <p className='text-gray-400 text-sm'>Invoiced</p>
                            </div>
                            <p className='font-bold text-lg'>$2,132</p>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex items-center gap-2'>
                                <span className='w-3 h-3 rounded-full bg-green-500'></span>
                                <p className='text-gray-400 text-sm'>Received</p>
                            </div>
                            <p className='font-bold text-lg'>$2,132</p>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex items-center gap-2'>
                                <span className='w-3 h-3 rounded-full bg-red-500'></span>
                                <p className='text-gray-400 text-sm'>Pending</p>
                            </div>
                            <p className='font-bold text-lg'>$2,132</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Home