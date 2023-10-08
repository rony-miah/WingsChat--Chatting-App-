import React from 'react'
import profilepic from '../../assets/profilepic.png'
import {AiOutlineHome, AiFillMessage} from 'react-icons/ai'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {SlSettings} from 'react-icons/sl'
import {TbLogout} from 'react-icons/tb'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLoginInfo } from '../../Slices/userSlice'

const Sidebar = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogOut = () => {
        console.log('logout');
        signOut(auth).then(() => {
            dispatch(userLoginInfo(null))
            localStorage.removeItem('userLoginInfo')
            navigate('/login')
          }).catch((error) => {

          });
    }
  return (
    <>
        <div className='bg-[#5F35F5] h-screen rounded-[20px] pt-[38px]'>
            <img src={profilepic} alt="" className='mx-auto' />
            <div className='relative flex justify-center pt-[20px] pb-[25px] mt-[78px] after:absolute after:content-[""] after:top-0 after:right-0 after:w-[160px] after:h-full after:bg-white after:z-[-1] after:rounded-l-[20px] z-[1] before:absolute before:content-[""] before:top-0 before:right-0 before:w-[8px] before:h-full before:bg-[#5F35F5] before:rounded-l-[20px]'>
                <AiOutlineHome className='text-5xl text-[#5F35F5] cursor-pointer'/>
            </div>
            <div className='flex justify-center mt-[78px]'>
                <AiFillMessage className='text-5xl text-[#BAD1FF] cursor-pointer'/>
            </div>
            <div className='flex justify-center mt-[78px]'>
                <IoMdNotificationsOutline className='text-5xl text-[#BAD1FF] cursor-pointer'/>
            </div>
            <div className='flex justify-center mt-[78px]'>
                <SlSettings className='text-5xl text-[#BAD1FF] cursor-pointer'/>
            </div>
            <div className='flex justify-center mt-[78px]'>
                <TbLogout onClick={handleLogOut} className='text-5xl text-[#BAD1FF] cursor-pointer'/>
            </div>
        </div>
    </>
  )
}

export default Sidebar