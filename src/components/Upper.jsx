import Countdown from "react-countdown";

import Button from "./Button";


const Upper = ({title,text,date,btnText}) => {
   const targetDate = new Date(`${date}`).getTime()
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return "Time is out";
    } else {
      return (
        <>
        <div className="flex items-end gap-2.5">
          <div>
            <p className="text-[12px]">Days</p>
            <p className="text-3xl text-yellow-900">{days}</p>
          </div>
          <p className="text-3xl text-yellow-900">:</p>
          <div>
            <p className="text-[12px]">Hours</p>
            <p className="text-3xl text-yellow-900">{hours}</p>
          </div>
          <p className="text-3xl text-yellow-900">:</p>
            <div>
            <p className="text-[12px]">Minutes</p>
            <p className="text-3xl text-yellow-900">{minutes}</p>
          </div>
          <p className="text-3xl text-yellow-900">:</p>
            <div>
            <p className="text-[12px]">Seconds</p>
            <p className="text-3xl text-yellow-900">{seconds}</p>
          </div>
        </div>
        </>

      )
    }
  }
  return (
    <div className="w-[80vw] mx-[9vw] my-10">
        <div className="flex items-center">
            <div className="h-8 w-3 bg-yellow-900"></div>
            <p className="text-yellow-900 p-2">{title}</p>
            
        </div>
        <div className=" flex flex-wrap justify-between w-full my-3 relative">
          <div className="flex flex-wrap items-start w-full md:w-fit">
            <p className="font-bold text-xl mb-5 md:mb-0  md:text-4xl">{text}</p>
            {date?<p className=" my-5 md:my-0 md:px-10 md:absolute md:bottom-2 md:left-50"><Countdown date={targetDate} renderer={renderer} /></p>
            :""}
          </div>
          
            {btnText?<Button text={btnText} />:""}
    
        </div>
    </div>
  )
}

export default Upper
