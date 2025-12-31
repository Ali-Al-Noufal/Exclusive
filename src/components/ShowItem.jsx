import { useState } from "react"
import { CiStar } from "react-icons/ci"
import { FaStar } from "react-icons/fa"
import { FaTruckFast } from "react-icons/fa6"
import { LuHeart } from "react-icons/lu"


const ShowItem = ({product,sideImg}) => {
    const [choose,setChoose]=useState(-1)
    const [count,setCount]=useState(1)
    const [itemSize,setItemSize]=useState(-1)
    const select=(i)=>{
        if(choose==i){
        setChoose(-1)
       }else{
         setChoose(i)
       }
    }
    const chooseSize=(i)=>{
        if(itemSize==i){
        setItemSize(-1)
       }else{
        setItemSize(i)
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
    <div className="mt-25 w-[80vw] mx-[10vw] h-150 flex justify-between">
        <div className="w-[55%] h-full flex justify-between">
            <div className="w-[30%] flex flex-col justify-between items-center">
                {sideImg?.map((img,index)=>{
                    return(
                        <div className="flex justify-center items-center w-full h-30 bg-[#F5F5F5]">
                            <img src={img} key={index} className="w-full h-[90%] " />
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-center items-center w-[65%] h-full bg-[#F5F5F5]">
            <img src={product.img} className="w-full h-[60%] " />
            </div>
        </div>
        <div className="w-[35%] flex flex-col justify-between">
            <h1 className="w-full text-3xl font-semibold ">{product.name}</h1>
            <div className="flex items-center w-full">
                        <p className="flex">{stars(product.stars)}</p>
                        <p className="text-[12px]">({product.reviews} Reviews)</p>
            </div>
            <p className="text-2xl font-normal">${product.price}</p>
            <p>{product.description}</p>
            <hr />
            <div className="flex h-10 items-center">
                <p className="text-[24px] h-full ">Colors:</p>
                {product.colors?.map((color,index)=>{
                    return(
                <div key={index} className="h-full ms-3 flex items-center">
                <label htmlFor={color} className={choose==index?`w-6 h-6 border-4  ${color} rounded-[50%]`:`w-5 h-5 border  ${color} rounded-[50%]`} onClick={()=>select(index)}></label>
                <input type="radio" id={color} className="hidden" />
                </div>
                    )
                })}
            </div>
            <div className="flex h-10 items-center">
                <p className="text-[24px] h-full ">Size:</p>
                {product.sizes?.map((size,index)=>{
                    return(
                <div key={index} className="h-full ms-5 flex items-center">
                <label htmlFor={size} className={itemSize==index?"w-8 h-8 border border-black bg-yellow-900 text-yellow-50 flex justify-center items-center text-[14px] rounded-sm":"w-8 h-8 border flex justify-center items-center text-[14px] rounded-sm"} onClick={()=>chooseSize(index)}>{size}</label>
                <input type="checkbox" id={size} className="hidden" />
                </div>
                    )
                })}
            </div>
            <div className="w-full h-11 flex justify-between ">
                <div className="w-[40%] h-full flex items-center border rounded-md">
                    <button onClick={count>=2?()=>setCount(count-1):""} className="w-[20%] h-full flex items-end justify-center border-e text-5xl">-</button>
                    <p className="w-[60%] h-full flex items-center justify-center text-2xl">{count}</p>
                    <button onClick={()=>setCount(count+1)} className="w-[20%] h-full flex items-end justify-center border-s text-5xl bg-yellow-900 text-yellow-50">+</button>
                </div>
                <button className="w-[40%] h-full flex items-center justify-center border rounded-md bg-yellow-900 text-yellow-50">Buy Now</button>
                <button className="w-[10%] h-full flex items-center justify-center border rounded-md text-3xl"><LuHeart /></button>
            </div>
            <div className="h-55 w-full border flex flex-col justify-between">
                <div className="w-full h-[45%] flex justify-between items-center">
                    <p className="text-5xl w-[20%] flex items-center justify-center"><FaTruckFast /></p>
                    <div className="flex flex-col justify-between items-start w-[80%]">
                        <p className="font-medium text-[18px]">Free Delivery</p>
                        <p>Enter your postal code for Delivery Availability</p>
                    </div>
                </div>
                <hr />
                <div className="w-full h-[45%] flex justify-start items-center">
                    <p className="text-5xl w-[20%] flex items-center justify-center"><FaTruckFast /></p>
                    <div className="flex flex-col justify-between items-start  w-[80%]">
                        <p className="font-medium text-[18px]">Return Delivery</p>
                        <p>Free 30 Days Delivery Returns. Details</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowItem
