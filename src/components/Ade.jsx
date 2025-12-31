import Countdown from "react-countdown";


const Ade = ({date,title,text,btn,img}) => {
       const targetDate = new Date(`${date}`).getTime()
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return "Time is out";
    } else {
      return (
        <>
        <div className="flex items-end gap-2.5">
          <div className="w-15 h-15 border rounded-[50%] bg-[#F5F5F5] flex flex-col items-center justify-center">
            <p className="text-[16px]">{days}</p>
            <p className="text-[12px]">Days</p>
          </div>
          <div className="w-15 h-15 border rounded-[50%] bg-[#F5F5F5] flex flex-col items-center justify-center">
            <p className="text-[16px]">{hours}</p>
            <p className="text-[12px]">Hours</p>
          </div>

            <div className="w-15 h-15 border rounded-[50%] bg-[#F5F5F5] flex flex-col items-center justify-center">
            <p className="text-[16px]">{minutes}</p>
            <p className="text-[12px]">Minutes</p>
          </div>

            <div className="w-15 h-15 border rounded-[50%] bg-[#F5F5F5] flex flex-col items-center justify-center">
            <p className="text-[16px]">{seconds}</p>
            <p className="text-[12px]">Seconds</p>
          </div>
        </div>
        </>

      )
    }
  }
  return (
    <div className="w-[80vw] h-[70vh] border-2  bg-[#000000] my-20 mx-[10vw] flex flex-wrap justify-evenly">
      <div className="w-full md:w-[50%] px-3 ms:px-0 h-[50%] md:h-[90%] mt-[2%] flex flex-col items-start justify-evenly md:ps-[5%]">
        <p className="text-[#00FF66] ">{title}</p>
        <p className="text-[#FAFAFA] font-semibold text-2xl md:text-6xl md:leading-15 ">{text}</p>
        <p className=""><Countdown date={targetDate} renderer={renderer} /></p>
        <button className="bg-[#00FF66] text-[#FAFAFA] w-42.75 h-14 font-medium">{btn}</button>
      </div>
      <img src={img} className="h-[50%] w-[80%] filter drop-shadow-[10px_10px_50px_rgba(0,0,0,0.5)] drop-shadow-white md:w-[40%] md:h-full"/>
    </div>
  )
}

export default Ade
