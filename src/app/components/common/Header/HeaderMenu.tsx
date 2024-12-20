"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState, useEffect } from "react";
import EliteLogo from "../../elements/EliteLogo";

interface MenuInterface {
  label: string;
  path: string;
  isActive: boolean;
  hasChildren?: boolean;
  children?: MenuInterface[];
}

type Props = {
  clickedHandle?: (value: boolean) => void;
}

export default function HeaderMenu({  clickedHandle} : Props) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  
  const [menus, setMenus] = useState<MenuInterface[]>([
    { label: 'Home', path: '/', isActive: false },
    { label: 'About', path: '/about', isActive: false },
    { label: 'Services', path: '/services', isActive: false },
    // { label: 'Elite Jets', path: '/elite-jets', isActive: false },
    { label: 'News', path: '/news', isActive: false },
    { label: 'Contact', path: '/contact', isActive: false },
  ]);

  useEffect(() => {
    setMenus((prevMenus) => 
      prevMenus.map(menu => {
        if (menu.hasChildren && menu.children) {
          const updatedChildren = menu.children.map(child => ({
            ...child,
            isActive: pathname === child.path,
          }));
          return { ...menu, children: updatedChildren, isActive: pathname === menu.path };
        }
        return { ...menu, isActive: pathname === menu.path };
      })
    );
  }, [pathname]);
  
  return <ul className="menu">
    {
      menus.map((menu: MenuInterface) => (
        <li className={menu.isActive ? "menu__list active" : "menu__list"} key={menu.label}>
          <Link onClick={() => clickedHandle && clickedHandle(false)} className={menu.isActive ? "menu__list__link active" : "menu__list__link"} href={menu.path}>
            {menu.label}
          </Link>
          {
            menu.hasChildren && <ul className="sub-menu">
              {menu.children?.map((child: MenuInterface) => (
                <li key={child.label} onClick={() => clickedHandle && clickedHandle(false)} className={child.isActive ? "sub-menu__list active" : "sub-menu__list"}>
                  <Link className={child.isActive ? "sub-menu__list__link active" : "sub-menu__list__link"} href={child.path}>
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          }
        </li>
      ))
    }
    <li className="menu__list elite-button-menu">
      <Link href={'/elite-jets'} className="elite-button">
        <EliteLogo />
      </Link>
    </li>
  </ul>
}
