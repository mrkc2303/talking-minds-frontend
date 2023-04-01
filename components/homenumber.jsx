import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/router';

const HomeNumber = () => {

    const [value, setValue] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [dt, setDt] = useState("");

    const router=useRouter()

    const handleJoinRoom=useCallback(() => {
       router.push(`/room/${value}`)
    }, [router, value])

    const sendRoomEmail = async() => {
      //async function welcomeEmail() {
    
        const img =
          "https://res.cloudinary.com/dwwcryioj/image/upload/v1680380063/logo-black.png";
        const length = 12;
        const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        var meetResult = '';
        for (var i = length; i > 0; --i) meetResult += chars[Math.floor(Math.random() * chars.length)];
        
        console.log("Sending");
        let finalData = {
          name,
          email,
          img,
          dt,
          meetResult
        };
        const response = await fetch("/api/welcome", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalData),
        });
        console.log(response);

        // console.log(Date.now())

        // const duration = Date.now() + 5.5 * 60 * 60 * 1000;
        // const date = Date(Date.now()).slice(4,15);
        //   var milliseconds = Math.floor((duration % 1000) / 100),
        //     seconds = Math.floor((duration / 1000) % 60),
        //     minutes = Math.floor((duration / (1000 * 60)) % 60),
        //     hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
        
        //   hours = (hours < 10) ? "0" + hours : hours;
        //   minutes = (minutes < 10) ? "0" + minutes : minutes;
        //   seconds = (seconds < 10) ? "0" + seconds : seconds;
        
        //   console.log(hours + ": 00");

       
        // console.log(dt);
    }

    return (
    <>
    <div className="about aboutCall">
      <div className='callForm'>
        <h1 className="about-title text-[30px]">Schedule a One-on-One Call</h1>
        <form className='roomCodeForm'>
          <div>
            <label>Name: </label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Your Name" className="border rounded px-4 py-2 mt-5" required/>
          </div>
          <div>
            <label>Email: </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Your Email ID" className="border rounded px-4 py-2 mt-5" required/>
          </div>
          <div>
            <label>Date & Time: </label>
            <input value={dt} onChange={(e) => setDt(e.target.value)} type="datetime-local" className="border rounded px-4 py-2 mt-5" required></input>
          </div>
          
          <div className="flex justify-center pt-5">
            <button onClick={() => sendRoomEmail()} className="py-1 px-7 mb-3 text-white font-bold bg-[#1551b8] border rounded hover:text-[#1551b8] hover:bg-white">Submit</button>
          </div>

        </form>
      </div>
      <div className='callJoin'>
        <h1 className="about-title text-[30px]">One on One Video Call</h1>
        <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Enter Room Code" className="border rounded px-4 py-2 mt-5"/>
        <div className="flex justify-center mt-5">
          <button onClick={handleJoinRoom} className="py-1 px-7 mb-3 text-white font-bold bg-[#1551b8] border rounded hover:text-[#1551b8] hover:bg-white">Join</button>
        </div>
      </div>
      
    </div>
  </>
  );
};

export default HomeNumber;