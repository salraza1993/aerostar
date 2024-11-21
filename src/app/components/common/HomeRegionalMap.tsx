"use client"
import { CSSProperties, useState } from 'react';
import EgyptMapStroke from '../elements/EgyptMapStroke'
import Link from 'next/link'
interface CustomCSSProperties extends CSSProperties {
  '--axis-y'?: string;
  '--axis-x'?: string;
}
interface AnchorDataTypes {
  id: string;
  x: number;
  y: number;
  selected: boolean;
  data: {
    title: string;
    address: string;
    services: string[];
  };
}
export default function HomeRegionalMap() {
  const [anchors, setAnchors] = useState<AnchorDataTypes[]>([
    {
      id: 'anchor1',
      x: 55,
      y: 30,
      selected: false,
      data: {
        title: 'Al-Ula',
        address: 'F4H8+5Q, 43214 AlUla, Saudi Arabia',
        services: ['passengers', 'ramp', 'cargo', 'execution']
      }
    },
    {
      id: 'anchor2',
      x: 15,
      y: 20,
      selected: false,
      data: {
        title: 'Al-Ula',
        address: 'F4H8+5Q, 43214 AlUla, Saudi Arabia',
        services: ['passengers', 'ramp', 'cargo', 'execution']
      }
    },
    {
      id: 'anchor3',
      x: 33,
      y: 65,
      selected: false,
      data: {
        title: 'Al-Ula',
        address: 'F4H8+5Q, 43214 AlUla, Saudi Arabia',
        services: ['passengers', 'ramp', 'cargo', 'execution']
      }
    },
    {
      id: 'anchor4',
      x: 75,
      y: 10,
      selected: false,
      data: {
        title: 'Al-Ula',
        address: 'F4H8+5Q, 43214 AlUla, Saudi Arabia',
        services: ['passengers', 'ramp', 'cargo', 'execution']
      }
    },
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
      selected: item.id === thisItem.id,
    }));
    setAnchors(updatedAnchors);
  };

  const removeActiveAnchorsHandler = (thisItem: AnchorDataTypes) => {
    const updatedAnchors = anchors.map((item: AnchorDataTypes) => ({
      ...item,
      selected: item.id === thisItem.id ? false : false
    }));
    setAnchors(updatedAnchors);
  };

  const servicesIconClassHandler = (element: string) => {
    switch (element.toLowerCase()) {
      case 'passengers':
        return 'fa-family';
      case 'cargo':
        return 'fa-truck-ramp-box';
      case 'ramp':
        return 'fa-plane-circle-check';
      case 'execution':
        return 'fa-car';
      default:
        return 'fa-info-circle';
    }
  };

  return <div className="home-regional-map-container">
      <EgyptMapStroke />
      <ul className="anchors">
        {anchors.map((anchor:AnchorDataTypes, index:number) => (
          <li
            key={index}
            className={`anchors__list ${anchor.selected ? "selected" : ""}`}
            style={elementStyles(anchor.x, anchor.y)}
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
                  <h6 className="_title">{anchor.data.title}</h6>
                  <p>{anchor.data.address}</p>
                  <hr />
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
                  </ul>
                  <hr />
                  <Link href={"/"} className="link-view-details">View Details</Link>
                </div>
            )
          }
        </li>
      ))}
    </ul>
  </div>
}
