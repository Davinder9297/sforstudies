import { Link } from "react-router-dom";

export default function Navbar(){
    return(<>
    <div className="flex justify-between h-20 bg-black items-center font-mons px-5 shadow-xl shadow-[#3d90e3]">
        <Link to='' className="h-[70px]">
            <img className="h-full " src="/logo.png"/>
        </Link>
        <div className="flex text-[#3d90e3] font-semibold space-x-4 ">
            <Link to='' className='px-4 py-2 text-center hover:bg-[#3d90e3] hover:text-black rounded '>Home</Link>
            <a href='#boards' className='px-4 py-2 text-center hover:bg-[#3d90e3] hover:text-black rounded '>Board</a>
            <a href="#universities" className='px-4 py-2 text-center hover:bg-[#3d90e3] hover:text-black rounded '>University</a>
            <Link to='/upload' className='px-4 py-2 text-center hover:bg-[#3d90e3] hover:text-black rounded '>Upload</Link>
            <Link to='/login' className=' text-center hover:bg-[#3d90e3] hover:text-black rounded  px-4 py-2'>Login/Register</Link>
        </div>
    </div>
    </>)
}