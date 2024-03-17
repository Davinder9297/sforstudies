import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { BASEURL } from "./confidential";
import Spinner from "./Spinner";

export default function University_Subject(){
  const [show, setshow] = useState(false)
    let path =useLocation()
    let temp=path.pathname
    let paths=temp.split('/')
    let subeducation=paths[1]
    let sem=paths[3]
    let subject=paths[4]
    // subeducation=subeducation.replaceAll(/%20/g, '-')
    let sub=subject.replace(/%20/g, '-')
    subeducation=subeducation.replace(/%20/g, ' ')
    subject=subject.replace(/%20/g, ' ')
    let numtosem={
        "1st":"0",
        "2nd":"1",
        "3rd":"2",
        "4th":"3",
        "5th":"4",
        "6th":"5",
    }
    let course="BCA"
    let semester=numtosem[sem];
    // console.log(semester);
    // console.log(paths);
    const [Subject, setSubject] = useState([])
    useEffect(() => {
      async function Fetchdata(){
        try {
            setshow(true)
            let url=BASEURL+'universitynotes'
            const Grouped={semester,subject,subeducation,course}
            // console.log(Grouped);
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
    return(<>
    <div className="mb-5 min-h-screen  font-mons ">
        <div className="flex h-24 bg-teal-900 text-[#3d90e3] font-mons font-semibold items-center text-lg pl-5">
            <Link to='/'>Home</Link>
            <span>-&gt;</span>
            <Link to={`/${subeducation}`}>{subeducation==="Punjabi subeducationversity,Patiala (PUP)"?"pu-patiala":"mdu"}</Link>
            <span>-&gt;</span>
            <Link to={`/${subeducation}/BCA`}>BCA</Link>
            <span>-&gt;</span>
            <Link to={`/${subeducation}/BCA/${sem}`}>{sem}</Link>
            <span>-&gt;</span>
            <Link to={`/${subeducation}/BCA/${sem}/${sub}`}>{sub}</Link>

        </div>
        <div className="flex justify-center mt-2">
            <div className="w-[80%]">
                <div className="text-xl font-bold">{subeducation.replace(/%20/g, '-')}&nbsp;BCA&nbsp;({sub})</div>
                <div className="my-3 h-auto ">Our website provides solved notes for -
                {
                    Subject?.map((item)=>{
                        return(<>
                        &nbsp;{item.subject}&nbsp; 
                        </>)
                    })
                }
                  subject of BCA class. Doing preparation from the notes helps you to get good marks in exams. From our BCA class notes bank, students can download notes. These notes are very easy to understand.</div>
                <div className="flex justify-center">
                <div className="flex flex-wrap justify-center w-[80%] ">
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