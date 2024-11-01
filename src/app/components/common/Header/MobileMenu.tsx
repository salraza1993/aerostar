'use client'

import { useState } from "react"
import HeaderMenu from "./HeaderMenu"

function MobileMenu(): React.ReactElement {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  return (
    <nav className="navigation-mobile-view">
      <div className="hamburger-menu-icon square-element" onClick={() => setShowMenu(!showMenu)}>
        <i className="fa-solid fa-bars"></i>
      </div>
      { showMenu &&
        <div className="mobile-menu-container">
          <span className="close-icon" onClick={() => setShowMenu(false)}><i className="fa-solid fa-times"></i></span>
          <HeaderMenu clickedHandle={() => setShowMenu(false)} />
        </div>
      }
    </nav>
  )
}

export default MobileMenu