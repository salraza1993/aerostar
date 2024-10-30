'use client'
import Link from 'next/link';
import React, { useState } from 'react'

type copyWriteListType = {
  label: string,
  path: string
}

function FooterCopyrights() {
  const currentYear = new Date().getFullYear();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [copyWriteList, setCopyWriteList] = useState<copyWriteListType[]>([
    { label: 'Terms & Conditions', path: '/terms-conditions' },
    { label: 'Privacy Policies', path: '/privacy-policies' },
    { label: 'FAQ’s', path: '/faqs' },
  ]);
  return (
    <div className='footer-copy-writes'>
      <div className="block__start">
        <p className='m-0'>© {currentYear} Copyrights by ASAS. All Rights Reserved</p>
      </div>
      <div className="block__end">
        <ul className="copy-write">
          {copyWriteList.map((list, index) => (
            <li key={index} className="copy-write__list">
              <Link className="copy-write__list__link" href={list.path}>{list.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FooterCopyrights