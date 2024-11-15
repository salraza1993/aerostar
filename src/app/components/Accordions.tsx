"use client"

import { AccordionDataTypes } from "@/Interfaces/SubPagesQueries";
import { useState } from "react";

export default function Accordions({ data }: { data: AccordionDataTypes[] }) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return <div className="accordion-container">
    {
      data.map((card: AccordionDataTypes, index: number) => {
        return <div className={`accordion-block ${activeIndex === index ? 'is-opened' : ''}`}>
          <div className={`accordion-block__header ${activeIndex === index ? 'active' : ''}`} onClick={() => setActiveIndex(index)}>
            <h6 className="merriweather m-0 fw-700">{index + 1}. {card.title}</h6>
            <i className={`fa-solid fa-${activeIndex === index ? 'minus' : 'plus'}`}></i>
          </div>
          <div className="accordion-block__body">
            <div className="__inner" dangerouslySetInnerHTML={{ __html: card.content }}></div>
          </div>
        </div>
      })
    }
  </div>
}
