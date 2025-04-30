import React from 'react'
import { MdWavingHand } from "react-icons/md";
import { RxBarChart } from "react-icons/rx";
import { FaAnglesUp } from "react-icons/fa6";


import { FiGift } from "react-icons/fi";
import Button from '@mui/material/Button';

function Dashboard() {
    return (
        <>
            <div className='px-2 py-2'>
                <div className='flex justify-center shadow-md shadow-gray-500/50 items-center gap-2 border border-gray-400 bg-white '>

                    <div className='flex flex-col justify-start px-5 w-[50%]'>
                        <h1 className='flex flex-col font-[600]'>
                            Good Morning, <span className='flex gap-2'> Garry <MdWavingHand className='text-[#faca46]' /></span>
                        </h1>
                        <p>Here's what happing on your store today. see the statistics at once </p>

                        <Button className='w-[8rem] !bg-[#0858f7] text-white !capitalize'>+Add Products</Button>
                    </div>

                    <div className='flex justify-center w-[50%]'>
                        <img src="/online-store-2.png" alt="" />
                    </div>

                </div>
            </div>

            <div className='p-2 flex gap-2'>

                <div className='flex flex-col w-[350px] p-4 shadow-md shadow-gray-500/50 gap-4 border border-gray-400 bg-white'>
                    <div className='flex items-center justify-between gap-2'>
                        <FiGift className='text-[3rem]' />
                        <div className=''>

                            <p className='flex flex-col'>New Orders </p>
                            <b className='font-sans text-4xl'>1,485</b>
                        </div >

                        <div className='flex justify-end ml-4'>
                            <RxBarChart className='text-[5rem] text-[#0858f7]' />
                        </div>
                    </div>
                    <div>
                        <p className='flex gap-2'> <span className='text-green-400 flex font-sans gap-2'><FaAnglesUp />  +320%</span> increased last month </p>

                    </div>
                </div>


                <div className='flex flex-col w-[350px] p-4 shadow-md shadow-gray-500/50 gap-4 border border-gray-400 bg-white'>
                    <div className='flex items-center justify-between gap-2'>
                        <FiGift className='text-[3rem]' />
                        <div className=''>

                            <p className='flex flex-col'>New Orders </p>
                            <b className='font-sans text-4xl'>1,485</b>
                        </div >

                        <div className='flex justify-end ml-4'>
                            <RxBarChart className='text-[5rem] text-[#0858f7]' />
                        </div>
                    </div>
                    <div>
                        <p className='flex gap-2'> <span className='text-green-400 flex font-sans gap-2'><FaAnglesUp />  +320%</span> increased last month </p>

                    </div>
                </div>



                <div className='flex flex-col w-[350px] p-4 shadow-md shadow-gray-500/50 gap-4 border border-gray-400 bg-white'>
                    <div className='flex items-center justify-between gap-2'>
                        <FiGift className='text-[3rem]' />
                        <div className=''>

                            <p className='flex flex-col'>New Orders </p>
                            <b className='font-sans text-4xl'>1,485</b>
                        </div >

                        <div className='flex justify-end ml-4'>
                            <RxBarChart className='text-[5rem] text-[#0858f7]' />
                        </div>
                    </div>
                    <div>
                        <p className='flex gap-2'> <span className='text-green-400 flex font-sans gap-2'><FaAnglesUp />  +320%</span> increased last month </p>

                    </div>
                </div>




            </div>
        </>
    )
}

export default Dashboard