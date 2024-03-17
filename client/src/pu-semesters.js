import { Link } from "react-router-dom";

export default function PuSemester(){
   
    return(<>
    <div className="mb-5 min-h-screen  font-mons ">
        <div className="flex h-24 bg-teal-900 text-[#3d90e3] font-mons font-semibold items-center text-lg pl-5">
            <Link to='/'>Home</Link>
            <span>-&gt;</span>
            <Link to='/Punjabi University,Patiala (PUP)'>pu-patiala</Link>
            <span>-&gt;</span>
            <Link to='/Punjabi University,Patiala (PUP)/BCA'>bca</Link>
        </div>

        <div className="flex justify-center w-full">
            <div className="w-[70%] mt-4">
                <div>Our website provides notes for all subjects in 1st sem , 2nd sem , 3rd sem , 4th sem , 5th sem , 6th sem of BCA. Doing preparation from the notes helps you to get good marks in exams. From our BCA notes bank, students can download notes. These notes are very easy to understand.</div>
               <div className="flex justify-center">
               <div className="flex flex-wrap justify-between w-[50%]">
                        <Link to='/Punjabi University,Patiala (PUP)/BCA/1st' state={{uni:'Punjabi University,Patiala (PUP)',id:0}} className="flex justify-center w-56 h-32 bg-teal-900 text-[#3d90e3] font-mons font-semibold items-center text-3xl my-5">1st</Link>
                        <Link to='/Punjabi University,Patiala (PUP)/BCA/2nd' state={{uni:'Punjabi University,Patiala (PUP)',id:1}} className="flex justify-center w-56 h-32 bg-teal-900 text-[#3d90e3] font-mons font-semibold items-center text-3xl my-5">2nd</Link>
                        <Link to='/Punjabi University,Patiala (PUP)/BCA/3rd' state={{uni:'Punjabi University,Patiala (PUP)',id:2}} className="flex justify-center w-56 h-32 bg-teal-900 text-[#3d90e3] font-mons font-semibold items-center text-3xl my-5">3rd</Link>
                        <Link to='/Punjabi University,Patiala (PUP)/BCA/4th' state={{uni:'Punjabi University,Patiala (PUP)',id:3}} className="flex justify-center w-56 h-32 bg-teal-900 text-[#3d90e3] font-mons font-semibold items-center text-3xl my-5">4th</Link>
                        <Link to='/Punjabi University,Patiala (PUP)/BCA/5th' state={{uni:'Punjabi University,Patiala (PUP)',id:4}} className="flex justify-center w-56 h-32 bg-teal-900 text-[#3d90e3] font-mons font-semibold items-center text-3xl my-5">5th</Link>
                        <Link to='/Punjabi University,Patiala (PUP)/BCA/6th' state={{uni:'Punjabi University,Patiala (PUP)',id:5}} className="flex justify-center w-56 h-32 bg-teal-900 text-[#3d90e3] font-mons font-semibold items-center text-3xl my-5">6th</Link>
                </div>
               </div>
            </div>
        </div>
    </div>
    </>)
}