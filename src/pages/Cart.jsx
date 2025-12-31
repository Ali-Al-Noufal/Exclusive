import Table from "../components/Table"
import Upper from "../components/Upper"


const Cart = () => {
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
    <div className="mt-25">
      <Upper title="My Cart"/>
      <Table products={products} shipping={0} />
    </div>
  )
}

export default Cart
