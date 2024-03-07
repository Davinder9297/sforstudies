import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import {Link, useNavigate} from 'react-router-dom'
export default function Register(){
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [confirm, setconfirm] = useState()
    const [profile, setprofile] = useState()
    const [password, setpassword] = useState()
    const [spinner, setspinner] = useState('hidden')
    const [message, setMessage] = useState("");
    const [opac, setopac] = useState('')
    let navigate=useNavigate('')

    const handlesubmit=async (e)=>{
e.preventDefault();

const data={name,password}
console.log(data);
if(name=='' || password==''){
    setMessage('*Every input must be filled')
}
else{
    setspinner('')
    setopac('opacity-50')

} 
    }
    return(<>
    <div className="h-screen bgimg flex justify-center items-center  font-mons">
        <div className="box flex h-[450px] border w-[700px] items-center justify-between bg-white shadow-lg shadow-blue-400  rounded-lg px-5 xsm:justify-center xsm:mx-2">
            <div className="h-full  flex items-center w-80 justify-center  xsm:hidden">
                <img src="/leftsideimage.png" className="h-fit xsm:hidden"/>
            </div>
            <div className="h-full w-[320px]  border-l-2 border-blue-100  xsm:border-0 ">
                <div className="text-center font-bold text-2xl  pt-3 animate-pulse txt ">
                Sign up 
                </div>
             
        <div className="my-4 px-4 " > 
            <div className="flex flex-col space-y-4">
                <label htmlFor="name" className='flex items-center'>
                    <div className='absolute left-13 h-6 text-md   flex items-center px-2 border-r-[2px] border-r-gray-400 text-[#3d90e3]'> <FaUser /> </div>                    
                    <input  required={true} value={name}  onChange={(e) => { setname(e.target.value); }} id="name" name="name" type="text" className="text-[#3d90e3] w-full pl-11 py-2 bg-blue-100 border  rounded-lg  focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your name"/>
                </label>
                <label htmlFor="email" className='flex items-center'>
                    <div className='absolute left-13 h-6 text-lg  flex items-center px-[7px] border-r-[2px] border-r-gray-400 text-[#3d90e3]'><IoMdMail /> </div>                    
                    <input required={true} value={email}  onChange={(e) => { setemail(e.target.value); }} id="email" name="email" type='email' className="w-full text-[#3d90e3] bg-blue-100 pl-11  py-2 border border-slate-200 rounded-lg  focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your email"/>
                </label>
                <label htmlFor="password" className='flex items-center'>
                    <div className='absolute left-13 h-6 text-lg  flex items-center px-[7px] border-r-[2px] border-r-gray-400 text-[#3d90e3]'> <IoIosLock /> </div>                    
                    <input required={true} value={password}  onChange={(e) => { setpassword(e.target.value); }} id="password" name="password" type='password' className="w-full text-[#3d90e3] bg-blue-100 pl-11  py-2 border border-slate-200 rounded-lg  focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password"/>
                </label>
                <label htmlFor="confirm" className='flex items-center'>
                    <div className='absolute left-13 h-6 text-md   flex items-center px-2 border-r-[2px] border-r-gray-400 text-[#3d90e3]'> <IoIosLock /></div>                    
                    <input  required={true} value={confirm}  onChange={(e) => { setconfirm(e.target.value); }} id="confirm" name="confirm" type="password" className="text-[#3d90e3] w-full pl-11 py-2 bg-blue-100 border  rounded-lg  focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Confirm password"/>
                </label>
                <label htmlFor="profile" className='flex items-center space-x-1'>
                    <span>Upload profile photo</span>
                    <input  required={true} value={profile}  onChange={(e) => { setprofile(e.target.value); }} id="profile" name="profile" type="file" className="text-[#3d90e3] w-[40%]  bg-blue-100 border  rounded-lg  focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Confirm password"/>
                </label>
                <div className="flex flex-row items-center justify-end text-sm  ">
                    <div className='flex'>
                        <div>Already registerd? </div>
                        <Link to='/login' className="ml-1 text-[#3d90e3] font-semibold">Login now</Link>
                    </div>
                </div>

              <button onClick={handlesubmit} className="w-full py-3 mt-2 hover:bg-[#4382c0]  bg-[#3d90e3] text-white rounded-lg text-md hover:shadow inline-flex  items-center justify-center ">
                 Sign up      
                </button>
                <div className={`text-center text-red-500 `}>{message}</div>

            </div>
                   
                </div>
            </div>
        </div>
    </div>
    </>)
}