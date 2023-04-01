import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/router';

const HomeNumber = () => {

    const [value, setValue] = useState();

    const router=useRouter()

    const handleJoinRoom=useCallback(() => {
       router.push(`/room/${value}`)
    }, [router, value])
    return (
    <>
    <div className="about">
      <h1 className="about-title text-[40px]">One on One Video Call</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Enter Room Code" className="border rounded px-4 py-2 mt-5"/>
      <div className="flex justify-center mt-5">
        <button onClick={handleJoinRoom} className="py-1 px-7 mb-3 text-white font-bold bg-[#1551b8] border rounded hover:text-[#1551b8] hover:bg-white">Join</button>
      </div>
    </div>
  </>
  );
};

export default HomeNumber;