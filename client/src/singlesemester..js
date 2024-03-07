import { Link, useLocation, useSearchParams } from "react-router-dom";

export default function SingleSemester(){
    const [params,setparams]=useSearchParams()
    let sem=params.get('sem')
    let location=useLocation()
    let uni=location.state.uni
    let id=location.state.id
    
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

            const University=[
            {
                "Punjabi University,Patiala (PUP)":pup_sub,
                "Maharshi Dayanand University (MDU)":mdu_sub
            }
            ]

            // console.log(University[0][uni][1]);
    return(<>
      <div className="mb-5 min-h-screen  font-mons ">
        <div className="flex h-24 bg-teal-900 text-[#3d90e3] font-mons font-semibold items-center text-lg pl-5">
            <Link to='/'>Home</Link>
            <span>-&gt;</span>
            <Link to='/Punjabi University,Patiala (PUP)'>pu-patiala</Link>
            <span>-&gt;</span>
            <Link to='/Punjabi University,Patiala (PUP)/BCA'>bca</Link>
            <span>-&gt;</span>
            <Link to={`/Punjabi University,Patiala (PUP)/BCA/${sem}`}>{sem}</Link>
        </div>
        <div className="flex justify-center">
            <div className="w-[70%]">
                <div className="text-xl font-bold">Bachelor of computer application</div>
                <div className="my-3">Our website provides solved notes for 
                {
                        University[0][uni][id].map((item)=>{
                            return(<>
                            {item},
                            </>)
                        })
                    }

                 subjects of BCA all semesters/years. Doing preparation from the notes helps you to get good marks in exams. From our BCA notes bank, students can download notes. These notes are very easy to understand.</div>
                <div className="flex justify-center">
                <div className="flex flex-wrap w-[70%]">

                    {
                        University[0][uni][id].map((item)=>{
                            return(<>
                            <Link to='' key={item} className="flex justify-center items-center m-3 font-bold w-64 h-32 bg-teal-900 text-[#3d90e3] text-center">{item}</Link>
                            </>)
                        })
                    }

                    
             
                </div>
            </div>
            </div>
            
        </div>
        </div>
    </>)
}