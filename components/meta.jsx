import Link from "next/link"

const Meta = ()=>{
    return (
    <div className="about">
      <h1 className="about-title text-[40px]">Connect To MetaMask</h1>
      <div className="flex justify-center mt-5">
        <a href="https://talkingminds-metamask.vercel.app/"><button className="py-1 px-7 mb-3 text-white font-bold bg-[#1551b8] border rounded hover:text-[#1551b8] hover:bg-white">MetaMask</button></a>
      </div>
    </div>
    )
}
export default Meta