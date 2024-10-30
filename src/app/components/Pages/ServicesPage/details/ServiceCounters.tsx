type CountersType = { title: string, content: string }

export default function ServiceCounters(): React.ReactElement {
  const counters : CountersType[] = [
    { title: '250+', content: 'Completed Projects' },
    { title: '250+', content: 'Completed Projects' },
    { title: '250+', content: 'Completed Projects' },
    { title: '250+', content: 'Completed Projects' },
    { title: '250+', content: 'Completed Projects' },
  ]
  return <section className='service-counters-section'>
    <div className="container">
      <div className="service-counters-content">
        <ul className="service-counters">
          {
            counters.map((counter, index) => (
              <li key={index} className="service-counters__item">
                <div className="__icon fs-2">
                  <i className="fa-solid fa-pie-chart text-primary"></i>
                </div>
                <div className="service-counters__item__content">
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
