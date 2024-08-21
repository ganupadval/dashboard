import React, { useState } from "react";
import Map, { Marker, Layer, Source } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Location = () => {
  const [viewState, setViewState] = useState({
    longitude: -3.7038,
    latitude: 40.4168,
    zoom: 3,
  });

  // Replace with your Mapbox token
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiZ2FuZXNocGFkdmFsIiwiYSI6ImNtMDNwOWw5ZzAwNWwyaXF0cDdnZmtjeDUifQ.9saPPoutap-bdlkOWuFazg";

  const style = {
    version: 8,
    sources: {
      mapbox: {
        type: "vector",
        url: "mapbox://mapbox.mapbox-streets-v8",
      },
    },
    layers: [
      {
        id: "background",
        type: "background",
        paint: {
          "background-color": "#ffffff", // Set land to white
        },
      },
      {
        id: "water",
        type: "fill",
        source: "mapbox",
        "source-layer": "water",
        paint: {
          "fill-color": "#add8e6", // Set water to light blue
        },
      },
      {
        id: "landuse",
        type: "fill",
        source: "mapbox",
        "source-layer": "landuse",
        paint: {
          "fill-color": "#ffffff", // Ensure land use areas are also white
        },
      },
      {
        id: "admin-0-boundary",
        type: "line",
        source: "mapbox",
        "source-layer": "admin",
        paint: {
          "line-color": "#9a9a9a", // Set country borders to black
          "line-width": 0.2,
        },
      },
      {
        id: "admin-1-boundary",
        type: "line",
        source: "mapbox",
        "source-layer": "admin",
        paint: {
          "line-color": "#9a9a9a", // Set region borders to black
          "line-width": 0,
        },
      },
    ],
  };
  const locations = [
    {
      name: "United Kingdom",
      longitude: -0.1276,
      latitude: 51.5074,
      sales: 467100,
    },
    { name: "Netherlands", longitude: 4.9041, latitude: 52.3676, sales: 22400 },
    { name: "EIRE", longitude: -6.2603, latitude: 53.3498, sales: 18300 },
    { name: "France", longitude: 2.3522, latitude: 48.8566, sales: 14600 },
    { name: "Germany", longitude: 13.405, latitude: 52.52, sales: 14400 },
  ];

  const salesMax = Math.max(...locations.map((loc) => loc.sales));
  const radiusScale = 100000 / salesMax;

  return (
    <div className="bg-white rounded-lg p-6  shadow-md">
      <h2 className="text-xl font-bold mb-4">Sales by Location</h2>
      <div className="flex">
        <div className="h-80 w-2/3">
          <Map
            {...viewState}
            mapStyle={style}
            style={{ width: "100%", height: "100%" }}
            // mapStyle="mapbox://styles/mapbox/streets-v11"
            onMove={(evt) => setViewState(evt.viewState)}
            mapboxAccessToken={MAPBOX_TOKEN}
          >
            {locations.map((location, index) => (
              <Marker
                key={index}
                longitude={location.longitude}
                latitude={location.latitude}
              >
                <div
                  style={{
                    width: `${Math.sqrt(location.sales) * radiusScale}px`,
                    height: `${Math.sqrt(location.sales) * radiusScale}px`,
                    backgroundColor: "rgba(54, 162, 235, 0.5)",
                    borderRadius: "50%",
                    border: "2px solid rgba(54, 162, 235, 1)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "black",
                    fontSize: "12px",
                  }}
                >
                  {location.name}
                </div>
              </Marker>
            ))}
          </Map>
        </div>
        <div className="w-2/3 mx-8 ">
          <h2>Top locations</h2>
          <table className="w-full text-left">
            <tbody>
              {locations.map((location, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2">{index + 1}</td>
                  <td className="py-2">{location.name}</td>
                  <td className="py-2">{location.sales}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Location;
