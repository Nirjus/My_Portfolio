import React from 'react'
import {ReactNavbar} from "overlay-navbar";
import logo from "../../assets/images/NIRJUS LOGO TRANSPARENT.png"
import {FaUserAlt} from "react-icons/fa"

const Header = () => {
  return (
    <ReactNavbar 
     navColor1="white"
     navColor2="#141034"
     navColor3="#1f1b42"
     navColor4="#2a264f"
     burgerColor="hsl(250,100%,75%)"
     burgerColorHover="hsl(350,100%,75%)"
     logo={logo}
     logoWidth="250px"
     logoHoverColor="hsl(250,100%,75%)"
     nav2justifyContent="space-around"
     nav3justifyContent="space-around"
     link1Text="Home"
     link2Text="About"
     link3Text="Projects"
     link4Text="Contact"
    link1Url="/"
    link2Url="/about"
    link3Url="/project"
    link4Url="/contact"
     link1ColorHover="white"
     link1Color="HSL(250,100%,75%)"
     linkSize="1.5rem"
     linkPadding="3vmax"
     profileIcon={true}
     ProfileIconElement={FaUserAlt}
     profileIconColorHover="white"
     profileIconColor="hsl(250,100%,75%)"
     className={" absolute z-10"}
    />
  )
}

export default Header