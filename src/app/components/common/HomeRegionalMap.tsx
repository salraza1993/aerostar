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
  x: number;
  y: number;
}
export default function HomeRegionalMap({ data }: { data: AnchorDataTypes[] }) {
  const [anchors, setAnchors] = useState<AnchorDataTypes[]>(data);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [anchorCoordinates, setAnchorCoordinates] = useState<AnchorCoordinates[]>([
    { y: 8, x: 8 },
    { y: 30, x: 55 },
    { y: 65, x: 33 },
    { y: 81, x: 78 },
    { y: 58, x: 62 },
    { y: 7, x: 75 },
    { y: 30, x: 75 },
    { y: 25, x: 15 },
    { y: 8, x: 40 },
    { y: 10, x: 62 },
    { y: 33, x: 43 },
    { y: 3, x: 50 },
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
            <span className="pointer"></span>
            {
              anchor.selected && (
                <div className="anchor-details">
                  {/* <span className="close-button" onClick={() => removeActiveAnchorsHandler(anchor)}>
                    <i className="fa-solid fa-xmark"></i>
                  </span> */}
                  <p className="_title">{anchor.node.title}</p>
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
