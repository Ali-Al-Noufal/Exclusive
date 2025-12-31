

const Employees = ({employees,icons}) => {
  return (
    <div className="w-[80vw] mx-[10vw] my-20 flex flex-wrap justify-center md:justify-between ">
      {
        employees?.map((employe,index)=>{
          return(<div key={index} className="w-60 h-100">
            <img src={employe.img} className="w-full px-[10%] pt-[10%] h-[70%] bg-[#F5F5F5]"/>
            <div>
              <p>{employe.name}</p>
              <p>{employe.jop}</p>
            <ul className="flex w-[30%] justify-between mt-3">
            {
                icons?.map((icon,index)=>{
                    return <li className="font-medium text-xl" key={index}>{icon}</li>
                })
            }
          </ul>
            </div>
          </div>)
        })
      }
    </div>
  )
}

export default Employees
