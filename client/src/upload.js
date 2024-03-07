import { useState } from "react"

export default function Upload(){
    const [boards, setboards] = useState([])
    // const [universities, setuniversities] = useState([])
    const [courses, setcourses] = useState([])
    const [subjects, setsubjects] = useState([])
    const [board_university, setboard_university] = useState()

const [university, setuniversity] = useState(false)

    const universities_name=["Punjabi University,Patiala (PUP)","Maharshi Dayanand University (MDU)"]
    const boards_name=["PSEB","CBSE"]
    const classes=["10th","12th"]
    const universities_courses=["BCA"]

  

    const subject_10th_pseb=["English","Hindi","Agriculture","Computer Science","Mathematics","Punjabi A","Punjabi B","Social Studies","Health & Physical Education","Health Science","Information Technology","Science"]
    const subject_12th_pseb=["English","Computer Application","Geography","Agriculture","Mathematics","Punjabi","Environment Education","Chemistry","Physics","Biology","History","Political Science"]
    const subject_10th_cbse=["English Literature","English Communication","Hindi A","Hindi B","Regional Languages","Mathematics","Music","Social Studies","Science","Other"]
    const subject_12th_cbse=["English","Hindi","Geography","Agriculture","Mathematics","Economics","Chemistry","Physics","Biology","History","Political Science","Home Science","Accountancy","Bussiness Studies"]
    const Boards=[
        {
            "PSEB":{
                "10th":subject_10th_pseb,
                "12th":subject_12th_pseb
            },
            "CBSE":{
                "10th":subject_10th_cbse,
                "12th":subject_12th_cbse
            },
        }
    ]
    const pup_sub=[
["Basic Maths","Office Automation And Productive Tools","Programming Using C","Fundamental Of Information Technology","General English","Operating System","Punjabi","Punjabi-MG"],
["Basic Mathematics","Drug Abuse Problem","Programming with visual basic","Digital electronics","Data Structure","General english","Punjabi"],
["Environmental Studies","Object oriented programming","Computer system organization","Discrete mathematics","English communication","Fundamentals of database management system","Punjabi","Punjabi Mudla Gyan","System Analysis Design"],
["Management Information Systems","Punjabi Compulsory","Computer networks","Computer oriented numerical and statistical methods","English communication skills","Environmental and road safety awareness","Relational database management system"],
["Mathematical Foundation Of Computer Science","English literary skill","Java programming","Punjabi","System analysis and design","System software","Web designing","Punjabi Mudla Gyan"],
["E-commerce","Operating Systems","Punjabi","English literary skills","Software engineering","Web designing using asp.Net"],
    ]
    const mdu_sub=[
["Business Practice","Computer Programming Fundamentals","Logical Organization of Computer 1","Mathematics","PC Software"],
["Logical Organization Computer-2","Mathematical Foundation Of Computer Science","Structured System Analysis And Design","C Programming"],
["Communication Skill English","Compuer System Architecture","Data Structure-1","Database System","Introduction to Operating System"],
["Data Structure-2","Financial Accounting","Object Oriented Programming","Operating System Organization Unix","Software Engineering","Web Designing"],
["Computer Graphics","Data Communication Networking","Management Information Systems","Visual Basic"],
["Artificial Intelligence","E-commerce","Introduction to Net","Object Technologies Programming using Java"],
    ]
    const [class_course, setclass_course] = useState()
    function Options(e){
// console.log(e.target.value);
let value=e.target.value;
if(value==="board"){
    setboards(boards_name)
    setcourses(classes)
    setuniversity(false)

}
else if(value==="university"){
    setboards(universities_name)
    setcourses(universities_courses)
    setuniversity(true)
}
    }
    function Semester_subjects(id){
        // let value=e.target.value;
        // console.log(e);
        if(board_university==="Punjabi University,Patiala (PUP)"){
            setsubjects(pup_sub[id])
         }
        else if(board_university==="Maharshi Dayanand University (MDU)"){
            setsubjects(mdu_sub[id])
        }
    }
    function Subject_selection(e){
        let value=e.target.value;
        setclass_course(value)
        // console.log();
        if(!university){
            setsubjects(Boards[0][board_university][value])
            
        }
    }
    return(<>
    <div className="flex justify-center items-center min-h-screen">
        <div className=" w-96 font-mons border pt-5 shadow-inner rounded pb-5">
                <div className="text-xl font-semibold text-center">Upload Documents</div>
                <div className="px-5 pt-5 " >
                    <label className="">
                        <p className="font-semibold mt-5">Select Education</p>
                        <select name="education" onChange={Options} className="w-full h-7 outline-none border border-1 cursor-pointer focus:border-[#b1d5fa]">
                            <option selected id="education" value="">--Select--</option>
                            <option id="education" value="board">Board</option>
                            <option id="education" value="university">University</option>
                        </select>
                    </label>
                    <label className="">
                        <p className="font-semibold mt-5">Select Board/University</p>
                        <select onChange={(e)=>setboard_university(e.target.value)} className="w-full h-7 outline-none border border-1 cursor-pointer focus:border-[#b1d5fa]">
                        <option selected id="" value="">--Select--</option>

                           {
                            boards&&boards.map((item,ind)=>{
                                return(<>
                                <option value={item} key={ind}>{item}</option>

                                </>)
                            })
                           }
                            
                        </select>
                    </label>
                    <label className="">
                        <p className="font-semibold mt-5">Select Class/Course</p>
                        <select onChange={Subject_selection} className="w-full h-7 outline-none border border-1 cursor-pointer focus:border-[#b1d5fa]">
                           <option selected id="" value="">--Select--</option>
                           {
                            courses&&courses.map((item,ind)=>{
                                return(<>
                                <option selected={false} value={item} key={ind}>{item}</option>

                                </>)
                            })
                           }
                           
                        </select>
                    </label>
                   {university? <label className="">
                        <p className="font-semibold mt-5">Select Semester</p>
                        <select onChange={(e)=>Semester_subjects(e.target.value)} className="w-full h-7 outline-none border border-1 cursor-pointer focus:border-[#b1d5fa]">
                        <option  selected id="" value="">--Select--</option>
                        <option   value={0}>1st</option>
                        <option   value={1}>2nd</option>
                        <option   value={2}>3rd</option>
                        <option   value={3}>4th</option>
                        <option   value={4}>5th</option>
                        <option   value={5}>6th</option>
                            
                        </select>
                    </label>:''}
                    <label className="">
                        <p className="font-semibold mt-5">Select Subject</p>
                        <select className="w-full h-7 outline-none border border-1 cursor-pointer focus:border-[#b1d5fa]">
                              <option selected id="" value="">--Select--</option>
                            {
                                subjects&&subjects.map((item,ind)=>{
                                    return(<>
                                    <option selected={false} value={item} key={ind}>{item}</option>

                                    </>)
                                })
                            }
                        </select>
                    </label>
                  
                    <label className="">
                        <p className="font-semibold mt-5">Upload Document</p>
                        <input type="file" className=""/>
                    </label>
                    <button className="w-full py-2 bg-[#3d90e3] text-white rounded mt-5 hover:bg-[#4b88c5]">SUBMIT</button>
                </div>

        </div>
    </div>
    </>)
}