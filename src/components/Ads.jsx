

const Ads = ({firstAde,secAde,forthAde,thirdAde}) => {
  return (
    <div className="w-[90vw] h-[80vh]  my-20 mx-[5vw] flex justify-evenly">
        <div className="w-[40%] h-full border-2 bg-[#000000] relative">
            <img src={firstAde.img} className="w-full h-full"/>
            <div className="absolute bottom-0 left-[5%]  w-[50%] h-[30%] mb-[5%] flex flex-col justify-evenly">
                <p className="text-white text-2xl">{firstAde.title}</p>
                <p className="text-white text-[14px]">{firstAde.description}</p>
                <p className=" text-xl underline px-2 text-white">{firstAde.btn}</p>
            </div>
        </div>
        <div className="w-[50%] h-full flex flex-col justify-between">
            <div className="w-full h-[48%] border-2 bg-[#000000]  relative">
            <img src={secAde.img} className="w-full h-full" />
            <div className="absolute bottom-0 left-[5%] w-[50%] h-[50%] mb-[5%] flex flex-col justify-evenly">
                <p className="text-white text-2xl">{secAde.title}</p>
                <p className="text-white text-[14px]">{secAde.description}</p>
                <p className=" text-xl underline px-2 text-white">{secAde.btn}</p>
            </div>
            </div>
            <div className="w-full h-[48%] flex justify-between">

            <div className="w-[48%] h-full border-2 bg-[#000000] relative">
            <img src={thirdAde.img} className="w-full h-full"/>
            <div className="absolute bottom-0 left-[5%]  w-[50%] h-[50%] mb-[5%] flex flex-col justify-evenly">
                <p className="text-white text-2xl">{thirdAde.title}</p>
                <p className="text-white text-[14px]">{thirdAde.description}</p>
                <p className=" text-xl underline px-2 text-white">{thirdAde.btn}</p>
            </div>
            </div>
                        <div className="w-[48%] h-full border-2 bg-[#000000] relative">
            <img src={forthAde.img} className="w-full h-full"/>
            <div className="absolute bottom-0 left-[5%]  w-[50%] h-[50%] mb-[5%] flex flex-col justify-evenly">
                <p className="text-white text-2xl">{forthAde.title}</p>
                <p className="text-white text-[14px]">{forthAde.description}</p>
                <p className=" text-xl underline px-2 text-white">{forthAde.btn}</p>
            </div>
            </div>

            </div>

        </div>
      
    </div>
  )
}

export default Ads
