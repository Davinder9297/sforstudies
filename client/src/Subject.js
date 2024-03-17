import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { BASEURL } from "./confidential";
import Spinner from "./Spinner";

export default function Subject(){
    let params=useParams()
    const [show, setshow] = useState(false)
    let {classvalue,subject}=params;
    let path =useLocation()
    let temp=path.pathname
    let paths=temp.split('/')
    let board=paths[1]
    let semester="0"
    let course=classvalue;
    let subeducation=board
    const [Subject, setSubject] = useState([])
    const handleDownload = (item) => {
        fetch(item.doc).then((response) => {
            response.blob().then((blob) => {
             
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                     
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = item.subject;
                alink.click();
            });
        });
      };
    useEffect(() => {
        async function Fetchdata(){
          try {
            setshow(true)
              let url=BASEURL+'universitynotes'
              const Grouped={semester,subject,subeducation,course}
              console.log(Grouped);
              const data1=await fetch(url,{
                  method:'POST',
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(Grouped)
              })
              const response=await data1.json()
              setSubject(response.data)
              setshow(false)
              // console.log(response);
          } catch (error) {
              console.log(error);
          }
        }
      Fetchdata()
      }, [])
//  console.log(params);
    return(<>
    <div className="mb-5 min-h-screen  font-mons ">
        <div className="flex h-24 bg-teal-900 text-[#3d90e3] font-mons font-semibold items-center text-lg pl-5">
            <Link to='/'>Home</Link>
            <span>-&gt;</span>
            <Link to={`/${board}`}>{board}</Link>
            <span>-&gt;</span>
            <Link to={`/${board}/${classvalue}`}>{classvalue}</Link>
            <span>-&gt;</span>
            <Link to={`/${board}/${classvalue}/${subject}`}>{subject}</Link>

        </div>
        <div className="flex justify-center mt-2">
            <div className="w-[80%]">
                <div className="text-xl font-bold">{board}&nbsp;{classvalue}&nbsp;({subject})</div>
                <div className="my-3 ">Our website provides solved notes for -
                {
                    Subject?.map((item)=>{
                        return(<>
                        &nbsp;{item.subject}&nbsp; 
                        </>)
                    })
                }
                  subject of {classvalue} class. Doing preparation from the notes helps you to get good marks in exams. From our {classvalue} class notes bank, students can download notes. These notes are very easy to understand.</div>
                <div className="flex justify-center">
                <div className="flex flex-wrap justify-center w-[60%]">
                {
                    Subject?Subject.map((item)=>{
                        return(<>
                    <div key={item}  className="px-3 flex justify-center items-center m-3 font-bold min-w-64 min-h-32 bg-teal-900 text-[#3d90e3] ">
                        <div className="flex flex-col justify-center">
                            <div className="text-center">{item.subject}</div>
                            <button onClick={()=>handleDownload(item)} className="text-teal-900 bg-[#3d90e3] px-2 py-1 rounded mt-2">Download</button>
                        </div>
                    </div>
                        </>)
                    }):<div className="text-xl font-semibold font-mons mt-10">No notes found</div>
                }
                </div>
            </div>
            </div>
            
        </div>
        {show ? <div className='w-full h-screen fixed top-0 left-0 bg-blue-50 opacity-80'>
                <Spinner className='h-10 w-10' />

            </div> : ''}
        </div>
    </>)
}