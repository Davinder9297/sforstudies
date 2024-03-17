import { MdAccountCircle } from "react-icons/md";
import { IoLogOut, IoMail } from "react-icons/io5";
import { BASEURL } from "./confidential";
import { useEffect, useState } from "react";
export default function Account(){
    const [Data, setData] = useState([])
    function Clicked(){
        localStorage.removeItem('email')
        window.location.reload()
    }
    useEffect(() => {
     async function Fetchdata(){
        let email=localStorage.getItem('email')
        let url=BASEURL+'userdetails?email='+email;
        const data=await fetch(url)
        const response=await data.json()
        console.log(response);
        setData(response.data)
     }
     Fetchdata()
    }, [])
    
return(<>
<div className="h-fit w-80 bg-gray-300 font-mons py-3 shadow-2xl shadow-[black] ">
    <div className="flex justify-center w-full ">
       <div className="w-full space-y-3">
        <div className="h-20 w-20 rounded-full mx-auto shadow-lg bg-white border-2">
            <img src={Data?.image} className="h-full w-full rounded-full mix-blend-multiply "/>
        </div>
        <div className="text-center font-semibold">{Data?.name}</div>
        <div className="flex justify-center space-x-1 items-center">
            <div><IoMail className="text-xl"/></div>
            <div>{Data?.email}</div>
        </div>
       <button onClick={Clicked} className="flex justify-center w-full items-center">
        Log out <IoLogOut className="ml-1 text-2xl " />
       </button>
       </div>

    </div>
</div>
</>)
}