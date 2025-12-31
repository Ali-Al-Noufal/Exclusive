import CheckOutCart from "../components/CheckOutCart"
import CheckOutForm from "../components/CheckOutForm"



const CheckOut = () => {
    const inputs=[
        {
            type:"text",
            name:"First Name*"
        },
        {
            type:"text",
            name:"Company Name"
        },
        {
            type:"text",
            name:"Street Address*"
        },
        {
            type:"text",
            name:"Apartment, floor, etc. (optional)"
        },
        {
            type:"text",
            name:"Town/City*"
        },
        {
            type:"number",
            name:"Phone Number*"
        },
        {
            type:"email",
            name:"Email Address*"
        },
    ]
    const products=[
        {
            img:"/images/p8.png",
            name:'Small BookSelf',
            price:424.8,
            quantity:2
        },
        {
            img:"/images/p3.png",
            name:'IPS LCD Gaming Monitor',
            price:280,
            quantity:1
        },
    ]
  return (
    <div className="w-[80vw]  mx-[10vw]  mt-25 flex flex-wrap justify-between">
      <CheckOutForm inputs={inputs} title="Billing Details" />
      <CheckOutCart products={products} shipping={0} />
    </div>
  )
}

export default CheckOut
