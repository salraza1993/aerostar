import HeaderLogo from './HeaderLogo';
import Navigation from './Navigation';
import ThemeAndLang from './ThemeAndLang';
import Button from '../Button';
import { ThemeChangerProvider } from '@/app/utils/Contexts/ThemeChangerContext';
import MobileMenu from './MobileMenu';
import Link from 'next/link';

export default function Header(): React.ReactElement {

  return (
    <ThemeChangerProvider>
      <header className='main-header'>
        <div className="nav-container-blur"></div>
        <div className="container">
          <div className="main-sub-header">
            <div className="block__start">
              <Link className='header-logo' href={'/'}><HeaderLogo /></Link>
              <Navigation />
              <MobileMenu />
            </div>
            <div className="block__end">
              <ThemeAndLang blockClass="hide-mobile" />
              <Button type={'link'} path={'/contact#queryForm'} icon={'user-headset'} label={"Get Assistance"} color={'accent'} />
            </div>
          </div>
        </div>
      </header>
    </ThemeChangerProvider>
  )
}
