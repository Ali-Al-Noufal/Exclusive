import { useState } from "react"
import { CiStar } from "react-icons/ci"
import { FaStar } from "react-icons/fa"
import { IoTrashOutline } from "react-icons/io5"
import { LuHeart } from "react-icons/lu"
import { MdOutlineRemoveRedEye } from "react-icons/md"
import { Link } from "react-router-dom"


const Card = ({cards,whishlist}) => {
    
    const [show,setShow]=useState(-1)
    const handle=(i)=>{
       if(show==i){
        setShow(-1)
       }else{
         setShow(i)
       }
    }
    const stars=(number)=>{
        const ItemStar=[]
        if(number<5){
            for (let i = 0; i < number; i++) {
                 ItemStar[i] = <p className="text-yellow-300"><FaStar /></p>
            }
                        for (let i = number; i < 5; i++) {
                 ItemStar[i] = <p ><CiStar /></p>
            }
        }else{
            for (let i = 0; i < number; i++) {
                 ItemStar[i] = <p className="text-yellow-300"><FaStar /></p>
            }
        }
        return ItemStar
    }


  return (
    <>
    <div className="w-[80vw] mx-[9vw] my-10 flex justify-center  flex-wrap">
      {
        cards?.map((card,index)=>{
            return(
                <div key={index} className="w-70 md:w-62 h-85 mx-3">
                    <div className="w-full h-[60%] bg-[#F5F5F5] relative" >
                        <img src={card.img} className="absolute top-[20%] left-[20%] w-[60%] h-[60%] " onMouseUpCapture={()=>handle(card.id)} />
                        {card.discount?                        <div className="m-3 p-1 absolute top-0 left-0 bg-yellow-900 border w-fit h-fit border-yellow-50 rounded-xl">
                            <p className="text-yellow-50 text-[10px] ">-{card.discount}%</p>
                        </div>:""}
                        <div className="p-2 absolute top-0 right-0">
                            {whishlist?<div className="bg-white border w-6 flex justify-center items-center h-6 my-1 rounded-[50%]"><p><IoTrashOutline /></p></div>:
                            <div className="bg-white border w-6 flex justify-center items-center h-6 my-1 rounded-[50%]"><p><LuHeart /></p></div>}
                            <div className="bg-white border w-6 h-6 flex justify-center items-center my-1 rounded-[50%]"><Link to={`/store/show/${card.id}`}><MdOutlineRemoveRedEye /></Link></div>
                        </div>
                        <button className={show==card.id?"block w-full h-10 text-white bg-black text-center absolute bottom-0":"hidden"}>Add To Cart</button>
                    </div>
                    <p className="px-2 text-[18px] font-bold">{card.name}</p>
                    <div className="flex gap-3 p-3">
                        {card.discount?<p>${card.oldPrice-(card.oldPrice*card.discount/100)}</p>:<p>${card.oldPrice}</p>}
                        {card.discount?<del className="text-yellow-900">${card.oldPrice}</del>:""}
                    </div>
                    {card.stars?                    <div className="flex items-center">
                        <p className="flex">{stars(card.stars)}</p>
                        <p className="text-[12px]">({card.reviews})</p>
                    </div>:""}
                </div>
            )
        })
      }
      
    </div>

    </>
  )
}

export default Card
