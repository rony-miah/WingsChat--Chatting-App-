import React from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import profilepic from '../../assets/profilepic.png'

const Friends = () => {
  return (
    <div className='w-full h-[450px] shadow-boxShadow rounded-[20px] py-[13px] pr-[22px] pl-5 overflow-y-scroll'>
        <div className='flex justify-between items-center'>
            <h2 className='font-poppins text-xl text-black font-semibold'>Friends</h2>          
            <BiDotsVerticalRounded className='px-[10px] text-[#5F35F5] text-[50px]'/>
        </div>
        <div className='flex items-center mt-[17px] border-b-2 border-[#00000040] pb-[13px]'>
            <div>
                <img src={profilepic} alt=""/>
            </div>
            <div className='ml-[14px]'>
                <h3 className='font-poppins text-[18px] text-black font-semibold'>Raghav</h3>
                <p className='font-poppins text-[14px] text-[#4D4D4DBF] font-medium'>Dinner?</p>
            </div>
            <div className='font-poppins text-[10px] text-[#00000080] font-medium ml-[81px]'>Today, 8:56pm</div>
        </div>               
        <div className='flex items-center mt-[17px] border-b-2 border-[#00000040] pb-[13px]'>
            <div>
                <img src={profilepic} alt=""/>
            </div>
            <div className='ml-[14px]'>
                <h3 className='font-poppins text-[18px] text-black font-semibold'>Raghav</h3>
                <p className='font-poppins text-[14px] text-[#4D4D4DBF] font-medium'>Dinner?</p>
            </div>
            <div className='font-poppins text-[10px] text-[#00000080] font-medium ml-[81px]'>Today, 8:56pm</div>
        </div>               
        <div className='flex items-center mt-[17px] border-b-2 border-[#00000040] pb-[13px]'>
            <div>
                <img src={profilepic} alt=""/>
            </div>
            <div className='ml-[14px]'>
                <h3 className='font-poppins text-[18px] text-black font-semibold'>Raghav</h3>
                <p className='font-poppins text-[14px] text-[#4D4D4DBF] font-medium'>Dinner?</p>
            </div>
            <div className='font-poppins text-[10px] text-[#00000080] font-medium ml-[81px]'>Today, 8:56pm</div>
        </div>               
        <div className='flex items-center mt-[17px] border-b-2 border-[#00000040] pb-[13px]'>
            <div>
                <img src={profilepic} alt=""/>
            </div>
            <div className='ml-[14px]'>
                <h3 className='font-poppins text-[18px] text-black font-semibold'>Raghav</h3>
                <p className='font-poppins text-[14px] text-[#4D4D4DBF] font-medium'>Dinner?</p>
            </div>
            <div className='font-poppins text-[10px] text-[#00000080] font-medium ml-[81px]'>Today, 8:56pm</div>
        </div>               
        <div className='flex items-center mt-[17px] border-b-2 border-[#00000040] pb-[13px]'>
            <div>
                <img src={profilepic} alt=""/>
            </div>
            <div className='ml-[14px]'>
                <h3 className='font-poppins text-[18px] text-black font-semibold'>Raghav</h3>
                <p className='font-poppins text-[14px] text-[#4D4D4DBF] font-medium'>Dinner?</p>
            </div>
            <div className='font-poppins text-[10px] text-[#00000080] font-medium ml-[81px]'>Today, 8:56pm</div>
        </div>               
    </div>
  )
}

export default Friends