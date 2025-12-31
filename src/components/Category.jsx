

const Category = ({items}) => {
  return (
    <>
    <div className=" w-[80vw] mx-[10vw] flex flex-wrap justify-evenly items-center">
      {items?.map((item,index)=>{
        return(

            <div key={index} className="w-30 h-30 my-5 border flex flex-col items-center justify-between bg-[#F5F5F5] relative">
                <p className="text-5xl p-3">{item.icon}</p>
                <p className="text-10 mb-3">{item.text}</p>
            </div>
        )
      })}
    </div>
    <hr className="w-[80vw] mx-[10vw] my-20"/>
    </>
  )
}

export default Category
