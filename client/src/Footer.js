import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
export default function Footer(){
    return(<>
    <div className=" bg-black w-full flex justify-center items-center pb-3">
      <div className="text-center space-y-4">
        <img  className="mx-auto" src="/logo.png"/>
        <span className="font-mons text-[#3d90e3] text-lg font-[500px]">SforStudy Notez provides the best learning material on technical and non technical subjects</span>
        <div className="flex text-[#3d90e3] items-center space-x-5 justify-center font-semibold font-mons ">
                <span className="text-xl">Contact us :</span>
                <FaFacebook  className="text-2xl cursor-pointer"/>
                <IoMdMail className="text-3xl cursor-pointer" />
                <FaSquareXTwitter className="text-2xl cursor-pointer" />
                <FaLinkedin  className="text-2xl cursor-pointer"/>
            </div>
      </div>
    </div>
    </>)
}