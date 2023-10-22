import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Search from '../../Components/Search/Search';
import GroupsList from '../../Components/GroupsList/GroupsList';
import FriendRequest from '../../Components/FriendRequest/FriendRequest';
import Friends from '../../Components/Friends/Friends';
import MyGroups from '../../Components/MyGroups/MyGroups';
import UserList from '../../Components/UserList/UserList';
import BlockedUsers from '../../Components/BlockedUsers/BlockedUsers';

const Home = () => {
  const navigate = useNavigate();
  const data = useSelector(state => state.userLoginInfo.userInfo);
  console.log(data);

  // const [verify, setVerify] = useState(false);

  useEffect(()=>{
    if (!data) {
      navigate('/login')
    }
  })
  return (
    <>
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
      {/* {
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
        <div className='w-[344px]'>
          <Friends/>
        </div>
        <div className='w-[344px]'>sidebar</div>
      </div>
      :
      <h1>Please, verify your email!</h1>
      } */}
    </>
  )
}

export default Home