import React, { ReactNode } from 'react'
type Props = {
  title?: string,
  classes: string,
  children: ReactNode;
}
function FooterContentWrapper({ title, classes, children }: Props) : React.ReactElement {
  return (
    <div className={`footer-content-block ${classes}`}>
      {
        title && <div className="footer-content-block__header">
          <h6 className='kanit fw-500'>{title}</h6>
        </div>
      }
      <div className="footer-content-block__body">{ children }</div>
    </div>
  )
}

export default FooterContentWrapper