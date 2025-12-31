import Card from "../components/Card"
import ShowItem from "../components/ShowItem"
import Upper from "../components/Upper"

const Show = () => {
    const product={
        img:"/images/show1.png",
        name:"Havic HV G-92 Gamepad",
        stars:4,
        reviews:150,
        price:192.00,
        description:"PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
        colors:["bg-red-300","bg-blue-500"],
        sizes:["xs","s","m","l","xl"]
    }
    const images=["/images/show2.png","/images/show3.png","/images/show4.png","/images/show5.png"]
    const products=[
          {
      id:1,
      img:"/images/p1.png",
      name:"HAVIT HV-G92 Gamepad",
      discount:40,
      oldPrice:160,
      stars:4,
      reviews:88
    },    {
      id:2,
      img:"/images/p2.png",
      name:"Cart With Flat Discount ",
      discount:35,
      oldPrice:1160,
      stars:4,
      reviews:75
    },    {
      id:3,
      img:"/images/p3.png",
      name:"IPS LCD Gaming Monitor",
      discount:30,
      oldPrice:400,
      stars:5,
      reviews:99
    },     {
      id:7,
      img:"/images/p7.png",
      name:"RGB liquid CPU Cooler",
      discount:20,
      oldPrice:430,
      stars:5,
      reviews:90
    }
    ]
  return (
    <div >
      <ShowItem product={product} sideImg={images}/>
      <Upper title="Related Items"/>
      <Card cards={products} />
    </div>
  )
}

export default Show
