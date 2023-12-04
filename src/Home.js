import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';

function Home() {
  const [RoomCode, setRoomCode] = useState("");
  console.log(RoomCode);

  const Navigate =useNavigate();
const submitCode = (e)=>{
  e.preventDefault();
  Navigate(`/room/${RoomCode}`);
};


  return (
    <div>
    <Navbar/>
    <form action= "" onSubmit={submitCode} className='flex flex-col items-center justify-center '>
     <label htmlFor='' className='font-bold text-[31px] pt-12'>Enter Room Code</label>
    <input type="text" required placeholder='Enter the Room Code' value={RoomCode}
      onChange={(e) => setRoomCode(e.target.value)}
      className='bg-blue-500
      placeholder:text-white py-2 w-[16rem]
      rounded-full pl-8 mt-4'
    />
    <button type='submit' className='bg-orange-500 rounded-[1.5rem] mt-4 py-2 font-bold'>Enter Room</button></form>
     
    </div>
  )
}

export default Home