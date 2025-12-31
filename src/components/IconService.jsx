


const IconService = ({services}) => {
  return (
    <div className="flex justify-evenly items-center flex-wrap my-20 w-[90vw] mx-[5vw] ">
        {services.map((service,index)=>{
            return(<div key={index} className="w-63 h-35 mb-5 flex flex-col justify-between items-center ">
            <div className="w-20 h-20 border-8 rounded-[50%] border-stone-300 bg-[#000000] flex justify-center items-center">
                <p className=" text-white text-4xl">{service.icon}</p>
            </div>
            <div className="w-full text-center">
                <p className="font-semibold text-[20px]">{service.title}</p>
                <p className="font-light text-[14px]">{service.description}</p>
            </div>
        </div>)
        })}
    </div>
  )
}

export default IconService
