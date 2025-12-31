import { Link, useNavigate } from "react-router-dom"


const AuthForm = ({inputs,submit,title,subtitle,link,text}) => {
  const navigate=useNavigate()
  const handleSubmit=(event)=>{
    event.preventDefault()
    navigate("/home")
  }
  return (
    <div className="h-screen w-full flex ">
      <div className="bg-[#CBE4E8] h-full text-center w-[60%] flex items-end">
        <img src="/images/auth.jpg" className=" w-fit"/>
      </div>
      <form className="flex flex-wrap justify-center h-full w-[40%] py-20 px-30" onSubmit={(event)=>handleSubmit(event)}>
        <h1 className="w-full font-semibold text-3xl">{title}</h1>
        <p className="w-full  ">{subtitle}</p>
        {
          inputs?.map((input,index)=>{
            return <input className="w-full border-b-yellow-900 border-b-2 focus:border-b-2  focus:outline-hidden my-1" key={index} placeholder={input.placeholder} type={input.type}/>
          })
        }
        <input type="submit" className="w-full text-center bg-yellow-900 text-yellow-50 my-5" value={submit}/>
        <p className="w-full text-center">{text}<Link className="underline" to={link?.direction}>{link?.text}</Link></p>
      </form>
    </div>
  )
}

export default AuthForm
