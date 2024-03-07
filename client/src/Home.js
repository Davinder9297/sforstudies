import { FaUpload } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Home(){
    return(<>
  <div className="flex justify-center w-full min-h-screen bg-[#e7f0fa] pt-10 pb-10">
  <div className="w-[72%] ">
  <div className="text-center text-4xl  font-bold font-mons "><span className="animate-charcter">Simple easy and learning at your fingertips</span></div>
        <div className="flex w-[100%] justify-between mt-14">
            <div className="w-52 h-36 bg-black flex justify-center items-center rounded shadow-lg shadow-[#3d90e3]">
                <div className="flex text-[#3d90e3] font-mons justify-around items-center space-x-3 ">
                     <FaUpload className="text-6xl "/>
                     <div className="flex flex-col text-2xl font-mons">
                        <span>
                            5000+
                        </span>
                        <span>
                        Upload
                        </span>
                     </div>
                </div>
            </div>
            <div className="w-52 h-36 bg-black flex justify-center items-center rounded shadow-lg shadow-[#3d90e3]">
                <div className="flex text-[#3d90e3] font-mons justify-around items-center space-x-3 ">
                <FaDownload className="text-6xl " />
                     <div className="flex flex-col text-2xl font-mons">
                        <span>
                            5000+
                        </span>
                        <span>
                        Download
                          
                        </span>
                     </div>
                </div>
            </div>
            <div className="w-52 h-36 bg-black flex justify-center items-center rounded shadow-lg shadow-[#3d90e3]">
                <div className="flex text-[#3d90e3] font-mons justify-around items-center space-x-3 ">
                     <FaEye className="text-6xl "/>
                     <div className="flex flex-col text-2xl font-mons">
                        <span>
                            5000+
                        </span>
                        <span>
                            View
                        </span>
                     </div>
                </div>
            </div>
            <div className="w-52 h-36 bg-black flex justify-center items-center rounded shadow-lg shadow-[#3d90e3]">
                <div className="flex text-[#3d90e3] font-mons justify-around items-center space-x-3 ">
                     <FaUser  className="text-6xl "/>
                     <div className="flex flex-col text-2xl font-mons">
                        <span>
                            5000+
                        </span>
                        <span>
                            Users
                        </span>
                     </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center text-4xl  font-bold font-mons mt-10"><span className="animate-charcter">Start learning!</span></div>
        <div className="font-mons text-2xl font-semibold" id="boards">Boards</div>
        <div className="flex w-[100%] justify-center space-x-20 mt-10">
            <Link to='/PSEB' className="w-72 h-72 bg-white p-2 rounded shadow-lg shadow-[#3d90e3]">
                <div className="h-[200px] flex justify-center">
                    <img className="mix-blend-multiply h-full w-[70%]" src="/pseb.jpg"/>
                </div>
                <div className="text-xl text-center w-full  font-mons font-bold">PSEB</div>
                <div className=" text-center font-semibold w-full font-mons">Punjab School Education Board</div>
            </Link>
            <Link to='/CBSE' className="w-72 h-72 bg-white p-2 rounded shadow-lg shadow-[#3d90e3]">
                <div className="h-[200px] flex justify-center">
                    <img className="mix-blend-multiply h-full w-[70%]" src="/cbse.jpg"/>
                </div>
                <div className="text-xl text-center w-full  font-mons font-bold">CBSE</div>
                <div className=" text-center font-semibold w-full font-mons">Central Board Of Secondary Education</div>
            </Link>
            
        </div>
        <div className="font-mons text-2xl font-semibold mt-10 " id="universities">Universities</div>
        <div className="flex w-[100%] justify-center space-x-20 mt-10 font-mons">
            <Link to='/Maharshi Dayanand University (MDU)' className="w-72 h-72 bg-white p-2 rounded shadow-lg shadow-[#3d90e3]">
                <div className="h-[200px] flex justify-center pt-3">
                    <img className="mix-blend-multiply h-[80%] w-[65%]" src="/mdu.jpg"/>
                </div>
                <div className="text-xl text-center w-full  font-mons font-bold">MDU</div>
                <div className=" text-center font-semibold w-full font-mons">Maharshi Dayanand University</div>
            </Link>
            <Link to='/Punjabi University,Patiala (PUP)' className="w-72 h-72 bg-white p-2 rounded shadow-lg shadow-[#3d90e3]">
                <div className="h-[200px] flex justify-center">
                    <img className="mix-blend-multiply h-full w-[70%]" src="/pup.png"/>
                </div>
                <div className="text-xl text-center w-full  font-mons font-bold">PUP</div>
                <div className=" text-center font-semibold w-full font-mons">Punjabi University, Patiala</div>
            </Link>
            
        </div>
    </div>
  </div>
    </>)
}