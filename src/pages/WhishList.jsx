import Card from "../components/Card"
import Upper from "../components/Upper"


const WhishList = () => {
    const whishlistItems=[    {
      id:5,
      img:"/images/p5.png",
      name:"The north coat",
      discount:35,
      oldPrice:360,
      stars:5,
      reviews:101
    },    {
      id:1,
      img:"/images/p1.png",
      name:"HAVIT HV-G92 Gamepad",
      discount:40,
      oldPrice:160,
      stars:4,
      reviews:88
    },    {
      id:11,
      img:"/images/p11.png",
      name:"ASUS FHD Gaming Laptop",
      oldPrice:700,
      stars:5,
      reviews:90
    },    {
      id:12,
      img:"/images/p12.png",
      name:"Curology Product Set",
      oldPrice:500,
      stars:4,
      reviews:60
    }]
    const offers=[
            {
      id:14,
      img:"/images/p14.png",
      name:"Jr. Zoom Soccer Cleats",
      oldPrice:290,
      stars:5,
      reviews:150
    },    {
      id:15,
      img:"/images/p15.png",
      name:"GP11 Shooter Gamepad",
      oldPrice:50,
      stars:4,
      reviews:76
    },    {
      id:8,
      img:"/images/p8.png",
      name:"Small BookSelf",
      discount:28,
      oldPrice:590,
      stars:4,
      reviews:60
    },    {
      id:3,
      img:"/images/p3.png",
      name:"IPS LCD Gaming Monitor",
      discount:30,
      oldPrice:400,
      stars:5,
      reviews:99
    }
    ]
  return (
    <div className="mt-20">
      <Upper title="WhishList" text="Don't Miss Those"  btnText="Move All To My Cart"  />
      <Card cards={whishlistItems} whishlist={true} />
      <Upper title="Just For You" />
      <Card cards={offers}  />
    </div>
  )
}

export default WhishList
