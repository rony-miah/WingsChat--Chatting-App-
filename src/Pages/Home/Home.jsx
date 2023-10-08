import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Search from '../../Components/Search/Search';

const Home = () => {
  const navigate = useNavigate();
  const data = useSelector(state => state.userLoginInfo.userInfo);
  console.log(data);
  useEffect(()=>{
    if (!data) {
      navigate('/login')
    }
  })
  return (
    <>
      <section className='flex gap-x-[100px] mt-[35px]'>
        <div className='w-[186px] ml-[32px]'>
          <Sidebar/>
        </div>
        <div className='w-[427px]'>
          <Search/>
        </div>
        <div className='w-[344px]'>sidebar</div>
        <div className='w-[344px]'>sidebar</div>
      </section>
    </>
  )
}

export default Home