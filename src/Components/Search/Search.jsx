import React from 'react'
import {BiSearchAlt2, BiDotsVerticalRounded} from 'react-icons/bi'

const Search = () => {
  return (
    <>
      <div className='relative'>
          <input type="text" placeholder='Search' className='w-full h-[59px] text-xl shadow-boxShadow px-[50px] rounded-[20px]' />
          <BiSearchAlt2 className='px-[10px] text-[50px] absolute top-[13%] left-0'/>
          <BiDotsVerticalRounded className='px-[10px] text-[#5F35F5] text-[50px] absolute top-[13%] right-0'/>
      </div>
    </>
  )
}

export default Search