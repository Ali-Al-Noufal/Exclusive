
import { Link } from "react-router-dom"


const Table = ({products,shipping}) => {
    let subtotal=0
    const setSubtotal=(value)=>{
        subtotal=subtotal+value
        return subtotal
    }
  return (
    <div className="w-[80vw]  mx-[10vw]">
        <div className="w-full h-18 shadow-md flex justify-between items-center mb-10 font-semibold text-[16px] md:text-xl">
            <p className="w-[25%] text-center">Product</p>
            <p className="w-[25%] text-center">Price</p>
            <p className="w-[25%] text-center">Quantity</p>
            <p className="w-[25%] text-center">Subtotal</p>
        </div>
        {products?.map((product,index)=>{
            setSubtotal(product.price*product.quantity)

            return(<div key={index} className="w-full h-18 shadow-md flex justify-between items-center mb-10">
                <div className="flex justify-center items-center w-[25%]"><img src={product.img} className="w-[30%] " /><p>{product.name}</p></div>
                <p className="w-[25%] text-center">{product.price}</p>
                <p className=" w-[25%] text-center">{product.quantity}</p>
                <p className=" w-[25%] text-center">{product.price*product.quantity}</p>
            </div>)
        })}
        <div className="w-full h-15 flex justify-between mb-10">
            <button className="h-full w-40 shadow-md border border-[#00000080] font-medium rounded-sm"><Link to="/store/home">Return To Shop</Link></button>
            <button className="h-full w-40 shadow-md border border-[#00000080] font-medium rounded-sm">Update Cart</button>
        </div>
        <div  className="w-full  flex flex-wrap justify-between mb-10">
            <form className="w-full mb-5 md:w-[45%] flex justify-between h-13">
                <input type="number" placeholder="Coupon Code" 
                className="h-full w-[65%] border border-[#00000080] rounded-sm px-5"/>
                <input type="submit" value="Apply Coupon"
                className="h-full w-[30%] text-[12px] lg:text-[18px] border border-yellow-900 bg-yellow-900 text-yellow-50 rounded-sm" />
            </form>
            <div className="w-full md:w-[40%]  h-90 border rounded-sm p-10 flex flex-col justify-evenly ">
                <h1 className="font-medium text-[20px]">Cart Total</h1>
                <div className="w-full flex justify-between">
                    <p className="font-normal">SubTotal</p>
                    <p>{setSubtotal(0)}</p>
                </div>
                <hr />
                <div className="w-full flex justify-between">
                    <p className="font-normal">Shipping</p>
                    <p>{shipping==0?"free":shipping}</p>
                </div>
                <hr />
                <div className="w-full flex justify-between">
                    <p className="font-normal">Total</p>
                    <p>{setSubtotal(0)+shipping}</p>
                </div>
                <button className="h-13 w-[60%] mx-[20%] border border-yellow-900 bg-yellow-900 text-yellow-50 rounded-sm"><Link to="/store/checkout">Procees to checkout</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Table
