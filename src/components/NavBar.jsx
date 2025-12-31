import { useState } from "react"
import { CiSearch } from "react-icons/ci"
import { Link, NavLink } from "react-router-dom"


const NavBar = ({logo,elements,NavIcons,AccountItems}) => {
  const [show,setShow]=useState(false)
const showSitting=()=>{
setShow(prev=>!prev)
}
  return (
    <div className=" fixed z-50 top-0 w-full">
    <nav className="  flex justify-between px-5 md:px-10 lg:px-20 py-5 items-center bg-yellow-900">
      <h1 className="font-bold text-2xl text-yellow-50">{logo}</h1>
      <ul className="flex  md:flex gap-5 mx-5 lg:gap-20 text-yellow-50">
        {elements?.map((element,index)=>{
            return(
                <li key={index}><NavLink className={({isActive})=>isActive?"underline":""} to={element.link}>{element.text}</NavLink></li>
            )
        })}
      </ul>
      <form action="" className="hidden md:flex md:items-center">
        <input type="search" placeholder="what are you looking for?" name="search"
        className="bg-yellow-50 text-sm w-50 h-8 ps-4 rounded-s-2xl"/>
        <label htmlFor="submit" className="bg-yellow-50 text-xl h-8 flex items-center justify-center pe-1 rounded-e-2xl">{<CiSearch />}</label>
        <input type="submit" id="submit" className="hidden"/>
        <ul className="hidden md:flex gap-5 px-5 text-yellow-50 ">
        {
          NavIcons?.map((item,index)=>{
            return item.link=="setting"?<li key={index} onClick={showSitting} className={show?"text-2xl text-yellow-300":"text-2xl"}>{item.icon}</li>:<Link key={index} to={item.link}><li className="text-2xl">{item.icon}</li></Link>
          })
        }
      </ul>
      </form>
      
    </nav>

    <hr className=" font-thin text-yellow-50" />
    <div className={show?"absolute top-12 right-4 md:right-25  w-50 z-9999":"hidden"}>
          <ul className=" backdrop-blur-[15px] bg-[rgba(0,0,0,0.3)]">
          {AccountItems?.map((item,index)=>{
            return (<li className="text-yellow-50 p-3 gap-3 flex items-center">
              {item.link?<Link  to={item.link} className="flex items-center gap-3"><p className="font-bold">{item.icon}</p><p>{item.text}</p></Link>:<><p className="font-bold">{item.icon}</p><p>{item.text}</p></>}
            </li>)
          })}
        </ul>
  </div>
  </div>
  
  )
}

export default NavBar
