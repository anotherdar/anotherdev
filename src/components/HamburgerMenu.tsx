import React, { FC } from "react"

interface HamburgerMenuProps {
  action: () => void
}

export const HamburgerMenu: FC<HamburgerMenuProps> = ({ action }) => {
  return (
    <div className="cover-hamburger-menu w-10 h-12 pr-2" onClick={action}>
      <div className="w-full h-1 m-2 main-color-bg rounded-full"></div>
      <div className="w-full h-1 m-2 main-color-bg rounded-full"></div>
      <div className="w-full h-1 m-2 main-color-bg rounded-full"></div>
    </div>
  )
}
