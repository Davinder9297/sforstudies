import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import {Link, useNavigate} from 'react-router-dom'
import { BASEURL } from './confidential';
import Spinner from './Spinner';
import Navbar from './Navbar';
export default function Login(){
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [message, setMessage] = useState("");
    const [show, setshow] = useState(false)
    let navigate=useNavigate('')

    const handlesubmit=async (e)=>{
e.preventDefault();

if(!password || !email){
    toast.error('*Every input must be filled');

    setshow(false)
}

else{
   try {
    setshow(true)
    let url=BASEURL+'login'
    const Grouped={email,password}
    const data=await fetch(url,{
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Grouped)
    })
    const response=await data.json()
    setshow(false)
    // console.log(response);
    if(response.success){
        localStorage.setItem('email',email)
        toast.success('Login Successfull');
        window.location.replace('/')

    }
    else{
        toast.error(response.message);

    }
   } catch (error) {
    console.log(error);
   }
    }
}
    return(<>
    <Toaster/>
    <div className="h-screen bgimg flex justify-center items-center  font-mons">
        <div className="box flex h-[350px] border w-[700px] items-center justify-between bg-white shadow-lg shadow-blue-400  rounded-lg px-5 xsm:justify-center xsm:mx-2 ">
            <div className="h-full  flex items-center w-80 justify-center  xsm:hidden">
                <img src="/leftsideimage.png" className="h-fit xsm:hidden"/>
            </div>
            <div className="h-full w-[320px]  border-l-2 border-blue-100  xsm:border-0 pt-3">
                <div className="text-center font-bold text-2xl  pt-3 animate-pulse txt ">
                    Login
                </div>
             
        <div className="my-4 px-4 " > 
            <div className="flex flex-col space-y-4">
                <label htmlFor="email" className='flex items-center'>
                    <div className='absolute left-13 h-6 text-md   flex items-center px-2 border-r-[2px] border-r-gray-400 text-[#3d90e3]'> <FaUser /> </div>                    
                    <input  required={true} value={email}  onChange={(e) => { setemail(e.target.value); }} id="email" name="email" type="email" className="text-[#3d90e3] w-full pl-11 py-2 bg-blue-100 border  rounded-lg  focus:outline-none focus:border-slate-500 hover:shadow" placeholder="username"/>
                </label>
                <label htmlFor="password" className='flex items-center'>
                    <div className='absolute left-13 h-6 text-lg  flex items-center px-[7px] border-r-[2px] border-r-gray-400 text-[#3d90e3]'> <IoIosLock /> </div>                    
                    <input required={true} value={password}  onChange={(e) => { setpassword(e.target.value); }} id="password" name="password" type='password' className="w-full text-[#3d90e3] bg-blue-100 pl-11  py-2 border border-slate-200 rounded-lg  focus:outline-none focus:border-slate-500 hover:shadow" placeholder="password"/>
                </label>
                <div className="flex flex-row items-center justify-end text-sm  ">
                   
                
                    <div className='flex'>
                        <div>Not registered yet? </div>
                        <Link to='/register' className="ml-1 text-[#3d90e3] font-semibold">Register now</Link>
                    </div>
                </div>

              <button onClick={handlesubmit} className="w-full py-3 mt-2 hover:bg-[#4382c0]  bg-[#3d90e3] text-white rounded-lg text-md hover:shadow inline-flex  items-center justify-center ">
                 LOGIN      
                </button>
                <div className={`text-center text-red-500 `}>{message}</div>

            </div>
                   
                </div>
            </div>
        </div>
        {show ? <div className='w-full h-screen fixed  left-0 bg-blue-50 opacity-80'>
                <Spinner className='h-10 w-10' />

            </div> : ''}
    </div>
    </>)
}