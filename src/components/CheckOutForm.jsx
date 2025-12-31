

const CheckOutForm = ({inputs,title}) => {
  return (
    <form className="w-full md:w-[50%] h-full mb-10">
        <h1 className="text-4xl font-medium my-10">{title}</h1>
        {inputs?.map((input,index)=>{
            return(
                <div key={index} className="mb-10">
                    <label htmlFor={input.name} className="font-normal text-[16px] text-[#000000] text-start">{input.name}</label>
                    <input type={input.type} id={input.name} className="bg-[#F5F5F5] h-12.5 w-full border border-[#F5F5F5] rounded-sm" />
                </div>
            )
        })}
        <div className="flex justify-start items-center w-full">
        <input type="checkbox" id="save" className="me-5 w-5 h-5" />
         <label htmlFor="save" className="text-[16px]">Save this information for faster check-out next time</label>           
        </div>
    </form>
  )
}

export default CheckOutForm
