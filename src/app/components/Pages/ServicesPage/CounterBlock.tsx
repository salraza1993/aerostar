import React from 'react'

type CountersType = { title: string, content: string }
export default function CounterBlock(): React.ReactElement {
  const counters : CountersType[] = [
    { title: '250+', content: 'Completed Projects' },
    { title: '250+', content: 'Completed Projects' },
    { title: '250+', content: 'Completed Projects' },
    { title: '250+', content: 'Completed Projects' },
    { title: '250+', content: 'Completed Projects' },
  ]
  return <section className='services-special-section'>
    <div className="container">
      <div className="services-special-content">
        <ul className="counters-list">
          {
            counters.map((counter, index) => (
              <li key={index} className="counters-list__item">
                <div className="__icon fs-2">
                  <i className="fa-solid fa-pie-chart text-primary"></i>
                </div>
                <div className="counters-list__item__content">
                  <h2 className='__counter'>{counter.title}</h2>
                  <p className='_-text'>{counter.content}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  </section>
}
