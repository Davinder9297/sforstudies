import { Link } from "react-router-dom";

export default function Pseb(){
    return(<>
    <div className="mb-5 min-h-screen  font-mons ">
        <div className="flex h-24 bg-teal-900 text-[#3d90e3] font-mons font-semibold items-center text-lg pl-5">
            <Link to='/'>Home</Link>
            <span>-&gt;</span>
            <Link to='/PSEB'>PSEB</Link>
        </div>
        <div className="font-mons font-semibold text-center mt-3 text-xl">SforStudyNotez provide the several types of notes like 10th,12th etc.</div>
        <div className="flex justify-center w-full">
            <div className="w-[70%]">
                <img src="/pseb.jpg" className="mx-auto"/>
                <div className="font-bold text-lg text-center">Punjab School Education Board(PSEB)</div>
                <div className="mt-2 mb-5">Our website provides solved notes for 10th, 12th. Doing preparation from the notes helps you to get good marks in exams. From our PSEB(School) bank, students can download notes. These notes are very easy to understand.</div>
                <Link to='/PSEB/10th' state={'PSEB'} className=" text-[#3d90e3] w-full py-2 mt-2">
                    <div className="text-xl font-semibold bg-teal-900 w-full pl-3 mb-5 py-3">10th</div>
                </Link>
                <Link to='/PSEB/12th' state={'PSEB'} className=" text-[#3d90e3] w-full py-2 mt-2">
                    <div className="text-xl font-semibold bg-teal-900 w-full pl-3 mb-5 py-3">12th</div>
                </Link>
                <div className="mt-5">Punjab Assembly established Punjabi University, Patiala under the Punjab Act No. 35 of 1961. Dr. S. Radhakrishnan, the then President of India laid foundation of Punjabi University on June 24, 1962. He preached, "The institutes of higher education share the burden of nation-building in a critically important sense. Our aim is a strong, free and democratic India where every citizen has an equal place and full opportunity of growth. In this task, a vast responsibility rests on our universities." Established on April 30, 1962 in the erstwhile princely state of Patiala with the main objective of furthering the cause of Punjabi language, art and literature, Punjabi University has since evolved into the largest University in the state. This is the second University in the world to be named after a language, the first being Hebrew University of Israel. Its vision is to establish and incorporate a University for the advancement of Punjabi studies and development of Punjabi language as a medium of instruction or otherwise for providing instruction in humanistic and scientific subjects and generally for the promotion of education and research. The University started working from its present lush green, pollution free, 316 acres campus since 1965. Initially University’s jurisdiction area was fixed as the 16 km radius having only 9 colleges. In 1969, it grew into an affiliating university, with 43 colleges affiliated to it. Now the university caters to the educational needs of nine Districts of Punjab. Over the time since its inception, the University has evolved into a multi-faceted and multi-faculty educational institution for the promotion of higher education and research in Humanities, Arts, Sciences, Engineering Languages, Technology and many more. Spread over 600 acres of land, its 1500+ teachers are imparting instruction and guidance to nearly 14,000+ students in a multi-faceted, multi-pronged and multi-faculty environment comprising 70+ Teaching and Research Departments/Chairs on its Campus, 27 Regional Centre/ Neighbourhood Campuses/Constituent Colleges and 278 Colleges affiliated to it.</div>
            </div>
        </div>
    </div>
    </>)
}