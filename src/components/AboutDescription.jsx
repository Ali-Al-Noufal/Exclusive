

const AboutDescription = ({title,Firsttext,Sectext,img}) => {
  return (
    <div className="w-[80vw] h-[140vh] md:h-[70vh] mx-[10vw] mt-25 flex flex-wrap justify-between ">
      <img src={img} className="w-full md:w-[50%] h-[50%] md:h-full border" />
      <div className="w-full md:w-[40%] h-[50%] md:h-full flex flex-col justify-center items-start mb-5 ">
        <p className="font-bold text-[54px] my-5">{title}</p>
        <p className="text-[18px] font-normal mb-3">{Firsttext}</p>
        <p className="text-[18px] font-normal ">{Sectext}</p>
      </div>
    </div>
  )
}

export default AboutDescription
