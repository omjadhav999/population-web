import React from 'react'
import { useNavigate } from 'react-router-dom'
const Nav:React.FC = () => {
  const navigate=useNavigate();
  return (
    <div>
      <nav className='w-full bg-gray-400  border-1 border-black h-18   shadow shadow-slate-500 z-10  '> 
        <div className='w-full flex justify-between'>
        <div className=' font-bold p-5 font-serif text-[24px] cursor-pointer ' onClick={()=>navigate("/")}>DensityVista</div>
        <div className='p-5 font-semi bold'>By<span className=' cursor-pointer font-roboto text-green-700'><a href="https://www.linkedin.com/in/om-jadhav-463b96259/"></a> Om Jadhav</span></div>
        </div>
        
      </nav>
    </div>
  )
}

export default Nav
