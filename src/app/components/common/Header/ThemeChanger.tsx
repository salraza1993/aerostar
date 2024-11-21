'use client';
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { liVariants, ulVariants } from '../FramerMotions/motionsList';
import useClickOutside from "../customHooks/useClickOutside";
import { ListMenuInterface, useThemeChanger } from "@/app/utils/Contexts/ThemeChangerContext";

function ThemeChanger({ }): React.ReactElement {
  const { setThemeAppearance, listMenu, currentMode } = useThemeChanger();
  const [selectedModeIcon, setSelectedModeIcon] = useState<string>('desktop');  
  const [isOpen, setIsOpen] = useState(false);
  const elementRef = useRef<HTMLLIElement>(null);  

  const handleToggleMenu = ():void => setIsOpen(!isOpen);
  const selectedModeIconHandler = (mode: string): void => {
    switch (mode) {
      case 'dark':
        setSelectedModeIcon('moon-stars')
        break;    
      case 'light':
        setSelectedModeIcon('sun-bright')
        break;
      default:
        setSelectedModeIcon('desktop')
        break;
    }
  }
  const selectThemeHandler = (theme: string) => {
    setThemeAppearance(theme)
    handleToggleMenu();
    selectedModeIconHandler(theme);
  }
  
  useClickOutside(elementRef, () => setIsOpen(false));
  useEffect(() => selectedModeIconHandler(currentMode))
  return (
    <li
      className={isOpen ? "theme-n-lang__list active" : "theme-n-lang__list"} ref={elementRef}>
      <span className="icon square-element" onClick={handleToggleMenu}>
        <i className={`fa-solid fa-${selectedModeIcon}`}></i>
      </span>
      {
        <motion.ul
          animate={isOpen ? "open" : "closed"}
          variants={ulVariants}
          className={isOpen ? "theme-n-lang__menu active" : "theme-n-lang__menu"}>
          {
            listMenu.map((list: ListMenuInterface, index: number) => {
              const listActiveClass = list.selected ? 'active' : '';
              return <motion.li
                onClick={ () => selectThemeHandler(list.type) }
                animate={isOpen ? "open" : "closed"}
                variants={liVariants}
                transition={{ delay: 0.5 * 0.1 }}
                className={`theme-n-lang__menu__list ${listActiveClass}`}
                key={index}>
                <i className={`fa-solid fa-${list.icon}`}></i>
                <span>{ list.label }</span>
              </motion.li>
            })
          }
        </motion.ul>
      }
    </li>
  )
}

export default ThemeChanger;