import { ReactNode } from 'react';
import '/node_modules/@fortawesome/fontawesome-free/css/all.css';
import '/node_modules/@awesome.me/kit-26a319aa6f/icons/css/all.min.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import "@/assets/scss/globals.scss"
import BaseLayout from '@/app/components/BaseLayout';
type Props = { children: ReactNode };

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({children}: Props) {
  return <BaseLayout>{children}</BaseLayout>;
}