import {
  Kanit as KanitFont,
  Roboto as RobotoFont,
  Open_Sans as OpenSansFont,
  Merriweather as MerriweatherFont,
  Amiri as AmiriFont,
  Cairo as CairoFont,
} from 'next/font/google';

const Amiri = AmiriFont({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--amiri-font',
});

const Cairo = CairoFont({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--cairo-font',
});

const Kanit = KanitFont({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--kanit-font',
});

const Merriweather = MerriweatherFont({
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--merriweather-font',
});

const Roboto = RobotoFont({
  weight: ['100', '300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--roboto-font',
});

const Open_Sans = OpenSansFont({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--open-sans-font',
})

export { Kanit, Roboto, Open_Sans, Merriweather, Cairo, Amiri };
