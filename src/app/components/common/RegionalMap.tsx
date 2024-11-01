'use client';
import { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_egyptLow from "@amcharts/amcharts5-geodata/egyptLow"; // Egypt map data
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default function RegionalMap() {
  useLayoutEffect(() => {
    const root = am5.Root.new("chartDiv");  // Changed from 'let' to 'const'
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",  // Enable horizontal rotation
        panY: "translateY",
        projection: am5map.geoMercator(),
        homeGeoPoint: { longitude: 30.8025, latitude: 26.8206 }, // Center point for Egypt
        homeZoomLevel: 0.85, 
        minZoomLevel: 0.85, 
        maxZoomLevel: 2,
      })
    );

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_egyptLow,
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      interactive: true,
      fill: am5.color(0xc1c1d8), // Set your desired fill color here
    });

    const bubbleSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        valueField: "value",
        calculateAggregates: true,
        polygonIdField: "id",
      })
    );

    const circleTemplate = am5.Template.new<am5.Circle>({});

    bubbleSeries.bullets.push((root) => {
      const container = am5.Container.new(root, {});

      const circle = container.children.push(
        am5.Circle.new(root, {
          radius: 20,
          fillOpacity: 0.8,
          fill: am5.color(0x5DB869),
          cursorOverStyle: "pointer",
          tooltipText: `{title}: [bold]{value}[/]`,
        }, circleTemplate)
      );

      const countryLabel = container.children.push(
        am5.Label.new(root, {
          text: "{title}",
          fill: am5.color(0x2A2C75),
          paddingLeft: 5,
          populateText: true,
          fontWeight: "bold",
          fontSize: 13,
          centerY: am5.p50,
        })
      );

      circle.on("radius", (radius) => {
        countryLabel.set("x", radius);
      });

      return am5.Bullet.new(root, {
        sprite: container,
        dynamic: true,
      });
    });

    bubbleSeries.bullets.push((root) => {
      return am5.Bullet.new(root, {
        sprite: am5.Label.new(root, {
          text: "{value.formatNumber('#.')}",
          fill: am5.color(0xffffff),
          populateText: true,
          centerX: am5.p50,
          centerY: am5.p50,
          textAlign: "center",
        }),
        dynamic: true,
      });
    });

    bubbleSeries.set("heatRules", [
      {
        target: circleTemplate,
        dataField: "value",
        min: 10,
        max: 20,
        minValue: 5,
        maxValue: 50,
        key: "radius",
      }
    ]);

    const citiesData = [
      { id: "cairo", geometry: { type: "Point", coordinates: [31.4054, 30.1214] }, title: "Cairo", value: Math.round(Math.random() * 100) },
      { id: "hurghada", geometry: { type: "Point", coordinates: [33.8314, 27.2574] }, title: "Hurghada", value: Math.round(Math.random() * 100) },
      { id: "aswan", geometry: { type: "Point", coordinates: [32.7774, 24.0894] }, title: "Aswan", value: Math.round(Math.random() * 100) },
      { id: "luxor", geometry: { type: "Point", coordinates: [32.4902, 25.6706] }, title: "Luxor", value: Math.round(Math.random() * 100) },
      { id: "sharmElSheikh", geometry: { type: "Point", coordinates: [34.0625, 28.1781] }, title: "Sharm El Sheikh", value: Math.round(Math.random() * 100) },
      { id: "alexandria", geometry: { type: "Point", coordinates: [30.9176, 29.6935] }, title: "Alexandria", value: Math.round(Math.random() * 100) },
      { id: "portSaid", geometry: { type: "Point", coordinates: [31.6894, 31.0733] }, title: "Port Said", value: Math.round(Math.random() * 100) },
    ];

    bubbleSeries.data.setAll(citiesData);

    setInterval(() => {
      for (let i = 0; i < bubbleSeries.dataItems.length; i++) {
        bubbleSeries.data.setIndex(i, { 
          value: Math.round(Math.random() * 100), 
          id: citiesData[i].id, 
          title: citiesData[i].title 
        });
      }
    }, 2000);

    return () => root.dispose(); // Clean up on unmount
  }, []);

  return <div id="chartDiv" style={{ width: "100%", height: "100%" }}></div>;
}
