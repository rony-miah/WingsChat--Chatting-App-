import React from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import profilepic from '../../assets/profilepic.png'

const FriendRequest = () => {
  return (
    <div className='h-[460px] shadow-boxShadow rounded-[20px] mt-[43px] py-[13px] pr-[22px] pl-5 overflow-y-scroll'>
        <div className='flex justify-between items-center'>
            <h2 className='font-poppins text-xl text-black font-semibold'>Friend Request</h2>          
            <BiDotsVerticalRounded className='px-[10px] text-[#5F35F5] text-[50px]'/>
        </div>
        <div className='flex items-center mt-[17px] border-b-2 border-[#00000040] pb-[13px]'>
            <div>
                <img src={profilepic} alt=""/>
            </div>
            <div className='ml-[14px]'>
                <h3 className='w-[146px] font-poppins text-[18px] text-black font-semibold'>Raghav</h3>
                <p className='font-poppins text-[14px] text-[#4D4D4DBF] font-semibold'>Dinner?</p>
            </div>
            <div className='px-[10px] py-[2px] ml-[41px] bg-[#5F35F5] rounded-md font-poppins text-xl text-white font-semibold'>Accept</div>
        </div>
        <div className='flex items-center mt-[17px] border-b-2 border-[#00000040] pb-[13px]'>
            <div>
                <img src={profilepic} alt=""/>
            </div>
            <div className='ml-[14px]'>
                <h3 className='w-[146px] font-poppins text-[18px] text-black font-semibold'>Swathi</h3>
                <p className='font-poppins text-[14px] text-[#4D4D4DBF] font-semibold'>Sure!</p>
            </div>
            <div className='px-[10px] py-[2px] ml-[41px] bg-[#5F35F5] rounded-md font-poppins text-xl text-white font-semibold'>Accept</div>
        </div>
        <div className='flex items-center mt-[17px] border-b-2 border-[#00000040] pb-[13px]'>
            <div>
                <img src={profilepic} alt=""/>
            </div>
            <div className='ml-[14px]'>
                <h3 className='w-[146px] font-poppins text-[18px] text-black font-semibold'>Kiran</h3>
                <p className='font-poppins text-[14px] text-[#4D4D4DBF] font-semibold'>Hi.....</p>
            </div>
            <div className='px-[10px] py-[2px] ml-[41px] bg-[#5F35F5] rounded-md font-poppins text-xl text-white font-semibold'>Accept</div>
        </div>
        <div className='flex items-center mt-[17px] border-b-2 border-[#00000040] pb-[13px]'>
            <div>
                <img src={profilepic} alt=""/>
            </div>
            <div className='ml-[14px]'>
                <h3 className='w-[146px] font-poppins text-[18px] text-black font-semibold'>Tejeshwini C</h3>
                <p className='font-poppins text-[14px] text-[#4D4D4DBF] font-semibold'>I will call him today.</p>
            </div>
            <div className='px-[10px] py-[2px] ml-[41px] bg-[#5F35F5] rounded-md font-poppins text-xl text-white font-semibold'>Accept</div>
        </div>
        <div className='flex items-center mt-[17px] border-b-2 border-[#00000040] pb-[13px]'>
            <div>
                <img src={profilepic} alt=""/>
            </div>
            <div className='ml-[14px]'>
                <h3 className='w-[146px] font-poppins text-[18px] text-black font-semibold'>Tejeshwini C</h3>
                <p className='font-poppins text-[14px] text-[#4D4D4DBF] font-semibold'>I will call him today.</p>
            </div>
            <div className='px-[10px] py-[2px] ml-[41px] bg-[#5F35F5] rounded-md font-poppins text-xl text-white font-semibold'>Accept</div>
        </div>
        <div className='flex items-center mt-[17px] border-b-2 border-[#00000040] pb-[13px]'>
            <div>
                <img src={profilepic} alt=""/>
            </div>
            <div className='ml-[14px]'>
                <h3 className='w-[146px] font-poppins text-[18px] text-black font-semibold'>Tejeshwini C</h3>
                <p className='font-poppins text-[14px] text-[#4D4D4DBF] font-semibold'>I will call him today.</p>
            </div>
            <div className='px-[10px] py-[2px] ml-[41px] bg-[#5F35F5] rounded-md font-poppins text-xl text-white font-semibold'>Accept</div>
        </div>        
    </div>
  )
}

export default FriendRequest