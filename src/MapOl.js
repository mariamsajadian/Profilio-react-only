//https://medium.com/swlh/how-to-incorporate-openlayers-maps-into-react-65b411985744

import React from "react";

//components
import "./MapOl.css";
import NavBarMap from "./NavBarMap";
import TileLayer from 'ol/layer/Tile';
import Map from "ol/Map";
import View from "ol/View";
import { OSM } from 'ol/source';
import {fromLonLat} from 'ol/proj';
import Zoom from 'ol/control/Zoom';
import  Attribution  from "ol/control/Attribution";

const MapContext = new React.createContext();

const AmsterdamLongLat = [4.897070 , 52.377956];
const AmsterdamCenterLabert = fromLonLat (AmsterdamLongLat);
const Mapw = () => {
  window.onload = init;
  function init() {
    const map = new Map({
      controls:[
        new Zoom(),// zoom with mouse
        new Attribution({
          collapsible: true
        }),     
    ],
      view: new View({
        projection: 'EPSG:3857',
        center: AmsterdamCenterLabert,
        zoom: 8,
      }),
      layers: [new TileLayer({
                    source: new OSM()
                  }),
                    
      ],
      target: 'openlayer-map'

    })
    return (
      <MapContext.Provider value={{ map }}></MapContext.Provider>
    )
   
  }

    return (
      <div className="map-components">
        <NavBarMap />
        <div className="map" id="openlayer-map">
        </div>
      </div>
    );
  }
  export default Mapw;