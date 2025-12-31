import { IoPhonePortraitOutline } from "react-icons/io5"
import Card from "../components/Card"
import Upper from "../components/Upper"
import { RiComputerLine } from "react-icons/ri"
import { CgAppleWatch } from "react-icons/cg"
import { CiCamera } from "react-icons/ci"
import {  MdHeadsetMic, MdOutlineHeadset } from "react-icons/md"
import {  PiGameControllerDuotone } from "react-icons/pi"
import { TbShirt } from "react-icons/tb"
import { GiGymBag } from "react-icons/gi"
import Category from "../components/Category"
import Ade from "../components/Ade"
import Ads from "../components/Ads"
import IconService from "../components/IconService"
import { FaTruckFast } from "react-icons/fa6"
import { BsShieldCheck } from "react-icons/bs"
import AboutDescription from "../components/AboutDescription"



const Home = () => {
  const flashSales=[
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
    },    {
      id:4,
      img:"/images/p4.png",
      name:"S-Series Comfort Chair",
      discount:25,
      oldPrice:400,
      stars:3,
      reviews:60
    }
  ]
  const bestSelling=[
    {
      id:5,
      img:"/images/p5.png",
      name:"The north coat",
      discount:35,
      oldPrice:360,
      stars:5,
      reviews:101
    },    {
      id:6,
      img:"/images/p6.png",
      name:"Gucci duffle bag",
      discount:30,
      oldPrice:1160,
      stars:4,
      reviews:75
    },    {
      id:7,
      img:"/images/p7.png",
      name:"RGB liquid CPU Cooler",
      discount:20,
      oldPrice:430,
      stars:5,
      reviews:90
    },    {
      id:8,
      img:"/images/p8.png",
      name:"Small BookSelf",
      discount:28,
      oldPrice:590,
      stars:4,
      reviews:60
    }
  ]
  const products=[
    {
      id:9,
      img:"/images/p9.jpg",
      name:"Breed Dry Dog Food",
      oldPrice:100,
      stars:3,
      reviews:57
    },    {
      id:10,
      img:"/images/p10.png",
      name:"CANON EOS DSLR Camera",
      oldPrice:360,
      stars:4,
      reviews:75
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
    },    {
      id:13,
      img:"/images/p13.png",
      name:"Kids Electric Car",
      oldPrice:50,
      stars:4,
      reviews:60
    },    {
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
      id:16,
      img:"/images/p16.png",
      name:"Quilted Satin Jacket",
      oldPrice:76,
      stars:5,
      reviews:70
    }
  ]
    const btn={
        link:"",
        text:"Shop Now ->"
    }
    const categories=[{icon:<IoPhonePortraitOutline />,text:"phones"},{icon:<RiComputerLine />,text:"Computers"}
      ,{icon:<CgAppleWatch />,text:"smartWatch"},{icon:<CiCamera />,text:"cameras"},{icon:<MdOutlineHeadset />,text:"headphones"},
      {icon:<PiGameControllerDuotone />,text:"Gameing"},{icon:<TbShirt />,text:"clothes"},{icon:<GiGymBag />,text:"bags"}
    ]
    const firstAde={img:"/images/p17.png",
      title:"PlayStation 5",
      description:"Black and White version of the PS5 coming out on sale.",
      btn:"Shop Now"
    }
        const secAde={img:"/images/p18.jpg",
      title:"Women's Collections",
      description:"Featured woman collections that give you another vibe.",
      btn:"Shop Now"
    }
        const thirdAde={img:"/images/p19.png",
      title:"Speakers",
      description:"Amazon wireless speakers",
      btn:"Shop Now"
    }
        const forthAde={img:"/images/p20.png",
      title:"Perfume",
      description:"GUCCI INTENSE OUD EDP",
      btn:"Shop Now"
    }
   const services=[
    {
      icon:<FaTruckFast />,
      title:"FREE AND FAST DELIVERY",
      description:"Free delivery for all orders over $140"
    },
    {
      icon:<MdHeadsetMic />,
      title:"24/7 CUSTOMER SERVICE",
      description:"Friendly 24/7 customer support"
    },
    {
      icon:<BsShieldCheck />,
      title:"MONEY BACK GUARANTEE",
      description:"We reurn money within 30 days"
    },
   ] 
  return (
    <div>
        <AboutDescription img="/images/store.jpg" title="Exclusive"
        Firsttext="Welcome to Exclusive, your go-to destination for high-quality products at great prices?"
        Sectext="We bring you a seamless, secure, and enjoyable online shopping experience with carefully selected items to match your lifestyle and needs." />
      <Upper title="Categories" text="Browse By Category" btnLink="/home" btnText="View All"  />
      <Category items={categories}/>
      <Upper title="today's" text="Flash Sales" btnLink="/home" btnText="View All Products" date="2026-12-29T10:00:00" />
      <Card cards={flashSales} />
      <Upper title="This Month" text="Best Selling Products" btnLink="/home" btnText="View All"  />
      <Card cards={bestSelling} />
      <Ade title="Categories" text="Enhance Your Music Experience" btn="Buy now!" date="2026-12-29T10:00:00" img="/images/p21.png" />
      <Upper title="Our Products" text="Explore Our Products" btnLink="/home" btnText="View All"  />
      <Card cards={products} />
      <Upper title="Featured" text="New Arrival"  />
      <Ads firstAde={firstAde} secAde={secAde} thirdAde={thirdAde} forthAde={forthAde} />
      <IconService services={services} />
    </div>
  )
}

export default Home
