import { Outlet } from "react-router-dom"

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { TiSocialFacebook } from "react-icons/ti"
import { LuHeart, LuTwitter } from "react-icons/lu"
import { IoLogoInstagram } from "react-icons/io"
import { FaLinkedinIn } from "react-icons/fa"
import { GiShoppingCart } from "react-icons/gi"
import { MdAccountCircle, MdOutlinePersonOutline, MdOutlineStarRate } from "react-icons/md"
import { FaBoxArchive } from "react-icons/fa6"
import { ImCancelCircle } from "react-icons/im"
import { CiLogout } from "react-icons/ci"


const Root = () => {
    const elements=[
        {
            text:"Home",
            link:"/store/home"
        },{
            text:"Contact",
            link:"/store/contact"
        },{
            text:"About",
            link:"/store/about"
        }
    ]
    const lists=[
      {
        text:"Support",
        items:["111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.","exclusive@gmail.com","+88015-88888-9999"]
      },
      {
        text:"Account",
        items:["My Account","Login/Register","Cart","Wishlist","Shop"]
      },
      {
        text:"Quick links",
        items:["Privacy Policy","Terms Of Use","FAQ","Contact"]
      }
    ]
    const icons=[<TiSocialFacebook />,<LuTwitter />,<IoLogoInstagram />,<FaLinkedinIn />]
      const NavIcons=[{icon:<LuHeart />,link:"/store/whishlist"},
  {icon:<GiShoppingCart />,link:"/store/Cart"},
  {icon:<MdAccountCircle />,link:"setting"}
  ]
  const AccountItems=[
    {
        icon:<MdOutlinePersonOutline />,
        text:"Manage My Account"
    },
        {
        icon:<FaBoxArchive />,
        text:"My Orders"
    },    {
        icon:<ImCancelCircle />,
        text:"My Cancellations"
    },    {
        icon:<MdOutlineStarRate />,
        text:"My Reviews"
    },    {
        icon:<CiLogout />,
        text:"Logout",
        link:"/"
    }
  ]
  return (
    <div>
      <NavBar logo="Exclusive" elements={elements} NavIcons={NavIcons} AccountItems={AccountItems}/>
      <Outlet />
      <Footer logo="Exclusive" message="Subscribe" subtitle="Get 10% off your first order" lists={lists}
      icons={icons} last="Copyright Rimel 2022. All right reserved"/>
    </div>
  )
}

export default Root
