import React from 'react'
import SideBarFilter from './SideBarFilter'
import SideBarCategory from './SideBarCategory'

export default function SideBar() {
  return (
    <div className='px-6'>
        <SideBarFilter></SideBarFilter>
        <SideBarCategory></SideBarCategory>
        <SideBarCategory></SideBarCategory>
        <SideBarCategory></SideBarCategory>
    </div>
  )
}
