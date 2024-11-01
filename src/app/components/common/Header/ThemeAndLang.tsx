'use client';
import ThemeChanger from './ThemeChanger';

type Props = {
  blockClass?: string;
}
function ThemeAndLang({ blockClass } : Props): React.ReactElement {
  return (
    <ul className={`theme-n-lang ${blockClass}`}>
      <ThemeChanger />
    </ul>
  )
}

export default ThemeAndLang