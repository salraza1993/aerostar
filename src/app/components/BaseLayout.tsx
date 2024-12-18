import {ReactNode} from 'react';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';
import { Kanit, Roboto, Open_Sans, Merriweather, Cairo, Amiri } from "@/fonts/Fonts";

type Props = { children: ReactNode };

export default function BaseLayout({ children }: Props) {
  const bodyFonts = [
    'main-body',
    Kanit.variable,
    Roboto.variable,
    Open_Sans.variable,
    Cairo.variable,
    Amiri.variable,
    Merriweather.variable
  ].join(' ');
  // Providing all messages to the client
  // side is the easiest way to get started
 
  return (
    <html lang="en">
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#2A2C75" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#5DB869" />
      <body className={bodyFonts}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}