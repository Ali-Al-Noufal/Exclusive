import { AiOutlineSend } from "react-icons/ai"
import { FaRegCopyright } from "react-icons/fa"

const Footer = ({logo,message,subtitle,lists,icons,last}) => {
  return (
    <div className="bg-yellow-900 pt-10">
    <div className="flex flex-wrap px-25 text-yellow-50 justify-between">
        <div className="w-40 pb-10">
            <h1 className="font-bold text-2xl ">{logo}</h1>
            <h3 className="font-medium text-xl  py-4">{message}</h3>
            <p className="w-full">{subtitle}</p>
            <form action="" className="flex items-center py-2">
                <input type="search" placeholder="Enter your email" name="send"
                className=" focus:outline-hidden border-y-2 border-s-2 border-yellow-50 text-sm w-45 h-10 ps-4 "/>
                <label htmlFor="submit" className=" border-y-2 border-e-2 focus:outline-hidden border-yellow-50 text-xl h-10 flex items-center justify-center pe-1 ">{<AiOutlineSend />}</label>
                <input type="submit" id="send" className="hidden"/>
            </form>
        </div>
        {
            lists?.map((list,index)=>{
                return(
                    <div key={index} className="w-40  pb-10">
                        <h3 className="font-medium text-xl  pb-4">{list.text}</h3>
                        <ul>
                            {list.items.map((item,index)=>{
                                return <li className="pb-3.5"key={index}>{item}</li>
                            })}
                        </ul>
                    </div>
                )
            })
        }
        <div className="w-40 pb-10">
          <h3 className="font-medium text-xl  pb-4">Download App</h3>  
          <p className="text-[12px] mb-1.5">Save $3 with App New User Only</p>
          <div className="flex h-21">
            <img src="/images/Qr.jpg" className="w-20 border-2 border-yellow-50" />
            <div className="w-[50%] ">
                <img src="/images/googleplay.jpeg" className="h-9 m-1 border-2 border-yellow-50 rounded-xl" />
                <img src="/images/appstore.jpeg" className="h-9 w-full mx-1 border-2 border-yellow-50 rounded-xl" />
            </div>
          </div>
          <ul className="flex w-full justify-between mt-3">
            {
                icons?.map((icon,index)=>{
                    return <li className="font-medium text-2xl" key={index}>{icon}</li>
                })
            }
          </ul>
        </div>
      </div>
      <hr className=" font-thin text-yellow-50" />
      <div className="flex justify-center items-center p-3 font-thin text-[16px] text-yellow-50">
        <p className="p-1 font-thin"><FaRegCopyright /></p>
        <p>{last}</p>
      </div>
    </div>
  )
}

export default Footer
