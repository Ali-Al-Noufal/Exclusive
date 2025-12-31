import { Link } from "react-router-dom"


const CheckOutCart = ({products,shipping}) => {
        let subtotal=0
    const setSubtotal=(value)=>{
        subtotal=subtotal+value
        return subtotal
    }
  return (
    <div className="w-full md:w-[40%] mb-5 mt-[12%] flex flex-col justify-start items-start">
        {products?.map((product,index)=>{
            setSubtotal(product.price*product.quantity)
            return(<div key={index} className="flex justify-between items-center w-full h-18">
                <div className="flex justify-start items-center w-[80%]"><img src={product.img} className="w-[20%] " /><p className="w-[60%]">{product.name}</p></div>
                <p>{product.price*product.quantity}</p>
            </div>)
            
        })}
        <div className="w-full  rounded-sm  flex flex-col justify-evenly ">
                <div className="w-full flex justify-between my-5">
                    <p className="font-normal">SubTotal</p>
                    <p>{setSubtotal(0)}</p>
                </div>
                <hr />
                <div className="w-full flex justify-between my-5">
                    <p className="font-normal">Shipping</p>
                    <p>{shipping==0?"free":shipping}</p>
                </div>
                <hr />
                <div className="w-full flex justify-between my-5">
                    <p className="font-normal">Total</p>
                    <p>{setSubtotal(0)+shipping}</p>
                </div>

            <form className="w-full flex flex-col justify-between ">
                <div className="w-full h-13 flex justify-between items-center">
                <div>
                    <input type="radio"  id="banks" name="pay" className="me-3" />
                    <label htmlFor="banks">Banks</label>
                </div>
                <label htmlFor="banks" className="flex items-center">
                    <img src="/images/wallet.png" className="w-14 h-13" />
                    <img src="/images/mastercard.png" className="w-11 h-8" />
                    <img src="/images/visa.png" className="w-10 h-7" />
                    <img src="/images/wallet2.png" className="w-13 h-13" />
                </label>
                </div>
                <div>
                <input type="radio"  id="cash" name="pay" className="me-3" />
                <label htmlFor="cash">Cash on delivery</label>
                </div>
                <div className="h-13 w-full my-5 flex justify-between items-center">
                    <input type="number" placeholder="Coupon Code" 
                className="h-full w-[65%] border border-[#00000080] rounded-sm px-5"/>
                <input type="submit" value="Apply Coupon"
                className="h-full w-[30%]  border border-yellow-900 bg-yellow-900 text-yellow-50 rounded-sm" />
                </div>
            </form>
                <button className="h-13 w-[30%]  border border-yellow-900 bg-yellow-900 text-yellow-50 rounded-sm"><Link to="/store/checkout">Place Order</Link></button>
            </div>

    </div>
  )
}

export default CheckOutCart
