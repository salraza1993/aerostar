"use client"
import { CSSProperties, useEffect, useState } from 'react';
import EgyptMapStroke from '../elements/EgyptMapStroke'
import Link from 'next/link'
interface CustomCSSProperties extends CSSProperties {
  '--axis-y'?: string;
  '--axis-x'?: string;
}
interface AnchorDataTypes {
  x?: number;
  y?: number;
  selected?: boolean;
  node: {
    title: string,
    excerpt: string,
    id: string,
    slug: string
  }
}
interface AnchorCoordinates {
  x: number,
  y: number,
  code: string,
  anchorPosition: string,
}
export default function HomeRegionalMap({ data }: { data: AnchorDataTypes[] }) {
  const [anchors, setAnchors] = useState<AnchorDataTypes[]>(data);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [anchorCoordinates, setAnchorCoordinates] = useState<AnchorCoordinates[]>([
    { x: 52, y: 13, code: 'CAI', anchorPosition: "right middle" },
    { x: 47, y: 12, code: 'SPX', anchorPosition: "right" },
    { x: 41, y: 5, code: 'HBE', anchorPosition: "right middle" },
    { x: 70, y: 42, code: 'HRG', anchorPosition: "top right" },
    { x: 76, y: 36, code: 'SSH', anchorPosition: "right middle" },
    { x: 65, y: 65, code: 'LXR', anchorPosition: "" },
    { x: 65, y: 80, code: 'ASW', anchorPosition: "" },
    { x: 78, y: 58, code: 'RMF', anchorPosition: "right middle" },
    { x: 56, y: 50, code: 'HMB', anchorPosition: "" },
    { x: 48.5, y: 40, code: 'ATZ', anchorPosition: "left middle" },
    { x: 12, y: 1, code: 'MUH', anchorPosition: "" },
    { x: 29, y: 7, code: 'DBB', anchorPosition: "top" },
  ]);
  const elementStyles = (x: number, y: number): CustomCSSProperties => {
    return {
      '--axis-y': `${y}%`,
      '--axis-x': `${x}%`,
    };
  };
  const anchorHandler = (thisItem: AnchorDataTypes) => {
    const updatedAnchors = anchors.map((item: AnchorDataTypes) => ({
      ...item,
      selected: item.node.id === thisItem.node.id,
    }));
    setAnchors(updatedAnchors);
  };

  const removeActiveAnchorsHandler = (thisItem: AnchorDataTypes) => {
    const updatedAnchors = anchors.map((item: AnchorDataTypes) => ({
      ...item,
      selected: item.node.id === thisItem.node.id ? false : false
    }));
    setAnchors(updatedAnchors);
  };

  // const servicesIconClassHandler = (element: string) => {
  //   switch (element.toLowerCase()) {
  //     case 'passengers':
  //       return 'fa-family';
  //     case 'cargo':
  //       return 'fa-truck-ramp-box';
  //     case 'ramp':
  //       return 'fa-plane-circle-check';
  //     case 'execution':
  //       return 'fa-car';
  //     default:
  //       return 'fa-info-circle';
  //   }
  // };

  const getAirportCodeHandler = (event: string) => { 
    const airportCode = event.split(' ')[0];
    return airportCode;
  }

  useEffect(() => {
    const updatedAnchors = anchors.map((item) => ({...item, selected: false}));
    setAnchors(updatedAnchors);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="home-regional-map-container">
      <EgyptMapStroke />
      <ul className="anchors">
        {anchors.map((anchor: AnchorDataTypes, index: number) => (
          <li
            key={index}
            className={`anchors__list ${anchor.selected ? "selected" : ""}`}
            style={elementStyles(anchorCoordinates[index].x, anchorCoordinates[index].y)}
            onMouseLeave={() => removeActiveAnchorsHandler(anchor)}
            onMouseEnter={() => anchorHandler(anchor)}
            onClick={() => anchorHandler(anchor)}
          >
            <span className={`airport-code ${anchorCoordinates[index].anchorPosition}`}>{ getAirportCodeHandler(anchor.node.title) }</span>
            <span className="pointer"></span>
            {
              anchor.selected && (
                <div className="anchor-details">
                  <p className="_title">
                    {anchor.node.title} &nbsp; &nbsp;
                    <span>x: {anchorCoordinates[index].x}, y: {anchorCoordinates[index].y}</span>
                  </p>
                  <div dangerouslySetInnerHTML={{ __html: anchor.node.excerpt }}></div>
                  {/* <hr />
                  <p className="fw-bold">Filter by services</p>
                  <ul className="service-list">
                    {anchor.data.services.map(( service: string, idx:number) => (
                      <li key={idx} className="service-list__item custom-tooltip-container" >
                        <span className="custom-tooltip">{service}</span>
                        <i
                          className={`fa-solid ${servicesIconClassHandler(
                            service
                          )}`}
                          aria-label={service}
                        ></i>
                      </li>
                    ))}
                  </ul> */}
                  <hr />
                  <Link href={`/regional-maps/${anchor.node.slug}`} className="link-view-details">View Details</Link>
                </div>
            )
          }
        </li>
      ))}
    </ul>
  </div>
}
