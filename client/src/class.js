import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";

export default function Class(){
    let path =useLocation()
    let temp=path.pathname
    let paths=temp.split('/')
    let board=paths[1]
    const params=useParams()
    let classvalue=params.classvalue;
    // console.log(params);
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
    
    return(<>
    
    <div className="mb-5 min-h-screen  font-mons ">
        <div className="flex h-24 bg-teal-900 text-[#3d90e3] font-mons font-semibold items-center text-lg pl-5">
            <Link to='/'>Home</Link>
            <span>-&gt;</span>
            <Link to={`/${board}`}>{board}</Link>
            <span>-&gt;</span>
            <Link to={`/${board}/${classvalue}`}>{classvalue}</Link>

        </div>
        <div className="flex justify-center mt-2">
            <div className="w-[80%]">
                <div className="text-xl font-bold">{classvalue}</div>
                <div className="my-3 ">Our website provides solved notes for -
                {
                    Boards[0][board][classvalue].map((item)=>{
                        return(<>
                        {item},
                        </>)
                    })
                }
                 subjects of {classvalue} class. Doing preparation from the notes helps you to get good marks in exams. From our BCA notes bank, students can download notes. These notes are very easy to understand.</div>
                <div className="flex justify-center">
                <div className="flex flex-wrap w-[60%]">
                {
                    Boards[0][board][classvalue].map((item)=>{
                        return(<>
                    <Link key={item} state={{board,classvalue}} to={`/${board}/${classvalue}/${item}`} className="flex justify-center items-center m-3 font-bold w-64 h-32 bg-teal-900 text-[#3d90e3] ">{item}</Link>
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