import React from 'react'
import {SidebarConatiner, Icon, CloseIcon, SidebarMenu,SidebarLink, SidebarRoute, SideBtnWrap} from "./SidebarElements"

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarConatiner isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/"> Pizzas</SidebarLink>
        <SidebarLink to="/"> Desserts</SidebarLink>
        <SidebarLink to="/"> Full Menu</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarConatiner>
  )
}

export default Sidebar

