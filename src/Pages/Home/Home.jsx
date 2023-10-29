import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Search from '../../Components/Search/Search';
import GroupsList from '../../Components/GroupsList/GroupsList';
import FriendRequest from '../../Components/FriendRequest/FriendRequest';
import Friends from '../../Components/Friends/Friends';
import MyGroups from '../../Components/MyGroups/MyGroups';
import UserList from '../../Components/UserList/UserList';
import BlockedUsers from '../../Components/BlockedUsers/BlockedUsers';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { userLoginInfo } from '../../Slices/userSlice';


const Home = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector(state => state.userLoginInfo.userInfo);
  const [verify, setVerify] = useState(false);

  useEffect(()=>{
    if (!data) {
      navigate('/login')
    }
  })

  onAuthStateChanged (auth, (user)=>{
    if (user.emailVerified) {
      setVerify(true)
      dispatch(userLoginInfo(user))
      localStorage.setItem('userLoginInfo', JSON.stringify((user)))
    }
  })

  return (
    <>
      {
        verify ?
        <div className='flex gap-x-[100px] mt-[35px]'>
          <div className='w-[186px] ml-[32px]'>
            <Sidebar/>
          </div>
          <div className='w-[427px]'>
            <Search/>
            <GroupsList/>
            <FriendRequest/>
          </div>
          <div className='w-[427px]'>
            <Friends/>
            <MyGroups/>
          </div>
          <div className='w-[427px]'>
            <UserList/>
            <BlockedUsers/>
          </div>
        </div>
        :
        <div className='bg-[#5F35F5] h-screen flex justify-center items-center'>
          <div>
            <h1 className='text-white font-poppins font-bold text-[80px] flex justify-center items-center'>Please, verify your email!</h1>
            <div className='mt-[15px] flex justify-center items-center'><Link to='/login' className='p-5 bg-white font-openSans text-2xl text-black font-semibold text-center rounded-[8.7px] cursor-pointer'>Back to Login</Link></div>
          </div>
        </div>
      }
    </>
  )
}

export default Home