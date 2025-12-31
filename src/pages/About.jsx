import { BsShieldCheck } from "react-icons/bs"
import { CiDollar } from "react-icons/ci"
import { FaSackDollar, FaTruckFast } from "react-icons/fa6"
import { LiaShoppingBagSolid, LiaStoreAltSolid } from "react-icons/lia"
import { MdHeadsetMic } from "react-icons/md"
import IconService from "../components/IconService"
import AboutDescription from "../components/AboutDescription"
import Employees from "../components/Employees"
import { TiSocialFacebook } from "react-icons/ti"
import { IoLogoInstagram } from "react-icons/io"
import { FaLinkedinIn } from "react-icons/fa"


const About = () => {
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
    const postiveService=[
           {
             icon:<LiaStoreAltSolid />,
             title:"10.5k ",
             description:"Sallers active our site"
           },
           {
             icon:<CiDollar />,
             title:"33k",
             description:"Mopnthly Produduct Sale"
           },
           {
             icon:<LiaShoppingBagSolid />,
             title:"45.5k",
             description:"Customer active in our site"
           },
           {
             icon:<FaSackDollar />,
             title:"25k",
             description:"Anual gross sale in our site"
           },
          ] 
    const icons=[<TiSocialFacebook />,<IoLogoInstagram />,<FaLinkedinIn />]
    const employees=[
        {
            img:"/images/employ1.png",
            name:"Tom Cruise",
            jop:"Founder & Chairman"
        },
        {
            img:"/images/employ2.png",
            name:"Emma Watson",
            jop:"Managing Director"
        },
        {
            img:"/images/employ3.png",
            name:"Will Smith",
            jop:"Product Designer"
        },
    ]
  return (
    <div>
        <AboutDescription img="/images/about.jpg" title="Our Story"
        Firsttext="Launced in 2015, Exclusive is South Asia's premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region."
        Sectext="Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer." />
        <IconService services={postiveService} />
        <Employees employees={employees} icons={icons}/>
        <IconService services={services} />
      
    </div>
  )
}

export default About
