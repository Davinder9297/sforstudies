import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import Account from "./Account";
import { useEffect, useState } from "react";

export default function Navbar(){
    let login=localStorage.getItem('email')
    const [Show, setShow] = useState('translate-x-[100%]')
    function ShowHidden(){
        if(Show==='translate-x-0'){
            setShow('translate-x-[100%]')
        }
        else{
            setShow('translate-x-0')
        }
    }
    // useEffect(() => {
     
    // }, [])
    
    return(<>
    <div className="relative ">
    <div className="flex justify-between h-20 bg-black items-center font-mons px-5 shadow-xl shadow-[#3d90e3]">
        <Link to='' className="h-[70px]">
            <img className="h-full " src="/logo.png"/>
        </Link>
        <div className="flex text-[#3d90e3] font-semibold  space-x-4">
            <Link to='' className='px-4 py-2 text-center hover:bg-[#3d90e3] hover:text-black rounded '>Home</Link>
            <a href='#boards' className='px-4 py-2 text-center hover:bg-[#3d90e3] hover:text-black rounded '>Board</a>
            <a href="#universities" className='px-4 py-2 text-center hover:bg-[#3d90e3] hover:text-black rounded '>University</a>
            <Link to='/upload' className='px-4 py-2 text-center hover:bg-[#3d90e3] hover:text-black rounded '>Upload</Link>
           {login?<button className="text-4xl"><MdAccountCircle onClick={ShowHidden} /></button>: <Link to='/login' className=' text-center hover:bg-[#3d90e3] hover:text-black rounded  px-4 py-2'>Login/Register</Link>}
        </div>
    </div>
   <div className={`flex justify-end w-full absolute overflow-x-hidden  duration-500 ${Show}`}>
        <Account/>
   </div>
    </div>
    </>)
}