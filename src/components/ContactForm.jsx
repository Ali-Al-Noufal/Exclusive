

const ContactForm = ({icon,title,description,phone,emails,inputs,textarea,submit}) => {
  return (
    <div className="w-[90vw] h-[140vh] md:h-[70vh] mx-[5vw] flex flex-wrap justify-between my-30">
      <div className="w-full md:w-[30%] h-[50%] md:h-full shadow-lg p-10 mb-5 md:mb-0 ">
        <div className="flex flex-col justify-between h-[35%]">
            <div className="flex items-center ">
                <p className="w-10 h-10 border rounded-[50%] text-yellow-50 bg-yellow-900
                flex justify-center items-center text-xl mx-2">{icon[0]}</p>
                <p className="font-medium text-xl">{title[0]}</p>
            </div>
            <p className="font-normal text-[15px]">{description[0]}</p>
            <p className="font-normal text-[15px]">Phone: {phone}</p>
        </div>
        <hr className="my-5" />
        <div className="flex flex-col justify-between h-[60%] pb-5">
            <div className="flex items-center ">
                <p className="w-10 h-10 border rounded-[50%] text-yellow-50 bg-yellow-900
                flex justify-center items-center text-xl mx-2">{icon[1]}</p>
                <p className="font-medium text-xl">{title[1]}</p>
            </div>
            <p className="font-normal text-[15px]">{description[1]}</p>
            {emails?.map((email,index)=>{
                return(<p className="font-normal text-[15px]" key={index}>email: {email}</p>
                )
            })}
        </div>
      </div>
      <form className="w-full md:w-[65%] h-[50%] md:h-full  shadow-lg p-5 relative">
      <div className="w-full flex justify-between my-5">
      {inputs?.map((input,index)=>{
        return(<input key={index} type={input.type} placeholder={input.placeholder}
            className="w-[30%] bg-[#F5F5F5] p-2 border border-[#F5F5F5] rounded-md" />)
      })}
      </div>
      <textarea className="w-full bg-[#F5F5F5] p-2 h-[50%] border border-[#F5F5F5] rounded-md"  placeholder={textarea}></textarea>
      <input type="submit" value={submit} className="w-50 h-14 bg-yellow-900 text-yellow-50 my-8 border border-yellow-900 rounded-md
      absolute right-5 bottom-5 " />
      </form>
    </div>
  )
}

export default ContactForm
