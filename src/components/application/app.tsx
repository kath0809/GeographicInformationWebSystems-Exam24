import React, {
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Layer } from "ol/layer";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { map, MapContext } from "../map/mapContext";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navigation from "./navigation/nav";
import { drawingLayer } from "../map/draw/drawingLayer";
import overviewMap from "../map/overviewMap/overviewMap";

export default function App() {
  const mapRef = useRef() as MutableRefObject<HTMLDivElement>;

  const [secondaryLayers, setSecondaryLayers] = useState<Layer[]>([]);
  const [baseLayer, setBaseLayer] = useState<Layer>(
    () => new TileLayer({ source: new OSM() }),
  );

  const layers = useMemo(
    () => [baseLayer, drawingLayer, ...secondaryLayers],
    [baseLayer, secondaryLayers],
  );

  useEffect(() => map.setTarget(mapRef.current), []);
  useEffect(() => map.setLayers(layers), [layers]);

  overviewMap();

  return (
    <MapContext.Provider
      value={{ map, setSecondaryLayers, setBaseLayer, secondaryLayers }}
    >
      <nav>
        <Navigation />
      </nav>
      <main>
        <div className="draw-comp"></div>
        <div ref={mapRef} className="map-container"></div>
      </main>
    </MapContext.Provider>
  );
}
