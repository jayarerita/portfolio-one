import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [32, -25, 36],
        center: [-35, -3],
        scale: 2200
      }}
      className="w-full h-full"
    >
      <Geographies
        geography="./states.json"
        fill="#115e59"
        stroke="#FFFFFF"
        strokeWidth={0.8}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-75.12, 40.33]}
        dx={100}
        dy={100}
        connectorProps={{
          stroke: "#FFF",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="200" y="10" textAnchor="end" alignmentBaseline="middle" fill="#fff" className="text-4xl">
          {"Doylestown"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;