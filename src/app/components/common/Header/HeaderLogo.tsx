"use client";
import { useThemeChanger } from "@/app/utils/Contexts/ThemeChangerContext";
import { useEffect, useState } from "react";

function HeaderLogo(): React.ReactElement {
  const logoLight:string = '/images/logo-light.svg';
  // const logoDark:string = '/images/logo-dark.svg';
  const logoColor:string = '/images/logo-color.svg';
  const { currentMode } = useThemeChanger();
  const [clientLogo, setClientLogo] = useState<string>(logoColor);
  useEffect(() => {
    if (currentMode === 'dark') {
      setClientLogo(logoLight) 
    } else {
      setClientLogo(logoColor)
    }
  }, [currentMode])
  return (
    <picture>
      {
        currentMode === "auto" && <source srcSet={logoLight} media="(prefers-color-scheme: dark)" />
      }
      <img src={clientLogo} alt="Header Logo" />
    </picture>
  ) 
    // <picture className='header-logo'>
    //   <source srcSet="dark-mode.png" media="(prefers-color-scheme: dark)" />
    //   <img src={clientLogo} alt="Header Logo" />
    // </picture>
}

export default HeaderLogo