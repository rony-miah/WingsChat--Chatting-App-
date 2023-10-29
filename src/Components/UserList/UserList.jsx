import React, { useEffect, useState } from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import profilepic from '../../assets/profilepic.png'
import { getDatabase, ref, onValue } from "firebase/database";
// import { useSelector } from 'react-redux';

const UserList = () => {

    // const data = useSelector(state => state.userLoginInfo.userInfo);
    // console.log(data, 'data');
    const [userData, setUserData] = useState([])
    const db = getDatabase();

    useEffect(() => {
        const userRef = ref(db, 'users/');
            onValue(userRef, (snapshot) => {
            console.log(snapshot.val());
            let arr = []
            snapshot.forEach((item) => {
                arr.push(item.val());
            })
            setUserData(arr);
        });
    },[])
    console.log(userData, 'userdatasdl');
  return (
    <div className='w-full h-[450px] shadow-boxShadow rounded-[20px] py-[13px] pr-[22px] pl-5 overflow-y-scroll'>
        <div className='flex justify-between items-center'>
            <h2 className='font-poppins text-xl text-black font-semibold'>User List</h2>          
            <BiDotsVerticalRounded className='px-[10px] text-[#5F35F5] text-[50px]'/>
        </div>
        {
            userData.map((item) => (
                <div className='flex items-center mt-[17px] border-b-2 border-[#00000040] pb-[13px]'>
                    <div>
                        <img src={profilepic} alt=""/>
                    </div>
                    <div className='ml-[14px]'>
                        <h3 className='w-[146px] font-poppins text-[18px] text-black font-semibold'>{item.username}</h3>
                        <p className='font-poppins text-[14px] text-[#4D4D4DBF] font-semibold'>{item.email}</p>
                    </div>
                    <div className='px-[10px] py-[2px] ml-[41px] bg-[#5F35F5] rounded-md font-poppins text-xl text-white font-semibold'>+</div>
                </div>
            ))
        }
    </div>
  )
}

export default UserList