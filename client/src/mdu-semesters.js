import { Link } from "react-router-dom";

export default function MduSemester(){
    return(<>
    <div className="mb-5 min-h-screen  font-mons ">
        <div className="flex h-24 bg-teal-900 text-[#3d90e3] font-mons font-semibold items-center text-lg pl-5">
            <Link to='/'>Home</Link>
            <span>-&gt;</span>
            <Link to='/Maharshi Dayanand University (MDU)'>mdu</Link>
            <span>-&gt;</span>
            <Link to='/Maharshi Dayanand University (MDU)/BCA'>bca</Link>
        </div>

        <div className="flex justify-center w-full">
            <div className="w-[70%] mt-4">
                <div>Our website provides notes for all subjects in 1st sem , 2nd sem , 3rd sem , 4th sem , 5th sem , 6th sem of BCA. Doing preparation from the notes helps you to get good marks in exams. From our BCA notes bank, students can download notes. These notes are very easy to understand.</div>
               <div className="flex justify-center">
               <div className="flex flex-wrap justify-between w-[50%]">
               <Link to='/Maharshi Dayanand University (MDU)/BCA/semester?sem=1st' state={{uni:'Maharshi Dayanand University (MDU)',id:0}} className="flex justify-center w-56 h-32 bg-teal-900 text-[#3d90e3] font-mons font-semibold items-center text-3xl my-5">1st</Link>
                        <Link to='/Maharshi Dayanand University (MDU)/BCA/semester?sem=2nd' state={{uni:'Maharshi Dayanand University (MDU)',id:1}} className="flex justify-center w-56 h-32 bg-teal-900 text-[#3d90e3] font-mons font-semibold items-center text-3xl my-5">2nd</Link>
                        <Link to='/Maharshi Dayanand University (MDU)/BCA/semester?sem=3rd' state={{uni:'Maharshi Dayanand University (MDU)',id:2}} className="flex justify-center w-56 h-32 bg-teal-900 text-[#3d90e3] font-mons font-semibold items-center text-3xl my-5">3rd</Link>
                        <Link to='/Maharshi Dayanand University (MDU)/BCA/semester?sem=4th' state={{uni:'Maharshi Dayanand University (MDU)',id:3}} className="flex justify-center w-56 h-32 bg-teal-900 text-[#3d90e3] font-mons font-semibold items-center text-3xl my-5">4th</Link>
                        <Link to='/Maharshi Dayanand University (MDU)/BCA/semester?sem=5th' state={{uni:'Maharshi Dayanand University (MDU)',id:4}} className="flex justify-center w-56 h-32 bg-teal-900 text-[#3d90e3] font-mons font-semibold items-center text-3xl my-5">5th</Link>
                        <Link to='/Maharshi Dayanand University (MDU)/BCA/semester?sem=6th' state={{uni:'Maharshi Dayanand University (MDU)',id:5}} className="flex justify-center w-56 h-32 bg-teal-900 text-[#3d90e3] font-mons font-semibold items-center text-3xl my-5">6th</Link>
                </div>
               </div>
            </div>
        </div>
    </div>
    </>)
}