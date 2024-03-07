import { Link } from "react-router-dom";

export default function MDUUniversity(){
    return(<>
    <div className="mb-5 min-h-screen  font-mons ">
        <div className="flex h-24 bg-teal-900 text-[#3d90e3] font-mons font-semibold items-center text-lg pl-5">
            <Link to='/'>Home</Link>
            <span>-&gt;</span>
            <Link to='/Maharshi Dayanand University (MDU)'>mdu</Link>
        </div>
        <div className="font-mons font-semibold text-center mt-3 text-xl">SforStudyNotez provide the several types of notes like BCA,BBA etc.</div>
        <div className="flex justify-center w-full">
            <div className="w-[70%]">
                <img src="/mdu.jpg" className="mx-auto my-3"/>
                <div className="font-bold text-lg text-center">Maharshi Dayanand University Rohtak (MDU)</div>
                <div className="mt-2 mb-5">Our website provides notes for BCA, BBA. Doing preparation from the notes helps you to get good marks in exams. From our MDU notes bank, students can download notes. These notes are very easy to understand</div>
                <Link  to='/Maharshi Dayanand University (MDU)/BCA' className=" text-[#3d90e3] w-full py-2 mt-2">
                    <div className="text-xl font-semibold bg-teal-900 w-full pl-3">BCA</div>
                    <div className="bg-teal-900 pl-3">Bachelor of computer application</div>
                </Link>
                <div className="mt-5">Maharshi Dayanand University, ab initio established as Rohtak University, Rohtak, came into existence by an Act No. 25 of 1975 of the Haryana Legislative Assembly in 1976 with the objective to promote inter-disciplinary higher education and research in the fields of environmental, ecological and life sciences. It was rechristened as Maharshi Dayanand University in 1977 after the name of a great visionary and social reformer, Maharshi Dayanand. It had a unitary and residential character in its nascent stage, but became an affiliating University in November 1978. The University secured the recognition of University Grants Commission  the higher education regulatory body of India - for central Govt. grants in 16 Mar, 1979</div>
            </div>
        </div>
    </div>
    </>)
}